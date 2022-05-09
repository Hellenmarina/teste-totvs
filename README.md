# Teste TOTVS

A ideia do desafio é fazer uma aplicação que tenha a possibilidade de criar listas, e dentro delas adicionar tarefas. Deve ser possível editar, remover e alterar o status da tarefa.

## Para a construção dessa aplicação, foi utilizado:

- Angular;
- JSON Server como fake REST API;
- Bootstrap.

## Instruções para execução do projeto:

Clone o projeto em sua máquina

```bash
  git clone https://Hellenmarina/teste-totvs.git
```

Entre no diretório do projeto

```bash
  cd teste-totvs
```

Instale as dependências

```bash
  npm install
```

Inicie a REST API

```bash
  json-server --watch db.json
```

Em caso de erro, tente:

```bash
 npx json-server --watch db.json
```

Inicie o servidor

```bash
 npm start
```

## Funcionalidades

- Adicionar novas tarefas;
- Editar tarefas(nome e status);
- Excluir tarefas.

## Observações

A ideia era ter as listas e dentro dessas listas estarem as tarefas, mas como estava dando erro e mesmo tentando de todas as formas não conseguir resolver, optei por fazer apenas a parte das tarefas, sem as listas. Porém, é possível ver toda lógica das listas no código. Como foi o meu primeiro contato com o framework(Angular), encontrei algumas dificuldades.
