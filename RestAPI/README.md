# API & REST API 
---

## 1️⃣ What is an API?

**API (Application Programming Interface)** is a set of rules that allows two software systems to communicate with each other. It defines how a client can request data or services and how the server responds, without exposing internal implementation.

**Example line (very interview-friendly):**
> "An API acts as a contract between client and server that enables communication between different software systems."

### 🌍 Real-world Analogy
Think of an API as a **waiter in a restaurant** 🍽️

1. **You (client)** order food
2. **The waiter (API)** takes your request
3. **Kitchen (server)** prepares it
4. **Waiter** brings the response back

**You never go into the kitchen — you only interact through the waiter.**

---

## 2️⃣ What is a REST API?

### Interview Answer
A **REST API (Representational State Transfer API)** is a type of API that follows REST architectural principles and uses HTTP methods to perform operations on resources.

It treats everything as a resource and communicates using standard HTTP methods like:

- **GET** – fetch data
- **POST** – create data
- **PUT / PATCH** – update data
- **DELETE** – remove data

**Interview line:**
> "A REST API is an API that follows REST principles and uses HTTP methods to perform CRUD operations on resources."

### 🌍 Real-world Analogy
REST API is like **online food delivery apps** 🍔📱

- `GET /menu` → view menu
- `POST /order` → place order
- `PUT /order/1` → update order
- `DELETE /order/1` → cancel order

**Each URL represents a resource, and HTTP methods define the action.**

---

## 3️⃣ Difference Between API and REST API

### Interview Ready Comparison

| Aspect | API | REST API |
|--------|-----|----------|
| **Definition** | A general communication interface | A specific type of API |
| **Protocol** | Can use any protocol | Uses HTTP |
| **Architecture** | No fixed rules | Follows REST principles |
| **Data Format** | JSON, XML, SOAP, etc. | Mostly JSON |
| **Usage** | Broad concept | Web-based APIs |

### 🔥 One-liner Difference (Interview Gold)
> **"All REST APIs are APIs, but not all APIs are REST APIs."**
