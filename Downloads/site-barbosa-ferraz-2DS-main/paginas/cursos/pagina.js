/*
  JavaScript da página Cursos
  Equipe: Cursos
  Somente a equipe Cursos edita este arquivo.

  Este arquivo faz três coisas:
  1. transforma a lista de cursos em cards na tela;
  2. filtra esses cards pela modalidade escolhida no botão;
  3. abre o modal (janela de explicação) ao tocar em um card.
*/

/* ========== 1. LISTA DE CURSOS ========== */

// Os sete cursos que estão em funcionamento no colégio.
// Os dados (nome, duração, modalidade e período) vieram do site atual
// e são os mesmos usados pela equipe Início na página inicial.
// Campo "imagem": caminho da foto dentro de imagens/ (ex.: "imagens/curso-enfermagem.png").
// Campo "alt": o que tem no desenho, lido por quem usa leitor de tela.
// Se "imagem" ficar vazia (""), o card mostra o aviso de "Imagem em breve".
// Campo "resumo": frase curta que explica o que é o curso.
// Campo "topicos": lista do que se aprende no curso.
// [CONFIRMAR] os textos de "resumo" e "topicos" são de referência (informação
// geral da área profissional) e ainda precisam ser validados pela secretaria.
const cursos = [
  {
    nome: "Novo Ensino Médio",
    imagem: "imagens/curso-ensino-medio.png",
    alt: "Livro aberto com um sol, representando o curso de Ensino Médio",
    duracao: "03 anos",
    modalidade: "Normal",
    periodo: "Manhã e Noite",
    resumo:
      "É o Ensino Médio regular do colégio, com três anos de duração. Não é um curso técnico: a formação é geral e termina com o diploma de Ensino Médio, que abre caminho para a universidade ou para um curso técnico depois.",
    topicos: []
  },
  {
    nome: "Técnico em Desenvolvimento de Sistemas",
    imagem: "imagens/curso-desenvolvimento-de-sistemas.png",
    alt: "Tela de computador com o código de programação, representando o curso de Desenvolvimento de Sistemas",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã",
    resumo:
      "Forma profissionais para programar, analisar e manter os sistemas de computador usados por empresas, comércio e órgãos públicos.",
    topicos: [
      "Lógica de programação e algoritmos",
      "Linguagens de programação para desktop e web",
      "Bancos de dados",
      "Redes de computadores",
      "Engenharia de software e testes"
    ]
  },
  {
    nome: "Técnico em Formação de Docentes",
    imagem: "imagens/curso-formacao-de-docentes.png",
    alt: "Pessoa lendo um livro com o sol ao fundo, representando o curso de Formação de Docentes",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã e Tarde",
    resumo:
      "Prepara para ensinar na Educação Infantil, no Ensino Fundamental e no Médio, já com práticas de sala de aula durante o curso.",
    topicos: [
      "Didática e metodologia do ensino",
      "Psicologia da educação",
      "Conhecimento pedagógico por disciplina",
      "Prática docente com observação de aulas",
      "Políticas de educação e inclusão"
    ]
  },
  {
    nome: "Técnico em Estética",
    imagem: "imagens/curso-estetica.png",
    alt: "Rosto de perfil com pincel e flor, representando o curso de Estética",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã",
    resumo:
      "Forma profissionais para o cuidado da imagem e do bem-estar, trabalhando com procedimentos de beleza, cosmetologia e higiene.",
    topicos: [
      "Procedimentos de beleza e embelezamento",
      "Cosmetologia",
      "Cuidados com a pele e os cabelos",
      "Primeiros socorros e biossegurança",
      "Organização do espaço de trabalho"
    ]
  },
  {
    nome: "Técnico em Enfermagem",
    imagem: "imagens/curso-enfermagem.png",
    alt: "Estetoscópio com um coração, representando o curso de Enfermagem",
    duracao: "02 anos",
    modalidade: "Subsequente",
    periodo: "Tarde",
    resumo:
      "Forma profissionais para cuidar de pessoas em hospitais, clínicas e unidades de saúde, trabalhando junto com a equipe de enfermagem.",
    topicos: [
      "Anatomia e fisiologia humanas",
      "Enfermagem em clínica e cirurgia",
      "Enfermagem em maternidade, infância e urgência",
      "Farmacologia aplicada",
      "Controle de infecção e biossegurança"
    ]
  },
  {
    nome: "Técnico em Administração",
    imagem: "imagens/curso-administracao.png",
    alt: "Gráfico de crescimento ao lado de uma maleta de negócios, representando o curso de Administração",
    duracao: "01 ano",
    modalidade: "Subsequente",
    periodo: "Noite",
    resumo:
      "Forma profissionais para planejar e organizar o trabalho das empresas: pessoas, materiais, financeiro e atendimento ao cliente.",
    topicos: [
      "Processos administrativos",
      "Gestão de pessoas",
      "Finanças e controle de custos",
      "Marketing e atendimento ao cliente",
      "Informática aplicada ao negócio"
    ]
  },
  {
    nome: "Técnico em Segurança do Trabalho",
    imagem: "imagens/curso-seguranca-do-trabalho.png",
    alt: "Capacete de segurança com escudo, representando o curso de Segurança do Trabalho",
    duracao: "1,5 ano",
    modalidade: "Subsequente",
    periodo: "Noite",
    resumo:
      "Forma profissionais que cuidam da saúde e da segurança dos trabalhadores, seguindo normas técnicas e a legislação do trabalho.",
    topicos: [
      "Legislação de segurança e saúde do trabalho",
      "Avaliação de riscos no ambiente de trabalho",
      "Ergonomia",
      "Prevenção de acidentes e doenças ocupacionais",
      "Primeiros socorros no trabalho"
    ]
  }
];

/* ========== 2. MONTAR OS CARDS ========== */

// Cria um item de dados (a linha "Duração: 03 anos").
// O mesmo item serve no card e no modal: só muda a classe da <ul> que o guarda.
function criarDado(rotulo, valor) {
  const item = document.createElement("li");
  item.className = "cursos-dado";
  const rotuloElemento = document.createElement("strong");
  rotuloElemento.textContent = rotulo + ": ";
  item.appendChild(rotuloElemento);
  item.appendChild(document.createTextNode(valor));
  return item;
}

// Cria a imagem do curso; se ainda não houver arquivo, cria o aviso
function criarImagemDoCard(curso) {
  if (curso.imagem) {
    const imagem = document.createElement("img");
    imagem.src = curso.imagem;
    // alt descritivo: cada curso tem o seu, porque cada desenho é diferente
    imagem.alt = curso.alt;
    // loading lazy: o navegador só baixa a imagem quando ela chega perto da tela
    imagem.loading = "lazy";
    imagem.decoding = "async";
    return imagem;
  }

  const aviso = document.createElement("span");
  aviso.className = "cursos-card-aviso";
  aviso.textContent = "Imagem em breve";
  return aviso;
}

// Monta o card (<li>) de um curso
function montarCardCurso(curso) {
  const item = document.createElement("li");
  // .card é a caixa pronta do main.css; a classe cursos- serve para o estilo da página
  item.className = "card cursos-card";
  // Guarda a modalidade no próprio card para o filtro saber o que mostrar
  item.dataset.modalidade = curso.modalidade;

  const areaImagem = document.createElement("div");
  areaImagem.className = "cursos-card-imagem";
  areaImagem.appendChild(criarImagemDoCard(curso));
  item.appendChild(areaImagem);

  const nome = document.createElement("h3");
  nome.className = "cursos-card-nome";
  nome.textContent = curso.nome;
  item.appendChild(nome);

  // Duração, modalidade e período: os dados pedidos na missão da página
  const dados = document.createElement("ul");
  dados.className = "cursos-card-dados";
  dados.appendChild(criarDado("Duração", curso.duracao));
  dados.appendChild(criarDado("Modalidade", curso.modalidade));
  dados.appendChild(criarDado("Período", curso.periodo));
  item.appendChild(dados);

  // Botão que abre o modal. O ::after dele cobre o card inteiro (ver pagina.css),
  // por isso o botão não precisa ocupar a largura toda.
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "cursos-card-abrir";
  botao.textContent = "Ver detalhes";
  // Cada botão tem um nome próprio para quem usa leitor de tela
  botao.setAttribute("aria-label", "Ver detalhes do curso " + curso.nome);
  // Guarda o curso no botão: é assim que o modal sabe qual abrir
  botao.dataset.curso = curso.nome;
  item.appendChild(botao);

  return item;
}

// Procura um curso pelo nome (o nome é a chave de cada objeto)
function buscarCurso(nome) {
  for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].nome === nome) {
      return cursos[i];
    }
  }
  return null;
}

// Percorre a lista de cursos e coloca os cards na página
function montarCatalogoCursos() {
  const lugar = document.getElementById("lista-cursos");
  if (!lugar) return; // a lista não existe nesta página

  for (let i = 0; i < cursos.length; i++) {
    lugar.appendChild(montarCardCurso(cursos[i]));
  }
}

/* ========== 3. FILTRAR POR MODALIDADE ========== */

// Mostra os cards da modalidade escolhida e esconde os outros.
// "Todas" mostra tudo.
function filtrarCursos(modalidade) {
  const cards = document.querySelectorAll(".cursos-card");
  let quantidadeVisivel = 0;

  for (let i = 0; i < cards.length; i++) {
    const combina = modalidade === "Todas" || cards[i].dataset.modalidade === modalidade;
    // A propriedade hidden esconde o card sem precisar tirar ele da tela com CSS
    cards[i].hidden = !combina;
    if (combina) {
      quantidadeVisivel++;
    }
  }

  atualizarContagem(quantidadeVisivel, cards.length);
  atualizarAvisoVazio(quantidadeVisivel);
}

// Escreve "Mostrando X de 7 cursos" embaixo dos botões
function atualizarContagem(quantidadeVisivel, total) {
  const contagem = document.getElementById("cursos-contagem");
  if (!contagem) return;

  contagem.textContent =
    "Mostrando " + quantidadeVisivel + " de " + total + " cursos.";
}

// Mostra o aviso de lista vazia só quando nenhum curso sobrou
function atualizarAvisoVazio(quantidadeVisivel) {
  const aviso = document.getElementById("cursos-vazio");
  if (!aviso) return;

  aviso.hidden = quantidadeVisivel > 0;
}

// Marca o botão escolhido e tira a marca dos outros
function atualizarBotoesFiltro(modalidadeEscolhida) {
  const botoes = document.querySelectorAll(".cursos-filtro");

  for (let i = 0; i < botoes.length; i++) {
    const escolhido = botoes[i].dataset.modalidade === modalidadeEscolhida;
    botoes[i].classList.toggle("ativo", escolhido);
    botoes[i].setAttribute("aria-pressed", String(escolhido));
  }
}

// Liga o clique de cada botão ao filtro correspondente
function registrarFiltros() {
  const botoes = document.querySelectorAll(".cursos-filtro");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      const modalidade = this.dataset.modalidade;
      atualizarBotoesFiltro(modalidade);
      filtrarCursos(modalidade);
    });
  }
}

/* ========== 4. MODAL DE DETALHES DO CURSO ========== */

// Preenche a lista de tópicos do modal.
// Antes de colocar os itens, esvazia a lista: textContent = "" apaga os filhos.
function preencherTopicos(lugar, topicos) {
  lugar.textContent = "";

  for (let i = 0; i < topicos.length; i++) {
    const item = document.createElement("li");
    item.textContent = topicos[i];
    lugar.appendChild(item);
  }
}

// Monta o modal com os dados do curso e abre ele na tela
function abrirModalDoCurso(curso) {
  const modal = document.getElementById("cursos-modal");
  if (!modal) return;

  // Nome do curso no título
  document.getElementById("cursos-modal-titulo").textContent = curso.nome;

  // Frase de explicação
  document.getElementById("cursos-modal-resumo").textContent = curso.resumo;

  // Duração, modalidade, período e vagas
  const dados = document.getElementById("cursos-modal-dados");
  dados.textContent = "";
  dados.appendChild(criarDado("Duração", curso.duracao));
  dados.appendChild(criarDado("Modalidade", curso.modalidade));
  dados.appendChild(criarDado("Período", curso.periodo));
  dados.appendChild(criarDado("Vagas por turma", "[CONFIRMAR]"));

  // Bloco "O que você vai aprender": some se o curso não tiver lista
  const bloco = document.getElementById("cursos-modal-topicos-bloco");
  const listaTopicos = document.getElementById("cursos-modal-topicos");
  const temTopicos = curso.topicos.length > 0;
  bloco.hidden = !temTopicos;
  if (temTopicos) {
    preencherTopicos(listaTopicos, curso.topicos);
  }

  // showModal() é o método nativo que abre o modal e trata o foco do teclado
  modal.showModal();
}

// Fecha o modal pelo botão "Fechar"
function registrarFechamentoDoModal() {
  const modal = document.getElementById("cursos-modal");
  const botaoFechar = document.getElementById("cursos-modal-fechar");
  if (!modal || !botaoFechar) return;

  botaoFechar.addEventListener("click", function () {
    modal.close();
  });

  // Clicar fora da caixa também fecha. O evento chega com o <dialog> como alvo
  // só quando o clique foi no fundo, e não dentro da caixa.
  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      modal.close();
    }
  });
}

// Liga o clique dos cards (botão "Ver detalhes") ao modal
function registrarCardsDoModal() {
  const botoes = document.querySelectorAll(".cursos-card-abrir");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      const curso = buscarCurso(this.dataset.curso);
      if (curso) {
        abrirModalDoCurso(curso);
      }
    });
  }
}

/* ========== 5. EXECUÇÃO ========== */

// Os scripts são carregados no fim do <body>, então o HTML já existe
montarCatalogoCursos();
registrarFiltros();
registrarCardsDoModal();
registrarFechamentoDoModal();

// Começa mostrando todos os cursos e escrevendo a contagem
atualizarBotoesFiltro("Todas");
filtrarCursos("Todas");