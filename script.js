const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Revelação da galeria quando ela entra na tela ----------
const galeria = document.querySelector(".galeria");
if ("IntersectionObserver" in window && !semMovimento) {
  galeria.classList.add("preparada");
  const obs = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) {
      galeria.classList.add("revelada");
      obs.disconnect();
    }
  }, { threshold: 0.1 });
  obs.observe(galeria);
}

// ---------- Vídeos da galeria tocam sem som só enquanto aparecem ----------
const videos = document.querySelectorAll(".midias video");
if ("IntersectionObserver" in window && !semMovimento) {
  const obsVideo = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) e.target.play().catch(() => {});
      else e.target.pause();
    });
  }, { threshold: 0.5 });
  videos.forEach((v) => obsVideo.observe(v));
}

// ---------- Visualizador de fotos e vídeos ----------
const dialogo = document.getElementById("ampliar");
const palco = dialogo.querySelector(".amp-midia");
const legenda = dialogo.querySelector("figcaption");
const itens = [...document.querySelectorAll(".midias li")];
let atual = 0;

function mostrar(i) {
  atual = (i + itens.length) % itens.length;
  const item = itens[atual];
  const original = item.querySelector("img, video");
  palco.replaceChildren();

  if (original.tagName === "VIDEO") {
    const video = document.createElement("video");
    video.src = original.getAttribute("src").split("#")[0];
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

itens.forEach((item, i) => {
  item.querySelector("button").addEventListener("click", () => {
    mostrar(i);
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
