'use client'

import { Award, Clock, Users, Zap, Code, Lightbulb } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projetos Entregues' },
    { icon: Clock, value: '3+', label: 'Anos de Experiência' },
    { icon: Users, value: '30+', label: 'Clientes Satisfeitos' },
    { icon: Zap, value: '24h', label: 'Suporte Dedicado' }
  ]

  const technologies = [
    { name: 'React Native', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'Flutter', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
    { name: 'React/Next.js', level: 92, color: 'from-purple-500 to-purple-600' },
    { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Cloud (AWS/GCP)', level: 80, color: 'from-orange-500 to-orange-600' }
  ]

  const values = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Seguimos as melhores práticas de desenvolvimento para garantir código maintível e escalável.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscamos as tecnologias mais modernas para entregar soluções inovadoras.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes para alcançar os melhores resultados.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Sobre a <span className="gradient-text">Scorpions Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em aplicativos 
            excepcionais que geram resultados reais para nossos clientes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div>
            <h3 className="text-3xl font-bold text-dark-900 mb-6">
              Transformando ideias em realidade digital
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundada em 2021, a Scorpions Tech nasceu com o objetivo de democratizar o acesso 
              a tecnologias mobile de alta qualidade. Nossa missão é ajudar empresas e 
              empreendedores a concretizar suas visões através de aplicativos inovadores.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Combinamos expertise técnica com compreensão profunda do negócio para entregar 
              soluções que não apenas funcionam perfeitamente, mas também impulsionam o 
              crescimento e sucesso dos nossos clientes.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-8">
              Nossas Tecnologias
            </h3>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-dark-900">{tech.name}</span>
                    <span className="text-sm text-gray-600">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Pronto para começar?</h4>
              <p className="mb-4 opacity-90">
                Vamos conversar sobre seu projeto e descobrir como podemos ajudar.
              </p>
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block">
                Entre em Contato
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About