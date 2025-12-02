'use client'

import { ExternalLink, MessageCircle, Star, Download, Play, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const projects = [
    {
      title: 'Barber Client - App do Cliente',
      category: 'Negócios',
      description: 'Aplicativo para clientes agendarem serviços de barbearia. Login, agendamento, histórico e avaliações.',
      image: '/screenshots/tela-login.png',
      technologies: ['React Native', 'Firebase', 'Authentication', 'Firestore'],
      stats: { status: 'Disponível', rating: 'v1.0 (8.9MB)', users: 'Grátis' },
      links: { 
        apk: 'https://github.com/Techscorpion-com/barber-user-app-/releases/download/v1.0.0/app-release.apk',
        contact: 'https://wa.me/5511995946630?text=Olá! Vi o app Barber Client no seu portfólio e gostaria de criar um app similar. Podemos conversar?'
      },
      downloadable: true
    },
    {
      title: 'Barber Admin - App do Barbeiro',
      category: 'Negócios',
      description: 'Painel administrativo para barbeiros gerenciarem agendamentos, clientes, serviços e relatórios.',
      image: '/screenshots/painel-admin.png',
      technologies: ['React Native', 'Firebase', 'Admin SDK', 'Analytics'],
      stats: { status: 'Disponível', rating: 'v1.0 (49MB)', users: 'Grátis' },
      links: { 
        apk: 'https://github.com/Techscorpion-com/barber-admin-app/releases/download/v1.0.0/app-admin-release.apk',
        contact: 'https://wa.me/5511995946630?text=Olá! Vi o app Barber Admin no seu portfólio e gostaria de criar um app similar. Podemos conversar?'
      },
      downloadable: true
    },
    {
      title: 'Calculadora Profissional',
      category: 'Produtividade',
      description: 'Calculadora moderna com histórico, conversões e funções científicas.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM5OGVmNzsiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWQ0ZWQ4OyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8cmVjdCB4PSIyMDAiIHk9IjEwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIyMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHN2ZyB4PSIyNzAiIHk9IjE2MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZmZmZmZmIj4KPHBhdGggZD0iTTEwIDEwaDQwdjEwaC00MHptMCAyMGg0MHYxMGgtNDB6bTAgMjBoNDB2MTBoLTQwem0wIDIwaDE1djEwaC0xNXptMjUgMGgxNXYxMGgtMTV6Ii8+Cjwvc3ZnPgo8dGV4dCB4PSIzMDAiIHk9IjMzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiPkNhbGN1bGFkb3JhPC90ZXh0Pgo8L3N2Zz4=',
      technologies: ['React Native', 'AsyncStorage', 'Expo'],
      stats: { status: 'Disponível', rating: 'v1.2', users: 'Grátis' },
      links: { 
        apk: 'https://github.com/scorpionstech/calculator-app/releases/download/v1.0/calculator.apk',
        contact: 'https://wa.me/5511995946630?text=Olá! Vi a Calculadora Profissional no seu portfólio e gostaria de criar um app similar. Podemos conversar?'
      },
      downloadable: true
    },
    {
      title: 'Lista de Tarefas Smart',
      category: 'Produtividade',
      description: 'App de tarefas com categorias, lembretes e sincronização local.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzEwYjk4MTsiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDU5NjY5OyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPgo8cmVjdCB4PSIxNzAiIHk9IjgwIiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjI0MCIgcng9IjIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMzAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiLz4KPGxpbmUgeDE9IjIyMCIgeTE9IjEzMCIgeDI9IjM4MCIgeTI9IjEzMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTcwIiByPSI4IiBmaWxsPSIjZmZmZmZmIi8+CjxsaW5lIHgxPSIyMjAiIHkxPSIxNzAiIHgyPSIzNDAiIHkyPSIxNzAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIxMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiIvPgo8bGluZSB4MT0iMjIwIiB5MT0iMjEwIiB4Mj0iMzYwIiB5Mj0iMjEwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIvPgo8dGV4dCB4PSIzMDAiIHk9IjM1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmZmZmYiPlRhcmVmYXM8L3RleHQ+Cjwvc3ZnPg==',
      technologies: ['Flutter', 'SQLite', 'Local Notifications'],
      stats: { status: 'Beta', rating: 'v0.9', users: 'Grátis' },
      links: { 
        apk: 'https://github.com/scorpionstech/todo-app/releases/download/v0.9/todolist.apk',
        contact: 'https://wa.me/5511995946630?text=Olá! Vi o app de Lista de Tarefas no seu portfólio e gostaria de criar um app similar. Podemos conversar?'
      },
      downloadable: true
    },
    {
      title: 'Portfolio Responsivo',
      category: 'Web',
      description: 'Site portfolio profissional desenvolvido com Next.js e Tailwind CSS.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y1OWUwYjsiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZGI3NTA3OyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPgo8cmVjdCB4PSIxMDAiIHk9IjgwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgcng9IjE1IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cmVjdCB4PSIxMjAiIHk9IjEwMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMjkwIiB5PSIxMDAiIHdpZHRoPSIxODAiIGhlaWdodD0iMjAiIHJ4PSI1IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjI5MCIgeT0iMTMwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIyOTAiIHk9IjE2MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyMCIgcng9IjUiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMTIwIiB5PSIyMDAiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUiIHJ4PSI1IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjEyMCIgeT0iMjI1IiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1IiByeD0iNSIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIxMjAiIHk9IjI1MCIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIxNSIgcng9IjUiIGZpbGw9IiNmZmZmZmYiLz4KPHRleHQgeD0iMzAwIiB5PSIzNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmZmZmIj5Qb3J0Zm9saW88L3RleHQ+Cjwvc3ZnPg==',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      stats: { status: 'Online', rating: 'v2.0', users: 'Acesso livre' },
      links: { 
        live: 'https://scorpionstech.com',
        contact: 'https://wa.me/5511995946630?text=Olá! Vi seu Portfolio Responsivo e gostaria de criar um site similar. Podemos conversar?'
      },
      downloadable: false
    },
    {
      title: 'Sistema de Agendamento Web',
      category: 'Web',
      description: 'Painel web para gerenciamento de agendamentos complementar aos apps mobile.',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6Izc5NDNkZTsiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNWIyMWI2OyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQ0KSIvPgo8cmVjdCB4PSI4MCIgeT0iNjAiIHdpZHRoPSI0NDAiIGhlaWdodD0iMjgwIiByeD0iMjAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAiIHJ4PSIxMCIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIxMDAiIHk9IjE0MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxODAiIHJ4PSIxMCIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOTAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSIjNzk0M2RlIi8+CjxjaXJjbGUgY3g9IjE5MCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iMzAwIiB5PSIxNDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjMwMCIgeT0iMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSIzMDAiIHk9IjI2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiLz4KPHRleHQgeD0iMzAwIiB5PSIzNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmZmZmIj5BZ2VuZGFtZW50bzwvdGV4dD4KPC9zdmc+',
      technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
      stats: { status: 'Em desenvolvimento', rating: 'Preview', users: 'Em breve' },
      links: { 
        contact: 'https://wa.me/5511995946630?text=Olá! Vi o Sistema de Agendamento Web no seu portfólio e gostaria de criar um sistema similar. Podemos conversar?'
      },
      downloadable: false
    }
  ]

  const categories = ['Todos', 'Negócios', 'Produtividade', 'Web']

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conheça alguns dos projetos que desenvolvemos e os resultados obtidos para nossos clientes.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover">
              
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                <div 
                  className="relative w-full h-full cursor-pointer group/image"
                  onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
                  
                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-primary-600" />
                    </a>
                  )}
                  {project.links.contact && (
                    <a 
                      href={project.links.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      title="Quero um app assim!"
                    >
                      <MessageCircle className="w-5 h-5 text-primary-600" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Download/Action Buttons */}
                {project.downloadable && (
                  <div className="mb-4 space-y-2">
                    {project.links.apk && (
                      <a 
                        href={project.links.apk}
                        download
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download APK Direto</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="font-bold text-primary-600">{project.stats.status}</div>
                    <div className="text-xs text-gray-500">Status</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary-600 flex items-center justify-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {project.stats.rating}
                    </div>
                    <div className="text-xs text-gray-500">Versão</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary-600">{project.stats.users}</div>
                    <div className="text-xs text-gray-500">Preço</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Apps disponíveis para download! Experimente nossos projetos e vamos criar o seu também.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Solicitar Meu App
            </a>
            <a 
              href="https://wa.me/5511995946630?text=Olá! Vi seus apps no portfólio e gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-2 hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-lg font-semibold text-gray-800">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-600">Clique fora da imagem para fechar</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Portfolio