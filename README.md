<div align="center">

## Node Cadastro  

</div>
![Imagem do Projeto](https://github.com/user-attachments/assets/731d5ce0-91b8-4633-9e91-5a409624a555)

## Descrição
Este projeto é uma aplicação web desenvolvida com Node.js e Express, que permite o cadastro e listagem de clientes utilizando um banco de dados MySQL. A aplicação possui um sistema simples de registro, onde os usuários podem se cadastrar e visualizar a lista de clientes já cadastrados.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor. [Baixe o Node.js aqui](https://nodejs.org/en/download/).
- **Express**: Framework web para Node.js, facilitando a criação de servidores e rotas.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **EJS**: Motor de template que permite a renderização de HTML dinâmico.

## Estrutura do Projeto
- `server.js`: Arquivo principal da aplicação, responsável pela configuração do servidor e rotas.
- `views/`: Diretório que contém os arquivos EJS para renderização das páginas.
- `public/`: Diretório para arquivos estáticos como CSS, imagens, etc.
- `package.json`: Arquivo de configuração do projeto com dependências.
- `.gitignore`: Arquivo que define quais arquivos e pastas devem ser ignorados pelo Git.

## Funcionalidades
- **Cadastro de Clientes**: Permite que novos clientes sejam registrados.
- **Listagem de Clientes**: Exibe todos os clientes cadastrados na base de dados.

## Endpoints
- **GET /**: Renderiza a página inicial com a lista de clientes.
- **GET /registrar**: Renderiza a página de cadastro de clientes.
- **POST /registrar**: Recebe os dados do formulário de cadastro e insere no banco de dados.

## Instalação
1. Clone o repositório:
   ```bash
   git clone <URL do repositório>
   npm install express mysql body-parser ejs
   npm install nodemon 
   npm install msql 

## Acesso
Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento. :3000 = sua porta configura do server.




<div align="center">

##
Sinta-se à vontade para modificar qualquer parte que precisar!

</div>
