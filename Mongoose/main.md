# Mongoose - MongoDB Object Data Modeling (ODM)

## What is Mongoose?

Mongoose is a MongoDB object modeling library for Node.js. It provides a schema-based solution to model your application data and includes built-in type casting, validation, query building and business logic hooks.

## Why Use Mongoose?

While MongoDB is schema-less, Mongoose provides structure to your data through schemas, making your application more predictable and easier to maintain.

### Key Benefits:

- **Schema Definition**: Define the structure of your documents with ease
- **Type Casting**: Automatic type conversion for your data
- **Validation**: Built-in and custom validation rules
- **Middleware**: Pre and post hooks for document operations
- **Query Building**: Intuitive API for building complex queries
- **Population**: Reference documents in other collections easily

## Installation

```bash
npm install mongoose
```

## Basic Usage

### 1. Connecting to MongoDB

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));
```

### 2. Defining a Schema

A schema defines the structure of documents within a collection.

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

### 3. Creating a Model

Models are constructors compiled from schemas. They represent documents in MongoDB collections.

```javascript
const User = mongoose.model('User', userSchema);
```

## Schema Types

Mongoose supports various schema types:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

## Resources

- Data modelling: https://stackblitz.com/edit/expressjs-tcnvsgxj
