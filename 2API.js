app.get('/salario', (req,res)=>{
    let salario = req.body.salario
    let reajuste = 0
    if(salario <= 1000){
    console.log(salario)
    
    reajuste = ((salario/100) * 30) + salario
    
    res.json(`Seu novo salario sera de R$${reajuste}`)
    }else{
    
    
    res.json("Você não tem direito ao beneficio, vai TRABALHAR!")    
    }
    
    
    })

    app.listen(3000, () =>{
        console.log("Api iniciando! Rodando em http://localhost:3000")})