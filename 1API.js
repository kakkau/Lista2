const express = require('express')
const app = express()


app.get('/estoque/:minima/:maxima', (req,res) => {

console.log(req.params)

let QEminima = req.params.minima
let QEmaxima = req.params.maxima
let resultado = (QEminima + QEmaxima)/2 

res.send(`Estoque medio: ${resultado}`)


})
app.use(express.json())

 app.post('/exercicio1', (req, res) => {
   console.log(req.body)
   const nota1 = req.body.nota1
   const nota2 = req.body.nota2
   const nota3 = req.body.nota3
   const nota4 = req.body.nota4

   const media = (nota1 + nota2 + nota3 + nota4) / 4

   const mensagem = media >= 7 ? "Aprovado" : "Reprovado"

   const resposta = {
       media,
       mensagem
   }
   res.json(resposta)
}) 

app.listen(3000, () =>{
    console.log("Api iniciando! Rodando em http://localhost:3000")})