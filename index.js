const express = require ('express');
const app = express ();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 3000;
const roomsRoutes = require ('./routes/roomsRoutes');
const clientsRoutes = require ('./routes/clientsRoutes');

//précise à mon api que je vais utiliser du JSON
app.use(express.json());

//précise à mon api que je vais utiliser des routes de mon fichier roomsRoutes.js
//ATTENTION: toutes les routes de roomsRoutes.js commencent par /rooms
app.use('/rooms', roomsRoutes);
app.use('/clients', clientsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//lanc mon serveur express
app.listen(port, () => {
    console.log(`Server is running on port htt://127.0.0.1:${port}`);
});

