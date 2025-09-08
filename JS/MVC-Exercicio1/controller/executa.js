
const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { altura, comprimento, largura} = req.body;
    const volume = Calculadora.Volume(
        parseFloat(altura), parseFloat(comprimento), parseFloat(largura));
    res.redirect(`/resultado.html?volume=${volume}`);
});

module.exports = resultado;