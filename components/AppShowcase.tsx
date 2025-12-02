'use client'

import { useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight, Smartphone, Play } from 'lucide-react'

const AppShowcase = () => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const apps = [
    {
      id: 'barber-client',
      title: 'Barber Client',
      subtitle: 'App do Cliente',
      description: 'Aplicativo completo para clientes agendarem serviços de barbearia',
      color: 'from-blue-500 to-blue-700',
      features: [
        'Login seguro com Firebase',
        'Agendamento de horários',
        'Histórico de serviços',
        'Avaliações e feedback',
        'Notificações push',
        'Interface moderna e intuitiva'
      ],
      screenshots: [
        {
          src: '/screenshots/barber-client-screenshot.png',
          title: 'Tela Principal',
          description: 'Interface principal do app com navegação intuitiva'
        },
        {
          src: '/screenshots/tela-login.png',
          title: 'Tela de Login',
          description: 'Login seguro para clientes'
        },
        {
          src: '/screenshots/criar-conta-usuario.png',
          title: 'Criar Conta',
          description: 'Cadastro de novos usuários com validação'
        },
        {
          src: '/screenshots/tela-agendamentos.png',
          title: 'Fazer Agendamento',
          description: 'Sistema de agendamento de serviços'
        },
        {
          src: '/screenshots/ver-agendamentos.png',
          title: 'Meus Agendamentos',
          description: 'Visualização dos agendamentos do cliente'
        }
      ]
    },
    {
      id: 'barber-admin',
      title: 'Barber Admin',
      subtitle: 'App do Barbeiro',
      description: 'Painel administrativo completo para barbeiros e salões',
      color: 'from-purple-500 to-purple-700',
      features: [
        'Gerenciamento de agendamentos',
        'Controle de clientes',
        'Relatórios financeiros',
        'Dashboard analítico',
        'Gestão de serviços',
        'Notificações em tempo real'
      ],
      screenshots: [
        {
          src: '/screenshots/painel-admin.png',
          title: 'Painel Principal',
          description: 'Dashboard principal com visão geral do negócio'
        },
        {
          src: '/screenshots/admin-login.png',
          title: 'Login do Admin',
          description: 'Acesso seguro para administradores'
        },
        {
          src: '/screenshots/acesso-do-admin.png',
          title: 'Controle de Acesso',
          description: 'Gerenciamento de permissões e acessos'
        },
        {
          src: '/screenshots/cadastro-barbearia.png',
          title: 'Cadastro da Barbearia',
          description: 'Configuração inicial do estabelecimento'
        },
        {
          src: '/screenshots/adicionar-serviços.png',
          title: 'Adicionar Serviços',
          description: 'Cadastro e gestão de serviços oferecidos'
        },
        {
          src: '/screenshots/visualizar-agendamentos.png',
          title: 'Ver Agendamentos',
          description: 'Visualização completa dos agendamentos'
        },
        {
          src: '/screenshots/bloqueio-de-horarios.png',
          title: 'Bloqueio de Horários',
          description: 'Gestão de disponibilidade e bloqueios'
        }
      ]
    }
  ]

  const selectedAppData = apps.find(app => app.id === selectedApp)

  const nextImage = () => {
    if (selectedAppData) {
      setCurrentImageIndex((prev) => 
        prev === selectedAppData.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedAppData) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAppData.screenshots.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="app-showcase" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Apps em <span className="gradient-text">Funcionamento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Veja nossos aplicativos em ação! Clique nos apps para explorar as telas e funcionalidades reais.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {apps.map((app) => (
            <div 
              key={app.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
              onClick={() => {
                setSelectedApp(app.id)
                setCurrentImageIndex(0)
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative p-8">
                {/* App Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-dark-900">{app.title}</h3>
                    <p className="text-gray-600">{app.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{app.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {app.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${app.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                  {app.features.length > 3 && (
                    <div className="text-sm text-gray-500 ml-5">
                      +{app.features.length - 3} mais funcionalidades
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-primary-600 font-semibold">
                    <Play className="w-5 h-5 mr-2" />
                    Ver Funcionamento
                  </div>
                  <div className="text-sm text-gray-500">
                    {app.screenshots.length} tela{app.screenshots.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modal de Demonstração */}
        {selectedApp && selectedAppData && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedApp(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
              
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedAppData.color} text-white p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedAppData.title}</h3>
                    <p className="text-white/90">{selectedAppData.subtitle}</p>
                  </div>
                  <button
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                    onClick={() => setSelectedApp(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image Viewer */}
                <div className="lg:w-2/3 relative bg-gray-100">
                  <div className="aspect-[9/16] max-h-[60vh] relative bg-black/5 flex items-center justify-center">
                    <img
                      src={selectedAppData.screenshots[currentImageIndex].src}
                      alt={selectedAppData.screenshots[currentImageIndex].title}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedAppData.screenshots.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation()
                            prevImage()
                          }}
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation()
                            nextImage()
                          }}
                        >
                          <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Counter */}
                  {selectedAppData.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedAppData.screenshots.length}
                    </div>
                  )}
                </div>

                {/* App Info */}
                <div className="lg:w-1/3 p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-dark-900 mb-2">
                      {selectedAppData.screenshots[currentImageIndex].title}
                    </h4>
                    <p className="text-gray-600">
                      {selectedAppData.screenshots[currentImageIndex].description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-dark-900 mb-3">Funcionalidades:</h5>
                    <div className="space-y-2">
                      {selectedAppData.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 bg-gradient-to-r ${selectedAppData.color} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  {selectedAppData.screenshots.length > 1 && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-dark-900 mb-3">Outras Telas:</h5>
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedAppData.screenshots.map((screenshot, index) => (
                          <button
                            key={index}
                            className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                              index === currentImageIndex ? 'border-primary-500' : 'border-gray-200'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex(index)
                            }}
                          >
                            <img
                              src={screenshot.src}
                              alt={screenshot.title}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/5511995946630?text=Olá! Vi o ${selectedAppData.title} funcionando no seu site e gostaria de criar um app similar. Podemos conversar?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full bg-gradient-to-r ${selectedAppData.color} text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Quero um App Assim!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default AppShowcase