# 🛍️ Fullstack Product App

My first fullstack project — a complete **Product Management CRUD app** built with Python, FastAPI, and PostgreSQL, deployed live across three platforms.


<img width="1918" height="996" alt="Screenshot 2026-05-16 180818" src="https://github.com/user-attachments/assets/6f908e8b-e2c0-49d8-96eb-08b67f9c2538" />

---

## 🚀 Live Demo

| Layer | URL |
|-------|-----|
| 🌐 Frontend | [fullstack-product-app-rust.vercel.app](https://fullstack-product-app-rust.vercel.app) |
| ⚙️ Backend API | [fastapi-product-backend.onrender.com](https://fastapi-product-backend.onrender.com) |
| 🗄️ Database | Neon PostgreSQL (cloud-hosted) |

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | JavaScript, CSS, HTML (Vercel) |
| Backend | Python, FastAPI (Render) |
| Database | PostgreSQL via Neon + SQLAlchemy |
| ORM | SQLAlchemy |

---

## ✨ Features

- **View all products** — fetches live from the database
- **Add a product** — name, description, price, quantity
- **Update a product** — edit existing product details
- **Delete a product** — remove by ID
- Full **CORS** support between frontend and backend
- Database **auto-initializes** with seed data on startup

---

## 📁 Project Structure

```
fullstack-product-app/
│
├── main.py              # FastAPI app — all CRUD routes
├── models.py            # Pydantic models (request/response schemas)
├── database.py          # DB connection + SQLAlchemy engine
├── database_models.py   # SQLAlchemy ORM table definitions
├── requirements.txt     # Python dependencies
├── render.yaml          # Render deployment config
│
├── product-ui/          # ✅ Deployed frontend (Vercel)
├── frontend/            # Frontend source files
└── workings/            # UI screenshots & demo videos
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/products` | Get all products |
| `GET` | `/products/{id}` | Get product by ID |
| `POST` | `/products` | Add a new product |
| `PUT` | `/products/{id}` | Update a product |
| `DELETE` | `/products/{id}` | Delete a product |

---

## 🏃 Running Locally

### Backend

```bash
# Clone the repo
git clone https://github.com/jk-neha/fullstack-product-app.git
cd fullstack-product-app

# Install dependencies
pip install -r requirements.txt

# Set your environment variable
export DATABASE_URL=your_neon_postgres_url

# Start the server
uvicorn main:app --reload
```

API will be available at `http://localhost:8000`

### Frontend

```bash
cd product-ui
# Open index.html in your browser
# or serve with Live Server / any static server
```

---

## 📸 Demo

Screenshots and demo videos are in the `/workings` folder — showing the UI and all CRUD operations in action.

---

## 🌱 What I Learned

This being my **first fullstack project**, here's what I got hands-on with:

- Building a REST API with **FastAPI** and Python
- Connecting to a **cloud PostgreSQL** database using SQLAlchemy
- Deploying a backend on **Render** and a frontend on **Vercel**
- Handling **CORS** between separate frontend and backend deployments
- Using **Pydantic** for data validation
- Structuring a fullstack project end-to-end

---

## 👩‍💻 Author

**Neha* Vardhini J K* — [@jk-neha](https://github.com/jk-neha)
