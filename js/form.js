var adicionarbotao = document.querySelector("#adicionar-paciente")
// console.log(adicionarbotao)

adicionarbotao.addEventListener("click", function(event){
    event.preventDefault()
    

    var form = document.querySelector("#form-adiciona")
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form)
    
    //Criando a tr e td do paciente(tabela)
    var pacienteTr = montaTr(paciente)
    
    var erros = validaPaciente(paciente)

    if(erros.length > 0){
       exibeMensagensDeErro(erros)
        return
    }
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    form.reset()
})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    //appendChild serve para colocar pacienteTr como pai da tag td
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){

    var erros = []
    if(paciente.nome.length == 0){
        erros.push("peso é")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido")   
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalida")
    }
    return erros
}