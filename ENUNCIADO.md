# Desafio - Desenvolvedor Front-end Pleno

Este documento apresenta o desafio técnico pelo qual um candidato a desenvolvedor front-end da BRy Tecnologia deve passar durante o processo seletivo.

Os itens em avaliação são divididos em itens fundamentais (cujo não cumprimento implica desqualificação automática) e itens desejáveis (que não são obrigatórios, mas serão observados e pesarão no processo).

Requisitos **fundamentais**:
* Interpretação de texto
* Interpretação de requisitos
* Capacidade de resolução do problema proposto
* Atendimento aos requisitos da aplicação
* Familiaridade com ferramentas de versionamento de código (Git)
* Estruturação do código

Requisitos **desejáveis**:
* Legibilidade de código
* Documentação de código
* Testes unitários
* Familiaridade com ferramentas de desenvolvimento front-end

## Como Realizar o Desafio

1. Se não possuir uma conta no [GitLab](https://gitlab.com), cadastre-se.
2. Informe seu nome de usuário do *GitLab* ao representante da BRy responsável pelo seu processo seletivo, para que sejam dadas permissões para seu usuário.
3. Faça um *fork* do projeto [desafio-frontend-pleno](https://gitlab.com/brytecnologia-team/selecao/desafio-frontend-pleno) - isso criará um projeto idêntico no seu repositório pessoal.
4. Acesse seu *fork*. Observe que, no diretório raiz do projeto, há um arquivo **ENUNCIADO.md** de conteúdo idêntico a este documento.
5. No seu *fork*, acesse o menu *Settings > Members*.
6. Adicione o usuário **brytecnologia** como membro *Maintainer* do projeto, para que possamos acompanhar seu desenvolvimento.
7. Clone o projeto em sua máquina.
8. Crie uma conta e/ou autentique-se no [Figma](https://www.figma.com/) para acessar o projeto gráfico utilizando este [link](https://www.figma.com/file/yWrBerebGXbyqPnXG5ZKWE/teste-front-end?node-id=0%3A1).
9. Abrir a documentação da [SWAPI](https://swapi.bry.com.br)
10. Mãos a obra!
11. Havendo quaisquer instruções especiais para execução do projeto, descreva-as num arquivo **README.md** na raiz do projeto.
12. Ao final do desafio, faça um *push* do seu projeto e notifique o representante da BRy responsável pelo seu processo seletivo de que você terminou o desafio.

Observações: 

* Pedimos que trabalhe apenas no branch *master* - não será relevante, para a avaliação, o uso de branches de desenvolvimento.
* Se nenhum aviso de finalização for dado até o fim do prazo para cumprimento do desafio, o conteúdo do branch *master* será considerado como a entrega para a avaliação. 

## Requisitos da aplicação

Requisitos **fundamentais**:
* Será considerado o desenvolvimento com fidelidade ao projeto gráfico. Observe a página Instruções no projeto.
* Projeto mobile first e responsivo.
* Utilizar imagens em SVG. 
* Capacidade de consumir a API REST para obter os dados dos filmes e personagens de forma paginada.
* Utilizar um framework ou biblioteca JavaScript de front-end, orientado a componentes para o desenvolvimento de uma Single Page Application, sendo preferencialmente React ou Angular 7.

Requisitos **desejáveis**:
* Capacidade de evitar requisições redundantes para a API.
* Desenvolver uma animação no content loading inspirada no do Facebook, como mostra este [GIF](https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1252/ksCklnfNtW.gif).

Estes são os requisitos de todas as páginas envolvidas no desafio:

* **Página inicial**:
  * Enquanto os dados dos filmes e/ou personagens estiverem sendo carregados do backend (SWAPI), um "content loading" deve ser exibido conforme especificado no projeto gráfico.
  * A mudança de página dos carrosséis devem possuir animação de rolagem tipicas de carrosséis.
  * Os carrosséis devem possuir [rolagem infinita](https://blackpixel.com/writing/Carousel.gif)
  * Sobre o "carrossel de filmes":
    * Exibe no máximo 3 filmes por página do carrossel.
    * Como são apenas 7 filmes, todos os filmes podem ser carregados de uma vez.
  * Sobre o "carrossel de personagens":
    * Exibe no máximo 4 personagens por página de carrossel.
    * Os personagens devem ser carregados de 10 em 10 conforme o usuário avança páginas no carrossel, e enquanto mais personagens estão sendo carregados da API, o content loading   deve ser exibido.
  * A API não disponibiliza imagens dos filmes e dos personagens, então utilize os ícones e imagens que estão no projeto gráfico.
  * Deve possuir um campo de busca que filtra tanto os registros dos filmes quanto dos personagens.
    * Para os filmes, o filtro deve ser realizado pelo título.
    * Para os personagens, o filtro deve ser realizado pelo nome.
    * O "content loading" deve ser exibido enquanto carrega o resultado da busca.
  * Ao clicar em um card de um filme, a página de detalhes deve ser exibida.

* **Página de detalhes de um filme**:
  * A página deve ser exibida imediatamente com o "content loading" após o clique no card do filme.
  * A lista de personagens deve possuir o mesmo comportamento da pagina inicial, com a diferença que exibe apenas os personagens presentes no filme.
  * Sobre a area de "Reviews":
    * Os campos "Name", "Email" e "Comment" são obrigatórios.
    * O campo "Email" deve ser um endereço de e-mail válido.
    * Os comentários adicionados podem ser armazenados no storage do navegador.
    * Os comentários mais recentes devem aparecer no topo.
