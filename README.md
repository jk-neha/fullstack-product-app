<div align="center">
  
<!-- Typing SVG Banner -->
[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=800&size=24&pause=1000&color=F7F7F7&width=435&lines=%F0%9F%9B%92+CRUD+PRODUCT+APPLICATION)](https://git.io/typing-svg)
<br/>
<img width="1536" height="1024" alt="ChatGPT Image May 18, 2026, 02_18_08 PM" src="https://github.com/user-attachments/assets/b8e49250-383f-4a42-bfcb-d3fae8996258" />


![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-00B4D8?style=for-the-badge)

<br/>



**[🚀 Live Demo](https://fullstack-product-app-rust.vercel.app) · [📸 Screenshots](#-results--screenshots) · [⚙️ Setup](#️-local-setup)**

</div>

---

## 📌 Overview

**Fullstack Product App** is a production-grade CRUD application built with a fully decoupled architecture — a **React** frontend, a **FastAPI** backend, and a **Neon PostgreSQL** cloud database. It demonstrates an end-to-end fullstack workflow: REST API design → database integration → frontend consumption → cloud deployment.

> Built as a postgraduate project to demonstrate real-world fullstack engineering: REST APIs, relational databases, CORS configuration, and multi-platform cloud deployment.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛒 **Create Products** | Add new products with name, description, price & quantity |
| 📋 **Read Products** | Fetch all products or retrieve a single product by ID |
| ✏️ **Update Products** | Edit existing product details via PUT endpoint |
| 🗑️ **Delete Products** | Remove products from the database |
| ⚡ **FastAPI Backend** | Auto-generated Swagger docs, async-ready, high performance |
| 🐘 **Neon PostgreSQL** | Serverless cloud database with persistent storage |
| 🌐 **React Frontend** | Clean, responsive UI deployed on Vercel |
| 🔒 **CORS Configured** | Secure cross-origin communication between frontend & backend |
| ☁️ **Fully Deployed** | Frontend → Vercel, Backend → Render, DB → Neon |

---

## 🖥️ Results & Screenshots

### 🖥️ User Interface
![Product App UI](workings/User_Interface_Screen.png)

### 🎬 CRUD Operations Demo
> ![Product App Demo](workings/CRUD_operations_carried_out.mp4)

---

## 🧱 System Architecture

```
React Frontend (Vercel)
        ↓  HTTP Requests (fetch/axios)
FastAPI Backend (Render)
        ↓  SQLAlchemy ORM
Neon PostgreSQL (Cloud DB)
```

---

## 🌐 Deployment

| Layer | Platform | URL |
|---|---|---|
| 🌐 **Frontend** | Vercel | [fullstack-product-app-rust.vercel.app](https://fullstack-product-app-rust.vercel.app) |
| ⚙️ **Backend API** | Render | [fastapi-product-backend.onrender.com](https://fastapi-product-backend.onrender.com) |
| 🗄️ **Database** | Neon PostgreSQL | Cloud-hosted (serverless) |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/products` | Retrieve all products |
| `GET` | `/products/{id}` | Retrieve product by ID |
| `POST` | `/products` | Create a new product |
| `PUT` | `/products/{id}` | Update an existing product |
| `DELETE` | `/products/{id}` | Delete a product |

> 📖 Full interactive API docs available at `/docs` (Swagger UI) on the backend URL.

---

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| **Frontend** | React, JavaScript, CSS |
| **Backend** | Python, FastAPI, SQLAlchemy, Pydantic |
| **Database** | PostgreSQL (Neon — serverless cloud) |
| **ORM** | SQLAlchemy + Alembic-ready models |
| **Deployment** | Vercel (frontend), Render (backend), Neon (DB) |

---

## 📁 Project Structure

```
fullstack-product-app/
│
├── main.py                  # FastAPI app — all CRUD routes
├── models.py                # Pydantic request/response schemas
├── database.py              # SQLAlchemy engine & session setup
├── database_models.py       # ORM table definitions
├── render.yaml              # Render deployment configuration
├── requirements.txt         # Python dependencies
│
├── frontend/                # React application source
│   └── ...                  # Components, pages, API calls
│
├── product-ui/              # Additional UI assets / build
│   └── ...
│
└── workings/                # Demo media
    ├── User_Interface_Screen.png
    └── CRUD_operations_carried_out.mp4
```

---

## ⚙️ Local Setup

**Prerequisites:** Python 3.9+, Node.js 16+, pip, npm

### Backend

```bash
# 1. Clone the repository
git clone https://github.com/jk-neha/fullstack-product-app.git
cd fullstack-product-app

# 2. Install Python dependencies
pip install -r requirements.txt

# 3. Set up your database URL
# Add DATABASE_URL to a .env file:
# DATABASE_URL=postgresql://user:password@host/dbname

# 4. Run the FastAPI server
uvicorn main:app --reload
```

API runs at **http://localhost:8000** · Swagger docs at **http://localhost:8000/docs**

### Frontend

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Frontend runs at **http://localhost:3000**

> ⚠️ Update the API base URL in your frontend config to point to `http://localhost:8000` for local development.

---

## 🚀 How It Works

```
1. FRONTEND  →  User interacts with React UI (view / add / edit / delete products)

2. API CALL  →  React sends HTTP request to FastAPI backend (with CORS headers)

3. BACKEND   →  FastAPI validates request via Pydantic models

4. DATABASE  →  SQLAlchemy ORM executes query on Neon PostgreSQL

5. RESPONSE  →  Data returned as JSON → rendered in the React UI
```

---

## 📦 Dependencies

```
fastapi
uvicorn
sqlalchemy
psycopg2-binary
pydantic
python-dotenv
```

See [`requirements.txt`](requirements.txt) for exact versions.

---

## 🔮 Future Enhancements

- [ ] User authentication (JWT / OAuth)
- [ ] Pagination & search for product listings
- [ ] Image upload support per product
- [ ] Admin dashboard with analytics
- [ ] Docker + CI/CD pipeline (GitHub Actions)
- [ ] Unit & integration tests (pytest + React Testing Library)

---

## 🔥 What Makes This Project Strong

✔ **True fullstack separation** — frontend, backend, and database on independent services  
✔ **Production deployment** — live on Vercel + Render + Neon, not just localhost  
✔ **Clean REST design** — all CRUD operations with proper HTTP verbs  
✔ **CORS handled correctly** — secure cross-origin setup for real-world deployment  
✔ **ORM-based persistence** — SQLAlchemy models, not raw SQL  
✔ **Auto-generated API docs** — Swagger UI out of the box with FastAPI  

---

## 👩‍💻 Author

**Neha Vardhini J K** · [@jk-neha](https://github.com/jk-neha)

*Postgraduate Project — Full-Stack Product Management Application*

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

<div align="center">

⭐ **Star this repo if you found it useful!**

![GitHub stars](https://img.shields.io/github/stars/jk-neha/fullstack-product-app?style=social)

</div>
