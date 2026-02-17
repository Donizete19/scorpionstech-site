# Configuração do Formulário de Contato

## 📧 Como ativar o envio de emails

O formulário de contato do site está configurado para usar **Web3Forms**, um serviço gratuito e confiável para envio de emails em sites estáticos.

### Passo a passo:

#### 1. Obter a chave de acesso (Access Key)

1. Acesse: https://web3forms.com
2. Clique em **"Get Started"** ou **"Create Access Key"**
3. Digite o email onde deseja receber as mensagens do formulário (ex: contato@scorpionstech.com.br)
4. Clique em **"Create Access Key"**
5. Copie a chave gerada (formato: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

#### 2. Configurar no projeto

1. Crie um arquivo `.env.local` na raiz do projeto (se ainda não existir)
2. Adicione a seguinte linha, substituindo pela sua chave:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=sua-chave-aqui
```

#### 3. Testar localmente

```bash
# Reinicie o servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:3000, vá até a seção de contato e teste o formulário!

#### 4. Deploy (Vercel/Netlify)

Adicione a variável de ambiente no painel de configuração:

**Vercel:**
- Settings → Environment Variables
- Nome: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Valor: sua chave do Web3Forms

**Netlify:**
- Site settings → Build & deploy → Environment
- Adicione a variável `NEXT_PUBLIC_WEB3FORMS_KEY`

## ✨ Recursos configurados

- ✅ Validação de campos obrigatórios
- ✅ Mensagens de sucesso e erro
- ✅ Botão desabilitado durante envio
- ✅ Limpeza automática do formulário após envio
- ✅ Fallback para WhatsApp em caso de erro
- ✅ Email com formatação organizada
- ✅ Subject personalizado com tipo de projeto

## 🎨 Personalização do email

Se quiser personalizar o template do email recebido, você pode:

1. Acessar o painel do Web3Forms
2. Configurar templates customizados
3. Adicionar auto-resposta para o cliente
4. Configurar integração com outras ferramentas (Slack, Discord, etc.)

## 🔒 Segurança

- A chave `NEXT_PUBLIC_WEB3FORMS_KEY` é segura para ser exposta no front-end
- Web3Forms possui proteção anti-spam nativa
- Validação de origem (CORS) configurada
- Rate limiting automático

## 📊 Limite gratuito

- **Ilimitado** envios por mês
- **Sem custo**
- Sem necessidade de cartão de crédito

## 🆘 Problemas?

Se o formulário não funcionar:

1. Verifique se a chave está correta no `.env.local`
2. Reinicie o servidor de desenvolvimento
3. Confirme se a chave foi adicionada no painel de deploy (Vercel/Netlify)
4. Verifique o console do navegador para mensagens de erro

---

**Alternativas (se preferir outro serviço):**

- **Formspree**: https://formspree.io (500 envios/mês grátis)
- **EmailJS**: https://emailjs.com (200 envios/mês grátis)
- **Resend**: https://resend.com (API moderna, 100 emails/dia grátis)
