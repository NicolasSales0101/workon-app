# workon-app
Projeto com ✔Node.js 📦 MySQL ⚙ Express 🖇 Sequelize 💻 Entre outras tecnologias | Para fim de obtenção de nota da matéria Projeto de Desenvolvimento de Sistemas 📝📊

<p align="center">
  <img src="https://github.com/NicolasSales0101/workon-app/blob/master/public/img/logotipo_blackVersion.png" alt="WorkOn_Logotipo" width="300px"/>
</p>

### Algumas Funcionalidades adicionadas:

- Chat privado feito em socke.io 
- Uso do multer.js para upload de imagens (Básico)
- entre outros

### Bibliotecas usadas
 
 -  bcryptjs
 -  body-parser
 -  connect-flash
 -  electron
 -  electron-reload
 -  express
 -  express-handlebars
 -  express-session
 -  http
 -  multer
 -  mysql2
 -  nodemon
 -  passport
 -  passport-local
 -  sequelize
 -  socket.io

## 🧾 Tutorial

- Depedências
  - Node.js 14.17.1 ou superior
  - NPM 6.14.13 ou superior
  
 ### 🔛 Iniciação
 
 Para rodar o projeto, é necessário instalar todas as bibliotecas necessárias para a aplicação. Acerca disso, inicia um CMD/Prompt de comando na pasta raíz do projeto e execute o comando:
 > <b> npm install </b>
 
 Depois deste passo, ao instalar todas as bilbiotecas requisitadas, o próximo é executar o projeto. Para isso, temos duas formas:
 
 #### - Executar uma aplicação _Web_
 
 Para executar o projeto na forma _web_, ou seja, no navegador, execute o comando a seguir no <b>CMD/Prompt de comando na pasta raíz do projeto:</b>
 > <b>node app.js</b>
 
 #### - Executar uma aplicação _Desktop_
 
 Para executar o projeto na forma _desktop_, ou seja, em uma janela desktop, execute o comando a seguir no <b>CMD/Prompt de comando:</b>
 > <b>npm start</b>
 
 ### 📢 Importante
 
 Ao executar o projeto, as tabelas e os registros serão criados, <b>porém, para que isso ocorra, é necessário criar e indicar um banco de dados para conexão.</b>
 Para isso, você deve ir para a pasta models depois para o arquivo db.js:
 
 ![Tutorial do BD - Local](https://github.com/NicolasSales0101/workon-app/blob/master/public/img/Github_Tutorial_BDconnection_2.png)
 
 Nele, você colocará as informações do seu Banco de Dados criado por você, do seu usuário cadastrado no MySQL e senha. <b>É necessário criar um banco de dados antes de fazer esse procedimento.</b>
 
 ![Tutorial do BD - Parametros](https://github.com/NicolasSales0101/workon-app/blob/master/public/img/Github_Tutorial_BDconnection_1.png)
 
 Depois de colocado os parâmetros, você executará esse arquivo com:
 > <b>node models/db.js</b>
 
 <p>Fazendo esses procedimentos o projeto já irá rodar. Porém, vale destacar algo:</p>
 Ao executar o projeto, caso você cria uma nova instância com as funções de cadastro por exemplo, ao encerrar e executar o projeto ele irá apagar essa dado. Para que isso não ocorra, é bastante simples:
 depois de executar o arquivo, é preciso comentar as linhas dos models ( Model.sync({force: true} ):
 <p></p>
 <p>- models/Usuario.js</p>
 
 ![Tutorial do BD - Models](https://github.com/NicolasSales0101/workon-app/blob/master/public/img/Github_Tutorial_BDconnection_3.png)
 
 Fazendo isso para os models Usuario, Mensagem e Chat, esse problema já é resolvido!
 
 ## ✔ Conclusão
 
 Esse foi o primeiro projeto meu e de meu amigo Paulo, o contribuidor do repositório. Por ser uma primeira prática do conhecimento proporcionado pelos cursos e vídeo-aulas, o código em si tá bastante básico. Desta forma, contribuições no projeto são bastante bem vindas para ensinar algo a gente!
 #### Autores: 
 - <a href="https://github.com/NicolasSales0101">Nicolas Sales</a>
 - <a href="https://github.com/Paulo654">Paulo Henrique Abrantes</a> 
 <p></p>
 📁 Link do repositório no GitHub <a href="https://github.com/NicolasSales0101/workon-app">aqui</a>
