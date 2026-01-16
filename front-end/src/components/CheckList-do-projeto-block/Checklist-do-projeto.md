# 📋 Checklist do Blog com CRUD + Login Admin

## 🔧 Preparação
- [ ] Criar repositório no GitHub  
- [x] Configurar ambiente com Vite + Tailwind + Font Awesome  
- [ ] Instalar dependências do backend (Node.js + Prisma + MongoDB)  
- [ ] Definir estrutura de pastas (frontend, backend, docs)  

## 🎨 Frontend
- [ ] Criar layout base (header, footer, sidebar/painel admin)  
- [ ] Implementar página inicial com listagem de posts  
- [ ] Criar página de visualização de post individual  
- [ ] Criar formulário para newsletter (frontend apenas)  
- [ ] Estilizar com Tailwind (tema escuro, responsividade)  

## ⚙️ Backend
- [ ] Configurar conexão Prisma ↔ MongoDB  
- [ ] Criar modelo `Post` (title, content, author, createdAt)  
- [ ] Criar modelo `Admin` (email, passwordHash, role)  
- [ ] Implementar rotas CRUD para posts (`/posts`)  
- [ ] Implementar rotas de autenticação (`/auth/login`, `/auth/register`)  
- [ ] Middleware de autorização para rotas protegidas  

## 🖥️ Painel Administrativo
- [ ] Criar página de login para administrador  
- [ ] Criar dashboard com listagem de posts  
- [ ] Implementar botões de criar, editar e deletar posts  
- [ ] Proteger rotas com JWT (somente admin acessa)  

## 📬 Newsletter
- [ ] Criar modelo `Subscriber` (email, createdAt)  
- [ ] Implementar rota `/newsletter/subscribe`  
- [ ] Integrar com serviço de envio de e-mails (ex.: Nodemailer, SendGrid)  

## 📑 Documentação
- [ ] Criar documentação em Markdown (setup, rotas, uso)  
- [ ] Documentar API com Swagger/OpenAPI  
- [ ] Adicionar prints/screenshots no README do GitHub  

## 🚀 Deploy
- [ ] Deploy do frontend no Vercel  
- [ ] Deploy da API no Render  
- [ ] Configurar variáveis de ambiente (chaves JWT, conexão MongoDB)  
- [ ] Testar fluxo completo em produção (CRUD + login + newsletter)  