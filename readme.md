## ECDSA Node

This project is a solution to the ECDSA project as part of the Alchemy Ethereum bootcamp. The project is a simple client/server application that allows users to transfer funds between different addresses. The server is a node.js application that uses express to handle requests. The client is a react application that uses vite to handle requests. 

The project uses public key cryptography in the following way:

- The user inputs their own private key (done this way for learning purposes only)
- The client application uses the private key to generate a public key
- If there is a fitting public key in the server, the server will execute the transfer and adjust balances
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
