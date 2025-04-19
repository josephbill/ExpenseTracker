const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const port = process.env.PORT || 3001;

// getting the absolute path for my client distribution file and serving the static file : npm run build 
server.use(express.static(path.join(__dirname, 'dist')));
// apply the default middlewares (CORS, Logging , No-cache)
server.use(middlewares);
// define the route of access for my api endpoints 
server.use('/api', router)
// catch all routes available 
server.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
// start the server 
server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}/api`);
    console.log(`JSON Server is running on http://localhost:${port}`);
})