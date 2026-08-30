# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação de terminal desenvolvida com Node.js e TypeScript. O projeto consulta a PokeAPI para buscar informações de Pokémon por nome ou ID e permite organizar os Pokémon encontrados em um catálogo local durante a execução da aplicação.

O projeto foi desenvolvido como mini-projeto do Módulo 01, com foco na prática de TypeScript, programação assíncrona, consumo de API, classes, arrays e organização de código.

## Objetivo

O objetivo do projeto é criar uma aplicação back-end simples capaz de:

* Consultar a PokeAPI;
* Buscar Pokémon pelo nome ou ID;
* Transformar os dados recebidos da API em um objeto simplificado;
* Adicionar Pokémon a um catálogo;
* Impedir Pokémon duplicados;
* Listar os Pokémon do catálogo;
* Salvar e carregar os Pokémon utilizando um arquivo JSON;
* Remover Pokémon pelo ID;
* Tratar erros de busca;
* Executar todas as funcionalidades pelo terminal.

## Tecnologias utilizadas

* Node.js
* TypeScript
* TSX
* PokeAPI
* Git
* GitHub

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Node.js
* npm
* Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Julia-Mendes-Da-Corregio-Meier/Progeto-Pokemon
```

Acesse a pasta do projeto:

```bash
cd Progeto-Pokemon
```

Instale as dependências:

```bash
npm install
```

## Como executar

Para iniciar a aplicação:

```bash
npm start
```

Também é possível executar em modo de desenvolvimento:

```bash
npm run dev
```

Para verificar a compilação do TypeScript:

```bash
npm run build
```

## Funcionalidades

### 1. Buscar Pokémon

Permite buscar um Pokémon utilizando seu nome ou ID.

Exemplo:

```text
1 - Buscar Pokémon

Digite o nome ou ID do Pokémon: pikachu

Pokemon encontrado: pikachu
#25 - Nome:pikachu | Tipo:electric | Altura:4 | Peso:60
```

### 2. Adicionar Pokémon ao catálogo

Permite adicionar um Pokémon encontrado pela PokeAPI ao catálogo local.

Exemplo:

```text
2 - Adicionar Pokémon ao catálogo

Digite o nome ou ID do Pokémon: pikachu

Pokemon pikachu adicionado com sucesso

O Pokémon também é salvo no arquivo pc_box.json.
```

### 3. Impedir duplicidade

O sistema verifica o ID do Pokémon antes de adicioná-lo.

Exemplo:

```text
2 - Adicionar Pokémon ao catálogo

Digite o nome ou ID do Pokémon: pikachu

[AVISO] pikachu já está no catálogo.
```

### 4. Listar catálogo

Exibe os Pokémon atualmente armazenados no catálogo.

Exemplo:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

Caso não existam Pokémon:

```text
[Aviso] Catálogo vazio.
```

### 5. Remover Pokémon

Permite remover um Pokémon do catálogo utilizando seu ID.

Exemplo:

```text
4 - Remover Pokémon

Digite o ID do Pokémon: 25

[OK] Pokémon removido do catálogo.

A remoção também é salva no arquivo pc_box.json.
```
## Persistência local

O projeto utiliza o arquivo pc_box.json como armazenamento local dos Pokémon adicionados ao catálogo.

Os dados são carregados quando a aplicação é iniciada e salvos sempre que um Pokémon é adicionado ou removido.

O arquivo é inicializado com um array vazio:

[]

## Tratamento de Pokémon inexistente

Quando um Pokémon que não existe é pesquisado, a aplicação trata o erro e informa o usuário sem encerrar o programa.

Exemplo:

```text
Digite o nome ou ID do Pokémon: pokemon456

[ERRO] Pokémon não encontrado: pokemon456
Pokemon não existe.
```
A busca utiliza try/catch e verifica se a resposta da PokeAPI foi bem-sucedida.

## Estrutura do projeto

```text
pokedex-typescript-lite/
│
├── src/
│   │
│   ├── controllers/
│   │   └── TerminalController.ts
│   │
│   ├── models/
│   │   └── Pokemon.ts
│   │
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   ├── CatalogoPokemon.ts
│   │   └── BoxService.ts
│   │
│   └── main.ts
│
├── pc_box.json
├── package.json
├── tsconfig.json
└── README.md
```

### `main.ts`

É o ponto de entrada da aplicação. Nele são criadas as instâncias dos serviços e do controlador.Também é realizado o carregamento do catálogo antes do início do menu principal.

### `TerminalController.ts`

É responsável pela interação com o usuário pelo terminal. Apresenta o menu e recebe as opções escolhidas e utiliza os serviços necessários para realizar cada operação.

### `PokeApiService.ts`

É responsável pela comunicação com a PokeAPI utilizando `fetch`. A classe realiza a busca do Pokémon, trata possíveis erros e transforma os dados recebidos da API em um objeto simplificado do tipo PokemonResumo.

### `CatalogoPokemon.ts`

É responsável pelo catálogo de Pokémon. A classe possui um array privado para armazenar os Pokémon e métodos responsáveis por: adicionar, listar e remover Pokémon, além de verificar duplicidade.O catálogo também utiliza o BoxService para salvar e carregar os dados.

### `BoxService.ts`

É responsável pela persistência local dos dados. Utiliza fs/promises do Node.js para: ler o arquivo pc_box.json, transformar o conteúdo JSON em um array de PokemonResumo e salvar o catálogo novamente no arquivo JSON.


### `Pokemon.ts`

Contém as interfaces utilizadas para definir a estrutura e os tipos dos dados dos Pokémon. as iterfaces são PokemonResumo: que representa os dados simplificados utilizados pelo catálogo e PokemonApiResponse: que representa os dados necessários da resposta da PokeAPI.

### `pc_box.json`

É o arquivo utilizado para armazenar localmente os Pokémon adicionados ao catálogo.

## Conceitos aplicados

### TypeScript

Foram utilizados tipos como `string`, `number` e `Promise`, além de interfaces para definir a estrutura dos objetos utilizados pelo projeto. Também foram utilizados parâmetros e retornos tipados nas funções e métodos.

### Interfaces

A interface `PokemonResumo` representa os dados simplificados utilizados pelo catálogo.

Também existe uma interface para representar os dados necessários da resposta da PokeAPI.

### Fetch e async/await

O projeto utiliza `fetch` para realizar requisições à PokeAPI e `async/await` para trabalhar com as operações assíncronas.

### Tratamento de erros

A busca na API utiliza `try/catch` e verifica se a resposta da requisição foi bem-sucedida. Quando o Pokémon não é encontrado, a aplicação retorna `null` e apresenta uma mensagem no terminal.

### Métodos de array

O projeto utiliza diferentes métodos de array, incluindo:

* `map`: utilizado para transformar os tipos retornados pela API em uma lista de nomes;
* `some`: utilizado para verificar se um Pokémon já existe no catálogo;
* `filter`: utilizado para remover um Pokémon pelo ID;
* `forEach`: utilizado para percorrer e exibir os Pokémon do catálogo.

### Classe CatalogoPokemon

A classe possui um array privado para armazenar os Pokémon e métodos responsáveis pelas operações do catálogo:

* `adicionar()`
* `listar()`
* `remover()`
* `carregar()`

A classe também utiliza o BoxService para realizar a persistência dos dados.

### Persistência com JSON

O projeto utiliza fs/promises para ler e escrever o arquivo pc_box.json.

Dessa forma, os Pokémon adicionados ao catálogo permanecem armazenados mesmo após o encerramento da aplicação.

## Exemplos de execução

### Busca válida

Entrada:

```text
pikachu
```

Saída:

```text
Pokemon encontrado: pikachu
#25 - Nome:pikachu | Tipo:electric | Altura:4 | Peso:60
```

### Busca inválida

Entrada:

```text
pokemon456
```

Saída:

```text
[ERRO] Pokémon não encontrado: pokemon456
Pokemon não existe.
```

### Duplicidade

Entrada:

```text
2 - Adicionar Pokémon ao catálogo

Digite o nome ou ID do Pokémon: pikachu
```

Saída 1:

```text
Pokemon pikachu adicionado com sucesso

```

Entrada:

```text
2 - Adicionar Pokémon ao catálogo

Digite o nome ou ID do Pokémon: pikachu
```

Saída 2:

```text
[AVISO] pikachu já está no catálogo.

```

### Remoção

Entrada:

```text
remover ID 25
```

Saída:

```text
[OK] Pokémon removido do catálogo.
```

### Listagem

Entrada:

```text
3 - Listar catálogo
```

Saída:

```text
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

## Branches utilizadas

O projeto utiliza uma organização baseada em branches para separar o desenvolvimento das funcionalidades e da documentação.

* `main` — branch mantida como referência inicial do projeto;
* `develop` — branch padrão do repositório onde está localizada a versão completa e atual da aplicação;
* `feat/pokedex` — desenvolvimento das funcionalidades principais da Pokédex;
* `docs/readme` — desenvolvimento da documentação do projeto.

## Kanban

Link do quadro Kanban:

https://trello.com/b/Hl4YiHPj/pokedex-typescript-lite

## Melhorias futuras

Algumas melhorias que poderiam ser implementadas futuramente:

* Exibição de HP, ataque e defesa;
* Filtros por tipo de Pokémon;
* Melhorias nas mensagens exibidas no terminal;
* Criação de uma API própria utilizando Express.
