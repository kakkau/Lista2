app.get('/velocidade', (req, res)=>{
    console.log(req.body)
    let nome = req.body.nome
    let distancia = req.body.distancia; 
    let horas = req.body.horas; 
    let velocidade = distancia/horas
    
    
    
    res.json(`A velocidade media do piloto ${nome} é de ${velocidade}Km/h.`)
    })

    
    app.listen(3000, () =>{
        console.log("Api iniciando! Rodando em http://localhost:3000")})