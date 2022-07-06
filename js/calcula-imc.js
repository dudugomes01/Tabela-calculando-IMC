
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
     
    var pesoEhValido = validaPeso(peso); //true or false
    var altutaEhValida = validaAltura(altura);
    
    if (!pesoEhValido){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }
    if(!altutaEhValida){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválido"
        altutaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if( altutaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc 
    }

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }
}


 function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true
    }else {
        return false
    }
 }
function calculaImc(peso, altura){
    var imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2);
}
