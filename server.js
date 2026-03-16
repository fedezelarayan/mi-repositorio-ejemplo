import express from 'express';

const app = express();

const PORT = 4000;

app.get('/profile/:edad', (req, res) => {
    const edad = req.params.edad;
    console.log(`La edad ingresada es: ${edad}`);
    res.send(`Perfil del usuario con ${edad} años de edad`)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})