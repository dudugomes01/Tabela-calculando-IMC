
var pacientes = document.querySelectorAll(".paciente")
var titulo = document.querySelector(".titulo")


for(var i = 0; i <pacientes.length; i++){

    var paciente = pacientes[i];

    var Tdpeso = paciente.querySelector(".info-peso")
    var peso = Tdpeso.textContent
    
    var Tdaltura = paciente.querySelector(".info-altura")
    var altura = Tdaltura.textContent
    
    var tdImc = paciente.querySelector(".info-imc")
    
    // var imc = peso / (altura * altura)
     
    var pesoEhValido = true;
    var altutaEhValida = true;
    
    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválido"
        altutaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if( altutaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }

}



