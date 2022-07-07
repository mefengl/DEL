#!/usr/bin/env node

const server = require('fastify')();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8000;
const Recipe = require('./recipe.js');

server.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
})
server.get('/recipes/:id', async (request, reply) => {
  const recipe = new Recipe(request.params.id);
  await recipe.hydrate();
  return recipe;
})

server.listen(PORT, HOST, (err, address) => {
  console.log(`server listening on ${HOST}`);
})
