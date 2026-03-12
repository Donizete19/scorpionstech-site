# 📱 Guia: Como Adicionar os APKs dos Apps

## ✅ Estrutura Atual

Os **Apps Admin e User** já estão configurados no site em **Apps em Ação**, mas **sem screenshots** (limpos).

Agora você pode adicionar os APKs de 3 formas:

---

## 🎯 Opção 1: Hospedar no GitHub Releases (RECOMENDADO)

### **Vantagens:**
- ✅ 100% gratuito
- ✅ Download rápido e confiável
- ✅ Controle de versões
- ✅ Estatísticas de downloads

### **Como fazer:**

1. **Acesse seu repositório no GitHub**
   - `https://github.com/SEU_USUARIO/scorpionstech-site`

2. **Vá em "Releases"** → **"Create a new release"**

3. **Preencha:**
   - Tag: `v1.0.0`
   - Title: `Apps Admin e User v1.0.0`
   - Description: Breve descrição dos apps

4. **Anexe os APKs:**
   - Arraste e solte os arquivos:
     - `scorpions-admin.apk`
     - `scorpions-user.apk`

5. **Publish release**

6. **Copie as URLs dos APKs:**
   - Clique com botão direito em cada APK → "Copiar endereço do link"
   - Você terá URLs tipo:
     ```
     https://github.com/SEU_USUARIO/scorpionstech-site/releases/download/v1.0.0/scorpions-admin.apk
     https://github.com/SEU_USUARIO/scorpionstech-site/releases/download/v1.0.0/scorpions-user.apk
     ```

7. **Adicione as URLs no código:**
   
   Abra: `components/AppShowcase.tsx`
   
   Encontre o App Admin e adicione a URL:
   ```typescript
   {
     id: 'admin-app',
     title: 'App Admin',
     // ...
     apkUrl: 'https://github.com/SEU_USUARIO/scorpionstech-site/releases/download/v1.0.0/scorpions-admin.apk',
     // ...
   }
   ```
   
   Faça o mesmo para o App User:
   ```typescript
   {
     id: 'user-app',
     title: 'App Usuário',
     // ...
     apkUrl: 'https://github.com/SEU_USUARIO/scorpionstech-site/releases/download/v1.0.0/scorpions-user.apk',
     // ...
   }
   ```

8. **Commit e push:**
   ```bash
   git add .
   git commit -m "Adicionar links dos APKs"
   git push
   ```

9. **Pronto!** Os botões "Baixar APK" aparecerão automaticamente nos cards dos apps! 🎉

---

## 🎯 Opção 2: Google Drive

### **Como fazer:**

1. **Faça upload dos APKs no Google Drive**

2. **Para cada APK:**
   - Clique com botão direito → "Compartilhar"
   - "Alterar" → "Qualquer pessoa com o link"
   - Copiar link (será algo como):
     ```
     https://drive.google.com/file/d/XXXXXXX/view
     ```

3. **Converta para link de download direto:**
   
   Substitua:
   ```
   https://drive.google.com/file/d/ARQUIVO_ID/view
   ```
   
   Por:
   ```
   https://drive.google.com/uc?export=download&id=ARQUIVO_ID
   ```

4. **Adicione no código** (mesmo processo da Opção 1, passo 7)

---

## 🎯 Opção 3: Pasta Public do Site

### **Vantagens:**
- ✅ Mesmo domínio do site
- ✅ Simples e direto

### **Desvantagens:**
- ⚠️ APKs ficam no repositório (aumenta tamanho)
- ⚠️ Pode deixar o site mais pesado

### **Como fazer:**

1. **Crie a pasta para os APKs:**
   ```bash
   mkdir public/apps
   ```

2. **Copie os APKs para lá:**
   - `public/apps/scorpions-admin.apk`
   - `public/apps/scorpions-user.apk`

3. **Adicione as URLs no código:**
   
   Abra: `components/AppShowcase.tsx`
   
   ```typescript
   {
     id: 'admin-app',
     title: 'App Admin',
     // ...
     apkUrl: '/apps/scorpions-admin.apk',
     // ...
   }
   ```
   
   ```typescript
   {
     id: 'user-app',
     title: 'App Usuário',
     // ...
     apkUrl: '/apps/scorpions-user.apk',
     // ...
   }
   ```

4. **Commit tudo:**
   ```bash
   git add .
   git commit -m "Adicionar APKs na pasta public"
   git push
   ```

---

## 📋 Próximos Passos (Opcional)

### **Adicionar Screenshots mais tarde:**

Quando quiser adicionar as telas dos apps, basta:

1. **Salvar screenshots na pasta:**
   ```
   public/screenshots/admin/
   public/screenshots/user/
   ```

2. **Adicionar no código:**
   ```typescript
   screenshots: [
     { 
       src: '/screenshots/admin/tela-login.png', 
       title: 'Tela de Login', 
       description: 'Login seguro para administradores' 
     },
     { 
       src: '/screenshots/admin/dashboard.png', 
       title: 'Dashboard', 
       description: 'Visão geral do sistema' 
     },
     // ... mais telas
   ]
   ```

3. **Commit e push** - o modal de demonstração funcionará automaticamente!

---

## 🎨 Personalizar Apps

### **Mudar cores:**

No `AppShowcase.tsx`, altere a propriedade `color`:

```typescript
color: 'from-purple-500 to-purple-700',  // Roxo
color: 'from-green-500 to-green-700',    // Verde
color: 'from-red-500 to-red-700',        // Vermelho
```

### **Adicionar mais funcionalidades:**

Adicione itens no array `features`:

```typescript
features: [
  'Painel de controle completo',
  'Gerenciamento de usuários',
  'Sua nova funcionalidade aqui!',
  // ...
],
```

---

## ✅ Resultado Final

Depois que adicionar os links dos APKs:

1. Os **2 cards (Admin e User)** aparecerão no site
2. Cada um terá um **botão "Baixar APK"** funcional
3. Clientes podem **baixar direto do site**
4. Quando adicionar screenshots, o botão **"Ver Funcionamento"** também aparece

---

## 🆘 Dúvidas?

Se precisar de ajuda, me pergunte sobre:
- Como criar releases no GitHub
- Como converter links do Google Drive
- Como adicionar screenshots
- Como personalizar cores e textos

**Desenvolvido por Scorpions Tech** 🦂⚡
