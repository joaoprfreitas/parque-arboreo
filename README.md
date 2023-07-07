# parque-arboreo
Projeto de Engenharia de Software, em que o objetivo é criar um sistema para gerenciar o parque arbóreo da USP, permitindo que os usuários possam cadastrar, editar e remover árvores, além de adicionar riscos, imagens, tags e documentos a elas. Ainda, permite a gestão de usuários.\
O projeto foi elaborado por meio de um problema apresentado por um cliente. A partir disto, foram feitas entrevistas e reuniões com a cliente para definir os requisitos do sistema e o escopo a ser abordado no projeto.

## Integrantes
| Nome | Número USP
| ------ | ------ |
| João Pedro Rodrigues Freitas | 11316552
| Gabriel Akio Urakawa | 11795912
| Samuel Victorio Bernacci | 12703455
| Matheus Vellosa de Andrade | 12421725
| Jonathan Sanchez Minaya | 11333691

## O que foi implementado até o momento
- O projeto foi feito utilizando arquitetura MVC (Model, View, Controller).
- O banco de dados foi modelado de forma relacional.
- O Schema do banco de dados foi criado e implementado em PostgreSQL, com todas as restrições e chaves necessárias para abordar o problema fornecido pelo cliente.
- A comunicação do backend com o banco de dados foi implementada. Para fins de teste, foi utilizado o sistema do Neon, que permite a criação de um banco de dados PostgreSQL de forma gratuita.
- As rotas de acesso da API foram implementadas, com todas as operações necessárias para o funcionamento do sistema.
- As rotas e os meios de cadastro de usuário foram implementados no backend, com dados sensíveis criptografados no banco de dados.
- As rotas e os meios de gestão de usuário foram implementados no backend.
- As rotas e os meios de acesso à gestão de árvores (CRUD) foram implementados no backend, incluindo os filtros essenciais para busca das árvores no banco.
- As rotas e o mecanismo de gestão de riscos foram implementados no backend.
- As rotas e o mecanismo de gestão de imagens foram implementados no backend.
- As rotas e o mecanismo de gestão de documentos foram implementados no backend.
- Os mecanismos de filtros de busca de árvores foram implementados no backend.
- Os meios de links entre as árvores e os riscos, imagens e documentos foram implementados no backend.
- Os meios de acesso e gestão de tags foram implementados no backend.
- Os meios de acesso e gestão de histórico das árvores foram implementados no backend.
- O protótipo do produto foi desenvolvido, utilizando o Figma.
- Todas as rotas implementadas foram testadas utilizando o Postman e se comportaram conforme o esperado, evitando que erros pudessem crashar o backend.

### No frontend

#### Páginas
Home \
Login \
Cadastre-se \
Report \
Informações da Árvore

#### Componentes
Header e Footer presentes em todas as páginas do site

#### Funcionalidades
Barra de pesquisa responsiva e integrada com o banco de dados \
Cadastro de usuário no banco de dados \
Cadastro de report no banco de dados \
Página de informações da árvore com informações vindas do banco de dados



## Continuidade do projeto
- Geração e gestão de QRCodes específicos para cada árvore.
- Autenticaçao de login e senha para acesso ao sistema.
- Gestão de compensação ambiental no backend.
- Envio automático de emails para os usuários cadastrados.
- Requisitos não funcionais: acessibilidade, compatibilidade (interdispositivos) e segurança não foram tratados.

### No frontend
#### Páginas
Visualização de usuário \
Gestão de report \
Gestão de Árvores

#### Componentes
Todos os componente foram implementados

#### Funcionalidades
Validação de login \
CUD (Create, Update, Remove) de uma árvore \
CUD (Create, Update, Remove) de um usuário \
Exibição do Histórico da árvore na página de informação da árvore

## Testes das requisições
Importar para o postman o arquivo `Projeto arbóreo.postman_collection.json` localizado no diretório raiz.\


## Backend
### Setup

#### Caso não possua o npm e/ou node instalado, execute:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`\
`nvm ls-remote`\
`nvm install v18.16.1`

#### Instalar os pacotes necessários
`cd backend/`\
`npm install`

### Variável ambiente
Criar um arquivo `.env` na pasta `backend/` com o seguinte conteúdo:
```
DATABASE_URL="<Link_de_Conexão>"
```
No campo `<Link_de_Conexão>` deve ser inserido o link de conexão com o banco de dados.

### Gerar tabelas no banco
Execute todas as operações SQL presentes no arquivo `backend/sch.sql` no banco de dados.

### Iniciar cliente
`cd backend/`\
`npm start`

### -- Rotas --

#### Árvores
`GET /arvore` - Retorna o código todas as árvores cadastradas\
`GET /arvore/:codigo` - Retorna as informações da árvore que possui o código informado\
`DELETE /arvore/:codigo` - Remove a árvore que possui o código informado\
`POST /arvore` - Cadastra uma nova árvore\
`PUT /arvore/:codigo` - Atualiza as informações da árvore que possui o código informado

`POST /arvore/risco` - Adiciona um risco cadastrado a uma árvore existente\
`DELETE /arvore/risco` - Remove um risco cadastrado de uma árvore existente

`POST /arvore/imagem` - Adiciona uma imagem cadastrada a uma árvore existente\
`DELETE /arvore/imagem` - Remove uma imagem cadastrada de uma árvore existente

`POST /arvore/documento` - Adiciona um documento cadastrado a uma árvore existente\
`DELETE /arvore/documento` - Remove um documento cadastrada de uma árvore existente

`POST /arvore/historico` - Adiciona um risco ao histórico de uma árvore\
`DELETE /arvore/historico` - Remove um risco do histórica de uma árvore\
`GET /arvore/historico` - Lista o histórico de uma árvore e/ou data
`GET /arvore/historico/:arvore` - Lista o histórico de uma árvore

`POST /arvore/tag` - Adicionar uma tag a uma árvore\
`DELETE /arvore/tag` - Remover uma tag de uma árvore\
`GET /arvore/tag/:arvore` - Buscar todas as tags de uma árvore\
`GET /arvore/tag` - Buscar árvores por tags

#### Documentos

`POST /documento/` - Cria e cadastra um novo documento com dados recebidos\
`GET /documento/` -  Lista todos documentos \
`GET /documento/:id` -  Lista documento relativo ao ID \
`PUT /documento/:id` -  Atualiza documento relativo ao ID com novos dados \
`DELETE /documento/:id` -  Deleta documento relativo ao ID

#### Imagens
`POST /imagem/` - Cadastra uma nova imagem\
`GET /imagem/` -  Lista todas imagens \
`GET /imagem/:id` -  Lista imagem relativa ao ID \
`DELETE /imagem/:id` -  Deleta imagem relativa ao ID

#### Report
`POST /report/` - Cria e cadastra um novo report com dados recebidos\
`GET /report/` -  Lista todos reports \
`GET /report/:numero` -  Lista report relativo ao numero \
`PUT /report/:numero` -  Atualiza report relativo ao numero com novos dados \
`DELETE /report/:numero` -  Deleta report relativo ao numero

#### Risco
`POST /risco/` - Cria e cadastra um novo risco com dados recebidos\
`GET /risco/` -  Lista todos riscos \
`GET /risco/:idRisco` -  Lista risco relativo ao ID \
`DELETE /risco/:idRisco` -  Deleta risco relativo ao ID

#### Usuário
`POST /usuario/` - Cria e cadastra um novo usuario com dados recebidos\
`GET /usuario/` -  Lista todos usuarios \
`GET /usuario/:email` -  Lista usuario relativo ao email \
`PUT /usuario/:email` -  Atualiza usuario relativo ao email com novos dados \
`DELETE /usuario/:email` -  Deleta usuario relativo ao email\
`PUT /usuario/senha/:email` -  Atualiza senha de usuario relativo ao email com novos dados \
`PUT /usuario/admin/:email` -  Atualiza cargo de usuario relativo ao email com novos dados

## Frontend
### Setup

#### Caso não possua o npm e/ou node instalado, execute:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`\
`nvm ls-remote`\
`nvm install v18.16.1`

#### Instalar os pacotes necessários
`cd frontend/`\
`npm install`

### Iniciar o servidor de desenvolvimento do frontend
`npm start`
