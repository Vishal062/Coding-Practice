## MongoDB. 


# Q1. Explain what is mongoDB?

>MongoDB is a open source document database that provides high performance, high availablity, and automatic scaling.

>The key feature are:
- Document oriented and NoSql database.
- support Aggregation
- Uses BSON format.
- Sharding(Helps in horizental Scaliblity).
- Supprt ad-hoc queries.
- Schema less.
- capped collection
- Indexing(Any field in mongoDb can be indexed)

# Q2. How many index does mongoDb create by default for a new collections.

> by default mongoDb createed the _id_collections for every collections.

# Q3. which are the most important feature of MongoDB?

- flexible data model in form of documents. 
- Agile and highly scalable database.
- Faster than traditional database.
- Expressive query languages.

## Why Use MongoDB?

- Document-oriented – Since MongoDB is a NoSQL type database, instead of having data in a relational type format, it stores the data in documents. This makes MongoDB very flexible and adaptable to real business world situation and requirements.

- Ad hoc queries – MongoDB supports searching by field, range queries, and regular expression searches. Queries can be made to return specific fields within documents.

- Indexing – Indexes can be created to improve the performance of searches within MongoDB. Any field in a MongoDB document can be indexed.

- Replication – MongoDB can provide high availability with replica sets. A replica set consists of two or more mongo DB instances. Each replica set member may act in the role of the primary or secondary replica at any time. The primary replica is the main server which interacts with the client and performs all the read/write 
operations. The Secondary replicas maintain a copy of the data of the primary using built-in replication. When a primary replica fails, the replica set automatically switches over to the secondary and then it becomes the primary server.

- Load balancing – MongoDB uses the concept of sharding to scale horizontally by splitting data across multiple MongoDB instances. MongoDB can run over multiple servers, balancing the load and/or duplicating data to keep the system up and running in case of hardware failure.

# Q4. What is replication in MongoDb?

>Replication is the process of synchronizing data across multiple server. replications provide redundancy and increase data availablity.with multiple copies of data on diffrent database servers, replication protects a database from the loss of a single server. replication also allow you to recover from hardware failure and service interruptions.

# Q5. What is BSON in MongoDB?

> BSON is a binary serialixation format used to store document and make remote procedure calls in mongoDB. BSON extends the json model to provide additional data types, ordered fields, and to be efficeint for encoding and decoding within diffrent language.

# Q6. What is NodeJs?

>It’s a runtime environment for running javascript code and not a framework.It uses V8 engine of chrome for running javascript. 

>Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server.


# Q7. Q.10 Our applications generally consists of 3 layers?

>View Layer :- Frontend of the application and as we are using React for all of the frontend needs hence we don't have a view layer in our express application but you can create views in express but out of scope for this course.


>Application Layer :- This is like the coordinator of the system and it takes in requests from the view layer and then delegates to different parts of the code and business layer to get different things, for e.g :- passing to validations, authentication and authorisation systems for check auth and validations, database models for getting the required data processing done and then finally deciding on how to format the output and then send the output to the view layer and generally are represented by controllers.


>Business Layer or Data Layer :- This is where the database activities happen and is the heart of the application and if represented in model files.


# Q8. How do you manage packages in your node.js project?

>It can be managed by a number of package installers and their configuration file accordingly. We can manage packages by npm install or yarn add and version and configuration file managed by package.json & package-lock.json.


# Q9. How is Node.js better than other frameworks most popularly used?

- Ample amount of libraries available 
- Also since we will use Javascript in both the frontend and backend the development will be much faster
- It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement


# Q6. Why is Node.js single-threaded?

>As Node.js follows Single-Threaded with Event Loop Model inspired by JavaScript Event-based model with JavaScript callback mechanism. So, node.js is single-threaded similar to JavaScript but not purely JavaScript code which implies things that are done asynchronously like network calls, file system tasks, DNS lookup, etc. 

>A Node.js application runs using the event loop. The event loop is what allows Node.js to perform non-blocking I/O operations. 

    - explains how Node.js can be asynchronous. 

    >The event loop, aka the main thread, allows running one thing at a time. Having said that, Node.js JavaScript code runs on a single thread.


# Q7. What is Ajax?

>Ajax is an acronym for Asynchronous Javascript and XML. It is used to communicate with the server without refreshing the web page and thus increasing the user experience and better performance.

# Q8. what is express Js?

>Express JS is a free open source web applications framework for NodeJs. It is used for designing and building web applications quickly and easily. since express is only requires javascript it becomes easier for programmers and developers to build any applications.

- Express JS is lightweight and helps to organize web applications on the server side into a more organized MVC architecture.

- ExpressJs provides a simple routing for request made by clients. It also provides a middleware that is responsible for making decision to give the correct response for the request made by the client.

## Why should you use Express.JS?

>without ExpressJs you have to write your own code to build a routing component which is a time consuming and tedious task.

# Q9. What are some distinctive features of Express?

>js can be used to design single-page, multi-page, and hybrid web applications and APIs.

- It allows setting up middleware to respond to HTTP/RESTful Requests.
- It defines a routing table to perform different HTTP operations (method and URL).
- It allows dynamically rendering HTML Pages based on passing arguments to templates.
- It provides high performance because of its ultra-fast I/O. It prepares a thin layer; therefore, the performance is adequate.
- Its MVC-like structure makes it organize the web application into MVC architecture.
- It provides good database support. It supports RDBMS as well as NoSQL databases.
- It is asynchronous and single-threaded.
- Its robust API makes routing easy.

# Q10. Why do we use Express.js?

>Express.js is an automatically prebuilt Node.js framework that facilitates us to create server-side web applications faster and smarter. The main reason for choosing Express is its simplicity, minimalism, flexibility, and scalability characteristics.

# Q11. Which are the arguments available to an Express JS route handler function?

- Req: the request object
- Res: the response object
- Next (optional): It is a function employed to pass management to one of the above route handlers.

# Q12. What is Middleware in Express.js? What are the different types of Middleware?

>Middleware is a function invoked by the Express routing layer before the final request handler.

Middleware functions are used to perform the following tasks:
- It is used to execute any code.
- It is also used to make changes to the request and the response objects.
- It is responsible for ending the request-response cycle.
- It can call the next middleware function in the stack.

## Type of Middleware
Following are the main types of Middleware:
- Application-level Middleware
- Router-level Middleware
- Error-handling Middleware
- Built-in Middleware
- Third-party Middleware


# Q13. Q12. Explain what is Mongoose?

>Mongoose is an Object Data Modeling or ODM library for MongoDB and Node. js. that manages relationships between data, provides schema validation and is used to translate between objects in code and the representation of those objects in MongoDB

# Q14.