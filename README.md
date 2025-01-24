Reserva BP - Sistema de Agendamentos Fullstack

Este é um sistema Fullstack de agendamentos que permite que clientes marquem horários com corretores de seguros. O projeto foi desenvolvido utilizando tecnologias modernas, com um backend robusto e um frontend intuitivo.

💠 Tecnologias Utilizadas

Backend:

Node.js com Fastify - Para criar um servidor rápido e eficiente.

MongoDB - Banco de dados NoSQL para armazenamento de informações.

Mongoose - Modelagem e validação de dados.

TypeScript - Para garantir a tipagem estática e maior robustez no código.

Frontend:

React com TypeScript - Para criar uma interface dinâmica e responsiva.

Axios - Para consumo da API no frontend.

React Router - Para navegação entre as páginas.

React Toastify - Para notificações visuais elegantes.

CSS com foco em design minimalista e moderno.

🚀 Funcionalidades

Backend

API RESTful com endpoints para gerenciamento de usuários e agendamentos.

Validação de Conflitos de Horários: Impede que dois clientes marquem com o mesmo corretor no mesmo horário.

Modelagem de Dados: Estrutura clara e validada para usuários e agendamentos.

Frontend

Interface Intuitiva: Páginas dedicadas para login, cadastro, agendamentos e dashboard.

Notificações Elegantes: Mensagens claras para erros, sucessos e validações.

Design Responsivo: Funciona perfeitamente em diversos tamanhos de tela.

📂 Estrutura do Projeto

reserva-bp/
├── reserva-bp-backend/   # Código do backend
│   ├── src/
│   │   ├── config/       # Configuração do banco de dados
│   │   ├── controllers/  # Lógica das rotas
│   │   ├── models/       # Modelos do Mongoose
│   │   ├── routes/       # Definições de rotas
│   │   └── server.ts     # Inicialização do servidor
│   ├── package.json
│   └── .env.example      # Exemplo de configuração de variáveis de ambiente
├── reserva-bp-frontend/  # Código do frontend
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas principais
│   │   ├── services/     # Configuração do Axios
│   │   ├── styles/       # Estilos
│   │   └── App.tsx       # Configuração de rotas
│   ├── package.json
│   └── public/           # Arquivos estáticos
└── README.md             # Documentação do projeto

💪 Como Rodar o Projeto

Pré-requisitos

Node.js (v18 ou superior)

MongoDB (local ou MongoDB Atlas)

Git

Passos

Clone o Repositório

git clone https://github.com/seu-usuario/reserva-bp.git
cd reserva-bp

Configurar o Backend

Acesse a pasta do backend:

cd reserva-bp-backend

Instale as dependências:

npm install

Configure o arquivo .env na raiz do backend:

PORT=5000
MONGO_URI=sua-string-de-conexao-mongodb

Inicie o servidor:

node dist/server.js

Configurar o Frontend

Acesse a pasta do frontend:

cd ../reserva-bp-frontend

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm start

Acesse o frontend em http://localhost:3000.

📅 Endpoints do Backend

Usuários

POST /api/users: Cria um novo usuário.

GET /api/users: Lista todos os usuários.

GET /api/users/:id: Retorna os dados de um usuário específico.

PUT /api/users/:id: Atualiza um usuário.

DELETE /api/users/:id: Remove um usuário.

Agendamentos

POST /api/appointments: Cria um novo agendamento.

GET /api/appointments: Lista todos os agendamentos.

DELETE /api/appointments/:id: Remove um agendamento.

