/*
  JavaScript da página Downloads
  Equipe: Downloads
  Somente a equipe Downloads edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).

  Este arquivo gera a grade de cards a partir de uma lista (array).
  Para adicionar, trocar ou remover um arquivo, basta editar o array
  "arquivosDownloads" abaixo: título, ícone e link de cada documento.
*/

/* ========== 1. DADOS ========== */

// Cada item tem três informações:
//   titulo -> texto que aparece no card
//   icone  -> ícone mostrado no topo do card
//   link   -> endereço do arquivo (link do Drive, por exemplo)
// Arquivos hospedados fora do repositório, conforme a missão da equipe.
const arquivosDownloads = [
  { titulo: "Planos de Ensino", icone: "📋", link: "#" },
  { titulo: "[CONFIRMAR] documento 2", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 3", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 4", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 5", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 6", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 7", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 8", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 9", icone: "📄", link: "#" },
  { titulo: "[CONFIRMAR] documento 10", icone: "📄", link: "#" }
];

/* ========== 2. MONTAGEM DOS CARDS ========== */

// Monta um card a partir de uma informação da lista
function montarCard(item) {
  const card = document.createElement("article");
  card.className = "downloads-card";

  // Ícone do topo (não precisa ser lido em voz alta, por isso aria-hidden)
  const icone = document.createElement("div");
  icone.className = "downloads-icone";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = item.icone;

  // Título do card
  const titulo = document.createElement("h2");
  titulo.className = "downloads-card-titulo";
  titulo.textContent = item.titulo;

  // Botão que leva para o arquivo (reaproveita a classe global .botao)
  const link = document.createElement("a");
  link.className = "botao downloads-botao";
  link.href = item.link;
  link.textContent = "Acessar →";

  card.appendChild(icone);
  card.appendChild(titulo);
  card.appendChild(link);
  return card;
}

// Preenche a grade com um card para cada item da lista
function montarGrade() {
  const grade = document.getElementById("downloads-grid");
  if (!grade) {
    return; // a página não tem a grade, então não faz nada
  }

  for (let i = 0; i < arquivosDownloads.length; i++) {
    grade.appendChild(montarCard(arquivosDownloads[i]));
  }
}

/* ========== 3. EXECUÇÃO ========== */

// O script é carregado no fim do <body>, então a grade já existe
montarGrade();
