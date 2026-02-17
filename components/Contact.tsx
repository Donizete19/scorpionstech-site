'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // Verifica se tem a chave do Web3Forms configurada
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!web3formsKey || web3formsKey === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback para mailto se não tiver chave configurada
      const subject = encodeURIComponent(`Novo contato - ${formData.project}`)
      const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Tipo de Projeto: ${formData.project}
Orçamento: ${formData.budget || 'Não informado'}

Mensagem:
${formData.message}
      `)
      
      window.location.href = `mailto:contato@scorpionstech.com.br?subject=${subject}&body=${body}`
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        budget: '',
        message: ''
      })
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 6000)
      return
    }

    try {
      // Web3Forms - envio via API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Novo contato - ${formData.project}`,
          message: `
Tipo de Projeto: ${formData.project}
Orçamento: ${formData.budget || 'Não informado'}
Telefone: ${formData.phone || 'Não informado'}

Mensagem:
${formData.message}
          `,
          from_name: formData.name,
          replyto: formData.email
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: '',
          budget: '',
          message: ''
        })
        setTimeout(() => setIsSubmitted(false), 6000)
      } else {
        setSubmitError('Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Erro de conexão. Por favor, tente novamente ou entre em contato via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contato@scorpionstech.com.br',
      link: 'mailto:contato@scorpionstech.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: '+55 (11) 9 95946630',
      link: 'tel:+5511995946630'
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e receba uma proposta personalizada para seu projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Solicite seu orçamento
            </h3>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="(11) 9 9999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de projeto *
                  </label>
                  <select
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="mobile">App Mobile</option>
                    <option value="web">App Web</option>
                    <option value="desktop">App Desktop</option>
                    <option value="api">API/Backend</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Orçamento estimado
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione uma faixa...</option>
                  <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                  <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                  <option value="30k-50k">R$ 30.000 - R$ 50.000</option>
                  <option value="50k+">R$ 50.000+</option>
                  <option value="discutir">Prefiro discutir</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva seu projeto *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre sua ideia, objetivos e funcionalidades desejadas..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Entre em contato
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Estamos prontos para ouvir sua ideia e transformá-la em um aplicativo 
              de sucesso. Nossa equipe está disponível para esclarecer dúvidas e 
              oferecer a melhor solução para seu negócio.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900">{info.title}</div>
                    <div className="text-gray-600">{info.details}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/5511995946630?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de app."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
                <span className="text-sm opacity-90">(11) 9 9594-6630</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl text-white">
              <h4 className="font-bold text-xl mb-3">Resposta rápida garantida!</h4>
              <p className="mb-4 opacity-90">
                Respondemos todos os contatos em até 24 horas. Para urgências, 
                use o botão do WhatsApp acima para atendimento imediato.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Online agora</span>
                </div>
                <div className="text-sm opacity-75">
                  Seg-Sex: 9h-18h
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact