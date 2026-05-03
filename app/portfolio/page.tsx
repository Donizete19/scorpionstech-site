'use client'

import { useState, useEffect } from 'react'
import AdSlot from '@/components/AdSlot'
import { Briefcase, Plus, Edit2, Trash2, Save, X, ExternalLink, Moon, Sun, Image as ImageIcon } from 'lucide-react'

const portfolioAdSlot = process.env.NEXT_PUBLIC_GAM_SLOT_PORTFOLIO

const portfolioAdMapping = [
  { viewport: [1200, 0] as [number, number], sizes: [[728, 90], [336, 280], [300, 250]] as [number, number][] },
  { viewport: [768, 0] as [number, number], sizes: [[728, 90], [300, 250]] as [number, number][] },
  { viewport: [0, 0] as [number, number], sizes: [[320, 100], [300, 250], [320, 50]] as [number, number][] },
]

interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  createdAt: number
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [darkMode, setDarkMode] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  // Projetos de demonstração
  const demoProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com carrinho, pagamento e painel admin.',
      image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=E-commerce',
      link: '#',
      tags: ['React', 'Node.js', 'MongoDB'],
      createdAt: Date.now()
    },
    {
      id: '2',
      title: 'App de Delivery',
      description: 'Aplicativo mobile de delivery com rastreamento em tempo real.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Delivery',
      link: '#',
      tags: ['React Native', 'Firebase', 'Maps'],
      createdAt: Date.now()
    },
    {
      id: '3',
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com gráficos e relatórios personalizados.',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Dashboard',
      link: '#',
      tags: ['Vue.js', 'Chart.js', 'API'],
      createdAt: Date.now()
    }
  ]

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-projects')
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (saved) {
      setProjects(JSON.parse(saved))
    } else {
      setProjects(demoProjects)
    }
    if (savedTheme) setDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
    tags: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...editingProject, ...formData, tags: formData.tags.split(',').map(t => t.trim()) }
          : p
      ))
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()),
        createdAt: Date.now()
      }
      setProjects([newProject, ...projects])
    }

    resetForm()
  }

  const startEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      tags: project.tags.join(', ')
    })
    setIsEditing(true)
  }

  const deleteProject = (id: string) => {
    if (confirm('Deseja realmente excluir este projeto?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', image: '', link: '', tags: '' })
    setEditingProject(null)
    setIsEditing(false)
  }

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter))

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-100'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600'
  const inputBg = darkMode ? 'bg-gray-700' : 'bg-gray-100'
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300'

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 backdrop-blur-lg bg-opacity-80 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">Portfólio Profissional</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isEditing ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white flex items-center gap-2`}
            >
              {isEditing ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {isEditing ? 'Cancelar' : 'Adicionar Projeto'}
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
        <div className="mx-auto mb-8 max-w-5xl">
          <AdSlot
            slotPath={portfolioAdSlot}
            label="Publicidade"
            sizes={[[728, 90], [336, 280], [300, 250], [320, 100], [320, 50]]}
            mapping={portfolioAdMapping}
            minHeight={90}
          />
        </div>
        {/* Formulário */}
        {isEditing && (
          <div className={`${cardBg} rounded-2xl shadow-2xl p-6 mb-8`}>
            <h2 className="text-2xl font-bold mb-6">
              {editingProject ? 'Editar Projeto' : 'Novo Projeto'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                  Título do Projeto
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                  Descrição
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24`}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    URL da Imagem
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                    Link do Projeto
                  </label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({...formData, link: e.target.value})}
                    placeholder="https://projeto.com"
                    className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${textSecondary}`}>
                  Tags (separadas por vírgula)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="React, Node.js, MongoDB"
                  className={`w-full px-4 py-3 ${inputBg} ${textClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Salvar Projeto
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className={`px-6 py-3 ${inputBg} ${textSecondary} rounded-lg font-semibold transition-colors hover:bg-opacity-80`}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all' ? 'bg-blue-600 text-white' : `${inputBg} ${textSecondary}`
            }`}
          >
            Todos ({projects.length})
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === tag ? 'bg-blue-600 text-white' : `${inputBg} ${textSecondary}`
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className={`${cardBg} rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all transform hover:scale-105`}>
              <div className="relative h-48 overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Imagem+Indisponível'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => startEdit(project)}
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-5 h-5 text-white" />
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`${textSecondary} mb-4 line-clamp-2`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 ${inputBg} ${textSecondary} rounded-full text-sm font-semibold`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className={`w-20 h-20 ${textSecondary} mx-auto mb-4`} />
            <p className={`text-xl ${textSecondary}`}>
              Nenhum projeto encontrado. Adicione seu primeiro projeto!
            </p>
          </div>
        )}

        {/* Rodapé */}
        <div className="text-center mt-12">
          <a href="/" className="text-blue-500 hover:text-blue-400 transition-colors">
            ← Voltar ao Site
          </a>
        </div>
      </div>
    </div>
  )
}
