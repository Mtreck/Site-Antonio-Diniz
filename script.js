// Usado em index.html e galeria.html
const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const temObserver = "IntersectionObserver" in window;

// ---------- Revelação da galeria quando ela entra na tela ----------
const galeria = document.querySelector(".galeria");
if (galeria && temObserver && !semMovimento) {
  galeria.classList.add("preparada");
  const obs = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) {
      galeria.classList.add("revelada");
      obs.disconnect();
    }
  }, { threshold: 0, rootMargin: "0px 0px -15% 0px" });
  obs.observe(galeria);
}

// ---------- Vídeos: carregam perto da tela e tocam sem som enquanto aparecem ----------
const videos = document.querySelectorAll(".midias video");

function carregarVideo(v) {
  if (!v.getAttribute("src") && v.dataset.src) {
    v.src = v.dataset.src;
    v.preload = "metadata";
  }
}

if (temObserver) {
  const obsCarrega = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        carregarVideo(e.target);
        obsCarrega.unobserve(e.target);
      }
    });
  }, { rootMargin: "400px 0px" });

  const obsToca = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting && !semMovimento) e.target.play().catch(() => {});
      else e.target.pause();
    });
  }, { threshold: 0.5 });

  videos.forEach((v) => { obsCarrega.observe(v); obsToca.observe(v); });
} else {
  videos.forEach(carregarVideo);
}

// ---------- Filtro Tudo / Fotos / Vídeos (página de todas as fotos) ----------
const filtros = document.querySelectorAll(".filtro button");
filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    const tipo = botao.dataset.filtro;
    filtros.forEach((b) => b.setAttribute("aria-pressed", b === botao));
    document.querySelectorAll(".mosaico li").forEach((li) => {
      li.hidden = tipo !== "tudo" && li.dataset.tipo !== tipo;
    });
  });
});

// ---------- Visualizador de fotos e vídeos ----------
const dialogo = document.getElementById("ampliar");
if (dialogo) {
  const palco = dialogo.querySelector(".amp-midia");
  const legenda = dialogo.querySelector("figcaption");
  const todos = [...document.querySelectorAll(".midias li")];
  let lista = todos;
  let atual = 0;

  function mostrar(i) {
    atual = (i + lista.length) % lista.length;
    const item = lista[atual];
    const original = item.querySelector("img, video");
    palco.replaceChildren();

    if (original.tagName === "VIDEO") {
      const video = document.createElement("video");
      video.src = (original.getAttribute("src") || original.dataset.src).split("#")[0];
      video.controls = true;
      video.playsInline = true;
      video.autoplay = true;
      video.setAttribute("aria-label", original.getAttribute("aria-label"));
      palco.append(video);
    } else {
      const img = document.createElement("img");
      img.src = original.src;
      img.alt = original.alt;
      palco.append(img);
    }
    legenda.textContent = item.querySelector(".legenda").textContent;
  }

  todos.forEach((item) => {
    item.querySelector("button").addEventListener("click", () => {
      lista = todos.filter((li) => !li.hidden);
      mostrar(lista.indexOf(item));
      dialogo.showModal();
    });
  });

  dialogo.addEventListener("close", () => palco.replaceChildren());
  dialogo.querySelector(".amp-fechar").addEventListener("click", () => dialogo.close());
  dialogo.querySelector(".amp-ant").addEventListener("click", () => mostrar(atual - 1));
  dialogo.querySelector(".amp-prox").addEventListener("click", () => mostrar(atual + 1));
  dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });
  dialogo.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });

  // Deslizar para trocar no celular
  let toqueX = null;
  dialogo.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
  dialogo.addEventListener("touchend", (e) => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
    toqueX = null;
  });
}

// =========================================================
// Modo expositor: para o computador da exposição.
// Abra index.html?expositor — depois de alguns segundos sem ninguém mexer,
// a página rola sozinha. Qualquer movimento de mouse, toque, roda ou tecla
// interrompe na hora; ela volta a rolar depois de um tempo parada.
// =========================================================
const modoExpositor = new URLSearchParams(location.search).has("expositor");

if (modoExpositor) {
  const ESPERA_PARA_COMECAR = 8000; // ms parado até começar a rolar
  const VELOCIDADE = 55;            // pixels por segundo
  const PAUSA_NO_FIM = 5000;        // ms parado no fim da página
  const PAUSA_NO_TOPO = 4000;       // ms parado no topo antes de recomeçar
  const naGaleria = location.pathname.endsWith("galeria.html");

  let rolando = false;
  let quadro = null;
  let inicioTempo = 0;
  let inicioY = 0;
  let timerOcioso = null;
  let timerPausa = null;

  // Os links internos continuam no modo expositor
  document.querySelectorAll('a[href^="index.html"], a[href^="galeria.html"]').forEach((a) => {
    const [caminho, ancora] = a.getAttribute("href").split("#");
    a.setAttribute("href", caminho + "?expositor" + (ancora ? "#" + ancora : ""));
  });

  // Aviso discreto enquanto a página rola sozinha
  const aviso = document.createElement("p");
  aviso.className = "aviso-expositor";
  aviso.textContent = "Mexa o mouse ou toque na tela para navegar";
  aviso.setAttribute("aria-hidden", "true");
  document.body.append(aviso);

  // Mantém a tela acesa, quando o navegador permite
  let travaTela = null;
  async function manterTelaAcesa() {
    try { travaTela = await navigator.wakeLock.request("screen"); } catch (e) { /* sem suporte */ }
  }
  manterTelaAcesa();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !travaTela) manterTelaAcesa();
  });

  const noFim = () => window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

  // A posição vem do tempo decorrido: a velocidade fica constante
  // mesmo se o computador da exposição engasgar em algum quadro.
  function passo() {
    if (!rolando) return;
    const y = inicioY + VELOCIDADE * (Date.now() - inicioTempo) / 1000;
    window.scrollTo({ top: Math.round(y), behavior: "instant" });
    if (noFim()) {
      pararRolagem(false);
      timerPausa = setTimeout(recomecarDoInicio, PAUSA_NO_FIM);
      return;
    }
    quadro = requestAnimationFrame(passo);
  }

  function comecarRolagem() {
    if (rolando || document.querySelector("dialog[open]")) return;
    rolando = true;
    inicioTempo = Date.now();
    inicioY = window.scrollY;
    document.body.classList.add("rolando-sozinho");
    quadro = requestAnimationFrame(passo);
  }

  function pararRolagem(esconderAviso = true) {
    rolando = false;
    cancelAnimationFrame(quadro);
    if (esconderAviso) document.body.classList.remove("rolando-sozinho");
  }

  function recomecarDoInicio() {
    if (naGaleria) {
      // Da página de fotos, volta para a página principal
      location.href = "index.html?expositor";
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    timerPausa = setTimeout(comecarRolagem, PAUSA_NO_TOPO);
  }

  // Qualquer interação de verdade interrompe e reinicia a contagem
  function interacao() {
    clearTimeout(timerPausa);
    clearTimeout(timerOcioso);
    pararRolagem();
    timerOcioso = setTimeout(comecarRolagem, ESPERA_PARA_COMECAR);
  }

  ["pointerdown", "wheel", "touchstart", "keydown"].forEach((tipo) =>
    window.addEventListener(tipo, interacao, { passive: true })
  );

  // O navegador dispara "mousemove" falso quando a página rola sob o cursor parado;
  // só conta como interação se o mouse realmente mudou de posição.
  let mouseX = null;
  let mouseY = null;
  window.addEventListener("mousemove", (e) => {
    const mexeu = mouseX !== null && (Math.abs(e.screenX - mouseX) > 2 || Math.abs(e.screenY - mouseY) > 2);
    mouseX = e.screenX;
    mouseY = e.screenY;
    if (mexeu) interacao();
  }, { passive: true });

  timerOcioso = setTimeout(comecarRolagem, ESPERA_PARA_COMECAR);
}
