# Node JS
Node js is an open-source, cross-platform, JavaScript runtime environment and library for running web applications outside the client browser.
Used for creating server side web applications.
Perfect for data-intensive applications as it uses an asynchronous, event driven model.
Node js is based on V8 engine, it is a virtual machine that utilizes JavaScript as its scripting language and acheives high output via non-blocking I/O and single threaded event loop. 
# where can we use Node Js?
Web Applications
Distributed Systems
Network applications.
General purpose applications

# Major Benefits in using Node JS?
Open Source
Simple and fast
Asynchronous
High Scalability
Single threaded
No buffering
Cross-platform

# why node js is single threaded? 
Node JS uses single threaded model inorder to support async processing. With async processing, an application can perform better and is more scalable under web loads. 

# Difference btwn front-end and backend development?
Frontend refers to the client-side of an application. Backend refers to the server-side of an application.
The part of the web application that users can see and interact with. It constitutes everthing that happens behind the scenes. 
Typically includes everything that attributes to the visual aspects of a web application. Generally includes a web server that communicates that communicates with a database to serve requests.
HTML, CSS, JS and Angular JS and React is used for front end.
Java, PHP, python and Node JS is used for back end.

# What is npm?
Node package manager. Its responsible for managing all the packages and modules for Node JS. 
# What are modules in Node JS?
Modules are like JS libraries that can be used in a Node JS application to include a set of functions.

# Why node js is preferred over other backend technologies like Java and PHP?
Node js is really fast.
Npm has over 50000 bundles for dev's disposal. 
perfect for data-intensive, real time web applications as Node Js never waits for an API to return data.

# diff between Angular and Node JS
Angular is for frontend. Node is Server side environment.
Angular is written in TypeScript. Whereas NodeJs is written in C,C++ and JS languages.
Used for building single-page clientside web applications. Used for building fast and scalable networking applications
Splits a web application to MVC components. Node JS generates database queries.
Angular is a framework where as Nodejs has many different frameworks like Expressjs 

# Most popular database used with Node JS
MongoDB
MySQL
# Most popular libraries used with Node JS
Express JS
mongoose

# Pros and Cons of Node JS
Fast processing and event based model
Not suitable for heavy computational tasks
Uses Javascript
using callback is complex,since you end up with many nested callbacks.
NPM has 50k packages that provide functionality to an application.
Dealing with relational databases is not a good option for node js
Best Suited for streaming huge amounts of data and I/O intensive operations whereas NodeJS is single-threaded, CPU intensive tasks is not its strong suit.

# what is the command used to import external libraries?
require

# what is event driven programming?
Event Driven programming approach uses events to trigger various functions. An event can be anything such as pressing of a key or clicking of a mouse button. A callback function already registered with the element is executed, whenever an event is triggered.
# What is Event loop in Node Js?
Asynchronous callbacks are handled by an eventloop in NodeJS. Its the foundation of the non-blocking input/output in Node js, making it one of the most important features of the environment. 
#  What is Event emitter in Node Js?
EventEmitter is a class which holds all the object that can emit events. Whenever an object from eventemitter throws an event, all the attached functions are called upon synchronously. 
# Two types of API functions in node JS
Asynchronous, non blocking functions
Synchronous, blocking functions
# what is package.json file?
heart of the node js system,
file holds all the metadata about a particular project.
is present in the root directory of any node application or module.

# what is express Js package? 
Express is a flexibile Node js web application framework which provides a wideset of features to develop both web and mobile applications.

# What are streams in Node JS?
Streams are objects that let you read or write data continuously.
There are four types of streams:
readable - streams from which data can be read
writable - streams to which data can be written
Duplex - both readable and writable streams
Transform - streams that can manipulate the data while its being read or written.

# How do you install, update and delete a dependency?
install dependency - npm install express
update dependency - npm update
uninstall dependency - npm uninstall express

# Create a simple server in node js that returns Hello world,
const http = require('http');
http.createServer(function(req,res){
 res.writeHead(200,{'content-Type':'text/plain'});
 res.end('hello world\n')
}).listen(8080,'127.0.0.1');
# Explain asynchronous and non-blocking API in node js?
All the API's of Node js library are asynchronous which means non-blocking.
Node Js based server never waits for an API to return data, instead it moves to the next Api after calling it, and a notification mechanism of Events of node js responds to the server for the previous API call. 

# what is callback in nodeJs?
A callback is a function called at the completion of a given task. and this prevents any blocking, and allows other code to be run in the mean time.

# What is REPL ?
REPL stands for Read, Eval, Print Loop and it represent a computer environment like windows console where a command is entered and a system responds with an output.
REPL performs the following tasks
Read - reads users input , parses the input into JS data-structures and stores in memory.
Eval - receives and evaluates the data structure
print - prints the result
Loop- loops the above command until user presses ctrl-c twice.

# list down the tasks which should be done asynchronously using the event loop
Input Output operations
Heavy computations
Blocking operations

# what is an error-first callback in Node JS?
first argument in the callback is reserved for the error callback

# Major security implemenatation in NodeJs
implement Authentication and Error Handling

# Explain Libuv
multi-platform support library of Node Js which majorly is used for asynchronous I/O.

# what is control flow functions?
control flow functions is a piece of code which runs in between several asynchronous function calls.

# How does control flow controls the function calls?
the control flow does the following jobs:
control the order of execution
collect data
limit concurrency
call the next step in a program.

# what is piping in Node JS?
Piping is a mechanism to connect output of one stream to another stream.
Its normally used to get data from one stream to pass output of that stream to another stream.

# what are some of the flags used in read/ write operation in files?
r - open file for reading.
r+ open file for reading and writing.
w- open file for writing 
w+ open file for reading and writing.
a - open file for appending.
a+ open file for reading and appending.

# What is callback hell?
Intensively nested , unreadable and unmanageable code, which inturn makes the code harder to read and debug.
caused by the improper implementation of the asynchronous logic.

# Exit codes in NodeJs
Set of specific codes which are used for finishing a specific process.
Uncaught fatal exception
Unused
Fatal error
internal exception handler run-time failure
internal jS evaluation failure.

# What is middleware?
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The functions performed by a middleware
Execute any type of code
update or modify the request and response objects
End the request-response cycle.
Call the next middleware in the stack.

# types of HTTP request
GET - the request used to retrieve the data.
POST - A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
HEAD - Same as GET, but transfers the status line and header section only.
DELETE - Removes all current representations of the target resource given by a URI.

# what is the use of NODE_ENV?
An environment variable that stands for node environment in express server. Its how we set and detect which environment we are in.

# Timing features in Node JS
setTimeout/clearTimeout
setInterval/ clearInterval

# What do you understand by ESLint ?
Opensource project,
good tools for searching certain bug classes,related to the scope of the variable scope.
# for node js, why google uses V8 engine?
it convert JS to native machine code.
speeds up application execution and response process and gives you a fast running application.

# difference between Node js and Ajax
Node is server-side technology
Ajax is client-side technology
Node is required to develop the server software that are typically executed by the servers instead of web browsers.
Ajax is required for updating or modifying the webpage contents without having to refresh it.\

# What are some HTTP status Codes?
1xx Informational
 100 Continue
2xx Success
 200 OK
 201 Created
 202 Accepted
3xx Redirection
 300 Multiple Choices
 301 Moved Permanently
 302 Found
4xx Client Error
  400 Bad Request
  401 Unauthorized
  402 Payment Required
5xx Server Error
  

# Name Some companies that use Node js
Linkedin
Netflix
Uber,
Nasa, ebay, paypal