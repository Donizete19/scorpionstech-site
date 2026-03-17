'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  // CONFIGURE SEU NÚMERO AQUI (formato: 5511999999999)
  const phoneNumber = '5511999999999'
  const message = 'Olá! Gostaria de saber mais sobre desenvolvimento de apps.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Message Bubble (appears when open) */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-fade-in">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Scorpions Tech</p>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Olá! 👋 Como podemos ajudar você hoje?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-semibold transition-colors"
            >
              Iniciar Conversa
            </a>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          aria-label="Abrir WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="w-7 h-7 text-white relative z-10" />
          
          {/* Online indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </>
  )
}

export default WhatsAppButton
