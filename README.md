# frameworks-frontend

## :handshake: Sobre a aplicação

A aplicação Voluntech é um projeto desenvolvido como Trabalho de Conclusão de Curso, requisito para obtenção do título de Técnologo em Sistemas para Internet no IFSul Campus Charqueadas.

---

O projeto entregue na disciplina de **Frameworks Front-end** consiste nas páginas iniciais da aplicação: Apresentação, Login, Cadastro e Perfil, desenvolvidas utilizando o Framework React. Para que fosse possível visualizar as telas da aplicação sem que houvesse necessidade de criar contas nas plataformas utilizadas (MongoDB e Cloudinary) e configurá-las, as chamadas para os endpoints estão comentadas, de modo que cadastro e login não são realmente validados (os dados preenchidos serão apenas exibidos em um Alert).

## :computer: Sobre o código desenvolvido

O código foi desenvolvido seguindo uma abordagem baseada em componentes, criando elementos reutilizáveis com estilo padronizado fazendo uso da biblioteca `Styled Components`. Todos os componentes criados para a aplicação podem ser visualizados na pasta [components](voluntech/src/components), e as páginas estão na pasta [pages](voluntech/src/pages/). Todos os componentes e páginas desenvolvidos funcionam de maneira responsiva, podendo ser visualizados em qualquer tamanho de tela.

A definição das rotas da aplicação podem ser encontradas no arquivo [routes/index](voluntech/src/routes/index.tsx), e estão divididas entre: rotas de autenticação (login e cadastro), que podem ser acessadas apenas sem o usuário estar logado; rotas privadas (perfil), que podem ser acessadas apenas após realizar login; e rotas livres (apresentação), que podem ser acessadas por qualquer usuário, logado ou não. Para a definição de rotas e navegações entre páginas, foi utilizada a biblioteca `react-router-dom`. Também foi feito o uso de `Context API` para definir dados que devem poder ser acessados por toda a aplicação. Neste caso foi criado o arquivo [authContext](voluntech/src/contexts/AuthContext.tsx), responsável por armazenar globalmente os dados do usuário que realizou login na aplicação.

Abaixo estão listadas as páginas desenvolvidas e suas funcionalidades:

### 1. Tela de Apresentação

A tela de apresentação é simples, apenas exibe o logo da aplicação e uma breve descrição para apresentar o objetivo da aplicação ao usuário, junto a um botão que redireciona para a tela de login.

### 2. Tela de Login

A tela de login apresenta o formulário para que o usuário informe seus dados e acesse a aplicação. Os dados desse formulário são acessados por meio de `states`, que controlam o estado dos componentes com eventos de input. Além disso, a imagem apresentada na versão desktop da tela é sorteada aleatoriamente, então cada vez que a tela é recarregada uma imagem diferente é exibida.

### 3. Tela de cadastro

A tela de cadastro é a mais complexa presente na aplicação. Por ser dividida em várias etapas, é feito o uso de renderização condicional para definir qual passo do cadastro deve ser exibido ao usuário, manipulando assim os elementos apresentados na página. Assim como na tela de Login, a tela de cadastro também faz uso de estados do React para armazenar os dados preenchidos no formulário. O formulário também conta com diversos cenários de validação utilizando os próprios atributos do HTML, como `required` e `pattern`. A renderização condicional também é utilizada para exibir mensagens de erro.

Além disso, na etapa de cadastro de endereço é realizada uma requisição para a API ViaCEP após a digitação do CEP. Os demais campos são preenchidos automaticamente com os dados retornados pela API.

### 4. Tela de Perfil

A tela de perfil exibe as informações do usuário que está logado. Nesse caso, ao rodar a aplicação sem o back-end junto, serão apresentados dados estáticos da aplicação Voluntech. Também apresenta um botão para sair, para que o usuário realize logout da aplicação.

## :gear: Como executar

O front-end da aplicação pode ser encontrado na pasta `voluntech`. Basta entrar nela e rodar os comandos `npm install` para instalar as dependências e `npm start` para iniciar a aplicação.

Caso deseje rodar o projeto completo junto ao back-end, as instruções de configuração do back-end se encontram no README da pasta `voluntech-api`, e as do front-end se encontram no README da pasta `voluntech`. Também é necessário descomentar os códigos comentados nos arquivos `contexts/AuthContext.tsx`, `pages/Login/index.tsx`, `pages/Profile/index.tsx` e `pages/SignUp/index.tsx`.
