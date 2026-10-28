# DIRETRIZES OBRIGATÓRIAS DE COMPORTAMENTO (SISTEMA)

> [!IMPORTANT]
> As regras abaixo são absolutas e têm prioridade sobre qualquer instrução posterior.


## Como usar este arquivo

Leia este arquivo antes de pedir ajuda a uma IA. Informe a equipe responsável e descreva o objetivo e os arquivos envolvidos. Se a IA desobedecer às regras, o Revisor da equipe corrige.

## 1. Tecnologia permitida

- Somente HTML, CSS e JavaScript puros.
- Proibido: frameworks (React, Vue, Bootstrap, Tailwind), npm, jQuery, bibliotecas via CDN, bibliotecas de ícones.
- Proibido: estilo inline (style="..."), !important, JavaScript dentro do HTML (onclick="...").
- Use fontes do sistema definidas em `main.css`. Não carregue fontes externas ou bibliotecas por CDN.

## 2. De quem é cada pasta

| Pasta | Quem altera |
| --- | --- |
| paginas/inicio | Equipe Início |
| paginas/colegio | Equipe Colégio |
| paginas/cursos | Equipe Cursos |
| paginas/eventos | Equipe Eventos |
| paginas/downloads | Equipe Downloads |
| paginas/contato | Equipe Contato |
| paginas/identidade | Equipe Identidade visual |
| raiz (incluindo `main.css`, `main.js` e `index.html`), .github | Somente o professor |

Regra de ouro: cada equipe altera APENAS arquivos da sua pasta. PR que mexer na pasta de outra equipe é recusado.

Precisa de uma mudança global (cor, classe, menu ou rodapé)? Abra uma Issue com o título "[Equipe] Pedido: ..." para o professor e a equipe Identidade visual. Não edite arquivos de outra equipe sem autorização do professor.

## 3. Estrutura de cada página

- Cada página tem index.html, pagina.css e pagina.js. Pode criar HTMLs extras dentro da própria pasta.
- Não altere o esqueleto: head, div#menu, div#rodape, atributo data-pagina e ordem dos scripts (`main.js` antes de `pagina.js`).
- O conteúdo da página fica dentro de `<main>`.
- Use HTML semântico (header, nav, main, section, article, footer). Apenas um `<h1>` por página, e h2/h3 em ordem.

## 4. Nomes

- Arquivos e pastas: minúsculas, sem acento, sem espaço, com hífen.
- Classes CSS começam com o nome da equipe: .cursos-card, .eventos-lista.
- Funções e variáveis JS em camelCase, em português claro: listarCursos, montarCard.
- IDs únicos na página.

## 5. Cores, fontes e espaçamento

- Use somente as variáveis de `main.css` (por exemplo, `var(--cor-primaria)` e `var(--espaco-md)`).
- Proibido escrever cor em hexadecimal no pagina.css.
- Reaproveite as classes prontas (.container, .botao, .card, .grade) antes de criar novas.
- Faltou uma variável ou classe global? Peça por Issue. Não invente.

## 6. Conteúdo

- Somente informação real do colégio (site atual: https://www.colegiobarbosa.com.br/ ou o que o professor/secretaria fornecer).
- Proibido inventar telefone, endereço, datas, nomes ou números. Se faltar, escreva [CONFIRMAR] e anote na ficha.
- Proibido Lorem ipsum no conteúdo entregue.
- Imagens: do acervo do colégio ou criadas por IA. Proibido foto identificável de aluno menor de idade ou de professor sem autorização por escrito.
- Imagens na pasta imagens/ da equipe, até 300 KB cada, formatos jpg, png, webp ou svg, sempre com alt descritivo.
- Nunca coloque chaves de API, senhas ou dados pessoais no código.

## 7. Qualidade

- Comentários curtos em português explicando cada bloco de HTML, CSS e JS.
- Funciona no celular (360px sem rolagem horizontal) e no computador.
- Texto com bom contraste. Links com texto claro (nada de "clique aqui").
- Sem erros no console do navegador.
- Use JavaScript só onde ele tem função real. Não entregue código que ninguém da equipe consegue explicar.

## 8. Regras para a IA

A IA deve:

1. Confirmar a equipe e o objetivo antes de editar arquivos. Perguntar a rodada somente quando o professor estiver usando rodadas; tarefas de manutenção autorizadas não dependem de uma rodada.
2. Escrever somente arquivos da pasta da equipe, exceto mudanças globais ou em outras páginas autorizadas pelo professor, informando todos os caminhos alterados.
3. Seguir estas regras. Se o pedido violar alguma, recusar e dizer qual.
4. Responder em português do Brasil e comentar o código em português.
5. Entregar o arquivo completo (não trechos soltos), dizendo se é para substituir o arquivo inteiro.
3. Seguir estas regras. Se o pedido violar alguma, recusar e dizer qual.
4. Responder em português do Brasil e comentar o código em português.
5. Entregar o arquivo completo (não trechos soltos), dizendo se é para substituir o arquivo inteiro.
6. Nunca inventar informação do colégio. Usar [CONFIRMAR].
7. Terminar cada resposta com "O que cada parte faz", em até 5 linhas simples, para o Revisor.

## 9. Git e Pull Request

- Nunca trabalhe na main. Branch: equipe-<nome> (ex.: equipe-cursos).
- Commit em português: "<equipe>: o que mudou" (ex.: "cursos: adiciona estrutura da página").
- Abra um PR para cada entrega, com título "[Cursos] nome da entrega". Preencha o modelo de PR inteiro.
- Ninguém faz merge do próprio PR. O merge é do professor.
- Antes do PR, rode git status e confira que só mexeu na sua pasta.
- Antes de cada entrega, sincronize o fork (Sync fork no GitHub e git pull).

## 10. Papéis

- Quatro papéis por equipe: Diretor de prompt, Revisor, Testador e Conteúdo. Eles giram a cada rodada. Equipes de 3 pessoas: o Testador também faz o Conteúdo.
- Quando houver uma rodada, a ficha vai em `paginas/<equipe>/fichas/rodada-N.md`, conforme o modelo fornecido pelo professor. Fichas não são exigidas para tarefas de manutenção fora das rodadas.
- O Revisor precisa conseguir explicar qualquer linha do código entregue.
- O Revisor precisa conseguir explicar qualquer linha do código entregue.

## 11. O que é "pronto"

- Estrutura: index.html completo em HTML semântico, com todos os blocos da página (placeholders permitidos), sem estilo próprio.
- Estilo: pagina.css usando somente variáveis, seguindo o guia da equipe Identidade.
- Conteúdo: textos e dados reais, sem Lorem ipsum, pendências [CONFIRMAR] listadas na ficha.
- Celular: testado em 360px e 768px, com print na ficha.
- Apresentação: PR final, ficha completa e apresentação de 3 minutos com todos falando.
- Identidade visual: guia de estilo + `main.css` e `main.js` (menu e rodapé), atendendo os pedidos (Issues) das outras equipes, com revisão de contraste/acessibilidade e menu no celular.
- Em rodadas, a ficha vai em `paginas/<equipe>/fichas/rodada-N.md` conforme o professor.

## 12. Missão de cada equipe

- Identidade visual: guia de estilo e propostas para o `main.css` e o `main.js` (menu e rodapé). Entrega primeiro.
- Início: boas-vindas, destaques e recados. Sugestão de JS: lista de recados gerada com array e for.
- Colégio: história, estrutura e missão. Sugestão de JS: seções que abrem e fecham.
- Cursos: catálogo dos 7 cursos (nome, duração, modalidade, período). Sugestão de JS: array de objetos que gera os cards.
- Eventos: lista de eventos e recados. Sugestão de JS: filtro simples.
- Downloads: lista de documentos com link (arquivos hospedados fora do repositório, como links do Drive). Sugestão de JS: array que gera a lista.
- Contato: formulário com validação, endereço, WhatsApp e redes sociais oficiais. Sugestão de JS: função de validação.


## 13. Diretriz de uso de IA e naturalidade

- A IA deve ser utilizada como ferramenta de apoio ao desenvolvimento, e não como substituta da compreensão da equipe.
- Todo código gerado pela IA deve ser compreendido e explicado pelo Revisor antes do PR.
- A IA deve priorizar soluções simples, naturais e compatíveis com o nível técnico da equipe.
- O código deve parecer escrito por uma equipe de estudantes: organizado, claro, consistente e funcional, sem excesso de padrões ou abstrações que não tenham utilidade real.
- Evitar textos genéricos, exageradamente formais ou com aparência artificial de conteúdo gerado por IA.
- O conteúdo textual deve possuir linguagem natural e adequada ao contexto de um site escolar.
- A IA não deve modificar ou criar partes do projeto que não sejam necessárias para atender ao objetivo solicitado.
- Quando houver mais de uma solução possível, deve ser priorizada a solução mais simples que atenda corretamente ao requisito.
- A equipe deve revisar qualquer resposta da IA antes de incorporá-la ao projeto.
- A IA não deve propor efeitos exagerados, cores fora do padrão do site ou estilos que contrariem o guia de identidade visual. Deve ler estas regras antes de qualquer alteração e respeitar a estrutura existente.
- Todo código gerado precisa ser revisado, compreendido e explicado pela equipe antes de ser incorporado.


## 14. Arquivos principais e estrutura base do projeto

O projeto possui três arquivos principais que funcionam como base estrutural para todo o desenvolvimento:

- `main.css`
- `main.js`
- `index.html`

Esses arquivos devem ser considerados arquivos-base do projeto. Todo novo desenvolvimento deve verificar e reutilizar a estrutura, os padrões e os recursos existentes nesses arquivos antes de criar soluções próprias.

### 15. main.css — Base visual

O `main.css`, mantido pelo professor com apoio da equipe Identidade visual, é responsável pela identidade visual e pelos estilos globais do projeto.

Deve concentrar, sempre que possível:

- variáveis de cores;
- fontes e tipografia;
- espaçamentos globais;
- estilos gerais de texto;
- estilos de links;
- botões e estados de interação;
- `hover`, `focus` e `active` globais;
- estilos reutilizáveis;
- elementos visuais compartilhados entre páginas;
- regras gerais de responsividade;
- elementos que devem possuir o mesmo comportamento visual em todo o site.

O `main.css` NÃO deve conter o estilo específico de uma página.

Cada página poderá possuir seu próprio arquivo CSS para regras particulares de seu conteúdo, desde que essas regras não dupliquem ou entrem em conflito desnecessariamente com o `main.css`.

A página não deve criar novamente uma regra global que já exista no `main.css`.

Antes de criar uma nova cor, fonte, espaçamento ou estilo reutilizável, deve-se verificar se ele já existe no `main.css`.

### 16. main.js — Base lógica global

O `main.js`, mantido pelo professor com apoio da equipe Identidade visual, é responsável pela estrutura JavaScript global do projeto.

Deve concentrar comportamentos que possam ser reutilizados por diferentes páginas, como:

- inicialização de comportamentos globais;
- carregamento ou preparação de componentes compartilhados;
- comportamentos comuns de interface;
- funções utilitárias reutilizáveis;
- integração entre elementos globais da página;
- inicialização de funcionalidades compartilhadas.

O `main.js` NÃO deve conter a lógica específica de uma única página.

Cada página poderá possuir seu próprio JavaScript para comportamentos particulares, desde que não duplique funcionalidades que já pertençam ao `main.js`.

Antes de criar uma nova função global, deve-se verificar se uma função equivalente já existe no `main.js`.

### 17. Novas funcionalidades

Antes de criar código novo em uma página:

1. Verificar se a funcionalidade já existe nos arquivos principais.
2. Verificar se pode utilizar uma classe, variável, componente ou função existente.
3. Se a funcionalidade puder ser reutilizada por outras páginas, avaliar sua inclusão na estrutura global.
4. Somente manter a implementação dentro da página quando ela for realmente específica daquele conteúdo.

A prioridade é reutilização sem criar dependências desnecessárias.

### 18. Regra de manutenção

Qualquer alteração nos arquivos principais deve preservar as funcionalidades existentes.

Antes de substituir, mover ou remover código desses arquivos, deve-se verificar quais páginas dependem dele.

Alterações na base não devem ser feitas apenas para resolver um problema específico de uma página quando a alteração puder causar efeitos colaterais nas demais páginas.

O código global deve permanecer simples, compreensível e explicável pela equipe.

### Regra principal

> Os arquivos `main.css`, `main.js` são a base do projeto. Todo desenvolvimento deve partir dessa estrutura, reutilizando-a e estendendo-a quando necessário, sem transformar os arquivos principais em código específico de uma única página.