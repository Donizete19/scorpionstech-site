'use client'

import { Smartphone, Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ]

  const services = [
    'Apps Mobile',
    'Progressive Web Apps',
    'Apps Desktop',
    'APIs & Backend',
    'UX/UI Design',
    'Consultoria'
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Scorpions<span className="gradient-text">Tech</span>
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideias em aplicativos incríveis. Especializados em desenvolvimento 
              mobile e web com as tecnologias mais modernas do mercado.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">contato@scorpionstech.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">+55 (11) 995946630</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Social Links */}
          <div>
            <p className="text-gray-300 mb-4 text-center lg:text-left">Siga-nos nas redes sociais</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-md w-full">
            <p className="text-gray-300 mb-4 text-center lg:text-right">
              Receba dicas sobre desenvolvimento de apps
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-r-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Scorpions Tech. Todos os direitos reservados.
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer