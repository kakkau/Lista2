const express = require('express');
const app = express();

app.use(express.json());

app.post('/salario-reajustado', (req, res) => {
    const salarioAtual = req.body.salario;

    let salarioReajustado;
    if (salarioAtual <= 2000) {
        salarioReajustado = salarioAtual * 1.5; 
    } else {
        salarioReajustado = salarioAtual * 1.3; 
    }

    res.json({ salarioReajustado: salarioReajustado });
});

app.listen(3000, () =>{
    console.log("Api iniciando! Rodando em http://localhost:3000")})
