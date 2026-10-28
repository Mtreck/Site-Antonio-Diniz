/*

  Este arquivo monta o menu e o rodapé compartilhados por todas as páginas.
*/

/* ========== 1. DADOS ========== */

// Nome do colégio, usado no menu e no rodapé
const nomeColegio = "Colégio Estadual Barbosa Ferraz";

// Lista de páginas do site: texto que aparece no menu e nome da pasta
const paginas = [
  { nome: "Início", pasta: "inicio" },
  { nome: "Colégio", pasta: "colegio" },
  { nome: "Cursos", pasta: "cursos" },
  { nome: "Eventos", pasta: "eventos" },
  { nome: "Sala de Rec...", pasta: "sala-recursos" },
  { nome: "Downloads", pasta: "downloads" },
  { nome: "Contato", pasta: "contato" }
];

/* ========== 2. MENU ========== */

// Cria um item da lista (<li>) com o link para uma página
function criarItemDoMenu(pagina, paginaAtual) {
  const item = document.createElement("li");
  const link = document.createElement("a");

  // Todas as páginas ficam em paginas/<pasta>/, então "../" volta uma pasta
  link.href = "../" + pagina.pasta + "/index.html";
  link.textContent = pagina.nome;

  // Se for a página que está aberta, marca o link como ativo
  if (pagina.pasta === paginaAtual) {
    link.classList.add("ativo");
    link.setAttribute("aria-current", "page");
  }

  item.appendChild(link);
  return item;
}

// Cria o botão "Menu", que abre e fecha a lista no celular
function criarBotaoDoMenu(lista) {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "menu-botao";
  botao.textContent = "Menu";
  botao.setAttribute("aria-controls", "menu-lista");
  botao.setAttribute("aria-expanded", "false");

  // A cada clique, coloca ou tira a classe .aberto da lista
  botao.addEventListener("click", function () {
    const estaAberto = lista.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(estaAberto));
  });

  return botao;
}

// Monta o cabeçalho completo dentro da <div id="menu">
function montarMenu() {
  const lugar = document.getElementById("menu");
  if (!lugar) {
    return; // a página não tem div#menu, então não faz nada
  }

  // Descobre qual página está aberta pelo atributo data-pagina do <body>
  const paginaAtual = document.body.dataset.pagina;

  // Lista de links
  const lista = document.createElement("ul");
  lista.className = "menu-lista";
  lista.id = "menu-lista";
  for (let i = 0; i < paginas.length; i++) {
    lista.appendChild(criarItemDoMenu(paginas[i], paginaAtual));
  }

  // Navegação que guarda a lista
  const nav = document.createElement("nav");
  nav.className = "menu-nav";
  nav.setAttribute("aria-label", "Menu principal");
  nav.appendChild(lista);

  // Nome do colégio, que também leva para o Início
  // A marca oficial do colégio acompanha o nome no cabeçalho
  const logo = document.createElement("a");
  logo.className = "cabecalho-logo";
  logo.href = "../inicio/index.html";
  const imagemLogo = document.createElement("img");
  imagemLogo.src = "../../imagens-principais/logo-colegio.png";
  imagemLogo.alt = "";
  logo.appendChild(imagemLogo);
  logo.appendChild(document.createTextNode(nomeColegio));

  // Junta tudo dentro do <header>
  const conteudo = document.createElement("div");
  conteudo.className = "container cabecalho-conteudo";
  conteudo.appendChild(logo);
  conteudo.appendChild(criarBotaoDoMenu(lista));
  conteudo.appendChild(nav);

  const cabecalho = document.createElement("header");
  cabecalho.className = "cabecalho";
  cabecalho.appendChild(conteudo);

  lugar.appendChild(cabecalho);
}

/* ========== 3. RODAPÉ ========== */

// Cria um item de contato/rede social do rodapé (resumido e limpo)
function criarCardRodape(dados) {
  const link = document.createElement("a");
  link.className = "rodape-item";
  link.href = dados.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", dados.ariaLabel);

  // Imagem do ícone sem caixas ou molduras
  const imagem = document.createElement("img");
  imagem.className = dados.classeIcone ? "rodape-item-icone " + dados.classeIcone : "rodape-item-icone";
  imagem.src = dados.icone;
  imagem.alt = ""; // Decorativo pois o texto descritivo e o aria-label já identificam o link
  link.appendChild(imagem);

  // Bloco de texto resumido
  const info = document.createElement("div");
  info.className = "rodape-item-info";

  const titulo = document.createElement("strong");
  titulo.className = "rodape-item-titulo";
  titulo.textContent = dados.titulo;
  info.appendChild(titulo);

  if (dados.linhas && dados.linhas.length > 0) {
    for (let i = 0; i < dados.linhas.length; i++) {
      const linha = document.createElement("span");
      linha.className = "rodape-item-linha";
      linha.textContent = dados.linhas[i];
      info.appendChild(linha);
    }
  }

  if (dados.nota) {
    const nota = document.createElement("span");
    nota.className = "rodape-item-nota";
    nota.textContent = dados.nota;
    info.appendChild(nota);
  }

  link.appendChild(info);
  return link;
}

// Monta o rodapé dentro da <div id="rodape">
function montarRodape() {
  const lugar = document.getElementById("rodape");
  if (!lugar) {
    return; // a página não tem div#rodape, então não faz nada
  }

  // Lista com as quatro áreas institucionais oficiais
  const itensRodape = [
    {
      titulo: "WhatsApp",
      linhas: ["+55 43 99611-3582"],
      nota: "(Pode ser alterado com o tempo)",
      url: "https://wa.me/5543996113582",
      icone: "../../paginas/inicio/imagens/rodape/whatsapp.png",
      ariaLabel: "Fale conosco pelo WhatsApp no número +55 43 99611-3582"
    },
    {
      titulo: "Instagram",
      linhas: ["@colegiobarbosaferrazivp"],
      url: "https://www.instagram.com/colegiobarbosaferrazivp?rpxt=MXFoeG9ob3l0cXJpaA==",
      icone: "../../paginas/inicio/imagens/rodape/instagram.png",
      ariaLabel: "Visite nosso perfil oficial no Instagram"
    },
    {
      titulo: "Facebook",
      linhas: ["Colégio Barbosa Ferraz"],
      url: "https://www.facebook.com/www.colegioestaduelbarbosaferraz/?locale=pt_BR",
      icone: "../../paginas/inicio/imagens/rodape/facebook.png",
      classeIcone: "rodape-card-icone-facebook",
      ariaLabel: "Acesse nossa página oficial no Facebook"
    },
    {
      titulo: "Endereço",
      linhas: [
        "Rua Rio Grande do Sul, 1200",
        "Ivaiporã - PR, 86870-000",
        "Brasil"
      ],
      url: "https://www.google.com/maps/search/?api=1&query=Rua+Rio+Grande+do+Sul%2C+1200%2C+Ivaipor%C3%A3+-+PR%2C+86870-000",
      icone: "../../paginas/inicio/imagens/rodape/endereco.png",
      ariaLabel: "Ver localização no Google Maps: Rua Rio Grande do Sul, 1200, Ivaiporã - PR"
    }
  ];

  const conteudo = document.createElement("div");
  conteudo.className = "container rodape-conteudo";

  // Identificação do colégio no topo do rodapé
  const topo = document.createElement("div");
  topo.className = "rodape-topo";
  const nome = document.createElement("p");
  nome.className = "rodape-nome";
  nome.textContent = nomeColegio;
  topo.appendChild(nome);
  conteudo.appendChild(topo);

  // Grade com os 4 cartões clicáveis
  const grade = document.createElement("div");
  grade.className = "rodape-grade";
  for (let i = 0; i < itensRodape.length; i++) {
    grade.appendChild(criarCardRodape(itensRodape[i]));
  }
  conteudo.appendChild(grade);

  // Rodapé inferior com mensagem institucional e acesso discreto à Área Administrativa
  const base = document.createElement("div");
  base.className = "rodape-base";

  const direitos = document.createElement("p");
  direitos.className = "rodape-base-texto";
  direitos.textContent = "Educação pública, gratuita e de qualidade no Paraná.";
  base.appendChild(direitos);

  // Link de acesso discreto à área administrativa
  const linkAdmin = document.createElement("a");
  linkAdmin.className = "rodape-link-admin";
  linkAdmin.href = "../admin/index.html";
  linkAdmin.textContent = "Área administrativa";
  linkAdmin.setAttribute("aria-label", "Acesso discreto à área administrativa");
  base.appendChild(linkAdmin);

  conteudo.appendChild(base);

  const rodape = document.createElement("footer");
  rodape.className = "rodape";
  rodape.appendChild(conteudo);

  lugar.appendChild(rodape);
}

/* ========== 4. EXECUÇÃO ========== */

// Garante que o fav-icon oficial do colégio esteja presente em todas as páginas
function garantirFavicon() {
  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    // Todas as páginas ficam em paginas/<pasta>/ (profundidade 2),
    // exceto subpastas que podem estar em profundidade 3
    favicon.href = "../../imagens-principais/logo-colegio.png";
    document.head.appendChild(favicon);
  }
}

// O script é carregado no fim do <body>, então as divs já existem
garantirFavicon();
montarMenu();
montarRodape();
