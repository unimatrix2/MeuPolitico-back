# Meu Político API

O API Rest da MeuPolítico é o primeiro API público para a busca de políticos e notícias de políticos
do Brasil. [Conheça nosso site!](https://meu-politico.netlify.app)

Nosso API possui rotas públicas para todos poderem buscar e acessar políticos e notícias de políticos.

## Rotas públicas:

| Endpoint | Função | Método |
| -------- | :----: | -----: |
| https://meu-politico-api.herokuapp.com/api/noticias/buscar/?busca=*SEU_QUERY_AQUI* |  Buscar notícias pela manchete | GET |
| https://meu-politico-api.herokuapp.com/api/politicos/buscar/?busca=*SEU_QUERY_AQUI* |  Buscar políticos pelo nome | GET |
| https://meu-politico-api.herokuapp.com/api/noticias/lista/:id | Listar uma notícia específica. Precisa passar o id da notícia como :id | GET |
| https://meu-politico-api.herokuapp.com/api/politicos/lista/:id | Listar um político específico. Precisa passar o id do político como :id | GET |

## Rotas privadas

| Endpoint | Função | Método |
| -------- | :----: | -----: |
| https://meu-politico-api.herokuapp.com/api/usuario/registro | Registrar um novo [Usuário](Modelos#Usuário) | POST |
| https://meu-politico-api.herokuapp.com/api/usuario/acesso | Gerar um token de acesso para acessar funções privadas | POST |
| https://meu-politico-api.herokuapp.com/api/usuario/token | Retorna informação do usuário autenticado | GET |
| https://meu-politico-api.herokuapp.com/api/usuario/privado/atualizar | Atualizar os dados do [Usuário](Modelos#Usuário) | PUT |

## Funções Privadas

| Endpoint | Função | Método |
| -------- | :----: | -----: |
| https://meu-politico-api.herokuapp.com/api/noticias/criar | Registra uma nova [Notícia](Modelos#Notícia) | POST |
| https://meu-politico-api.herokuapp.com/api/noticias/editar/:id | Atualiza os dados de uma [Notícia](Modelos#Notícia). Precisa passar o id do político como :id | PUT |
| https://meu-politico-api.herokuapp.com/api/noticias/lista | Lista todas as notícias registradas pelo usuário autenticado | GET |
| https://meu-politico-api.herokuapp.com/api/politicos/criar | Registra um novo [Político](Modelos#Notícia) | POST |
| https://meu-politico-api.herokuapp.com/api/politicos/editar/:id | Atualiza os dados de um [Político](Modelos#Notícia). Precisa passar o id do político como :id | PUT |
| https://meu-politico-api.herokuapp.com/api/politicos/lista | Lista todos os políticos registrados pelo usuário autenticado | GET |
