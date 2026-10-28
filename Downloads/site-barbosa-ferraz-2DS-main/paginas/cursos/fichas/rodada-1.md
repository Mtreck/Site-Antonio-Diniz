# Ficha da rodada — Equipe Cursos

**Rodada:** 1 (estrutura) + 2 (estilo) + 3 (conteúdo do catálogo)
**Branch:** `equipe-cursos-rodada-1`
**Arquivos alterados:** `paginas/cursos/index.html`, `paginas/cursos/pagina.css`, `paginas/cursos/pagina.js`, `paginas/cursos/fichas/rodada-1.md` e as 7 imagens em `paginas/cursos/imagens/`

## O que foi feito

- `index.html` com HTML semântico e **um único título principal (`h1`)**.
  A ordem das seções dentro do `<main>` é:
  1. Apresentação (sem título, marcada com `aria-label`)
  2. **Cursos — o `h1` da página**, com o catálogo, o filtro e a grade de cards
     (cada card é um `h3`)
  3. Quais são as modalidades (`h2` + 3 cards `h3`)
  4. Como se inscrever (`h2` + 4 passos `h3`)
  5. `<dialog>` do modal (fecha a lista, com `h2` e `h3` próprios)

  > **Por que o `h1` ficou no catálogo e não no topo.** A regra 3 do `REGRAS.md`
  > pede um `h1` na página e `h2`/`h3` em ordem. Se o "Cursos" descesse para
  > depois da seção de modalidades, ele apareceria depois de três `h2`/`h3`.
  > Por isso o `h1` ficou no catálogo, que é o assunto principal da página, e a
  > seção de Apresentação ficou sem título (com `aria-label` para o leitor de
  > tela continuar entendendo que bloco é esse).
- Catálogo dos 7 cursos gerado por JavaScript a partir de um `array` de objetos,
  com um `for` que monta um `<li>` por curso (nome, duração, modalidade, período).
- Filtro por modalidade (Todas / Normal / Integrado / Subsequente) usando o
  atributo `hidden` do navegador.
- **Modal de detalhes:** tocar no card abre uma janela com resumo do curso,
  dados (duração, modalidade, período e vagas) e a lista "O que você vai aprender".
- `pagina.css` usando apenas as variáveis de `main.css`, sem cor em hexadecimal,
  sem `rgba()`, sem `!important` e sem estilo inline no HTML.
- Reaproveitamento das classes prontas do `main.css`: `.container`, `.card`,
  `.grade` e `.botao`.

## Por que o JavaScript foi usado aqui

O `pagina.js` faz três coisas com função real:

1. **Evitar repetição:** os 7 cards são praticamente iguais. Escrever 7 blocos de
   HTML à mão seria copiar e colar; com o `array`, quem corrige um dado corrige
   uma linha só.
2. **Filtro por modalidade:** sem JavaScript, clicar no botão não esconderia nada.
3. **Modal:** sem JavaScript, não dá para trocar o conteúdo da janela conforme o
   card que foi tocado.

## Imagens dos cursos

Os 7 desenhos chegaram em uma faixa única e foram recortados pela equipe,
um arquivo por curso, dentro de `paginas/cursos/imagens/`:

| Arquivo | Curso | Tamanho |
| --- | --- | --- |
| `curso-ensino-medio.png` | Novo Ensino Médio | 79 KB |
| `curso-desenvolvimento-de-sistemas.png` | Técnico em Desenvolvimento de Sistemas | 66 KB |
| `curso-formacao-de-docentes.png` | Técnico em Formação de Docentes | 73 KB |
| `curso-estetica.png` | Técnico em Estética | 80 KB |
| `curso-enfermagem.png` | Técnico em Enfermagem | 73 KB |
| `curso-administracao.png` | Técnico em Administração | 68 KB |
| `curso-seguranca-do-trabalho.png` | Técnico em Segurança do Trabalho | 77 KB |

Todos em PNG, todos abaixo do limite de 300 KB, todos dentro da pasta da equipe.
Nenhuma foto de pessoa identificável: são desenhos, então não há aluno nem
professor representado.

Cada imagem tem um `alt` descritivo no `pagina.js` (campo `alt` de cada curso),
exemplo: `"Estetoscópio com um coração, representando o curso de Enfermagem"`.
Se a secretaria trocar um desenho, o `alt` precisa ser ajustado junto.

Se algum arquivo for apagado, o campo `imagem` volta para `""` e o card mostra
o aviso "Imagem em breve" no lugar — o código já trata esse caso.

## Modal de detalhes do curso

- O `<dialog>` fica escrito fechado no `index.html`. Só a estrutura está lá.
- O `pagina.js` preenche o conteúdo e chama `modal.showModal()`, que é o jeito
  nativo do navegador de abrir a janela (cuida do foco do teclado e do `Esc`).
- O botão "Fechar" chama `modal.close()`. Clicar no fundo escuro também fecha:
  o `evento.target` só é o próprio `<dialog>` quando o clique foi fora da caixa.
- O botão "Ver detalhes" usa o mesmo truque da página Início: um `::after`
  posicionado cobre o card inteiro, então clicar em qualquer parte abre o modal.
- O botão continua sendo um `<button>` de verdade, então funciona no teclado.
  Cada um tem um `aria-label` com o nome do curso.
- A centralização é feita por `position: fixed` + `inset: 0` + `margin: auto`
  no `pagina.css`, e a largura é `min(760px, 100% - 32px)`.

## Textos do modal — pendência importante

> Os campos `resumo` e `topicos` do `array` são **textos de referência sobre a
> área profissional**, escritos com informação geral de mercado, e **ainda não
> foram validados pelo colégio**. O próprio modal mostra um aviso em validação.
> Antes de publicar, a secretaria precisa ler e aprovar (ou corrigir) esses textos.

- [ ] Validar o texto de `resumo` dos 7 cursos.
- [ ] Validar a lista de `topicos` dos 6 cursos técnicos.
- [ ] O curso "Novo Ensino Médio" está com `topicos: []`, então o bloco "O que
      você vai aprender" some no modal dele. Falta escrever esse texto.

## Outras pendências — precisa da secretaria

Nada foi inventado. Tudo que não está confirmado está marcado com `[CONFIRMAR]`
no código e listado aqui:

- [ ] Período de matrículas e canal oficial de inscrição.
- [ ] Lista de documentos exigidos para a matrícula.
- [ ] Local e prazo de inscrição.
- [ ] Data e forma de divulgação da lista de aprovados.
- [ ] Número de vagas por turma, para cada um dos 7 cursos.
- [ ] Confirmar a modalidade do curso "Novo Ensino Médio" (no site atual ela
      aparece como "Normal"). Os dados desta página foram copiados de
      `paginas/inicio/pagina.js` para as duas páginas não se contradizerem.
- [ ] Confirmar a contagem usada na apresentação: 1 de Ensino Médio,
      3 integrados e 3 subsequentes (7 ao todo).

## Pendências técnicas

- [ ] Abrir o modal pelo teclado (Tab até o card, Enter) e conferir se o foco
      entra na janela e se o `Esc` fecha.
- [ ] Conferir se os 7 desenhos estão bem alinhados na tela do celular.
- [ ] Testar em 360px e 768px (Rodada 4) e colocar o print nesta ficha.

## Checagem das regras

- [x] Só HTML, CSS e JavaScript puros; nenhuma biblioteca, nenhum CDN.
- [x] Nenhum arquivo fora de `paginas/cursos/`.
- [x] Esqueleto da página intacto: `head`, `div#menu`, `div#rodape`,
      `data-pagina="cursos"` e a ordem dos scripts.
- [x] Um único `h1` na página e h2/h3 na ordem do documento.
- [x] Classes desta página começam com `cursos-`.
- [x] Nenhum `style="..."`, `!important` ou `onclick="..."`.
- [x] Nenhuma cor em hexadecimal e nenhum `rgba()` no `pagina.css`.
- [x] Nenhum evento no HTML: todos os `addEventListener` estão no `pagina.js`.
- [x] As 7 imagens estão na pasta da equipe, em PNG, abaixo de 300 KB cada,
      e todas com `alt` descritivo. Nenhuma delas mostra pessoa identificável.
- [x] Sem erro no console (verificado abrindo a página com duplo clique).