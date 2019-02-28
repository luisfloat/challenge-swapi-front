# Desafio - Desenvolvedor Frontend

Este documento apresenta o desafio técnico pelo qual um candidato a desenvolvedor frontend da BRy Tecnologia deve passar durante o processo seletivo.

Os itens em avaliação são divididos em itens fundamentais (cujo não cumprimento implica desqualificação automática) e itens desejáveis (que não são obrigatórios, mas serão observados e pesarão no processo).

Requisitos **fundamentais** para todos os níveis:
* Interpretação de texto
* Interpretação de requisitos
* Capacidade de resolução do problema proposto
* Atendimento aos requisitos
* Familiaridade com ferramentas de versionamento de código (Git)
* Estruturação do código

Requisitos **desejáveis** para todos os níveis:
* Legibilidade de código
* Documentação de código
* Testes unitários e de integração
* Familiaridade com ferramentas de desenvolvimento frontend

## Como Realizar o Desafio

1. Se não possuir uma conta no [GitLab](https://gitlab.com), cadastre-se.
2. Informe seu nome de usuário do *GitLab* ao representante da BRy responsável pelo seu processo seletivo, para que sejam dadas permissões para seu usuário.
3. Faça um *fork* do projeto [desafio-frontend](https://gitlab.com/brytecnologia-team/selecao/desafio-frontend) - isso criará um projeto idêntico no seu repositório pessoal.
4. Acesse seu *fork*. Observe que, no diretório raiz do projeto, há um arquivo **ENUNCIADO.md** de conteúdo idêntico a este documento.
5. No seu *fork*, acesse o menu *Settings > Members*.
6. Adicione o usuário **brytecnologia** como membro *Guest* do projeto, para que possamos acompanhar seu desenvolvimento.
7. Clone o projeto em sua máquina.
8. Visualize o projeto gráfico do que deve ser desenvolvido [aqui](https://www.figma.com/file/f8RxcKAz9JSWuRgM0DFtzxmJ/teste-front-end?node-id=11%3A117). O projeto gráfico é igual para todos os níveis, então preste a atenção nos requisitos de cada nível.
9. Abrir a documentação da [SWAPI](https://swapi.co) (Necessário apenas para Pleno ou Sênior)
10. Mãos a obra!
11. Havendo quaisquer instruções especiais para execução do projeto, descreva-as num arquivo **README.md** na raiz do projeto.
12. Ao final do desafio, faça um *push* do seu projeto e notifique o representante da BRy responsável pelo seu processo seletivo de que você terminou o desafio.

Observações: 

* Pedimos que trabalhe apenas no branch *master* - não será relevante, para a avaliação, o uso de branches de desenvolvimento.
* Se nenhum aviso de finalização for dado até o fim do prazo para cumprimento do desafio, o conteúdo do branch *master* será considerado como a entrega para a avaliação. 

## Requisitos
Estes são os requisitos de todas as páginas envolvidas no desafio para todos os níveis. Mais adiante, cada nível descreverá as restrições do que deve ser desenvolvido.

### Página inicial:
* Enquanto os dados dos filmes e/ou personagens estiverem sendo carregados do backend (SWAPI), um "content loading" deve ser exibido conforme especificado no projeto gráfico.
* A mudança de página dos carrosséis devem possuir animações.
* Os carrosséis devem possuir [rolagem infinita](https://blackpixel.com/writing/Carousel.gif)
* Sobre o "carrossel de filmes":
  * Exibe no máximo 3 filmes por página do carrossel.
  * Como são apenas 7 filmes, todos os filmes podem ser carregados de uma vez.
* Sobre o "carrossel de personagens":
  * Exibe no máximo 4 personagens por página de carrossel.
  * Os personagens devem ser carregados de 10 em 10 conforme o usuário avança páginas no carrossel, e enquanto mais personagens estão sendo carregados da API, o content loading deve ser exibido.
* A API não disponibiliza imagens dos filmes e dos personagens, então utilize os ícones e imagens que estão no projeto gráfico.
* Deve possuir um campo de busca que filtra tanto os registros dos filmes quanto dos personagens.
  * Para os filmes, o filtro deve ser realizado pelo título.
  * Para os personagens, o filtro deve ser realizado pelo nome.
  * A busca deve ser realizada conforme o usuário digita, utilizando a técnica ["debounce search input"](https://www.google.com/search?q=debounce+search+input) para evitar que uma requisição seja enviada a cada tecla digitada.
  * O "content loading" deve ser exibido enquanto carrega o resultado da busca.
* Ao clicar em um card de um filme, a página de detalhes deve ser exibida.

### Página de detalhes de um filme:
* A página deve ser exibida imediatamente com o "content loading" após o clique no card do filme.
* A lista de personagens deve possuir o mesmo comportamento da pagina inicial, com a diferença que exibe apenas os personagens presentes no filme.
* Sobre a area de "Reviews":
  * Os campos "Name", "Email" e "Comment" são obrigatórios.
  * O campo "Email" deve ser um endereço de e-mail válido.
  * Os comentários adicionados podem ser armazenados no storage do navegador.
  * Os comentários mais recentes devem aparecer no topo.

## Desenvolvedor Frontend Júnior

### Restrições
* Não é obrigatório consumir a API, bastam páginas estáticas.
* O campo para pesquisa da página inicial não é necessário.
* A area de "Reviews" pode ser estática.

### Requisitos fundamentais
1. **Fidelidade visual**: capacidade de desenvolver páginas exatamente conforme especificado pelos designers;
2. **Responsividade**: capacidade de desenvolver páginas que são responsivas, ou seja, que adaptam-se para melhor visualização em dispositivos com diferentes resoluções. (Desktop e Mobile)
3. **Iconografia e ilustrações em SVG**: capacidade de posicionar ícones e ilustrações no formato SVG(pode ser exportado do projeto gráfico)

### Requisitos desejáveis
1. **API REST**: capacidade de consumir a API REST para obter os dados dos filmes e personagens de forma paginada.
2. **Single Page Application**: utilização de um framework ou biblioteca JavaScript de frontend, orientado a componentes para o desenvolvimento de uma SPA, sendo preferencialmente React ou Angular 7.

## Desenvolvedor Frontend Pleno

### Requisitos fundamentais
Todos os requisitos fundamentais do Desenvolvedor Frontend Junior e mais:
1. **API REST**: capacidade de consumir a API REST para obter os dados dos filmes e personagens de forma paginada.
2. **Single Page Application**: utilização de um framework ou biblioteca JavaScript de frontend, orientado a componentes para o desenvolvimento de uma SPA, sendo preferencialmente React ou Angular 7.

### Requisitos desejáveis
1. **Request cache**: capacidade de evitar requisições redundantes para a API.
2. **Flux pattern**: capacidade de utilizar bibliotecas que implementam o padrão [flux](https://www.google.com/search?q=flux+pattern),como [Redux](https://redux.js.org/) ou [MobX](https://mobx.js.org/getting-started.html).

## Desenvolvedor Frontend Senior

### Requisitos fundamentais
Todos os requisitos fundamentais do Desenvolvedor Frontend Junior, Pleno e mais:
1. **Request cache**: capacidade de evitar requisições redundantes para a API.
2. **Flux pattern**: capacidade de utilizar bibliotecas que implementam o padrão [flux](https://www.google.com/search?q=flux+pattern),como [Redux](https://redux.js.org/) ou [MobX](https://mobx.js.org/getting-started.html).

### Requisitos desejáveis
1. **Programção reativa**: familiaridade com bibliotecas de desenvolvimento reativo como o [RXJS](https://rxjs-dev.firebaseapp.com/)
2. **Animação do content loading**: capacidade de desenvolver uma animação no content loading inspirada no do Facebook, como mostra este [GIF](https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1252/ksCklnfNtW.gif)
3. **Progressive Web Application**: capacidade de desenvolver aplicações Web que se comportam como aplicativos nativos (PWA).