'use client'

import { useState, useEffect } from 'react'
import { Calculator, History, Moon, Sun, Delete, RotateCcw } from 'lucide-react'

export default function CalculadoraPage() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<string>('')
  const [operation, setOperation] = useState<string>('')
  const [newNumber, setNewNumber] = useState(true)
  const [history, setHistory] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState(true)
  const [showHistory, setShowHistory] = useState(false)

  // Carregar histórico e tema do localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('calc-history')
    const savedTheme = localStorage.getItem('calc-theme')
    if (savedHistory) setHistory(JSON.parse(savedHistory))
    if (savedTheme) setDarkMode(savedTheme === 'dark')
  }, [])

  // Salvar histórico no localStorage
  useEffect(() => {
    localStorage.setItem('calc-history', JSON.stringify(history))
  }, [history])

  // Salvar tema no localStorage
  useEffect(() => {
    localStorage.setItem('calc-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const addToHistory = (calculation: string) => {
    setHistory(prev => [calculation, ...prev].slice(0, 20)) // Limita a 20 itens
  }

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (op: string) => {
    const current = parseFloat(display)
    
    if (previousValue && operation && !newNumber) {
      calculate()
    } else {
      setPreviousValue(display)
    }
    
    setOperation(op)
    setNewNumber(true)
  }

  const calculate = () => {
    if (!operation || !previousValue) return

    const prev = parseFloat(previousValue)
    const current = parseFloat(display)
    let result = 0

    switch (operation) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '×':
        result = prev * current
        break
      case '÷':
        result = current !== 0 ? prev / current : 0
        break
      default:
        return
    }

    const calculation = `${prev} ${operation} ${current} = ${result}`
    addToHistory(calculation)

    setDisplay(result.toString())
    setPreviousValue('')
    setOperation('')
    setNewNumber(true)
  }

  const handleScientific = (func: string) => {
    const current = parseFloat(display)
    let result = 0

    switch (func) {
      case '√':
        result = Math.sqrt(current)
        addToHistory(`√${current} = ${result}`)
        break
      case 'x²':
        result = current * current
        addToHistory(`${current}² = ${result}`)
        break
      case 'sin':
        result = Math.sin(current * Math.PI / 180)
        addToHistory(`sin(${current}) = ${result}`)
        break
      case 'cos':
        result = Math.cos(current * Math.PI / 180)
        addToHistory(`cos(${current}) = ${result}`)
        break
      case 'tan':
        result = Math.tan(current * Math.PI / 180)
        addToHistory(`tan(${current}) = ${result}`)
        break
      case 'log':
        result = Math.log10(current)
        addToHistory(`log(${current}) = ${result}`)
        break
      case 'ln':
        result = Math.log(current)
        addToHistory(`ln(${current}) = ${result}`)
        break
      case '1/x':
        result = 1 / current
        addToHistory(`1/${current} = ${result}`)
        break
      default:
        return
    }

    setDisplay(result.toString())
    setNewNumber(true)
  }

  const handleConstant = (constant: string) => {
    let value = 0
    switch (constant) {
      case 'π':
        value = Math.PI
        break
      case 'e':
        value = Math.E
        break
    }
    setDisplay(value.toString())
    setNewNumber(true)
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue('')
    setOperation('')
    setNewNumber(true)
  }

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
      setNewNumber(true)
    }
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('calc-history')
  }

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const btnPrimary = darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
  const btnOperation = darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
  const btnEquals = darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 backdrop-blur-lg bg-opacity-80 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">Calculadora Profissional</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`p-2 rounded-lg ${btnPrimary} transition-colors`}
              title="Ver histórico"
            >
              <History className="w-5 h-5" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${btnPrimary} transition-colors`}
              title="Alternar tema"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calculadora */}
          <div className={`lg:col-span-2 ${cardBg} rounded-2xl shadow-2xl p-6`}>
            {/* Display */}
            <div className="mb-6">
              <div className={`text-sm ${textSecondary} h-6 mb-2`}>
                {previousValue && operation && `${previousValue} ${operation}`}
              </div>
              <div className={`text-right text-4xl font-bold ${textClass} break-all`}>
                {display}
              </div>
            </div>

            {/* Funções Científicas */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <button onClick={() => handleScientific('sin')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>sin</button>
              <button onClick={() => handleScientific('cos')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>cos</button>
              <button onClick={() => handleScientific('tan')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>tan</button>
              <button onClick={() => handleScientific('√')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>√</button>
              <button onClick={() => handleScientific('log')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>log</button>
              <button onClick={() => handleScientific('ln')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>ln</button>
              <button onClick={() => handleScientific('x²')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>x²</button>
              <button onClick={() => handleScientific('1/x')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>1/x</button>
              <button onClick={() => handleConstant('π')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>π</button>
              <button onClick={() => handleConstant('e')} className={`${btnPrimary} p-3 rounded-lg font-semibold transition-colors`}>e</button>
            </div>

            {/* Botões Principais */}
            <div className="grid grid-cols-4 gap-3">
              <button onClick={clear} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors`}>C</button>
              <button onClick={backspace} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center`}>
                <Delete className="w-5 h-5" />
              </button>
              <button onClick={() => handleOperation('÷')} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors`}>÷</button>
              <button onClick={() => handleOperation('×')} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors`}>×</button>

              <button onClick={() => handleNumber('7')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>7</button>
              <button onClick={() => handleNumber('8')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>8</button>
              <button onClick={() => handleNumber('9')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>9</button>
              <button onClick={() => handleOperation('-')} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors`}>-</button>

              <button onClick={() => handleNumber('4')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>4</button>
              <button onClick={() => handleNumber('5')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>5</button>
              <button onClick={() => handleNumber('6')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>6</button>
              <button onClick={() => handleOperation('+')} className={`${btnOperation} text-white p-4 rounded-lg font-semibold text-lg transition-colors`}>+</button>

              <button onClick={() => handleNumber('1')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>1</button>
              <button onClick={() => handleNumber('2')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>2</button>
              <button onClick={() => handleNumber('3')} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>3</button>
              <button onClick={calculate} className={`${btnEquals} text-white p-4 rounded-lg font-semibold text-lg row-span-2 transition-colors`}>=</button>

              <button onClick={() => handleNumber('0')} className={`${btnPrimary} col-span-2 p-4 rounded-lg font-semibold text-lg transition-colors`}>0</button>
              <button onClick={handleDecimal} className={`${btnPrimary} p-4 rounded-lg font-semibold text-lg transition-colors`}>.</button>
            </div>
          </div>

          {/* Histórico */}
          <div className={`${cardBg} rounded-2xl shadow-2xl p-6 ${showHistory ? 'block' : 'hidden lg:block'}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <History className="w-5 h-5" />
                Histórico
              </h2>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className={`${btnPrimary} p-2 rounded-lg transition-colors`}
                  title="Limpar histórico"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {history.length === 0 ? (
                <p className={textSecondary}>Nenhum cálculo ainda</p>
              ) : (
                history.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-sm font-mono`}
                  >
                    {item}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            ← Voltar ao Site
          </a>
        </div>
      </div>
    </div>
  )
}
