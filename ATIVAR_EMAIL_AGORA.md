# ⚡ Ativar Email em 2 Minutos

## 📋 Checklist Rápido

### ✅ Passo 1: Obter a chave (1 minuto)

1. **Abra:** https://web3forms.com
2. **Encontre** o campo "Enter your email"
3. **Digite** seu email pessoal (Gmail, Outlook, etc.)
4. **Clique** em "Create Access Key" (botão azul)
5. **Copie** a chave que aparece (ex: `abc12345-6789-...`)

---

### ✅ Passo 2: Configurar na Vercel (1 minuto)

1. **Acesse:** https://vercel.com/dashboard
2. **Clique** no projeto: `scorpionstech_site`
3. **Vá em:** Settings (no topo)
4. **Clique em:** Environment Variables (menu lateral)
5. **Clique em:** Add New
6. **Preencha:**
   - Key: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: `cole-a-chave-aqui`
   - Environment: Production, Preview, Development (marcar todos)
7. **Clique** em: Save

---

### ✅ Passo 3: Redeploy (30 segundos)

**Opção A - No VS Code:**
```bash
git add .
git commit -m "config: ativar email"
git push
```

**Opção B - Na Vercel:**
- Deployments → Três pontinhos do último deploy → Redeploy

---

### ✅ Passo 4: Testar

1. Acesse seu site: `scorpionstech.com.br`
2. Vá na seção "Vamos Conversar"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique seu email! 📧

---

## 🎉 Pronto!

Os contatos do site agora chegam direto no seu email!

---

## 🆘 Problemas?

### Erro: "Variável não encontrada"
- Certifique-se que escreveu exatamente: `NEXT_PUBLIC_WEB3FORMS_KEY`
- Marcou todas as environments (Production, Preview, Development)

### Não recebeu email de teste?
- Verifique a caixa de spam
- Aguarde 1-2 minutos
- Teste novamente

### Formulário abre app de email?
- Significa que a chave ainda não está configurada
- Refaça o Passo 2 e Passo 3

---

## 📱 Links Úteis

- **Web3Forms:** https://web3forms.com
- **Seus Deployments:** https://vercel.com/dashboard
- **Ver variáveis configuradas:** Vercel → Settings → Environment Variables

---

**Tempo total:** 2-3 minutos
**Custo:** R$ 0,00
**Emails:** Ilimitados
