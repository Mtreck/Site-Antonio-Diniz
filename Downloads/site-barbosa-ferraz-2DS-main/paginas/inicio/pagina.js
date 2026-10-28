/*
  JavaScript da página Início
  Equipe: Início
  Somente a equipe Início edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).
*/

/* ========== 1. LISTA DE CURSOS ========== */

// Cursos em funcionamento no colégio (informação do site atual).
// Campo "imagem": caminho do PNG com fundo removido, dentro de imagens/
// (ex.: "imagens/curso-enfermagem.png"). Enquanto estiver vazio (""),
// o card mostra o placeholder no lugar da imagem.
const cursos = [
  {
    nome: "Novo Ensino Médio",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Normal",
    periodo: "Manhã e Noite"
  },
  {
    nome: "Técnico em Desenvolvimento de Sistemas",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã"
  },
  {
    nome: "Técnico em Formação de Docentes",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã e Tarde"
  },
  {
    nome: "Técnico em Estética",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã"
  },
  {
    nome: "Técnico em Enfermagem",
    imagem: "",
    duracao: "02 anos",
    modalidade: "Subsequente",
    periodo: "Tarde"
  },
  {
    nome: "Técnico em Administração",
    imagem: "",
    duracao: "01 ano",
    modalidade: "Subsequente",
    periodo: "Noite"
  },
  {
    nome: "Técnico em Segurança do Trabalho",
    imagem: "",
    duracao: "1,5 ano",
    modalidade: "Subsequente",
    periodo: "Noite"
  }
];

// Cria um item de dados do card (linha "Duração: 03 anos" etc.)
function criarDadoDoCard(rotulo, valor) {
  const item = document.createElement("li");
  const rotuloElemento = document.createElement("strong");
  rotuloElemento.textContent = rotulo + ": ";
  item.appendChild(rotuloElemento);
  item.appendChild(document.createTextNode(valor));
  return item;
}

// Cria a imagem do curso; se ainda não houver arquivo, cria o placeholder
function criarImagemDoCard(curso) {
  if (curso.imagem) {
    const imagem = document.createElement("img");
    imagem.src = curso.imagem;
    imagem.alt = ""; // decorativa: o nome do curso já está no título do card
    return imagem;
  }

  const placeholder = document.createElement("span");
  placeholder.className = "inicio-card-placeholder";
  placeholder.textContent = "Imagem em breve";
  return placeholder;
}

// Monta o card (<li>) de um curso
function montarCardCurso(curso) {
  const item = document.createElement("li");
  item.className = "inicio-card";

  // Área da imagem: mostra a foto se existir, senão o placeholder
  const areaImagem = document.createElement("div");
  areaImagem.className = "inicio-card-imagem";
  areaImagem.appendChild(criarImagemDoCard(curso));
  item.appendChild(areaImagem);

  const nome = document.createElement("h3");
  nome.className = "inicio-card-nome";
  nome.textContent = curso.nome;
  item.appendChild(nome);

  // Dados do curso (duração, modalidade e período)
  const dados = document.createElement("ul");
  dados.className = "inicio-card-dados";
  dados.appendChild(criarDadoDoCard("Duração", curso.duracao));
  dados.appendChild(criarDadoDoCard("Modalidade", curso.modalidade));
  dados.appendChild(criarDadoDoCard("Período", curso.periodo));
  item.appendChild(dados);

  // [CONFIRMAR] link para a página do curso: por enquanto aponta para a
  // página de Cursos, enquanto as páginas individuais não existem
  const link = document.createElement("a");
  link.className = "inicio-card-link";
  link.href = "../cursos/index.html";
  link.textContent = "Mais informações";
  // Leitores de tela ouvem o nome do curso (os 7 links teriam o mesmo texto)
  link.setAttribute("aria-label", "Mais informações sobre o curso " + curso.nome);
  item.appendChild(link);

  return item;
}

// Percorre a lista de cursos e coloca os cards na página
function montarCatalogoCursos() {
  const lugar = document.getElementById("lista-cursos");
  if (!lugar) return; // a lista não existe nesta página

  for (let i = 0; i < cursos.length; i++) {
    lugar.appendChild(montarCardCurso(cursos[i]));
  }
}

/* ========== 2. EXECUÇÃO ========== */

// O script é carregado no fim do <body>, então a lista já existe
montarCatalogoCursos();
