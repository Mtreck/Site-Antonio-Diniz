/*
  JavaScript da página Colégio
  Equipe: Colégio
  Somente a equipe Colégio edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).
*/

/* ========== 1. HISTÓRIA EM PARTES QUE ABREM E FECHAM ========== */
// Cada fase da história abre e fecha ao clicar no título.
// Se o JavaScript não carregar, todos os textos continuam aparecendo.

function iniciarHistoria() {
  const botoes = Array.from(document.querySelectorAll(".colegio-fase-botao"));
  if (botoes.length === 0) {
    return;
  }

  // Descobre o painel de cada botão a partir do aria-controls
  const pares = botoes.map(function (botao) {
    return {
      botao: botao,
      painel: document.getElementById(botao.getAttribute("aria-controls"))
    };
  });

  // Só uma fase fica aberta por vez
  function abrirFase(par) {
    for (let i = 0; i < pares.length; i++) {
      const outra = pares[i];
      const estaAberta = outra === par;
      outra.botao.setAttribute("aria-expanded", String(estaAberta));
      if (outra.painel) {
        outra.painel.hidden = !estaAberta;
      }
    }
  }

  for (let i = 0; i < pares.length; i++) {
    const par = pares[i];

    // Fecha tudo menos a primeira fase, que já vem aberta no HTML
    const abrePrimeira = i === 0;
    par.botao.setAttribute("aria-expanded", String(abrePrimeira));
    if (par.painel) {
      par.painel.hidden = !abrePrimeira;
    }

    par.botao.addEventListener("click", function () {
      const estavaAberta = par.botao.getAttribute("aria-expanded") === "true";

      // Clicar na fase que já está aberta fecha ela
      if (estavaAberta) {
        par.botao.setAttribute("aria-expanded", "false");
        if (par.painel) {
          par.painel.hidden = true;
        }
        return;
      }

      // Clicar em uma fase fechada abre ela e fecha as outras
      abrirFase(par);
    });
  }
}

/* ========== 2. LINHA DO TEMPO ========== */
// Liga as duas setas à navegação da linha do tempo.

function iniciarLinhaDoTempo() {
  const lista = document.getElementById("colegio-tempo-lista");
  const aviso = document.getElementById("colegio-tempo-aviso");
  const setaAnterior = document.querySelector(".colegio-tempo-seta-anterior");
  const setaProxima = document.querySelector(".colegio-tempo-seta-proxima");

  // Se a página não tem a linha do tempo completa, não faz nada
  if (!lista || !setaAnterior || !setaProxima) {
    return;
  }

  const itens = Array.from(lista.querySelectorAll(".colegio-tempo-item"));
  let indiceAtual = 0;

  // "travado" vale verdadeiro enquanto a rolagem suave disparada pelas setas
  // ainda está acontecendo. Nesse intervalo o destaque fica parado, em vez de
  // passar por todos os momentos até chegar no destino.
  let travado = false;
  let soltaTravagem = null;

  // Rola a lista até o momento escolhido.
  // Usa scrollTo e não scrollIntoView: o scrollIntoView também mexe na rolagem
  // da página inteira e fazia a página pular a cada clique nas setas.
  function irParaMomento(indice) {
    const alvo = itens[indice];
    if (!alvo) {
      return;
    }

    // O limite é a maior rolagem possível da lista. Como o trilho não tem
    // folga depois do último momento, a linha do tempo para exatamente nele,
    // sem espaço vazio sobrando.
    const limite = lista.scrollWidth - lista.clientWidth;
    const destino = Math.min(alvo.offsetLeft, limite);

    travado = true;
    lista.scrollTo({ left: destino, behavior: "smooth" });
    marcarAtivo(indice);
    armarSoltaTravagem();
  }

  // Espera a lista parar de rolar para liberar o travamento
  function armarSoltaTravagem() {
    if (soltaTravagem) {
      clearTimeout(soltaTravagem);
    }
    soltaTravagem = setTimeout(function () {
      travado = false;
      marcarAtivo(indiceVisivel());
    }, 120);
  }

  // Descobre o momento visível pela posição da rolagem: vale o último momento
  // cuja borda esquerda ainda não passou. Quando a lista chega no fim, o que
  // está em destaque é o último momento.
  function indiceVisivel() {
    const posicao = lista.scrollLeft + lista.clientLeft;
    const limite = lista.scrollWidth - lista.clientWidth;

    if (posicao >= limite - 1) {
      return itens.length - 1;
    }

    for (let i = itens.length - 1; i >= 0; i--) {
      if (itens[i].offsetLeft <= posicao + 1) {
        return i;
      }
    }
    return 0;
  }

  // Marca o momento atual e desativa as setas nas pontas
  function marcarAtivo(indice) {
    const mudouDeMomento = indice !== indiceAtual;
    indiceAtual = indice;

    setaAnterior.disabled = indiceAtual === 0;
    setaProxima.disabled = indiceAtual === itens.length - 1;

    // O aviso só é reescrito quando o momento muda, para o leitor de tela não
    // ficar repetindo a mesma frase a cada pixel arrastado com o dedo
    if (mudouDeMomento && aviso) {
      aviso.textContent =
        "Momento " + (indiceAtual + 1) + " de " + itens.length +
        ": " + itens[indiceAtual].querySelector("h3").textContent;
    }
  }

  setaAnterior.addEventListener("click", function () {
    irParaMomento(Math.max(indiceAtual - 1, 0));
  });

  setaProxima.addEventListener("click", function () {
    irParaMomento(Math.min(indiceAtual + 1, itens.length - 1));
  });

  // Se a pessoa arrastar a lista direto (no celular), o destaque acompanha
  lista.addEventListener("scroll", function () {
    if (travado) {
      armarSoltaTravagem();
      return;
    }
    marcarAtivo(indiceVisivel());
  }, { passive: true });

  // Setas do teclado: esquerda volta, direita avança
  lista.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      irParaMomento(Math.max(indiceAtual - 1, 0));
    }
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      irParaMomento(Math.min(indiceAtual + 1, itens.length - 1));
    }
  });

  // Ao mudar o tamanho da janela, o momento visível muda: recalcula o destaque
  window.addEventListener("resize", function () {
    marcarAtivo(indiceVisivel());
  });

  marcarAtivo(0);
}

/* ========== 3. EXECUÇÃO ========== */
// Os scripts são carregados no fim do <body>, então o HTML já existe

iniciarHistoria();
iniciarLinhaDoTempo();