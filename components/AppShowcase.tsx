'use client'

import { Smartphone, Download } from 'lucide-react'

const AppShowcase = () => {
  // Apps disponíveis para download
  const apps: any[] = [
    {
      id: 'admin-app',
      title: 'App Admin',
      subtitle: 'Painel Administrativo',
      description: 'Sistema completo de gerenciamento administrativo com controle total de funcionalidades, usuários e configurações.',
      color: 'from-blue-600 to-blue-800',
      apkUrl: '/techscorpion-admin.apk', // APK disponível para download
      webUrl: 'https://techscorpion-app-b4f30.web.app/admin', // Acesso Web - Barbeiros/Administradores
      playStoreUrl: '', // opcional
      features: [
        'Painel de controle completo',
        'Gerenciamento de usuários',
        'Relatórios e estatísticas',
        'Configurações avançadas',
        'Notificações em tempo real',
        'Interface intuitiva e responsiva'
      ],
      screenshots: [
        // Screenshots serão adicionados posteriormente
      ]
    },
    {
      id: 'user-app',
      title: 'App Usuário',
      subtitle: 'Aplicativo do Cliente',
      description: 'Aplicativo intuitivo para usuários finais com interface amigável e funcionalidades essenciais para o dia a dia.',
      color: 'from-orange-500 to-orange-700',
      apkUrl: '/techscorpion-user.apk', // APK disponível para download
      webUrl: 'https://techscorpion-app-b4f30.web.app/user', // Acesso Web - Clientes
      playStoreUrl: '', // opcional
      features: [
        'Interface amigável e moderna',
        'Acesso rápido às funcionalidades',
        'Perfil personalizável',
        'Notificações importantes',
        'Suporte integrado',
        'Modo offline disponível'
      ],
      screenshots: [
        // Screenshots serão adicionados posteriormente
      ]
    },
    {
      id: 'calculadora-app',
      title: 'Calculadora Profissional',
      subtitle: 'Científica e Completa',
      description: 'Calculadora científica completa com histórico, modo escuro/claro e todas as funções matemáticas essenciais.',
      color: 'from-purple-600 to-purple-800',
      webUrl: '/calculadora', // Acesso Web - Calculadora
      features: [
        'Operações básicas e científicas',
        'Histórico de cálculos',
        'Modo escuro/claro',
        'Funções trigonométricas',
        'Logaritmos e constantes',
        'Interface moderna e responsiva'
      ],
      screenshots: []
    },
    {
      id: 'tarefas-app',
      title: 'Lista de Tarefas Smart',
      subtitle: 'Organize sua Rotina',
      description: 'Lista de tarefas inteligente com filtros, edição rápida e sincronização local para manter sua produtividade em dia.',
      color: 'from-green-600 to-green-800',
      webUrl: '/tarefas', // Acesso Web - Tarefas
      features: [
        'Adicionar e editar tarefas',
        'Marcar como concluída',
        'Filtros (todas/ativas/concluídas)',
        'Estatísticas de produtividade',
        'Salva automaticamente',
        'Modo escuro/claro'
      ],
      screenshots: []
    },
    {
      id: 'portfolio-app',
      title: 'Portfólio Responsivo',
      subtitle: 'Gerencie Seus Projetos',
      description: 'Sistema completo para criar e gerenciar seu portfólio profissional com galeria de projetos, filtros e design responsivo.',
      color: 'from-pink-600 to-pink-800',
      webUrl: '/portfolio',
      features: [
        'Adicionar projetos facilmente',
        'Upload de imagens',
        'Sistema de filtros por tags',
        'Design totalmente responsivo',
        'Modo escuro/claro',
        'Edição e exclusão rápida'
      ],
      screenshots: []
    },
    {
      id: 'agendamento-app',
      title: 'Sistema de Agendamento',
      subtitle: 'Gerencie Compromissos',
      description: 'Sistema profissional de agendamento com controle de status, notificações e gerenciamento completo de compromissos.',
      color: 'from-indigo-600 to-indigo-800',
      webUrl: '/agendamento',
      features: [
        'Agendamento rápido e fácil',
        'Controle de status',
        'Filtros inteligentes',
        'Estatísticas em tempo real',
        'Modo escuro/claro',
        'Notificações de confirmação'
      ],
      screenshots: []
    }
  ]



  return (
    <section id="app-showcase" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Nossos <span className="gradient-text">Apps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conheça nossos aplicativos e baixe diretamente para experimentar.
          </p>
        </div>

        {/* Apps Grid */}
        {apps.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
              <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Apps em breve!</h3>
              <p className="text-gray-500 max-w-md">
                Estamos preparando novos aplicativos incríveis para demonstração.
                <br />Em breve você poderá explorar as funcionalidades aqui!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {apps.map((app) => (
            <div 
              key={app.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
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
                  {app.features.slice(0, 3).map((feature: string, index: number) => (
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

                {/* CTAs */}
                <div className="space-y-3">
                  {app.webUrl && (
                    <a
                      href={app.webUrl}
                      target={app.id === 'calculadora-app' || app.id === 'tarefas-app' || app.id === 'portfolio-app' || app.id === 'agendamento-app' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center bg-gradient-to-r ${app.color} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      {app.id === 'admin-app' ? '📱 Acessar ADMIN' : 
                       app.id === 'user-app' ? '📱 Acessar USER' : 
                       app.id === 'calculadora-app' ? '🧮 Usar Calculadora' :
                       app.id === 'tarefas-app' ? '✅ Usar Lista de Tarefas' :
                       app.id === 'portfolio-app' ? '💼 Ver Portfólio' :
                       app.id === 'agendamento-app' ? '📅 Fazer Agendamento' :
                       '✅ Usar Lista de Tarefas'}
                    </a>
                  )}
                  {app.apkUrl && (
                    <a
                      href={app.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center bg-gradient-to-r ${app.color} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar APK
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default AppShowcase