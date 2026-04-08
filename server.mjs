import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroePorAtributoController, obtenerSuperheroeMayoresDe30Controller } from './controllers/superheroesController.mjs';


const app = express();
const PORT = 3005;

/* app.get('/superheroes', obtenerTodos) */
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
app.get('/superheroes/mayorA30', obtenerSuperheroeMayoresDe30Controller);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en ppuerto http://localhost:${PORT}}`);
})