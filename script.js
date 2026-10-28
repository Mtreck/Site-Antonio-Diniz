// ---------- Fotos do texto ----------
// Só mostra a foto se o arquivo existir; senão fica o espaço reservado
document.querySelectorAll(".historia-foto img").forEach((img) => {
  const teste = new Image();
  teste.onload = () => {
    img.src = img.dataset.src;
    img.closest("figure").classList.remove("sem-foto");
  };
  teste.src = img.dataset.src;
});

// ---------- Galeria ----------
const dialogo = document.getElementById("ampliar");
const imgGrande = dialogo.querySelector("img");
const legenda = dialogo.querySelector(".ampliar-legenda");

document.querySelectorAll(".fotos img").forEach((img) => {
  const li = img.closest("li");
  const botao = img.closest("button");
  // Enquanto a foto não existir, fica um espaço reservado com a descrição
  botao.dataset.legenda = img.alt;
  botao.disabled = true;
  const teste = new Image();
  teste.onload = () => {
    img.src = img.dataset.src;
    li.classList.remove("sem-foto");
    botao.disabled = false;
  };
  teste.src = img.dataset.src;

  botao.addEventListener("click", () => {
    imgGrande.src = img.src;
    imgGrande.alt = img.alt;
    legenda.textContent = img.alt;
    dialogo.showModal();
  });
});

dialogo.querySelector(".ampliar-fechar").addEventListener("click", () => dialogo.close());
dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });
