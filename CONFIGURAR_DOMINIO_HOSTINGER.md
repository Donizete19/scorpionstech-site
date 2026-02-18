# 🌐 Guia Passo a Passo: Configurar scorpionstech.com.br na Vercel

## 📋 O que vamos fazer:
Conectar seu domínio Hostinger (`scorpionstech.com.br`) ao site hospedado na Vercel.

**Tempo estimado:** 10 minutos + aguardar propagação DNS (15min-48h)

---

## 🎯 PARTE 1: Configurar na Vercel (5 minutos)

### **Passo 1.1: Acessar Dashboard da Vercel**

1. Abra seu navegador
2. Acesse: https://vercel.com/login
3. Faça login com sua conta do GitHub
4. Você verá a lista dos seus projetos

**✅ Confirmação:** Você está vendo o dashboard com seus projetos?

---

### **Passo 1.2: Selecionar o Projeto**

1. Procure o projeto chamado **"scorpionstech-site"** (ou similar)
2. **Clique** no card do projeto
3. Você será levado para a página do projeto

**✅ Confirmação:** Você está vendo a página com "Production Deployment" e botões de configuração?

---

### **Passo 1.3: Acessar Configurações de Domínio**

1. No menu superior, clique na aba **"Settings"**
2. No menu lateral esquerdo, procure e clique em **"Domains"**
3. Você verá a lista de domínios (provavelmente só `scorpionstech-site.vercel.app`)

**✅ Confirmação:** Você está na página "Domains" com um campo de texto para adicionar novo domínio?

---

### **Passo 1.4: Adicionar o Domínio Principal**

1. No campo de texto, digite exatamente: `scorpionstech.com.br`
2. **Clique** no botão **"Add"**
3. A Vercel vai processar e mostrar uma mensagem

**⚠️ Importante:** A Vercel vai dizer que o domínio não está configurado ainda. Isso é normal!

**✅ Confirmação:** Você vê `scorpionstech.com.br` na lista com status "Invalid Configuration" ou similar?

---

### **Passo 1.5: Adicionar o Subdomínio WWW**

1. No mesmo campo de texto, digite: `www.scorpionstech.com.br`
2. **Clique** em **"Add"** novamente
3. Agora você deve ter 3 domínios na lista:
   - `scorpionstech-site.vercel.app` ✅
   - `scorpionstech.com.br` ⚠️
   - `www.scorpionstech.com.br` ⚠️

**✅ Confirmação:** Você vê os 3 domínios na lista?

---

### **Passo 1.6: Ver os Registros DNS Necessários**

1. Clique em `scorpionstech.com.br` (o que não tem www)
2. A Vercel vai mostrar instruções com os registros DNS
3. **Anote ou deixe essa aba aberta** - vamos precisar dessas informações

**📝 Você verá algo assim:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**✅ Confirmação:** Você está vendo os registros DNS que precisa configurar?

---

## 🔧 PARTE 2: Configurar no Hostinger (5 minutos)

Agora vamos configurar o DNS no Hostinger para apontar para a Vercel.

---

### **Passo 2.1: Acessar Painel do Hostinger**

1. Abra uma **nova aba** no navegador
2. Acesse: https://hpanel.hostinger.com
3. Faça login com seu email e senha do Hostinger
4. Você verá o painel principal (hPanel)

**✅ Confirmação:** Você está logado no painel do Hostinger?

---

### **Passo 2.2: Localizar seus Domínios**

1. No menu lateral esquerdo, procure por **"Domínios"** ou **"Domains"**
2. **Clique** em Domínios
3. Você verá a lista dos seus domínios registrados

**✅ Confirmação:** Você vê `scorpionstech.com.br` na lista?

---

### **Passo 2.3: Acessar Configurações DNS**

1. Encontre `scorpionstech.com.br` na lista
2. **Clique** nos 3 pontinhos (⋮) ao lado do domínio
3. Selecione **"DNS / Nameservers"** ou **"Gerenciar DNS"**
4. Você será levado para a página de gerenciamento de DNS

**✅ Confirmação:** Você está vendo uma lista de registros DNS (Type, Name, Points to, TTL)?

---

### **Passo 2.4: Remover Registros Antigos (IMPORTANTE)**

**⚠️ ATENÇÃO:** Precisamos remover os registros A e CNAME antigos que apontam para o Hostinger.

1. Procure por registros do tipo **A** com Name **@** ou vazio
2. Procure por registros do tipo **CNAME** com Name **www**
3. Para cada um encontrado:
   - **Clique** no ícone de **lixeira** 🗑️ ou **Delete** ao lado
   - Confirme a exclusão

**📝 Exemplo do que remover:**
```
Type: A | Name: @ | Points to: (qualquer IP do Hostinger)
Type: CNAME | Name: www | Points to: (qualquer coisa do Hostinger)
```

**✅ Confirmação:** Você removeu os registros A e CNAME antigos?

---

### **Passo 2.5: Adicionar Novo Registro A (Domínio Raiz)**

Agora vamos adicionar o registro que aponta para a Vercel.

1. Procure e **clique** no botão **"Add Record"** ou **"Adicionar Registro"**
2. Preencha os campos:

```
Type (Tipo): A
Name (Nome): @ 
   (ou deixe em branco se não tiver opção @)
Points to (Aponta para): 76.76.21.21
TTL: 3600 
   (ou deixe o padrão)
```

3. **Clique** em **"Add"** ou **"Salvar"**

**✅ Confirmação:** Você vê o novo registro A na lista?

---

### **Passo 2.6: Adicionar Novo Registro CNAME (WWW)**

Agora vamos adicionar o registro para o subdomínio www.

1. **Clique** em **"Add Record"** novamente
2. Preencha os campos:

```
Type (Tipo): CNAME
Name (Nome): www
Points to (Aponta para): cname.vercel-dns.com
TTL: 3600
   (ou deixe o padrão)
```

3. **Clique** em **"Add"** ou **"Salvar"**

**⚠️ IMPORTANTE:** 
- O valor deve ser exatamente `cname.vercel-dns.com`
- **NÃO** coloque ponto final no final
- **NÃO** coloque http:// ou https://

**✅ Confirmação:** Você vê o novo registro CNAME na lista?

---

### **Passo 2.7: Verificar Configuração Final**

Sua lista de registros DNS deve ter pelo menos:

```
Type: A     | Name: @   | Points to: 76.76.21.21
Type: CNAME | Name: www | Points to: cname.vercel-dns.com
```

Pode ter outros registros (MX para email, TXT, etc.) - deixe eles lá!

**✅ Confirmação:** Seus registros estão corretos conforme acima?

---

### **Passo 2.8: Salvar e Aplicar**

1. Se tiver um botão **"Save"** ou **"Apply Changes"**, clique nele
2. Aguarde a confirmação do Hostinger
3. Pronto! A configuração no Hostinger está completa

**✅ Confirmação:** Você viu mensagem de sucesso/confirmação?

---

## ⏱️ PARTE 3: Aguardar Propagação DNS

### **O que acontece agora?**

Os servidores DNS do mundo inteiro precisam atualizar as informações do seu domínio. Isso se chama "propagação DNS".

**Tempo de propagação:**
- ⚡ Rápido: 5-15 minutos
- 🕐 Normal: 1-2 horas  
- 🐌 Máximo: até 48 horas

**Na prática:** Geralmente funciona em 15-30 minutos.

---

### **Como verificar se está funcionando?**

**Método 1: Abrir no navegador (mais fácil)**

1. Aguarde 15 minutos
2. Abra uma aba anônima/privada no navegador
3. Acesse: `http://scorpionstech.com.br`
4. Se carregar o site da Vercel = **Funcionou!** 🎉

**Método 2: Verificar DNS (mais técnico)**

```bash
# No terminal, digite:
nslookup scorpionstech.com.br
```

Você deve ver: `76.76.21.21` na resposta.

---

## ✅ PARTE 4: Confirmar na Vercel

Depois que o DNS propagar:

1. Volte para a Vercel: https://vercel.com
2. Acesse seu projeto → **Settings** → **Domains**
3. Os domínios devem aparecer como:
   - `scorpionstech.com.br` ✅
   - `www.scorpionstech.com.br` ✅

4. A Vercel vai **automaticamente**:
   - ✅ Ativar HTTPS (certificado SSL)
   - ✅ Redirecionar www para domínio principal
   - ✅ Forçar HTTPS

---

## 🎉 PRONTO! Seu site está no ar!

Agora você pode acessar:
- ✅ `https://scorpionstech.com.br`
- ✅ `https://www.scorpionstech.com.br`
- ✅ `https://scorpionstech-site.vercel.app`

Todos vão mostrar o mesmo site, com HTTPS automático! 🔒

---

## ⚠️ Resolução de Problemas

### **Problema 1: Ainda mostra página do Hostinger**

**Solução:**
1. Aguarde mais tempo (pode demorar até 48h)
2. Limpe cache do navegador (Ctrl + Shift + Delete)
3. Teste em navegador anônimo
4. Verifique se os registros DNS estão corretos no Hostinger

---

### **Problema 2: Erro "Invalid Configuration" na Vercel**

**Solução:**
1. Aguarde propagação DNS (15-30 min)
2. Na Vercel, clique em "Refresh" ao lado do domínio
3. Verifique se os registros no Hostinger estão exatamente como indicado

---

### **Problema 3: Certificado SSL não ativa**

**Solução:**
1. Aguarde até 24h após DNS propagar
2. A Vercel ativa SSL automaticamente
3. Se não ativar, remova e adicione o domínio novamente na Vercel

---

### **Problema 4: www não funciona**

**Solução:**
1. Verifique se adicionou o registro CNAME no Hostinger
2. Verifique se adicionou `www.scorpionstech.com.br` na Vercel
3. Aguarde propagação DNS

---

## 📞 Precisa de Ajuda?

Se tiver algum erro ou dúvida em qualquer passo:

1. ✅ Tire print da tela onde travou
2. ✅ Anote a mensagem de erro exata
3. ✅ Me chame que eu ajudo!

---

## 📊 Checklist Final

Marque cada item conforme completar:

**Na Vercel:**
- [ ] Adicionei `scorpionstech.com.br`
- [ ] Adicionei `www.scorpionstech.com.br`
- [ ] Vi os registros DNS necessários

**No Hostinger:**
- [ ] Acessei Domínios → DNS
- [ ] Removi registros A antigos
- [ ] Removi registros CNAME antigos  
- [ ] Adicionei registro A: 76.76.21.21
- [ ] Adicionei registro CNAME: cname.vercel-dns.com
- [ ] Salvei as alterações

**Verificação:**
- [ ] Aguardei pelo menos 15 minutos
- [ ] Testei http://scorpionstech.com.br
- [ ] Testei http://www.scorpionstech.com.br
- [ ] HTTPS está funcionando (🔒)
- [ ] Domínios estão ✅ na Vercel

---

**Desenvolvido por Scorpions Tech** 🦂⚡

---

## 🚀 Comece Agora!

Está pronto? Vamos começar pela **PARTE 1: Configurar na Vercel**.

Me avise quando concluir cada parte e eu te guio para a próxima! 💪
