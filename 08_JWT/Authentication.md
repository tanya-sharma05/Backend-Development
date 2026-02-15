# 🔐 Authentication : Stateful vs Stateless
---

## 📌 What is Authentication?

Authentication is the process of **verifying the identity of a user**.
In web applications, authentication ensures that only valid users can access protected resources.

---

## 🧠 Types of Authentication

Authentication can be implemented in two primary ways:

- **Stateful Authentication** (Session-based)
- **Stateless Authentication** (Token-based)

---

## 🔐 Stateful Authentication

### 📖 Definition

Stateful authentication is a mechanism where the **server maintains the user's session state** after login.

### ⚙️ How It Works

1. User logs in with credentials
2. Server creates a **session**
3. Session data is stored on the server (memory/database/Redis)
4. Client stores only a **session ID** (usually in cookies)
5. On every request, the session ID is sent to the server
6. Server validates the session

### 🧩 Common Technologies

- Cookies
- Server-side sessions
- Express-session (Node.js)

---

## 🔓 Stateless Authentication

### 📖 Definition

Stateless authentication is a mechanism where the **server does not store any session information**. All necessary information is contained within the token itself.

### ⚙️ How It Works

1. User logs in with credentials
2. Server generates a **token (JWT)**
3. Token is sent to the client
4. Client sends the token with every request (usually in Authorization header)
5. Server only **verifies the token**, no data is stored

### 🧩 Common Technologies

- JWT (JSON Web Token)
- OAuth 2.0
- Authorization headers
- Bearer tokens

---

## 🔍 Key Differences

| Feature | Stateful | Stateless |
|---------|----------|-----------|
| **Server stores data** | Yes | No |
| **Session management** | Required | Not required |
| **Scalability** | Lower | High |
| **Token/session revocation** | Easy | Difficult |
| **Server memory usage** | Higher | Lower |
| **Common usage** | Web apps | APIs & mobile apps |
| **Load balancing** | Requires sticky sessions | Simple |
| **Cross-domain support** | Limited | Excellent |

---

## 🎯 Which One Should You Use?

### Use **Stateful Authentication** for:

- Server-rendered applications
- Applications needing strict session control
- Scenarios requiring instant session revocation
- Traditional web applications with server-side rendering

### Use **Stateless Authentication** for:

- REST APIs
- Distributed systems
- Mobile and frontend-heavy apps
- Microservices architecture
- Cross-domain authentication
