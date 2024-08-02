const caixaPrincipal = document.querySelector(".caixa-principal"); // Seleciona a caixa principal
const caixaPerguntas = document.querySelector(".caixa-perguntas"); // Seleciona a caixa de perguntas
const caixaAlternativas = document.querySelector(".caixa-alternativas"); // Seleciona a caixa de alternativas
const caixaResultado = document.querySelector(".caixa-resultado"); // Seleciona a caixa de resultado
const textoResultado = document.querySelector(".texto-resultado"); // Seleciona o elemento de texto do resultado

const perguntas = [ // Array de perguntas
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?", // Pergunta 1
        alternativas: [ // Array de alternativas
            {
                texto: "Isso é assustador!", // Alternativa 1
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. " // Resposta 1
            },
            {
                texto: "Isso é maravilhoso!", // Alternativa 2
                afirmacao: "Quis saber como usar IA no seu dia a dia." // Resposta 2
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?", // Pergunta 2
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", // Alternativa 1
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis." // Resposta 1
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", // Alternativa 2
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho." // Resposta 2
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?", // Pergunta 3
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", // Alternativa 1
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA." // Resposta 1
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.", // Alternativa 2
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética." // Resposta 2
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?", // Pergunta 4
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.", // Alternativa 1
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes." // Resposta 1
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.", // Alternativa 2
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!" // Resposta 2
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ", // Pergunta 5
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.", // Alternativa 1
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo." // Resposta 1
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.", // Alternativa 2
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. " // Resposta 2
            }
        ]
    },
];


let atual = 0; // Variável para armazenar o índice da pergunta atual
let perguntaAtual; // Variável para armazenar a pergunta atual
let historiaFinal = ""; // Variável para armazenar a história final

function mostraPergunta() { // Função para mostrar a pergunta atual
    if (atual >= perguntas.length) { // Verifica se chegou ao final das perguntas
        mostraResultado(); // Chama a função para mostrar o resultado final
        return; // Encerra a função
    }
    perguntaAtual = perguntas[atual]; // Atribui a pergunta atual ao objeto perguntaAtual
    caixaPerguntas.textContent = perguntaAtual.enunciado; // Define o texto da caixa de perguntas com o enunciado da pergunta atual
    caixaAlternativas.textContent = ""; // Limpa o conteúdo da caixa de alternativas
    mostraAlternativas(); // Chama a função para mostrar as alternativas da pergunta atual
}

function mostraAlternativas() { // Função para mostrar as alternativas da pergunta atual
    for (const alternativa of perguntaAtual.alternativas) { // Percorre as alternativas da pergunta atual
        const botaoAlternativas = document.createElement("button"); // Cria um botão para cada alternativa
        botaoAlternativas.textContent = alternativa.texto; // Define o texto do botão com a alternativa
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); // Adiciona um evento de clique ao botão
        caixaAlternativas.appendChild(botaoAlternativas); // Adiciona o botão à caixa de alternativas
    }
}

function respostaSelecionada(opcaoSelecionada) { // Função para lidar com a seleção de uma alternativa
    const afirmacoes = opcaoSelecionada.afirmacao; // Obtém as afirmações da alternativa selecionada
    historiaFinal += afirmacoes + " "; // Adiciona as afirmações à história final
    atual++; // Incrementa o índice da pergunta atual
    mostraPergunta(); // Chama a função para mostrar a próxima pergunta
}

function mostraResultado() { // Função para mostrar o resultado final
    caixaPerguntas.textContent = "Em 2049..."; // Define o texto da caixa de perguntas com o enunciado da pergunta atual
    textoResultado.textContent = historiaFinal; // Define o texto do resultado com a história final
    caixaAlternativas.textContent = ""; // Limpa o conteúdo da caixa de alternativas
}

mostraPergunta(); // Chama a função para mostrar a primeira pergunta