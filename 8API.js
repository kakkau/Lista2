app.get("/aumento", (req, res) => {
    console.log(req.params);
    let salario = Number(req.body.salario);
    let codigoCargo = req.body.cargo;
    let diferença = null;
    let novoSalario = null;
  
    if (codigoCargo == "101") {
      novoSalario = (salario / 100) * 5 + salario;
      diferença = novoSalario - salario;
    } else if (codigoCargo == "102") {
      novoSalario = (salario / 100) * 7.5 + salario;
      diferença = novoSalario - salario;
    } else if (codigoCargo == "103") {
      novoSalario = (salario / 100) * 10 + salario;
      diferença = novoSalario - salario;
    } else {
      novoSalario = (salario / 100) * 15 + salario;
      diferença = novoSalario - salario;
    }
  
    res.json(
      `Salario antigo:R$${salario}/ Salario atual:R$${novoSalario} /Aumento:R$${diferença}`,
    );
  });

  app.listen(3000, () =>{
    console.log("Api iniciando! Rodando em http://localhost:3000")})