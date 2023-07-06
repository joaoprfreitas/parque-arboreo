# backend

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

### Rotas

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
