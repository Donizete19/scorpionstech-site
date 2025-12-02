# Scorpions Tech - Site Profissional

Um site moderno e profissional para apresentação de serviços de desenvolvimento de aplicativos mobile e web.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e otimizados
- **Framer Motion** - Animações fluidas e interativas

## 🎨 Características

- ✅ Design moderno e responsivo
- ✅ Animações suaves e micro-interações
- ✅ SEO otimizado com meta tags
- ✅ Performance otimizada
- ✅ Formulário de contato funcional
- ✅ Seções: Hero, Serviços, Portfólio, Sobre, Contato
- ✅ Sistema de cores profissional
- ✅ Componentes reutilizáveis

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos para executar

1. **Instalar dependências:**
```bash
npm install
# ou
yarn install
```

2. **Executar em modo desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

3. **Abrir no navegador:**
```
http://localhost:3000
```

### Build para produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
scorpions-tech-site/
├── app/                    # App Router do Next.js 14
│   ├── layout.tsx         # Layout principal com metadata
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Hero.tsx          # Seção principal
│   ├── Services.tsx      # Serviços oferecidos
│   ├── Portfolio.tsx     # Galeria de projetos
│   ├── About.tsx         # Sobre a empresa
│   ├── Contact.tsx       # Formulário de contato
│   └── Footer.tsx        # Rodapé
├── styles/
│   └── globals.css       # Estilos globais e Tailwind
├── utils/
│   └── index.ts          # Funções utilitárias
├── public/               # Arquivos estáticos
├── tailwind.config.js    # Configuração do Tailwind
├── next.config.js        # Configuração do Next.js
└── package.json          # Dependências e scripts
```

## 🎯 Seções do Site

### 1. **Hero Section**
- Apresentação impactante com gradientes
- Estatísticas da empresa
- Call-to-actions estratégicos
- Animações de background

### 2. **Serviços**
- 6 categorias de serviços
- Cards interativos com hover effects
- Descrições técnicas detalhadas
- CTA para orçamento

### 3. **Portfólio**
- Galeria de projetos desenvolvidos
- Filtros por categoria
- Estatísticas de cada projeto
- Links para demos e código

### 4. **Sobre**
- História da empresa
- Estatísticas de credibilidade
- Tecnologias utilizadas com progress bars
- Valores da empresa

### 5. **Contato**
- Formulário completo com validação
- Informações de contato
- Status online em tempo real
- Design responsivo

## 🎨 Design System

### Cores Principais
- **Primary**: Azul (#3b82f6 - #1d4ed8)
- **Accent**: Laranja (#f59e0b - #d97706)
- **Dark**: Cinza escuro (#111827 - #030712)

### Tipografia
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Componentes Reutilizáveis
- `.btn-primary` - Botão principal
- `.btn-secondary` - Botão secundário
- `.container-custom` - Container responsivo
- `.section-padding` - Padding padrão das seções
- `.gradient-text` - Texto com gradiente
- `.card-hover` - Efeito hover para cards

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Personalização

### Alterar Cores
Edite o arquivo `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Suas cores aqui
  },
  accent: {
    // Suas cores aqui
  }
}
```

### Adicionar Seções
1. Crie o componente em `components/`
2. Importe e adicione em `app/page.tsx`
3. Adicione link de navegação em `Header.tsx`

### Configurar Formulário
Edite a função `handleSubmit` em `Contact.tsx` para integrar com seu backend.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Deploy automático a cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`

### Hospedagem Tradicional
1. Execute `npm run build`
2. Upload da pasta `out` para o servidor

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@scorpionstech.com.br
- WhatsApp: +55 (11) 9 9999-9999

---

**Desenvolvido por Scorpions Tech** 🦂⚡