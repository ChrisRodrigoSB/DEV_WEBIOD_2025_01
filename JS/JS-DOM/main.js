//window.setTimeout(mensagem, 2500)

function Mensagem(){
    alert("aprendendo dom com js")
    alert(Date())
}


let tagH1 = document.createElement("h1")

tagH1.innerHTML= 'Olá mundo, crie você'

document.body.appendChild(tagH1)