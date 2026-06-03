# 🚀 Express Middleware Demo – Role Based Access System

A full-stack learning project demonstrating **Authentication, Validation, and Role-Based Authorization** using Express.js (backend) and React + Tailwind CSS (frontend).

---

📊 UI Preview
<img width="807" height="457" alt="download" src="https://github.com/user-attachments/assets/dde45a8b-1841-467a-adfc-f1da48a4b3d9" />
<img width="792" height="342" alt="download (1)" src="https://github.com/user-attachments/assets/40d82e47-6744-44f5-b8de-f2c702aabe88" />
---

## 🎯 Project Overview

This project demonstrates how middleware works in Express.js by implementing a complete request flow:

- Authentication Middleware
- Request Validation Middleware
- Role-Based Authorization (Student / Admin)
- Protected API Routes
- React Frontend Dashboard
- Dynamic Student Data Table

---

## 🔐 Authentication User (Mock)
Name: M Qasim Khan  
Role: student (default in system)
---

⚙️ Middleware Flow
Request → Authentication → Validation → Authorization → Response
📁 Project Structure
express-middleware-demo/
│
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
---

🔗 API Endpoints
👨‍🎓 Student Route
GET /api/students
---
🛑 Admin Route
GET /api/admin
---

🟦 Student Access
Authentication Passed
Validation Passed
Authorization Passed
Student data displayed in table format

🟥 Admin Access
Authentication Passed
Validation Passed
Authorization Failed
No table shown (access denied)

🖥️ Frontend Features
React + Tailwind CSS UI
Student & Admin action buttons
Dynamic API response handling
Conditional rendering of data table
Clean responsive dashboard
---

🧠 Key Concepts Learned
Express Middleware chaining
Authentication vs Authorization
Role-based access control (RBAC)
API integration with React
Conditional UI rendering

🚀 How to Run Project
Backend Setup
cd backend
npm install
npm run dev

Frontend Setup
cd frontend
npm install
npm run dev
---
🛠️ Tech Stack
Backend:
Node.js
Express.js

Frontend:
React.js
Tailwind CSS

⭐ Project Goal
This project is built for learning and understanding how real-world backend systems handle:
Secure authentication flow
Role-based access control
Middleware architecture
Frontend-backend communication
---
## 👨‍💻 Author
**M Qasim Khan**
