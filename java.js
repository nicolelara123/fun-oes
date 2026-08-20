// Variáveis globais do jogo
let numeroSecreto;
let tentativas;

// 🚀 Função para INICIAR ou REINICIAR o jogo
function iniciarJogo() {
    // Sorteia um número entre 1 e 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    // Reseta os valores da tela
    document.getElementById('entradaNumero').value = '';
    document.getElementById('mensagem').textContent = '';
    document.getElementById('mensagem').className = '';
    document.getElementById('botaoReiniciar').classList.add('escondido');

    // Libera os campos para jogar
    document.getElementById('entradaNumero').disabled = false;
    document.getElementById('botaoAdivinhar').disabled = false;
    document.getElementById('entradaNumero').focus();
}

// 🔍 Função para VERIFICAR o número digitado
function verificarPalpite() {
    // Pega o valor que o jogador digitou
    let palpite = parseInt(document.getElementById('entradaNumero').value);

    // ✅ Validação: verifica se é um número certo
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagemResultado("⚠️ Digite apenas números entre 1 e 100!", "aviso");
        document.getElementById('entradaNumero').value = '';
        return;
    }

    tentativas++;

    // ⚖️ Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
        mensagemResultado(`🎉 Parabéns! Você acertou! O número era ${numeroSecreto}. Feito em ${tentativas} tentativas!`, "acerto");
        fimDeJogo(); // Chama a função de finalizar
    } 
    else if (palpite > numeroSecreto) {
        mensagemResultado(`🔻 ${palpite} é muito ALTO! Tente um número menor.`, "erro-maior");
    } 
    else {
        mensagemResultado(`🔺 ${palpite} é muito BAIXO! Tente um número maior.`, "erro-menor");
    }

    // Limpa a caixa para próxima tentativa
    document.getElementById('entradaNumero').value = '';
}

// 💬 Função para MOSTRAR as mensagens na tela
function mensagemResultado(texto, classe) {
    let caixaMensagem = document.getElementById('mensagem');
    caixaMensagem.textContent = texto;
    caixaMensagem.className = classe;
}

// 🏁 Função para FINALIZAR o jogo quando acerta
function fimDeJogo() {
    document.getElementById('entradaNumero').disabled = true;
    document.getElementById('botaoAdivinhar').disabled = true;
    document.getElementById('botaoReiniciar').classList.remove('escondido');
}

// ==========================================
// ⚙️ Comandos para fazer o jogo funcionar:

// Inicia o jogo assim que abrir a página
iniciarJogo();

// Liga o botão "Adivinhar" à função
document.getElementById('botaoAdivinhar').addEventListener('click', verificarPalpite);

// Liga o botão "Jogar Novamente" à função
document.getElementById('botaoReiniciar').addEventListener('click', iniciarJogo);
