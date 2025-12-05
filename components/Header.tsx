'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Smartphone, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Apps em Ação', href: '#app-showcase' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Preços', href: '#pricing' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className={`text-lg md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-dark-900' : 'text-white'
            }`}>
              Scorpions<span className="gradient-text">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-dark-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://wa.me/5511995946630?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de app."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a href="#contact" className="btn-primary">
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-dark-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-dark-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a 
                  href="https://wa.me/5511995946630?text=Olá! Gostaria de solicitar um orçamento para desenvolvimento de app."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full text-center flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a href="#contact" className="btn-primary w-full text-center block">
                  Solicitar Orçamento
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header