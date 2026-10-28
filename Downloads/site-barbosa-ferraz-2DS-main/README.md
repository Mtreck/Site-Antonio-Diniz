# Novo site do Colégio Estadual Barbosa Ferraz

Projeto da turma do 2º ano do Técnico em Desenvolvimento de Sistemas. O site é feito com HTML, CSS e JavaScript puros e pode ser aberto sem servidor ou instalação.

Antes de editar, leia [REGRAS.md](REGRAS.md). Cada equipe trabalha na própria pasta; arquivos globais e alterações em outras páginas precisam da autorização do professor.

## Como abrir o site

Dê dois cliques no `index.html` da raiz. Ele encaminha para a página Início.

## Estrutura do projeto

```text
site-barbosa-ferraz/
  README.md               este arquivo
  REGRAS.md               regras do projeto (cole na IA)
  PROMPT-INICIAL.md       modelo de prompt para a IA
  index.html              redireciona para a página Início
  main.css                estilos e variáveis globais
  main.js                 menu, rodapé e recursos compartilhados
  imagens-principais/     imagens usadas em mais de uma página
  paginas/
    identidade/           guia de estilo e fichas da equipe
    inicio/               página inicial
    colegio/
    cursos/
    eventos/
    downloads/
    contato/
```

Cada pasta de página contém `index.html`, `pagina.css` e `pagina.js`. Imagens e fichas específicas ficam em subpastas da equipe.

## Organização dos arquivos principais

```text
index.html    conteúdo da página (dentro do <main>)
pagina.css    estilo só desta página
pagina.js     JavaScript só desta página
imagens/      imagens da equipe
```

- `main.css` define as variáveis, os estilos globais, o menu, os botões e o rodapé.
- `main.js` monta o menu e o rodapé para todas as páginas.

- `main.css` define as variáveis, os estilos globais, o menu, os botões e o rodapé.
- `main.js` monta o menu e o rodapé para todas as páginas.
- `pagina.css` e `pagina.js` contêm somente os estilos e comportamentos específicos daquela página.
- As páginas carregam `main.css` e `main.js` primeiro e, em seguida, seus próprios arquivos.

Os arquivos principais ficam na raiz e são mantidos pelo professor, com apoio da equipe Identidade visual. Não altere esses arquivos sem autorização.

## Trabalho das equipes

1. Faça um fork do repositório no GitHub.
2. Atualize a branch principal do seu fork antes de começar uma atividade.
3. Crie uma branch com o nome combinado com o professor.
4. Edite somente a pasta da sua equipe, salvo autorização explícita para uma mudança compartilhada.
5. Confira `git status` antes de enviar alterações. Se aparecer algo fora da sua pasta sem autorização, consulte o professor.
6. Abra um Pull Request e preencha o modelo em `.github/PULL_REQUEST_TEMPLATE.md`.

O projeto não usa npm, frameworks, bibliotecas externas ou `fetch`.

### 2. Antes de cada entrega: sincronize o seu fork

No GitHub, abra o SEU fork e clique em **Sync fork** e depois em **Update branch**.
Depois, no terminal, dentro da pasta do projeto:

```bash
git checkout main
git pull
```

### 3. Crie a branch da equipe

```bash
git checkout -b equipe-<nome>
```

Exemplo: `git checkout -b equipe-cursos`

### 4. Edite os arquivos

Somente dentro da pasta da sua equipe.

### 5. Confira e envie

```bash
git status
git add .
git commit -m "<equipe>: o que mudou"
git push origin equipe-<nome>
```

No `git status`, confira que só aparecem arquivos da sua pasta. Se aparecer arquivo de outra pasta, chame o professor antes do `git add`.

### 6. Abra o Pull Request

No GitHub, clique em **Compare & pull request**, use o título `[Equipe] nome da entrega` e preencha o modelo inteiro.

### Aviso sobre o login

No `git push`, o terminal pode pedir login. O GitHub não aceita a senha normal da conta:
pode abrir o navegador para você autorizar, ou pedir um **token** (Personal Access Token), que você cola no lugar da senha.
