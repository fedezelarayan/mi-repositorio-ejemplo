import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

const archivoOriginal = 'superheroes.txt';
const archivoNuevos = 'agregarSuperheroes.txt';

agregarSuperheroes(archivoOriginal, archivoNuevos);

const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);
