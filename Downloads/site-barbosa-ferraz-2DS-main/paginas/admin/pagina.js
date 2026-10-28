/*
  JavaScript da Área Administrativa
  Implementação em JavaScript puro sem frameworks
  
  AVISO DE ARQUITETURA E SEGURANÇA:
  Como o projeto roda puramente no cliente (sem servidor backend ou banco de dados),
  nenhuma validação feita exclusivamente no navegador é criptograficamente segura
  contra inspeção de código ou depuração por usuários técnicos.
  
  Para respeitar a exigência estrita de que a senha permaneça secreta e não seja exposta
  em texto puro nos arquivos públicos do frontend, a validação utiliza uma função
  criptográfica nativa do navegador (Web Crypto API - SHA-256) com o hash da resposta.
*/

// Hashes SHA-256 autorizados para acesso à Área Administrativa:
// Suporta a resposta completa e a abreviação informal de forma segura
const HASHES_AUTORIZADOS = [
  "192c33caac3d89ed647f6dc54419161c2bbf4b57d12bb8c546e41d6448597571", // resposta completa
  "6ae6c9e65bfcd71db43c104ca6bd45fbebfdf412523cbbdfa0334bc1f391679f"  // resposta abreviada
];

// Função nativa para calcular o hash SHA-256 de uma string usando Web Crypto
async function calcularHashTexto(texto) {
  const encoder = new TextEncoder();
  const dados = encoder.encode(texto.trim().toLowerCase());
  const bufferHash = await crypto.subtle.digest("SHA-256", dados);
  const arrayBytes = Array.from(new Uint8Array(bufferHash));
  return arrayBytes.map(function (b) {
    return b.toString(16).padStart(2, "0");
  }).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-login");
  const campoResposta = document.getElementById("campo-resposta");
  const mensagemStatus = document.getElementById("mensagem-status");
  const painelLogin = document.getElementById("painel-login");
  const painelSucesso = document.getElementById("painel-sucesso");
  const botaoSair = document.getElementById("botao-sair");

  if (!form || !campoResposta || !mensagemStatus) {
    return;
  }

  // Submissão do formulário (tanto via clique no botão quanto tecla Enter)
  form.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const valorDigitado = campoResposta.value;
    if (!valorDigitado) {
      mensagemStatus.className = "admin-mensagem admin-mensagem-erro";
      mensagemStatus.textContent = "Por favor, digite a resposta para continuar.";
      campoResposta.focus();
      return;
    }

    try {
      // Calcula o hash da resposta digitada
      const hashDigitado = await calcularHashTexto(valorDigitado);

      // Compara os hashes sem expor o segredo
      if (HASHES_AUTORIZADOS.includes(hashDigitado)) {
        // Acesso autorizado
        mensagemStatus.className = "admin-mensagem";
        mensagemStatus.textContent = "";
        campoResposta.value = "";

        // Alterna para o painel administrativo
        painelLogin.classList.add("admin-oculto");
        painelSucesso.classList.remove("admin-oculto");
      } else {
        // Mensagem de erro genérica (não revela dicas nem o segredo)
        mensagemStatus.className = "admin-mensagem admin-mensagem-erro";
        mensagemStatus.textContent = "Resposta incorreta. Tente novamente.";
        campoResposta.value = "";
        campoResposta.focus();
      }
    } catch (erro) {
      mensagemStatus.className = "admin-mensagem admin-mensagem-erro";
      mensagemStatus.textContent = "Ocorreu um erro ao processar. Tente novamente.";
    }
  });

  // Botão de encerrar acesso
  if (botaoSair) {
    botaoSair.addEventListener("click", function () {
      painelSucesso.classList.add("admin-oculto");
      painelLogin.classList.remove("admin-oculto");
      mensagemStatus.className = "admin-mensagem";
      mensagemStatus.textContent = "";
      campoResposta.value = "";
      campoResposta.focus();
    });
  }
});
