# 🚗 API FordEnter

Esta é uma API REST construída com **Node.js**, **TypeScript**, **Prisma ORM** e **SQLite**. Voltada para gerenciamento de veículos, usuários, dados de veículos, imagens de carrossel e informações do modelo de carro 'Ranger'. Esta API foi desenvolvida para servir os dados aos projetos desenvolidos no programa [FordEnter](https://www.ford.com.br/sobre-a-ford/ford-enter/) em parceria com o [SENAI-CIMATEC](https://www.senaicimatec.com.br).

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/       # Lógica de requisição e resposta
├── services/          # Lógica de negócio
├── routes/            # Rotas da aplicação
├── middlewares/       # Middlewares (auth, error handler)
├── prisma/            # Esquema Prisma e Seed
├── DB/                # Arquivo SQLite (.db)
├── utils/             # Funções auxiliares
├── app.ts             # Inicialização do servidor Express
└── server.ts          # Entry point da aplicação
```

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Nodemon](https://nodemon.io/) (para watch mode)
- **chalk**, **cors**

---

## 🛠 Endpoints Principais

- `/users` - CRUD de usuários
- `/vehicles` - CRUD de veículos
- `/vehiclesData` - CRUD de dados do veículo
- `/rangerinfos` - Informações sobre Rangers
- `/carouselimages` - Gerenciamento de imagens do carrossel

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/alvarento/api-fordenter.git
cd api-fordenter
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz com as variáveis:

```env
DATABASE_URL="file:./src/DB/database.db"
PORT="3000"
```

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/alvarento/api-fordenter.git
cd api-fordenter
```

2. Instale as dependências:

```bash
npm install
```

3. Gere o banco de dados SQLite com o Prisma (gera o banco de dados e popula com os dados iniciais):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Configure o ambiente

Crie um arquivo `.env` na raiz com as variáveis:

```env
DATABASE_URL="file:./src/DB/database.db"
PORT="3000"
```

5. Rode o projeto:

```bash
npm run dev
```

---

### 👤 Autor

Desenvolvido com 💙 e ☕ por **Álvaro Nascimento**

🔗 [Linkedin](https://linkedin.com/in/alvarento)
📧 alvarento@hotmail.com  

---