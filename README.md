# bookstore
# AI Bookstore API

AI Bookstore is a full-stack e-commerce platform to buy books in AI/ML/Data Science books using Next.js 15, MongoDB, Clerk, Inngest, and Vercel. The backend provides RESTful API endpoints with JWT authentication, supporting endpoints for CRUD operations on books, users, orders, categories. Plus advanced features like pagination, search, sorting, and role-based access (user/seller).

## Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, React
- **Backend**: Next.js API Routes (Express.js-style), MongoDB/Mongoose
- **Auth**: JWT (user/seller roles)
- **Database**: MongoDB Atlas
- **Deployment**: Vercel
- **Documentation**: Swagger/OpenAPI
- **Testing**: Postman collections

## Live Demo
- **App**: https://ai-bookstore-wxlx-o52dptx57-asselaltayevas-projects.vercel.app

**Health Check**: `GET /api/health` returns `{"status": "OK"}`.

## Features
- REST endpoints (books, users, orders, auth, search)
- JWT auth with 2 roles (user: read/cart; admin: full CRUD)
- Pagination (`?page=1&limit=10`), search (`?q=deep learning`), sorting (`?sort=price:desc`)
- Input validation (Zod), error handling (custom middleware)
- Image uploads (GitHub raw/CDN), MongoDB transactions

## API Endpoints
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/books` | List books (paginated/searchable) | Optional |
| GET | `/api/books/{id}` | Get book details | Optional |
| POST | `/api/books` | Create book | Admin |
| PUT | `/api/books/{id}` | Update book | Admin |
| DELETE | `/api/books/{id}` | Delete book | Admin |
| POST | `/api/auth/register` | User signup | None |
| POST | `/api/auth/login` | JWT login | None |
| GET | `/api/orders` | User orders | User |
| POST | `/api/orders` | Create order | User |
| GET | `/api/health` | Server status | None |

## Local Setup
```bash
# Clone & install
git clone <your-repo-url>
cd ai-bookstore
npm install

# Run dev server
pnpm dev
```
- **Port**: 3000
- **MongoDB**: Update `MONGODB_URI` in `.env`
- **JWT_SECRET**: Generate via `openssl rand -base64 32`

## Deployment
Currently on Vercel. 

Built for practice and education-purpose only.
