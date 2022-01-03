- #                      Some Server related concepts
- DNS :- Domain Name Server Every computer and server has a unique IP so if we want to reach facebook.com then we basically have to reach the server that is hosting it and basically need to call that IP but remembering IP addresses which look like 157.240.0.35 is difficult and not practical so WWW decided to have DNS where these ips will get a name and then when you enter the name it will redirect to the server using the ip address that is mapped.

- Ports :- Ports are logical doors on a server and every action on every port is answered by some process if the port is mapped with some process ( process => program ) so if we are running a node application on port 8000 then if we hit http://localhost:8000 then this request will come to port 8000 on our computer and as we mapped node to listen to it so our node application will respond

- Headers :- Headers are something similar to metadata and headers are present on request and response and if we send request headers then server uses that for some configuration for e.g :- Accept: 'application/json' request header tells server that client is expecting response in json format similarly Content-Type: 'application/json' request header tells the server that request is in json format. Origin :- Origin is basically the entire request address and consists of 3 main parts

- Scheme :- protocol for e.g :- http, https, mongodb etc.

- Host :- domain name for e.g :- google.com, facebook.com

- Port :- the port on which the request to hit the server on and this will define who answers the request

- CORS :- Cross Origin Resource Sharing Browsers will not allow request from different origin to get response from a server on a different origin for e.g :- browser will not allow request from localhost:3000 to get response from server on localhost:8000 so browser will send a request (options request ) to the server and if it receives a header from the server that it can accept requests from localhost:3000 only then browser will send actual request to the server

- Status Codes :- status codes basically represent the eventual outcome of the requests and these can be configured from backend and you should pass the correct status code back to frontend in the response so that it can be handled efficiently. Status code documentation link :- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

- REST :- Representational State Transfer basically there are different ways in which server and client can communicate with each other

- SOAP :- on old standard which is rarely used these days

- REST :- Rest has some ways to interact with backend so for e.g :-

get => this is used when we want to get some data from the server
post => when we want to save some new data on the server
put / patch => when we want to update some existing resource on the server
delete => when we want to delete an existing resource on the server
GraphQL :- this has only 1 endpoint which is generally a post request to /graphql and then the body of this request is then parsed and we work on it..