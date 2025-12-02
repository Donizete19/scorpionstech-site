'use client'

import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Dono da Barbearia Premium',
      image: 'https://ui-avatars.com/api/?name=Carlos+Silva&background=3b82f6&color=fff&size=128',
      rating: 5,
      text: 'O app revolucionou meu negócio! Agora meus clientes agendam online e não tenho mais problemas com agenda. Recomendo muito a Scorpions Tech!'
    },
    {
      name: 'Ana Paula Costa',
      role: 'Gerente de Salão',
      image: 'https://ui-avatars.com/api/?name=Ana+Paula&background=f59e0b&color=fff&size=128',
      rating: 5,
      text: 'Profissionais excelentes! O app ficou perfeito, intuitivo e bonito. Nossos clientes adoraram a facilidade de usar.'
    },
    {
      name: 'Roberto Mendes',
      role: 'Empresário',
      image: 'https://ui-avatars.com/api/?name=Roberto+Mendes&background=10b981&color=fff&size=128',
      rating: 5,
      text: 'Equipe super atenciosa e competente. Entregaram antes do prazo e com qualidade impecável. Já estou planejando o próximo projeto com eles!'
    },
    {
      name: 'Juliana Oliveira',
      role: 'Proprietária de Clínica',
      image: 'https://ui-avatars.com/api/?name=Juliana+Oliveira&background=8b5cf6&color=fff&size=128',
      rating: 5,
      text: 'O sistema de agendamento web facilitou demais nossa rotina. Menos ligações, mais organização. Valeu cada centavo!'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            O Que Dizem Nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que empresários e profissionais falam sobre nossos serviços e apps desenvolvidos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-dark-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Quer fazer parte dos nossos casos de sucesso?
          </p>
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Solicitar Orçamento
          </a>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
