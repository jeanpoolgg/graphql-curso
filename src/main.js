import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { readFileSync } from 'fs'; // Importa el módulo fs

// Lee el contenido del archivo schema.graphql
const typeDefs = readFileSync('./src/schema.graphql', 'utf-8');

const resolvers = {
    Query: {
        hello: () => 'Hello world',
    },
};

// Crear un esquema ejecutable
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Crear una instancia de Yoga con el esquema
const yoga = createYoga({ schema });

// Crear un servidor HTTP
const server = createServer(yoga);

// Iniciar el servidor en el puerto 4000
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
