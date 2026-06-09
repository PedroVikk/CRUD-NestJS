# CRUD de Usuários - NestJS + Prisma

API REST de cadastro de usuários (CRUD) feita com **NestJS**, **Prisma ORM** e banco **SQLite**, com validação de dados e documentação via **Swagger**.

## Tecnologias

- NestJS
- Prisma ORM
- SQLite
- class-validator / class-transformer
- Swagger (OpenAPI)

## Estrutura

```
src/
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts
└── main.ts
prisma/
└── schema.prisma
```

### Camadas

| Camada | Responsabilidade |
| ------ | ---------------- |
| DTO | Define a forma e as regras de validação do dado que entra. |
| Controller | Lida com as rotas HTTP e extrai parâmetros. |
| Service | Contém a regra de negócio e chama o Prisma. |
| Prisma | Realiza a comunicação direta com o banco. |

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Gerar o client do Prisma e aplicar a migration
npx prisma generate
npx prisma migrate dev

# 3. Subir a aplicação
npm run start:dev
```

A API sobe em `http://localhost:3000`.

## Documentação (Swagger)

Com a aplicação rodando, acesse:

```
http://localhost:3000/api
```

Lá é possível visualizar todos os endpoints e testá-los com o botão **Try it out**.

## Endpoints

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| POST | `/users` | Cria um novo usuário |
| GET | `/users` | Lista todos os usuários |
| GET | `/users/:id` | Busca um usuário pelo ID |
| PATCH | `/users/:id` | Atualiza um usuário |
| DELETE | `/users/:id` | Remove um usuário |

### Exemplo de corpo (POST /users)

```json
{
  "email": "joao@email.com",
  "name": "João Silva",
  "password": "senha123"
}
```

## Banco de dados

O modelo `User` está definido em `prisma/schema.prisma`:

| Campo | Tipo | Observação |
| ----- | ---- | ---------- |
| id | Int | Chave primária, autoincremento |
| email | String | Único |
| name | String? | Opcional |
| password | String | Mínimo de 6 caracteres |
| createdAt | DateTime | Preenchido automaticamente |
| updateAt | DateTime | Atualizado automaticamente |
