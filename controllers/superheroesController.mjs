import { obtenerSuperheroePorId, obtenerSuperheroesMayoresDe30, buscarSuperheroePorAtributo } from '../services/superheroeService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export function obtenerSuperheroePorIdController(req, res) {

   /*  console.log("params:", req.params);
    console.log("id:", req.params.id);
    console.log("tipo id:", typeof req.params.id); */

    const id = req.params.id;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if(superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    } else {
        res.status(404).send({ mensaje: 'Superheroe no encontrado.' });
    }
}

export function buscarSuperheroePorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = buscarSuperheroePorAtributo(atributo, valor);

    if(superheroes.length > 0 ) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo y valor." });
    }
}

export function obtenerSuperheroeMayoresDe30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}