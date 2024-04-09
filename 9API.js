app.post("/salarioReceber", (req, res) => {
    console.log(req.body);

    let = salarioMinimo = Number(req.body.salario);
    let = horasTrabalhadas = Number(req.body.horas_trabalhadas);
    let = dependentes = Number(req.body.dependentes);
    let = horasExtras = Number(req.body.horas_extras);
  
    let valorHoraTrabalhada = salarioMinimo / 5;
    let salarioMes = (salarioMinimo / 5) * horasTrabalhadas;
    let extraDependente = dependentes * 32;
    let extraHora = ((((salarioMinimo / 5) / 100) * 50) + (salarioMinimo / 5)) * horasExtras;
    let salarioBruto = salarioMes + extraDependente + extraHora; 
    let salarioLiquido = null;
    let salarioReceber = null; 
 

 if(salarioBruto >= 2000 && salarioBruto <= 5000){

 salarioLiquido = salarioBruto - ((salarioBruto/100)* 10 )  ; 



 } else if(salarioBruto > 5000){ 

    salarioLiquido = salarioBruto - ((salarioBruto/100)* 20 ) ; 

 } else{

salarioLiquido = salarioBruto; 

 }
      

if(salarioLiquido <= 3500){ 

salarioReceber = salarioLiquido + 1000;

}else{ 

    salarioReceber = salarioLiquido + 500;
}


res.json(`Seu salario será de R$${salarioReceber}`)


  });
  
  app.listen(3000, () =>{
    console.log("Api iniciando! Rodando em http://localhost:3000")})