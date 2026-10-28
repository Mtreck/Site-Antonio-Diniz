# Guia de estilo

Preenchido pela equipe Identidade visual. As outras equipes seguem este guia.
Os valores daqui devem ser os mesmos das variáveis em `main.css`.

## Ideia por trás do visual

Site de uma instituição pública e técnica: precisa transmitir seriedade e
confiança (é um colégio estadual), mas sem parecer burocrático ou datado.
A cor principal é um azul-marinho institucional, com um azul mais vivo para
links e amarelo reservado só para destacar ação (botão, item ativo do menu)
— o amarelo nunca é usado como cor de texto sobre fundo claro, porque não
tem contraste suficiente para ser lido. Uma única família tipográfica
(Public Sans, desenhada para serviços públicos digitais) é usada em todo o
site, variando peso e tamanho entre título e texto — isso é o que dá o ar
"moderno, mas institucional".

## Paleta

| Variável | Valor | Onde usar |
| --- | --- | --- |
| --cor-primaria | #011142 (azul-marinho escuro) | Cabeçalho, títulos (h1/h2/h3), botão principal |
| --cor-secundaria | #004c94 (azul médio) | Hover de botões, acento esquerdo dos cards |
| --cor-link | #4169e1 (azul vivo) | Links dentro do texto |
| --cor-destaque | #fff52b (amarelo) | Botão de ação, link ativo do menu, ícone da marca — nunca como cor de texto sobre fundo claro |
| --cor-profunda | #123B5D | Títulos, textos importantes e rodapé |
| --cor-fundo | #f5f7fb (quase branco, azulado) | Fundo das páginas |
| --cor-fundo-suave | #F2F5F7 | Fundos de seções e cards claros |
| --cor-superficie | #ffffff (branco) | Fundo de cards e caixas |
| --cor-texto | #14293a (azul bem escuro, quase preto) | Texto principal, fundo do rodapé |
| --cor-texto-suave | #4f6378 (azul-acinzentado) | Textos secundários, legendas |
| --cor-borda | #dce3ea (cinza-azulado claro) | Linhas, bordas de card |

As cinco primeiras cores são a paleta oficial do colégio. `--cor-fundo`, `--cor-texto-suave` e `--cor-borda` são tons neutros criados para dar suporte a elas (não existe fundo claro nem cinza neutro nas cores oficiais).

Proibido usar outro valor de cor (hex) em pagina.css. Só as variáveis acima.

## Tipografia

| Variável | Fonte | Onde usar |
| --- | --- | --- |
| --fonte-titulo | "Public Sans" (peso 700/800) | h1, h2, h3, nome do colégio no menu |
| --fonte-texto | "Public Sans" (peso 400/500/600) | Parágrafos, botões, menu, rodapé |

A fonte é carregada uma única vez em `compartilhado/estilo.css` (`@import`
do Google Fonts). Nenhuma outra equipe precisa adicionar fonte nenhuma.

Tamanhos de h1, h2, h3 e texto:

- h1: de 1.75rem (celular) a 2.75rem (tela grande), peso 800.
- h2: de 1.375rem a 1.875rem, peso 700.
- h3: 1.25rem, peso 700.
- Texto (p, li): 1rem, peso 400, altura de linha 1.6.

Nunca usar caixa alta em rótulo nem negrito/itálico só numa palavra do
título — isso é o "efeito genérico de IA" que estamos evitando.

## Botões

- `.botao`: botão principal, fundo azul-marinho (--cor-primaria), texto
  claro. Usar para a ação mais importante da seção (ex.: "Inscreva-se").
- `.botao-secundario`: mesmo formato, mas só com contorno, sem fundo. Usar
  para a ação secundária ao lado de um `.botao` (ex.: "Saiba mais").

## Cards

- `.card`: caixa branca com um acento azul na borda esquerda (4px), em vez
  de sombra igual em todo canto — isso marca cada bloco sem empilhar
  decoração. Usar para cursos, eventos, avisos e blocos de destaque.
- `.grade`: organiza vários `.card` em colunas que se ajustam ao tamanho da
  tela (mínimo 260px cada).

## Tom de voz

Direto e claro, como uma secretaria escolar bem organizada falando com
alunos, pais e comunidade: frases curtas, verbos no presente, sem gírias e
sem "linguagem de propaganda". Nunca "clique aqui" — o link já diz para
onde vai (ex.: "Veja a lista de cursos").

## Logo

Não há um logotipo em imagem ainda — o "logo" do site é o nome do colégio
junto de um ícone simples de araucária (desenhado em SVG dentro de
`compartilhado/componentes.js`, função `montarMenu`), na cor --cor-destaque.
Se o colégio tiver um brasão oficial, ele pode substituir esse ícone depois
([CONFIRMAR] com a secretaria se existe um brasão oficial para usar).

## Observações

- Motion: evitar animação decorativa em todo card/seção. Se alguma equipe
  quiser uma transição, usar no máximo uma por página, e só em resposta a
  uma ação da pessoa (abrir um menu, expandir uma seção) — não some sozinha
  ao rolar a página.
- Números (01/02/03): só usar quando o conteúdo for mesmo uma sequência
  (como a linha do tempo da equipe Colégio). Não usar como decoração.
