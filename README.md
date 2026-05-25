# Natyasree Dance & Music Academy

Full-stack website for Natyasree Dance & Music Academy using React, Node.js, Express, and MySQL.

## Features

- Responsive React frontend for programs, locations, teachers, exam affiliation, testimonials, and contact.
- Express REST API backed by MySQL.
- Inquiry form saves new student registrations to the database.
- Admin-friendly seed data for programs, class locations, teachers, affiliation, and testimonials.

## Project Structure

```text
client/     React + Vite frontend
server/     Node.js + Express + MySQL API
```

## Database Setup

1. Create a MySQL database user, or use an existing one.
2. Run the schema and seed scripts:

```bash
mysql -u root -p < server/database/schema.sql
mysql -u root -p natyasree_academy < server/database/seed.sql
```

3. Copy the server environment file:

```bash
cp server/.env.example server/.env
```

4. Update `server/.env` with your MySQL credentials.

## Install and Run

```bash
npm run install:all
npm run dev
```

Frontend: `http://localhost:5173`

Backend API: `http://localhost:5000/api`

## Useful Commands

```bash
npm run build
npm start
```
