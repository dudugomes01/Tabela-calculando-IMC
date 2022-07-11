var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "http://api-paci11111entes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")

        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            console.log(xhr.status)
            erroAjax.classList.remove("invisivel");
        }
        
    })
    xhr.send()
})