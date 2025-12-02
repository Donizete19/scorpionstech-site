'use client'

import { Check, Zap, Rocket, Crown } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      icon: Zap,
      price: 'R$ 2.500',
      description: 'Ideal para começar seu projeto',
      color: 'from-blue-500 to-blue-600',
      features: [
        'App mobile básico (iOS ou Android)',
        'Design personalizado',
        'Até 5 telas',
        'Integração com banco de dados',
        '1 mês de suporte gratuito',
        'Entrega em até 30 dias'
      ],
      popular: false
    },
    {
      name: 'Profissional',
      icon: Rocket,
      price: 'R$ 5.000',
      description: 'Perfeito para negócios em crescimento',
      color: 'from-primary-600 to-primary-700',
      features: [
        'App mobile completo (iOS + Android)',
        'Design premium e animações',
        'Até 15 telas',
        'Firebase/Backend integrado',
        'Push notifications',
        'Painel administrativo web',
        '3 meses de suporte gratuito',
        'Entrega em até 60 dias'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Sob Consulta',
      description: 'Soluções completas e escaláveis',
      color: 'from-amber-500 to-amber-600',
      features: [
        'Apps mobile + Web completos',
        'Design exclusivo e UX avançado',
        'Telas ilimitadas',
        'Backend customizado',
        'API Rest personalizada',
        'Integrações com terceiros',
        'Sistema de pagamentos',
        'Analytics e relatórios',
        '6 meses de suporte VIP',
        'Treinamento da equipe'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Planos e <span className="gradient-text">Investimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar sua ideia em realidade. Valores transparentes e sem surpresas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'border-4 border-primary-500 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    MAIS POPULAR
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-8 text-center`}>
                  <div className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  {plan.price !== 'Sob Consulta' && (
                    <p className="text-white/80 text-sm">pagamento único</p>
                  )}
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/5511995946630?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {plan.price === 'Sob Consulta' ? 'Solicitar Proposta' : 'Começar Agora'}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Tem um projeto diferente em mente?
            </h3>
            <p className="text-gray-700 mb-6">
              Criamos soluções personalizadas para atender suas necessidades específicas. 
              Entre em contato para um orçamento sob medida.
            </p>
            <a 
              href="https://wa.me/5511995946630?text=Olá! Tenho um projeto personalizado e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing
