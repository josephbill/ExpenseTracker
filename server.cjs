const jsonServer = require('json-server');
const express = require('express')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const path = require('path');
const port = process.env.PORT || 3001;

// Serve static files from Vite build
server.use(express.static(path.join(__dirname, 'dist')));

server.use(middlewares);
server.use('/api', router); // API routes

// Handle React routing
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});