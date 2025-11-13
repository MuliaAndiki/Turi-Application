# 🌏 Turi — Setiap Tempat Punya Cerita

> **Peta Budaya Aceh & Indonesia Berbasis AI dan Komunitas**

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Bun](https://img.shields.io/badge/Bun.js-000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![Flask](https://img.shields.io/badge/Flask-fff?style=for-the-badge&logo=flask&logoColor=000)](https://flask.palletsprojects.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

## 🧭 Deskripsi

**Turi** adalah platform digital berbasis peta untuk mengenal dan melestarikan budaya Indonesia — dimulai dari Aceh.  
Pengguna dapat menelusuri tempat budaya, event lokal, hingga berinteraksi melalui komentar, voting, dan promosi.  
Didukung oleh **AI Chatbot (RAG)** untuk rekomendasi budaya dan event.

---

## ✨ Fitur Utama

| Kategori           | Fitur                                                               |
| ------------------ | ------------------------------------------------------------------- |
| 🔍 Eksplorasi      | Peta budaya interaktif menggunakan **OpenStreetMap + ReactLeaflet** |
| 🧠 AI Chatbot      | Rekomendasi budaya dengan **Retrieval-Augmented Generation (RAG)**  |
| 🏛️ Budaya & Tempat | Tambah tempat budaya (langsung tampil tanpa approval admin)         |
| 🎟️ Event           | Buat event budaya (melalui approval admin)                          |
| ⭐ Promosi         | Promosi berbayar (highlight / boost event & budaya)                 |
| 💬 Komunitas       | Komentar, Bookmark, Upvote/Downvote                                 |
| 🌐 Multi-Language  | Dukungan multi bahasa (i18n)                                        |
| 🔐 Autentikasi     | Login via Google, OTP, dan Email Verification                       |

---

## 🧩 Tech Stack

### Frontend

- **Next.js** + **ReactLeaflet**
- **TailwindCSS** + **ShadcnUI**
- **i18n multi-language**
- **Deployed on Vercel**

### Backend

- **Elysia (Bun.js)** — REST/GraphQL API
- **Python Flask** — AI Worker (embedding & RAG)
- **Prisma ORM** — Database layer
- **PostgreSQL + PostGIS**
- **Redis** — cache & session
- **Dockerized** for deployment

### AI Layer

- **RAG (Retrieval-Augmented Generation)** pipeline
- Model provider: **OpenRouter**, **Gemini**, **Groq**
- **Vector DB (Milvus / Pinecone)** for semantic retrieval

### External

- **OpenStreetMap / Mapbox** — Map tiles
- **Payment Gateway (Midtrans / Xendit)**
- **Object Storage (S3 / MinIO)**

---

## ⚙️ Setup Project (Local Development)

### 🔧 Prasyarat

Pastikan sudah menginstal:

- [Bun](https://bun.sh) ≥ 1.0
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Python 3.11+](https://www.python.org/)
- [Node.js 20+] (untuk Vercel local dev)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

---

### 🚀 1. Clone Repository

```bash
git clone https://github.com/yourusername/turi.git
cd turi
```

### 🚀 2. ENV EXAMPLE

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/turi"
REDIS_URL="redis://localhost:6379"
OPENROUTER_API_KEY="your_openrouter_key"
GEMINI_API_KEY="your_gemini_key"
GROQ_API_KEY="your_groq_key"
```

### 🚀 3. BUILD DOCKER

```bash
docker-compose up -d
```

### 🚀 4. Jalankan Frontend (Next.js)

```bash
cd frontend
bun install
bun dev
```

### 🚀 5. Jalankan AI Worker (Flask)

```bash
cd backend-ai
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

🧠 AI & RAG Integration

Konten budaya dan event diindeks ke database.
Dokumen diolah ke embedding (vector representation).
Saat user bertanya di chatbot, sistem mencari dokumen paling relevan dari vector DB.
Dokumen tersebut dikirim ke LLM (via OpenRouter / Gemini / Groq) untuk menghasilkan jawaban kontekstual.

📝 Lisensi

Proyek ini dilindungi di bawah lisensi MIT License.
Silakan digunakan, dikembangkan, dan dimodifikasi untuk tujuan pelestarian budaya digital.

❤️ Kontribusi
Kontribusi terbuka untuk semua:
Tambahkan data budaya lokal baru
Laporkan bug atau ide fitur di Issues
Dukung proyek dengan ⭐ star di GitHub!

---

### ⚡ Petunjuk:

1. Simpan file di root project kamu sebagai `README.md`.
2. GitHub otomatis merender badge, diagram Mermaid, dan tabel.
3. Kamu bisa ubah nama repo jadi `turi` atau `turi-culture-map` agar lebih profesional.

---

Mau sekalian saya bantu buatin juga:

- 📦 `docker-compose.yml` default (Postgres + Redis + Bun + Flask)  
  atau
- 🧠 README versi dokumentasi developer (API endpoint list + schema Prisma)
