# CRUD de Usuários - NestJS + Prisma

API REST de cadastro de usuários (CRUD) feita com **NestJS**, **Prisma ORM** e banco **PostgreSQL**, com validação de dados e documentação via **Swagger**.

## Tecnologias

- NestJS
- Prisma ORM
- PostgreSQL
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

# 2. Configurar o banco
#    Copie .env.example para .env e ajuste a DATABASE_URL com as
#    credenciais do seu PostgreSQL, ex:
#    postgresql://usuario:senha@localhost:5432/DBdev?schema=public

# 3. Gerar o client do Prisma e aplicar a migration
npx prisma generate
npx prisma migrate dev

# 4. Subir a aplicação
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

## Módulo Cinema

Além do CRUD de usuários, a API modela um sistema de cinema com as entidades
`Cinema`, `Sala`, `Filme`, `Sessao`, `Ingresso`, `Pedido` e `LancheCombo`.

| Recurso | Rota base | Destaques |
| ------- | --------- | --------- |
| Cinema | `/cinemas` | CRUD + cadastrar/remover Sala, Filme e Sessão |
| Sala | `/salas` | CRUD + `reservar-poltrona` + `capacidade` |
| Filme | `/filmes` | CRUD (gênero como enum) |
| Sessão | `/sessoes` | CRUD (referencia Filme, Sala e Cinema) |
| Ingresso | `/ingressos` | CRUD (referencia Sessão) |
| Pedido | `/pedidos` | CRUD + adicionar/remover Ingresso e Lanche |
| LancheCombo | `/lanche-combos` | CRUD |

Endpoints especiais:

| Método | Rota | Descrição |
| ------ | ---- | --------- |
| GET | `/salas/:id/capacidade` | Calcula a capacidade da sala a partir da matriz de poltronas |
| PATCH | `/salas/:id/reservar-poltrona` | Reserva uma poltrona (`fila`, `num`) |
| POST | `/cinemas/:id/salas` | Cadastra uma sala no cinema |
| POST | `/cinemas/:id/filmes` | Cadastra um filme no cinema |
| POST | `/cinemas/:id/sessoes` | Cadastra uma sessão no cinema |
| PATCH | `/pedidos/:id/adicionar-ingresso` | Adiciona um ingresso ao pedido |
| PATCH | `/pedidos/:id/adicionar-lanche` | Adiciona um lanche/combo ao pedido |

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
