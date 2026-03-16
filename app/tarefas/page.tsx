'use client'

import { useState, useEffect } from 'react'
import { CheckSquare, Plus, Trash2, Edit2, Check, X, Moon, Sun, Filter } from 'lucide-react'

interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

export default function TarefasPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingText, setEditingText] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const [darkMode, setDarkMode] = useState(true)

  // Carregar tarefas e tema do localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    const savedTheme = localStorage.getItem('tasks-theme')
    if (savedTasks) setTasks(JSON.parse(savedTasks))
    if (savedTheme) setDarkMode(savedTheme === 'dark')
  }, [])

  // Salvar tarefas no localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Salvar tema no localStorage
  useEffect(() => {
    localStorage.setItem('tasks-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        completed: false,
        createdAt: Date.now()
      }
      setTasks([newTask, ...tasks])
      setInputValue('')
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const startEdit = (task: Task) => {
    setEditingId(task.id)
    setEditingText(task.text)
  }

  const saveEdit = (id: string) => {
    if (editingText.trim()) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, text: editingText.trim() } : task
      ))
    }
    setEditingId(null)
    setEditingText('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingText('')
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeCount = tasks.filter(task => !task.completed).length
  const completedCount = tasks.filter(task => task.completed).length

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  const handleEditKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') {
      saveEdit(id)
    } else if (e.key === 'Escape') {
      cancelEdit()
    }
  }

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const inputBg = darkMode ? 'bg-gray-700' : 'bg-gray-100'
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300'
  const hoverBg = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 backdrop-blur-lg bg-opacity-80 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckSquare className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold">Lista de Tarefas Smart</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${inputBg} transition-colors`}
            title="Alternar tema"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
              <div className={`text-sm ${textSecondary} mb-1`}>Total</div>
              <div className="text-2xl font-bold">{tasks.length}</div>
            </div>
            <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
              <div className={`text-sm ${textSecondary} mb-1`}>Ativas</div>
              <div className="text-2xl font-bold text-blue-500">{activeCount}</div>
            </div>
            <div className={`${cardBg} rounded-lg p-4 shadow-lg col-span-2 md:col-span-1`}>
              <div className={`text-sm ${textSecondary} mb-1`}>Concluídas</div>
              <div className="text-2xl font-bold text-green-500">{completedCount}</div>
            </div>
          </div>

          {/* Input Nova Tarefa */}
          <div className={`${cardBg} rounded-2xl shadow-2xl p-6 mb-6`}>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Adicionar nova tarefa..."
                className={`flex-1 px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all`}
              />
              <button
                onClick={addTask}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Adicionar
              </button>
            </div>
          </div>

          {/* Filtros */}
          <div className={`${cardBg} rounded-xl shadow-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4`}>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-green-600 text-white'
                    : `${inputBg} ${textSecondary} ${hoverBg}`
                }`}
              >
                Todas ({tasks.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'active'
                    ? 'bg-blue-600 text-white'
                    : `${inputBg} ${textSecondary} ${hoverBg}`
                }`}
              >
                Ativas ({activeCount})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === 'completed'
                    ? 'bg-green-600 text-white'
                    : `${inputBg} ${textSecondary} ${hoverBg}`
                }`}
              >
                Concluídas ({completedCount})
              </button>
            </div>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className={`px-4 py-2 ${inputBg} ${textSecondary} rounded-lg font-semibold transition-colors ${hoverBg}`}
              >
                Limpar Concluídas
              </button>
            )}
          </div>

          {/* Lista de Tarefas */}
          <div className={`${cardBg} rounded-2xl shadow-2xl overflow-hidden`}>
            {filteredTasks.length === 0 ? (
              <div className="p-12 text-center">
                <CheckSquare className={`w-16 h-16 ${textSecondary} mx-auto mb-4`} />
                <p className={`text-lg ${textSecondary}`}>
                  {filter === 'active' && 'Nenhuma tarefa ativa'}
                  {filter === 'completed' && 'Nenhuma tarefa concluída'}
                  {filter === 'all' && 'Nenhuma tarefa ainda. Adicione uma acima!'}
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-700">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 transition-all ${hoverBg} ${
                      task.completed ? 'opacity-60' : ''
                    }`}
                  >
                    {editingId === task.id ? (
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          onKeyDown={(e) => handleEditKeyPress(e, task.id)}
                          className={`flex-1 px-3 py-2 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                          autoFocus
                        />
                        <button
                          onClick={() => saveEdit(task.id)}
                          className="p-2 text-green-500 hover:bg-green-500 hover:bg-opacity-20 rounded-lg transition-colors"
                          title="Salvar"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="p-2 text-red-500 hover:bg-red-500 hover:bg-opacity-20 rounded-lg transition-colors"
                          title="Cancelar"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleTask(task.id)}
                          className={`flex-shrink-0 w-6 h-6 rounded border-2 ${
                            task.completed
                              ? 'bg-green-500 border-green-500'
                              : `${borderClass}`
                          } flex items-center justify-center transition-all`}
                        >
                          {task.completed && <Check className="w-4 h-4 text-white" />}
                        </button>
                        <span
                          className={`flex-1 ${textClass} ${
                            task.completed ? 'line-through opacity-60' : ''
                          }`}
                        >
                          {task.text}
                        </span>
                        <button
                          onClick={() => startEdit(task)}
                          className={`p-2 ${textSecondary} hover:text-blue-500 transition-colors`}
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className={`p-2 ${textSecondary} hover:text-red-500 transition-colors`}
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rodapé */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              ← Voltar ao Site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
