const fs= require("fs"); // file system 

// ------------------ WRITE OPERATION ---------------------
// synchronous file creation
fs.writeFileSync("./test.txt","Hello world");
// override previous content 
fs.writeFileSync("./test.txt","Hello world, I'm Node JS");

// asynchronous file creation
// asyn function expects a callback and have void return type
// ------------------ TYPE 1 ---------------------
fs.writeFile("./test.txt","Hello world async",(err)=>{});
// ------------------ TYPE 2 ---------------------
const data= "Hello world";
fs.writeFile("./test.txt",data,(err)=>{});   


// ------------------ READ OPERATION ---------------------
// synchronous file reading
const resSync= fs.readFileSync("./contact.txt","utf-8");
console.log(resSync);

// asynchronous file reading
// asynchronous doesn't return anything it is of void type
fs.readFile("./contact.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log(res);
    }
});


// ------------------ OTHER OPERATIONS ---------------------
console.log(fs.statSync("./test.txt"));
fs.mkdirSync("my-docs/a",{recursive:true});

/*
Node.js is a runtime environment that allows JavaScript to run outside the browser. 
It uses a single-threaded event loop with non-blocking I/O.
When a client sends a request, it is first handled by the main JavaScript thread.
If the operation is synchronous (blocking), it runs on the main thread and blocks the event loop. 
If the operation is asynchronous (non-blocking), it is delegated to the OS or libuv’s thread pool.
Once the async operation completes, its callback is placed in the event queue and executed by the event loop when the call stack is free.
*/

// Blocking 
console.log("1");
const read= fs.readFileSync("./contact.txt","utf-8");
console.log(read);
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("Hello");

// Non Blocking
console.log("1");
fs.readFile("./contact.txt","utf-8",(err,res)=>{
    if(err) console.log("error");
    else console.log(res);
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("Hello");
