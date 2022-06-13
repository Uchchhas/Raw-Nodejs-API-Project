/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Shafiur Rahman
 * Date: 13/06/2022
 */

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// App Object - Module Scaffholding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
