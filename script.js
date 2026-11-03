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
