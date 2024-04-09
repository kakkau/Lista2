app.get('/vendedor', (req, res)=>{

    // QUERY PARAM /pessoa?nome=gustavo&idade=20
    let nome = req.query.nome 
    let salario = Number(req.query.salario) 
    let vendas = Number(req.query.vendas) 
    let percentual = Number(req.query.percentual) 
    let resultado = ((vendas/100) * percentual) + salario; 
    console.log(req.query)
    
    res.json(`Salario do ${nome} é de R$${resultado} `)
     
    
    })

    app.listen(3000, () =>{
        console.log("Api iniciando! Rodando em http://localhost:3000")})