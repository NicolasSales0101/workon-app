# workon-app
Projeto com ✔Node.js 📦 MySQL ⚙ Express 🖇 Sequelize 💻 Entre outras tecnologias | Para fim de obtenção de nota da matéria Projeto de Desenvolvimento de Sistemas 📝📊

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
 
 ![Tutorial do BD](https://lh3.googleusercontent.com/nI6r8Lio9XLtOSmujvRFG3ysU_fO8LXm-198wyKjCYjZz6kyNCFZDR81_HgO0bXqO93CGX9KXiPrsnVwTCWIzxaYLItSpjQMYrLCA1PqhVS1ZUvKXAQlekhvhjevrPjZ7W2_k-jt3Yry20ojTjekA8exhozr9kOp9VBHAMGKeugB2SioGTf-W_B7bSYyBDWwyQpCavCnPcST8jmoghlAXq757CjnS6Gu2vJW8CQtT7hvQaf5y4PmWtsywkd9Q1SpWIV5qG94-YK2IsWbdMzXCqGEU-_utZ-P50bSI5tf4bf5Nq-e0-gqyHq9dmOPSVkI3Du8yYdhBngAgoK8Du_U-_9ZKzZD0IORICalZswOUwkBdr3GhHOIT0UNwb4_E8NvIy6dSdV_uoq9fDpBRTJ-CssTvBKU_M3uM-Q_FNr3S5my3rqyXaCU0Rp12j7l2xVnbt64SXJIUpj0dcmwtzEEEcSN56yEN1nx0J-4Ou3D-CzpHiWj0OW_QjL8bX90U0pA1y6WA95ESxKGIkBVIXgC3ysU0l1oyKeUmT_hsWmsiJdYJrRsQPnUGHip6E9npGLIQOtQDVUHY5xJn6Z1L3gwD7H1faCFn2slvKXVgwZR7gnwQAsgUxiSmQglPsKHTV5t-ljC_u1kdvosco9w_21_QWDzxwGw4Z59nDeNLX8f3_hcWP2WQdU6Q4PK_W80InPrunhZVASZ4Vs4pRwmbR3EJKs=w192-h87-no?authuser=0)
 
 Nele, você colocará as informações do seu Banco de Dados criado por você, do seu usuário cadastrado no MySQL e senha. <b>É necessário criar um banco de dados antes de fazer esse procedimento.</b>
 
 ![Tutorial do BD](https://lh3.googleusercontent.com/WYfz0jHqjVXvO3-nVJedW7eajPB2lbUMS_xcb-Fun-ZQ5fwrYsZVKZtLu1TSo7t1cThzosSs_qjyElT5J6Ism7acTnozcKeoetHo07QmYI7uVIB9kSaQG1bds3SSNbrA-F6ej92ZsLATnbpaGibJkGTshBuaZFyNIrv4RpTy1JEhSbxprTYtAkD0wFBG4R6xm_3nsq2r2Abr_qXeEJl-s7RvMsGxi1U9i96sHXao0K_vY9il4mD-_b3gBkzstUK0Un8Kt7eKdybb8rYqBBGXYOSf-vCiDIkLqH7ZQzi9didGLiESuNGWWE5Rm9EaoVDk-J7uU_tM1xMG2dE4dR3vvVBt41JQPZmpHWTKhVLMozNghWsS4IgLHl8P_NSO_N0wH9NcuOYwVsL1AGPIbNAAfZ4svhGgk3VGqEVtynLDCs45Bi3Wu-lY_DD_Er-BMLNZvAqB-oTQ-cT-vIMYlYbbZoXWfB70ddHwQ-msmQefTVPyWtzTXkaIf6-PnwvSwwe1FShywSJYK3KbrnGXLa8bfy27NflUJxkCo9m2-5kUCacrR66hTAHhFBaDFBSHp6vPSnltSsbFroIuh0YZ3SoJZOY3kolxZanQ2QzVd4aLzlGYggqneBLT-h62nzLM4Fcdy0XldfIndd7axbdg2jNzbGFCEy_fu1c-I7772aP9Jo2UZMNB5POOswdbzZe8GsO4QgtfuOjpcE8X56xqkPy_6Qg=w688-h133-no?authuser=0)
 
 Depois de colocado os parâmetros, você executará esse arquivo com:
 > <b>node models/db.js</b>
 
 <p>Fazendo esses procedimentos o projeto já irá rodar. Porém, vale destacar algo:</p>
 Ao executar o projeto, caso você cria uma nova instância com as funções de cadastro por exemplo, ao encerrar e executar o projeto ele irá apagar essa dado. Para que isso não ocorra, é bastante simples:
 depois de executar o arquivo, é preciso comentar as linhas dos models ( Model.sync({force: true} ):
 <p></p>
 <p>- models/Usuario.js</p>
 
 ![Tutorial do BD](https://lh3.googleusercontent.com/Ot12rmybyVqqsAqy5sIFytIlSxY9w8JV3jsBo5-0TvxLUibZmcb8q_PRGFUuAJuhdDg0PCgFs7Osddf_Jb7WSJXHdwDy734WsbTsNEJxDWCbMq6iwG6-HNpaHgrbLiwfJnDzyyu696A8h44pqlgSF8tn2u2av667FgwZ6lImUoxvwrGqX_eiPvs1uzE_iCjRXqjuDP0rIipHgq99SoSiN3pzCrdoZ57b_GSw6ci26Y6ZDcvkDThCyuGyWKxCgAgB2oFP-13tbSyZeHZ5NDS3moYFJiYUM4OFfULR9KRVHkk04gbDXJs_4DqYcAIj2YT5yln9TwsT9LwjuiSFT3PHTwC6UFKKwsEwY7xv5DNSPqj_bTjFhEpFRttKduD09j94AqQD3aoC4sjCyZ6hChpzMBc0FDN57Fe73FoVTEDXQ9s5nvb2mnOUQlh5UD5kLbWI0YRzO_4FxPXql516WLhUA_R0RS8TLqaIe-IucxWFZ6Y6LA5U8jHXRZ-V2PH3a9iBAHNfgv1cFmPE5PBJtWmZn40AmtaEAFwRRN3L6-xTDHEfX9EvVMkF73TKDPHHErbh54ko594qEkj_Y_8UjJW8RY5Kg6WGPp0z2eM9DYAQTuwXu9IPanbo6yL-0wRcwfzcYhUxi9CqtIR_Yc4ZwykZizg-mhlhH0y8AHrWXYRwXeaImpGvSoN6AyqcA2InTnv8iN-pbiCLU2T7YSetbPLRF8Q=w677-h61-no?authuser=0)
 
 Fazendo isso para os models Usuario, Mensagem e Chat, esse problema já é resolvido!
 
 ## ✔ Conclusão
 
 Esse foi o primeiro projeto meu e de meu amigo Paulo, o contribuidor do repositório. Por ser uma primeira prática do conhecimento proporcionado pelos cursos e vídeo-aulas, o código em si tá bastante básico. Desta forma, contribuições no projeto são bastante bem vindas para ensinar algo a gente!
 #### Autores: 
 - <a href="https://github.com/NicolasSales0101">Nicolas Sales</a>
 - <a href="https://github.com/Paulo654">Paulo Henrique Abrantes</a> 
 <p></p>
 📁 Link do repositório no GitHub <a href="https://github.com/NicolasSales0101/workon-app">aqui</a>
