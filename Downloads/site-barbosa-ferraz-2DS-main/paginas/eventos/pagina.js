/*
  JavaScript da página Eventos
  Equipe: Eventos
  Somente a equipe Eventos edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).

  Aqui o JavaScript tem uma função só: escrever na página os cards de evento
  a partir de duas listas de dados. Para incluir um evento, a equipe acrescenta
  um item na lista correspondente, sem precisar mexer no HTML.
*/

/* ========== 1. DADOS DOS EVENTOS ========== */

/*
  Eventos que se repetem todas as semanas.
  "quando": texto da etiqueta que mostra a periodicidade.
  O que a secretaria ainda não informou aparece como [CONFIRMAR].
*/
const eventosSemanais = [
  {
    titulo: "Treino de Basquetebol",
    quando: "Toda semana",
    descricao:
      "Treino de basquetebol que acontece toda semana. " +
      "[CONFIRMAR] dia, horário e local."
  },
  {
    titulo: "Programa Mais Aprendizagem",
    quando: "Toda semana",
    descricao:
      "Turma do Programa Mais Aprendizagem no colégio. " +
      "[CONFIRMAR] dia, horário e número de vagas."
  },
  {
    titulo: "Robótica",
    quando: "Toda terça-feira",
    descricao:
      "Oficina de Robótica, toda terça-feira, no Colégio Estadual Barbosa Ferraz. " +
      "[CONFIRMAR] horário e sala."
  },
  {
    titulo: "Libras",
    quando: "Terça e quinta-feira",
    descricao:
      "Aula de Libras toda semana, às terças e quintas-feiras. " +
      "[CONFIRMAR] horário e sala."
  }
];

/*
  Eventos de data marcada, que acontecem uma vez por ano.
  Mesmo formato da lista de eventos semanais.
*/
const eventosAnuais = [
  {
    titulo: "X SETEC",
    quando: "Novembro",
    descricao:
      "O X SETEC acontece em novembro, no Colégio Estadual Barbosa Ferraz, " +
      "e é realizado pelos alunos do colégio. [CONFIRMAR] data e programação."
  },
  {
    titulo: "Arraiá do Barbosa",
    quando: "Julho",
    descricao:
      "O Arraiá do Barbosa acontece em julho, no Colégio Estadual Barbosa Ferraz. " +
      "[CONFIRMAR] data e programação."
  },
  {
    titulo: "Seminário de Formação de Docentes",
    quando: "Agosto",
    descricao:
      "Seminário que acontece em agosto, com participação das alunas do curso " +
      "de Formação de Docentes. [CONFIRMAR] data, programação e valor da inscrição."
  }
];

/* ========== 2. MONTAGEM DOS CARDS ========== */

// Cria o card (<li>) de um evento: moldura colorida por fora e cartão branco por dentro
function montarCardEvento(evento) {
  const item = document.createElement("li");
  item.className = "eventos-card";

  const conteudo = document.createElement("article");
  conteudo.className = "eventos-card-conteudo";

  // Etiqueta com a periodicidade (toda terça-feira, julho...)
  const quando = document.createElement("p");
  quando.className = "eventos-card-quando";
  quando.textContent = evento.quando;

  // Nome do evento
  const nome = document.createElement("h3");
  nome.className = "eventos-card-nome";
  nome.textContent = evento.titulo;

  // Texto de explicação do evento
  const texto = document.createElement("p");
  texto.className = "eventos-card-texto";
  texto.textContent = evento.descricao;

  conteudo.appendChild(quando);
  conteudo.appendChild(nome);
  conteudo.appendChild(texto);
  item.appendChild(conteudo);

  return item;
}

// Percorre uma lista de eventos e coloca os cards dentro da <ul> da página
function montarCards(idDaLista, listaDeEventos) {
  const lugar = document.getElementById(idDaLista);
  if (!lugar) {
    return; // a lista não existe nesta página
  }

  for (let i = 0; i < listaDeEventos.length; i++) {
    lugar.appendChild(montarCardEvento(listaDeEventos[i]));
  }
}

/* ========== 3. EXECUÇÃO ========== */

// O script é carregado no fim do <body>, então as listas já existem
montarCards("eventos-lista-semanal", eventosSemanais);
montarCards("eventos-lista-anual", eventosAnuais);