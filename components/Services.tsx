'use client'

import { Smartphone, Monitor, Globe, Zap, Users, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Apps Mobile Nativos',
      description: 'Desenvolvimento de aplicativos iOS e Android com performance otimizada e experiência nativa.',
      features: ['React Native', 'Flutter', 'Swift/Kotlin', 'Performance otimizada']
    },
    {
      icon: Globe,
      title: 'Progressive Web Apps',
      description: 'Aplicações web modernas que funcionam como apps nativos, com offline support.',
      features: ['Service Workers', 'Offline First', 'Push Notifications', 'App Shell']
    },
    {
      icon: Monitor,
      title: 'Apps Desktop',
      description: 'Aplicações desktop multiplataforma com tecnologias web modernas.',
      features: ['Electron', 'Cross-platform', 'Native APIs', 'Auto-update']
    },
    {
      icon: Zap,
      title: 'APIs & Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis para suportar seus aplicativos.',
      features: ['Node.js', 'GraphQL', 'Microservices', 'Cloud Deploy']
    },
    {
      icon: Users,
      title: 'UX/UI Design',
      description: 'Design centrado no usuário com foco em usabilidade e conversão.',
      features: ['User Research', 'Prototyping', 'Design System', 'A/B Testing']
    },
    {
      icon: Shield,
      title: 'Consultoria & Suporte',
      description: 'Consultoria técnica e suporte contínuo para garantir o sucesso do seu projeto.',
      features: ['Code Review', 'Performance Audit', 'Security Check', 'Maintenance']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para desenvolvimento de aplicativos, 
            desde a concepção até o lançamento e manutenção.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  Saiba mais
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato e receba uma proposta personalizada
            </p>
            <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Solicitar Orçamento Gratuito
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services