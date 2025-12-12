🧠 What Is Middleware? (Simple Definition)

A middleware is a function that sits between an incoming HTTP request
and the final route handler.

It can:

Read or modify req and res

End the response

Call next() to pass control to the next middleware

Call next(err) to send an error to the error handler

➡️ Think of middleware as reusable request-processing logic.

🔌 Middleware Flow Diagram Request → \[Middleware 1\] → \[Middleware 2\]
→ \[Route Handler\] → Response

If any middleware does not call next() or ends the response, the chain
stops.

🧩 Middleware Function Signatures Normal middleware: (req, res, next)
=\> { ... }

Error-handling middleware: (err, req, res, next) =\> { ... }

Example: function logger(req, res, next) { console.log(req.method,
req.url); next(); }

function errorHandler(err, req, res, next) { console.error(err);
res.status(500).json({ error: 'Something broke' }); }

🧭 Types of Middleware 1️⃣ Application-level

Runs for all routes (unless path-limited).

app.use(logger);

2️⃣ Router-level const router = express.Router();
router.use(authMiddleware);

3️⃣ Route-level app.get('/private', auth, (req,res) =\> res.send('ok'));

4️⃣ Built-in

express.json()

express.urlencoded()

express.static()

5️⃣ Third-party

cors

helmet

morgan

express-rate-limit

6️⃣ Error-handling

Placed at the end.

📏 Middleware Execution Order (VERY IMPORTANT)

Express runs middleware in the order you register it.

app.use(A) → app.use(B) → app.get('/route')

Order matters for:

body parsing

CORS

logging

authentication

error handlers

🚦 Path-Based Middleware app.use('/api', apiLogger); app.use('/static',
express.static('public'));

🧑‍💻 Common Middleware Examples 🔹 Logger app.use((req,res,next)=\>{
console.log(new Date().toISOString(), req.method, req.url); next(); });

🔹 Body Parser (built-in) app.use(express.json());

🔹 Auth Middleware (async-safe) async function auth(req, res, next) {
try { const token = req.headers.authorization?.split(" ")\[1\]; if
(!token) return res.status(401).send("No token");

Plain
textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol
BuffersPythonRRubySass (Sass)Sass
(Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`req.user = await verifyToken(token);  next();`

} catch (err) { next(err); } }

app.get('/me', auth, (req,res) =\> res.json(req.user));

🔹 Error Handler (must be last) app.use((err, req, res, next) =\> {
console.error(err.stack); res.status(err.status \|\| 500).json({ error:
err.message }); });

⚠️ Async Middleware Gotcha

Express (v4) does not automatically catch async errors.

Bad ❌:

app.use(async (req,res,next) =\> { throw new Error("Fail"); // Express
won't catch this });

Good ✅:

async function safe(req,res,next){ try { ... } catch(e){ next(e); } }

Or create a wrapper:

const wrap = fn =\> (req,res,next) =\> fn(req,res,next).catch(next);

🔄 Understanding next() Call Meaning next() continue to next middleware
next('route') skip route middlewares and go to next route definition
next(err) jump to error-handling middleware 🛑 When Middleware Should
END the Response

These do not call next():

express.static() after serving a file

auth that rejects:

return res.status(401).send("Unauthorized");

🧱 Real-World Uses of Middleware

Logging (morgan)

CORS

Security headers (helmet)

Request rate limiting

JWT authentication

Access control (roles)

Validation (Joi, express-validator)

File upload (multer)

API versioning

Request timing metrics

📊 Middleware Pipeline (Mermaid diagram)

GitHub renders this automatically.

flowchart LR A\[Incoming Request\] --\> B\[Middleware 1\] B --\>
C{next()?} C --\>\|yes\| D\[Middleware 2\] C --\>\|no\| X\[Response
Sent\] D --\> E{next()?} E --\>\|yes\| F\[Route Handler\] E --\>\|no\| X
F --\> X

🧪 Minimal Complete Example const express = require('express'); const
app = express();

// built-in parsers app.use(express.json());

// logging app.use((req,res,next) =\> { console.log(req.method,
req.url); next(); });

// simple auth for /private app.use('/private', (req,res,next) =\> { if
(req.headers.authorization === 'secret') return next();
res.status(401).send('Unauthorized'); });

app.get('/', (req,res) =\> res.send('Public')); app.get('/private',
(req,res) =\> res.send('Private area'));

// error handler last app.use((err,req,res,next) =\> {
console.error(err); res.status(500).send('Server error'); });

app.listen(3000, () =\> console.log("Server running"));

🧭 Best Practices

✔ Register body parsers before routes ✔ Keep middleware single-purpose ✔
Don't mutate req wildly (use clean names: req.user) ✔ Group routes using
router-level middleware ✔ Use one centralized error handler ✔ Use async
wrapper to catch errors ✔ Always put error-handling middleware at the
end ✔ Avoid CPU-heavy work inside middleware ✔ Log middleware order when
debugging

🛠 Debugging Middleware

If request hangs → some middleware didn't call next()

If response already sent → check res.headersSent

Add temporary logger middleware:

app.use((req,res,next) =\> { console.log("Hit"); next(); });

📦 When to Use Custom Middleware?

Use built-in or third-party for:

CORS

logging

security headers

compression

Use custom middleware for:

JWT authentication

Feature flags

Request metrics

Validation flows

API versioning logic
