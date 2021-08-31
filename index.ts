import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();

// BODY PARSER FRM ENCODE
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());


/// IMPORTAR RUTAS DE APP
server.app.use('/user', userRoutes);




//CONECTAR DB
mongoose.connect('mongodb://localhost:27017/appcode', {

    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (err) throw err;
    console.log('Base de datos online!');

});

/// Levantar server
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);

})