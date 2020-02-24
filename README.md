# Seventh Backend

Repositório do desafio backend da Seventh

## Passo a passo
 1. Precisamos instalar [Node.js](https://nodejs.org/en/), recomenda-se a versão LTS.
 2. Depois instalamos o [Yarn v1.22.0](https://classic.yarnpkg.com/lang/en/).
 3. Instale o [Docker](https://docs.docker.com/install/) e execute o comando a seguir para baixar a imagem do banco, no caso utilizamos o [mongoDB](https://www.mongodb.com/), comando: `docker run --name seventh -p 27017:27017 -d -t mongo`.
 4. Certifique-se se o docker está rodando, execute o comando `docker ps` no seu terminal para vê se está tudo ok, se não tiver nenhuma informação, inicialize o container com `docker start seventh`
 5. Clonamos este projeto e navegamos até a pasta criada.
 6. Execute o comando `yarn` na pasta do projeto para instalar as dependências.
 7. Na raiz do projeto crie um arquivo `.env` e o preencha conforme o arquivo `.env.example`
 8. Agora rode o comando `yarn dev` e o projeto irar subir na porta utilizada no `.env`. Ex. `http://localhost:PORTA`
 9. Agora o deve está rodando e para testar utilizamo o insomnia.
 10. Instale o [Insomnia](https://insomnia.rest/download/) e importe o arquivo de resquests de dentro da raiz do projeto.

## Utilizado
  - [Express v4.17.1](https://expressjs.com/pt-br/)
  - [Axios v0.19.2](https://github.com/axios/axios)
  - [Dotenv v8.2.0](https://www.npmjs.com/package/dotenv)
  - [Mongoose v5.9.2](https://mongoosejs.com/)
  - [Yup v0.28.1](https://github.com/jquense/yup)
