
const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { cateto1, cateto2} = req.body;
    const hipotenusa = Calculadora.Hipotenusa(
        parseFloat(cateto1), parseFloat(cateto2));
    res.send(`A hipotenusa é ${hipotenusa}`);
});

module.exports = resultado;