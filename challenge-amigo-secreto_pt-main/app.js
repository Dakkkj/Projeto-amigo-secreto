let amigos = []
let contagemamigos = 0
let qntamigos = 0

function quantidadeAmigos(){
    let mensagem = document.querySelector("h2")
    mensagem.innerHTML = "Digite a quantidade de amigos"
    qntamigos = Number(document.querySelector("input").value)
    return
}

function adicionarAmigo(){
    let nomeamigo = document.querySelector("input").value
    let mensagem = document.querySelector("h2")
    mensagem.innerHTML = `Você pode adicionar ${qntamigos}`
    
    if(nomeamigo !== ""){
        if(contagemamigos < 5){
            amigos.push(nomeamigo);
            contagemamigos++
            mensagem.innerHTML = `Amigo adicionado: ${nomeamigo}\nQuantidade de amigos adicionados: ${contagemamigos}`
            document.querySelector("input").value = "";
        } else {
            mensagem.innerHTML = `Você ja adicionou 5 amigos`
        }
    } else {
        mensagem.innerHTML = "Por favor, insira um nome."
    }
}

function sortearAmigo(){
    let mensagem = document.querySelector("h2")
    if(contagemamigos > 0){
        let indice = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[indice]
        mensagem.innerHTML = `Amigo sorteado: ${amigoSorteado}`
    } else {
        mensagem.innerHTML = `Nenhum amigo adicionado para sortear`
    }
}

console.log(amigos)