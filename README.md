# 🚀 Cypress Project
Este é um projeto simples criado com o objetivo de aprender e praticar testes automatizados utilizando o [Cypress](https://www.cypress.io/).


## 📦 Inicializando o Projeto

'npm init -y'

'npx cypress open'      # para rodar com a interface grafica

'npx cypress run'       # para rodar sem a interface grafica

### Roteiro de Testes — Casos de Sucesso  ✅

1. Realizar cadastro no site

- Acessar pagina de cadastro
- Preencher campos de "nome"
- Preencher campos de "email" com endereço valido
- Preencher campos de "senha" com uma senha valida
- Preencher campos de "Confirmação de senha" 
- Clicar no botao cadastrar

2. Realizar login 

- Acessar pagina de login
- Preencher campos de "email" com endereço valido
- Preencher campos de "senha" com uma senha valida
- Clicar no botao Entrar


### Roteiro de Testes — Casos de Erro ❌

1. Realizar cadastro no site

- Acessar pagina de cadastro
- Clicar no botao cadastrar
- Aparecer erro nos campos de email, senha e confirmação de senha

2. Realizar login 

- Acessar pagina de login
- Preencher campos de "email" com um endereço diferente do cadastrado
- Preencher campos de "senha" com uma senha diferente do cadastrado
- Clicar no botao Entrar
- Aparecer erro de email/senha invalidos


### 🧪 Ferramentas Utilizadas

- Cypress
- Node.js
- Mochawesome
- Cloud