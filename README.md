# Reserva BP - Sistema de Agendamentos Fullstack

Este é um sistema **Fullstack** de agendamentos que permite que clientes marquem horários com corretores de seguros. O projeto foi desenvolvido utilizando tecnologias modernas, com um backend robusto e um frontend intuitivo.

---

## 💠 Tecnologias Utilizadas

### Backend
- **Node.js** com **Fastify** - Para criar um servidor rápido e eficiente.
- **MongoDB** - Banco de dados NoSQL para armazenamento de informações.
- **Mongoose** - Modelagem e validação de dados.
- **TypeScript** - Para garantir a tipagem estática e maior robustez no código.

### Frontend
- **React** com **TypeScript** - Para criar uma interface dinâmica e responsiva.
- **Axios** - Para consumo da API no frontend.
- **React Router** - Para navegação entre as páginas.
- **React Toastify** - Para notificações visuais elegantes.
- **CSS** - Foco em design minimalista e moderno.

---

## 🚀 Funcionalidades

### Backend
- **API RESTful** com endpoints para gerenciamento de usuários e agendamentos.
- **Validação de Conflitos de Horários**: Impede que dois clientes marquem com o mesmo corretor no mesmo horário.
- **Modelagem de Dados**: Estrutura clara e validada para usuários e agendamentos.

### Frontend
- **Interface Intuitiva**: Páginas dedicadas para login, cadastro, agendamentos e dashboard.
- **Notificações Elegantes**: Mensagens claras para erros, sucessos e validações.
- **Design Responsivo**: Funciona perfeitamente em diversos tamanhos de tela.

---

## 💪 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v18 ou superior)
- MongoDB (local ou MongoDB Atlas)
- Git

### Passos

#### Clone o Repositório
```bash
git clone https://github.com/seu-usuario/reserva-bp.git
cd reserva-bp
cd reserva-bp-backend
```
### Configurar o Backend:

Acesse a pasta do backend:

```bash
cd reserva-bp-backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo .env na raiz do backend:
```bash
PORT=5000
MONGO_URI=sua-string-de-conexao-mongodb
```

Inicie o servidor::
```bash
node dist/server.js
```

### Configurar o Frontend:

Acesse a pasta do frontend:
```bash
cd ../reserva-bp-frontend
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm start
```
Acesse o frontend em:
```bash
http://localhost:3000
```

---

### 📅 Endpoints do Backend

### Usuários

POST /api/users: Cria um novo usuário.
GET /api/users: Lista todos os usuários.
GET /api/users/:id: Retorna os dados de um usuário específico.
PUT /api/users/:id: Atualiza um usuário.
DELETE /api/users/:id: Remove um usuário.

### Agendamentos

POST /api/appointments: Cria um novo agendamento.
GET /api/appointments: Lista todos os agendamentos.
DELETE /api/appointments/:id: Remove um agendamento.

