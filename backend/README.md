# backend

### Setup

#### Caso não possua o npm e/ou node instalado, execute:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`\
`nvm ls-remote`\
`nvm install v18.16.1`

#### Instalar os pacotes necessários
`cd backend/`\
`npm install`

### Iniciar cliente
`cd backend/`\
`npm start`

### Rotas

#### Árvores
`GET /arvore` - Retorna o código todas as árvores cadastradas\
`GET /arvore/:codigo` - Retorna as informações da árvore que possui o código informado\
`DELETE /arvore/:codigo` - Remove a árvore que possui o código informado\
`POST /arvore` - Cadastra uma nova árvore\
`PUT /arvore/:codigo` - Atualiza as informações da árvore que possui o código informado\

`POST /arvore/risco` - Adiciona um risco cadastrado a uma árvore existente\
`DELETE /arvore/risco` - Remove um risco cadastrado de uma árvore existente\

`POST /arvore/imagem` - Adiciona uma imagem cadastrada a uma árvore existente\
`DELETE /arvore/imagem` - Remove uma imagem cadastrada de uma árvore existente\

`POST /arvore/documento` - Adiciona um documento cadastrado a uma árvore existente\
`DELETE /arvore/documento` - Remove um documento cadastrada de uma árvore existente\

`POST /arvore/historico` - Adiciona um risco ao histórico de uma árvore\
`DELETE /arvore/historico` - Remove um risco do histórica de uma árvore\
`GET /arvore/historico` - Lista o histórico de uma árvore e/ou data\

`POST /arvore/tag` - Adicionar uma tag a uma árvore\
`DELETE /arvore/tag` - Remover uma tag de uma árvore\
`GET /arvore/tag/:arvore` - Buscar todas as tags de uma árvore\
`GET /arvore/tag` - Buscar árvores por tags\