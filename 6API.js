app.post("/pesoIdeal/:altura/:sexo", (req, res) => {
    console.log(req.params);
    let altura = Number(req.params.altura);
    let sexo = req.params.sexo;
    //let pesoIdealM = 62.1 * altura - 44.7;
    //let pesoIdealH = 72.7 * altura - 58;
    let pesoIdeal = null;
  
    if (sexo == "M" || sexo == "m" || sexo == "mulher" || sexo == "Mulher") {
      pesoIdeal = 62.1 * altura - 44.7;
    } else if (sexo == "H" || sexo == "h" || sexo == "homem" || sexo == "Homem") {
      pesoIdeal = 72.7 * altura - 58;
    }
  
    res.send(`O seu peso ideal é ${pesoIdeal.toFixed(1)}Kg`);
  });

  app.listen(3000, () =>{
    console.log("Api iniciando! Rodando em http://localhost:3000")})