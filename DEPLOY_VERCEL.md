# 🚀 Guia Completo: Deploy na Vercel (GRATUITO)

## ✅ O que você vai conseguir:
- ✨ Site no ar em **menos de 5 minutos**
- 🌐 Domínio grátis: `scorpionstech.vercel.app`
- 🔒 HTTPS automático
- ⚡ Performance ultrarrápida (CDN global)
- 🔄 Deploy automático a cada commit no GitHub

---

## 📋 Passo a Passo Completo

### **Passo 1: Criar Conta na Vercel**

1. Acesse: [vercel.com/signup](https://vercel.com/signup)
2. Clique em **"Continue with GitHub"**
3. Autorize a Vercel a acessar seus repositórios

> 💡 **Dica:** Use sua conta do GitHub para facilitar o processo

---

### **Passo 2: Preparar o Repositório no GitHub**

Se ainda não subiu o projeto para o GitHub, faça assim:

```bash
# 1. Inicializar repositório Git (se ainda não fez)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Site Scorpions Tech pronto para deploy"

# 4. Criar repositório no GitHub
# Acesse: https://github.com/new
# Nome: scorpionstech-site
# Visibilidade: Public ou Private (ambos funcionam)

# 5. Conectar ao repositório remoto (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/scorpionstech-site.git

# 6. Enviar para o GitHub
git branch -M main
git push -u origin main
```

---

### **Passo 3: Importar Projeto na Vercel**

1. No painel da Vercel, clique em **"Add New..."** → **"Project"**
2. Encontre o repositório `scorpionstech-site`
3. Clique em **"Import"**

---

### **Passo 4: Configurar o Deploy**

A Vercel detecta automaticamente que é Next.js, mas confirme:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: (deixe vazio)
Install Command: npm install
```

**Environment Variables:** (deixe vazio por enquanto)

Clique em **"Deploy"** 🚀

---

### **Passo 5: Aguardar Deploy**

⏱️ **Tempo estimado:** 2-3 minutos

Você verá:
1. ⚙️ Building...
2. 📦 Optimizing...
3. ✅ Deploy successful!

---

## 🎉 Pronto! Seu Site Está no Ar!

### **URLs que você receberá:**

```
Production: https://scorpionstech-site.vercel.app
```

> 💡 **Você pode personalizar:** `scorpionstech.vercel.app`

---

## 🌐 Adicionar Domínio Personalizado (Opcional)

Se tiver um domínio próprio (ex: `scorpionstech.com.br`):

### **Na Vercel:**
1. Vá em **Settings** → **Domains**
2. Adicione seu domínio
3. Copie os registros DNS fornecidos

### **No seu Provedor de Domínio:**
1. Acesse o painel DNS
2. Adicione os registros que a Vercel forneceu:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

⏱️ **Propagação DNS:** 24-48 horas (geralmente mais rápido)

---

## 🔄 Deploy Automático

Agora, **toda vez que você fizer um commit no GitHub**, a Vercel:
1. 🔍 Detecta a mudança
2. ⚙️ Faz build automático
3. 🚀 Deploy automático
4. ✅ Site atualizado em 2 minutos!

**Exemplo de fluxo de trabalho:**

```bash
# 1. Fazer alterações no código
code components/Hero.tsx

# 2. Commitar
git add .
git commit -m "Atualizar texto do Hero"

# 3. Enviar para GitHub
git push

# 4. Vercel faz deploy automático!
# Você recebe email quando estiver pronto
```

---

## 📊 Recursos Grátis Inclusos

| Recurso | Plano Grátis |
|---------|--------------|
| **Bandwidth** | 100 GB/mês |
| **Builds** | 6.000 minutos/mês |
| **Projetos** | Ilimitados |
| **Domínios** | Ilimitados |
| **HTTPS** | ✅ Incluído |
| **CDN Global** | ✅ Incluído |
| **Analytics** | ✅ Incluído |

> 💡 Para um site de portfólio, isso é **mais do que suficiente!**

---

## 🔧 Comandos Úteis

### **Ver logs de build:**
```bash
# Na dashboard da Vercel → Deployments → Ver detalhes
```

### **Fazer rollback (voltar versão):**
```bash
# Na dashboard → Deployments → Escolher deploy anterior → Promote to Production
```

### **Testar localmente antes do deploy:**
```bash
npm run build
npm start
```

---

## ⚠️ Solução de Problemas Comuns

### **Erro: "Build failed"**
```bash
# Teste localmente primeiro:
npm run build

# Se funcionar local, limpe cache da Vercel:
# Settings → General → Clear Cache
```

### **Erro: "Module not found"**
```bash
# Verifique se todas as dependências estão no package.json
npm install
```

### **Site não atualiza:**
```bash
# Force um novo deploy:
# Settings → General → Redeploy
```

---

## 🎯 Próximos Passos Recomendados

Depois do deploy, você pode:

1. **✅ Adicionar Analytics**
   - Settings → Analytics → Ativar
   - Veja visitantes, páginas mais acessadas, etc.

2. **✅ Configurar SEO**
   - Já está configurado no `layout.tsx`!
   - Verifique no Google Search Console

3. **✅ Adicionar Domínio Personalizado**
   - Registre um `.com.br` em: Registro.br, HostGator, etc.
   - Siga o guia de domínio acima

4. **✅ Configurar Email Profissional**
   - Google Workspace ou Zoho Mail
   - Ex: `contato@scorpionstech.com.br`

---

## 📞 Links Úteis

- **Dashboard Vercel:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Documentação:** [vercel.com/docs](https://vercel.com/docs)
- **Status:** [vercel-status.com](https://vercel-status.com)
- **Suporte:** [vercel.com/support](https://vercel.com/support)

---

## 💰 Custo Total: R$ 0,00

**Tudo 100% gratuito para sempre!** 🎉

> Se o site crescer muito (improvável), você só paga se ultrapassar 100GB/mês

---

## 🆘 Precisa de Ajuda?

Se tiver algum problema durante o deploy:

1. ✅ Verifique os logs na dashboard da Vercel
2. ✅ Teste `npm run build` localmente
3. ✅ Consulte a documentação oficial
4. ✅ Ou me pergunte! Estou aqui para ajudar 😊

---

**Desenvolvido por Scorpions Tech** 🦂⚡
