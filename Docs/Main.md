# How Everything Connects

## Request Flow Architecture

```
CLIENT REQUEST
      ↓
┌─────────────────────────────────────────────────────────────┐
│                        EXPRESS APP                          │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         GLOBAL MIDDLEWARES (Applied First)           │  │
│  │  • express.json() - Parse JSON body                  │  │
│  │  • express.urlencoded() - Parse form data            │  │
│  │  • cors() - Handle cross-origin requests             │  │
│  │  • morgan() - Logging                                │  │
│  └──────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    ROUTES                            │  │
│  │  • Map URL paths to handlers                         │  │
│  │  • Define HTTP methods (GET, POST, PUT, DELETE)      │  │
│  │  • Apply route-specific middleware                   │  │
│  │  • Connect to controllers                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         ROUTE-SPECIFIC MIDDLEWARES                   │  │
│  │  • Authentication (protect)                          │  │
│  │  • Authorization (authorize)                         │  │
│  │  • Validation (validateUser)                         │  │
│  │  • File Upload (multer.single/array)                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  CONTROLLERS                         │  │
│  │  • Handle business logic                             │  │
│  │  • Process request data                              │  │
│  │  • Interact with database/models                     │  │
│  │  • Send responses                                    │  │
│  └──────────────────────────────────────────────────────┘  │
│                          ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            ERROR HANDLING MIDDLEWARE                 │  │
│  │  • Catch errors from any layer                       │  │
│  │  • Format error responses                            │  │
│  │  • Log errors                                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
      ↓
CLIENT RESPONSE
```

## Summary of Connections

1. **Routes define endpoints** and act as the entry point
2. **Middlewares process requests** before reaching controllers
3. **Multer is a specific middleware** for file uploads
4. **Controllers contain business logic** and send responses
5. **All components work in a pipeline**, each enhancing the request object

The flow is **linear and sequential**: Request → Global Middleware → Route → Route Middlewares → Controller → Response
