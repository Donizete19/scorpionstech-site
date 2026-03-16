'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Phone, Mail, Plus, Trash2, Moon, Sun, Check, X } from 'lucide-react'

interface Appointment {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  status: 'pending' | 'confirmed' | 'cancelled'
  notes: string
  createdAt: number
}

export default function AgendamentoPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [darkMode, setDarkMode] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all')
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  })

  const services = [
    'Consulta Geral',
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
    'Design UI/UX',
    'Consultoria',
    'Manutenção',
    'Outro'
  ]

  useEffect(() => {
    const saved = localStorage.getItem('appointments')
    const savedTheme = localStorage.getItem('appointments-theme')
    if (saved) setAppointments(JSON.parse(saved))
    if (savedTheme) setDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  useEffect(() => {
    localStorage.setItem('appointments-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: Date.now()
    }

    setAppointments([newAppointment, ...appointments])
    resetForm()
    alert('Agendamento realizado com sucesso!')
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      notes: ''
    })
    setShowForm(false)
  }

  const updateStatus = (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    setAppointments(appointments.map(apt =>
      apt.id === id ? { ...apt, status } : apt
    ))
  }

  const deleteAppointment = (id: string) => {
    if (confirm('Deseja realmente excluir este agendamento?')) {
      setAppointments(appointments.filter(apt => apt.id !== id))
    }
  }

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true
    return apt.status === filter
  })

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length
  }

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const inputBg = darkMode ? 'bg-gray-700' : 'bg-gray-100'

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 backdrop-blur-lg bg-opacity-80 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-indigo-500" />
            <h1 className="text-2xl font-bold">Sistema de Agendamento</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowForm(!showForm)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                showForm ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white flex items-center gap-2`}
            >
              {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showForm ? 'Cancelar' : 'Novo Agendamento'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${inputBg} transition-colors`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
            <div className={`text-sm ${textSecondary} mb-1`}>Total</div>
            <div className="text-2xl font-bold">{stats.total}</div>
          </div>
          <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
            <div className={`text-sm ${textSecondary} mb-1`}>Pendentes</div>
            <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
          </div>
          <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
            <div className={`text-sm ${textSecondary} mb-1`}>Confirmados</div>
            <div className="text-2xl font-bold text-green-500">{stats.confirmed}</div>
          </div>
          <div className={`${cardBg} rounded-lg p-4 shadow-lg`}>
            <div className={`text-sm ${textSecondary} mb-1`}>Cancelados</div>
            <div className="text-2xl font-bold text-red-500">{stats.cancelled}</div>
          </div>
        </div>

        {/* Formulário */}
        {showForm && (
          <div className={`${cardBg} rounded-2xl shadow-2xl p-6 mb-8`}>
            <h2 className="text-2xl font-bold mb-6">Novo Agendamento</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(00) 00000-0000"
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Data
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Horário
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                  Serviço
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                  Observações (opcional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24`}
                  placeholder="Informações adicionais..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Agendar
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className={`px-6 py-3 ${inputBg} ${textSecondary} rounded-lg font-semibold transition-colors`}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all' ? 'bg-indigo-600 text-white' : `${inputBg} ${textSecondary}`
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'pending' ? 'bg-yellow-600 text-white' : `${inputBg} ${textSecondary}`
            }`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'confirmed' ? 'bg-green-600 text-white' : `${inputBg} ${textSecondary}`
            }`}
          >
            Confirmados
          </button>
          <button
            onClick={() => setFilter('cancelled')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'cancelled' ? 'bg-red-600 text-white' : `${inputBg} ${textSecondary}`
            }`}
          >
            Cancelados
          </button>
        </div>

        {/* Lista de Agendamentos */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className={`${cardBg} rounded-xl p-12 text-center`}>
              <Calendar className={`w-20 h-20 ${textSecondary} mx-auto mb-4`} />
              <p className={`text-xl ${textSecondary}`}>
                Nenhum agendamento encontrado
              </p>
            </div>
          ) : (
            filteredAppointments.map(apt => (
              <div key={apt.id} className={`${cardBg} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-5 h-5 text-indigo-500" />
                      <h3 className="text-xl font-bold">{apt.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        apt.status === 'confirmed' ? 'bg-green-500 text-white' :
                        apt.status === 'pending' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {apt.status === 'confirmed' ? 'Confirmado' :
                         apt.status === 'pending' ? 'Pendente' : 'Cancelado'}
                      </span>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${textSecondary}`}>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {apt.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {apt.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(apt.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {apt.time}
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className={`inline-block px-3 py-1 ${inputBg} rounded-full text-sm font-semibold`}>
                        {apt.service}
                      </span>
                    </div>

                    {apt.notes && (
                      <p className={`mt-3 ${textSecondary} text-sm`}>
                        📝 {apt.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex md:flex-col gap-2">
                    {apt.status === 'pending' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'confirmed')}
                        className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                        title="Confirmar"
                      >
                        <Check className="w-5 h-5 text-white" />
                      </button>
                    )}
                    {apt.status !== 'cancelled' && (
                      <button
                        onClick={() => updateStatus(apt.id, 'cancelled')}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        title="Cancelar"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteAppointment(apt.id)}
                      className={`p-2 ${inputBg} hover:bg-opacity-80 rounded-lg transition-colors`}
                      title="Excluir"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé */}
        <div className="text-center mt-12">
          <a href="/" className="text-indigo-500 hover:text-indigo-400 transition-colors">
            ← Voltar ao Site
          </a>
        </div>
      </div>
    </div>
  )
}
