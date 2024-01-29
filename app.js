let numerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

iniciarJogo()

console.log(numeroSecreto)

function verificarChute() {
    let chute = document.querySelector(`input`).value

    if (chute.trim() === ``){
        alert(`Por favor, insira um número antes de chutar.`)
        return;
    }

    if (chute == numeroSecreto){
        exibirTexto(`h1`, `Parabéns, você conseguiu`)
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        exibirTexto(`p`, `Você acertou em ${tentativas} ${palavraTentativa}.`)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else if (chute > numeroSecreto) {
        exibirTexto(`h1`, `Tente um número menor`)
    } else{
        exibirTexto(`h1`, `Tente um número maior`)
        }
    limparCampo()
    if (chute.trim() !== '') {
        tentativas++;
    }
}

function limparCampo(){
    let chute = document.querySelector(`input`)
    chute.value = ``
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if(numerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido
    }
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function mensagemInicial(){
    exibirTexto(`h1`, `Jogo do número secreto`);
    exibirTexto(`p`, `Chute um número entre 1 e 10`);
}

function iniciarJogo() {
    mensagemInicial();
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    exibirTexto(`h1`, `Jogo do número secreto`);
    exibirTexto(`p`, `Chute um número entre 1 e 10`);
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
