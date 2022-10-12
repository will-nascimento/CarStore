# CarStore

Aplicação para controle de estoque de produtos em geral. 

Vídeo de apresentação:

[New Recording - 12_10_2022 12_06_16.webm](https://user-images.githubusercontent.com/69582935/195380337-45b25351-e61b-4ca6-9831-090378490a90.webm)

Nesse aplicativo você pode gerenciar seu estoque de forma simples e intuitiva. A apresentação se dá em 3 telas, uma de inventário com possibilidade de apagar algum item, uma de cadastro de produtos e uma tela final para venda de produtos. 

Para instalação, favor seguir os seguintes passos e recomendações:

1. Faça o download deste repositório em https://github.com/will-nascimento/CarStore.git

1.2. clique em CODE, depois escolha o método que achar melhor para baixar o conteúdo. Recomendo através de DOWNLOAD ZIP. 

Obs.: Usualmente se utilizam dois repositórios diferentes para a aplicação, um para o FrontEnd, outro para o BackEnd. Para fins didáticos e práticos deixamos os dois arquivos em um só repositório. 

1.3. Após baixar o conteúdo, descompacte o arquivo com o descompactador de sua preferência.

2. Utilizando o aplicativo VsCode, na aba Arquivo, clique em ABRIR PASTA, procure e selecione o arquivo CarStore, e clique em Selecionar Pasta.

2.1. Clique na aba Terminal, depois Novo Terminal, ou simplesmente aperte CTRL+SHIFT+'.

2.2. Procure o arquivo FrontEnd, utilizando o comando abaixo e pressionando enter: 

      cd frontend

2.3. Digite o comando abaixo para instalação do NPM e suas dependências e pressione enter:

      npm i 

2.4. Quando acabar de instalar, digite o seguinte comando e pressione enter:

      npm run start

Obs1.: pode ser que demore um pouco para finalizar. Em seguida o seu navegador padrão deverá abrir sozinho no endereço http://localhost:3000/

obs2.: caso seu navegador padrão não seja o Google Chrome, recomendamos que o faça para não haver erro de imcompatibilidade de Cors Policy. Caso utilize o Chrome e mesmo assim continuar dando erro, favor instalar o seguinte Plug-In para Chrome: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=pt-BR depois de instalado, favor deixar ele na posição Ligado. Assim evitaremos qualquer erro de Cors que possa vir a ocorrer. 

2.5. Voltando ao VsCode, abra outro terminal seguindo as instruções do item 2.1.

2.6. Procure o arquivo BackEnd, utilizando o comando abaixo e pressionando enter:

     cd backend
     
obs.: caso a linha de comando esteja em FrontEnd e não CarStore, é simples de resolver, basta digitar o comando abaixo para sair da pasta FrontEnd e voltar para a pasta CarStore: 
     
     cd .. 
       
2.7. Digite o comando abaixo para instalação do NPM e suas dependências e pressione enter:

      npm i 
      
2.8. Quando acabar de instalar, digite o seguinte comando e pressione enter:

      npm run dev 
      
obs.: Deverá aparecer a seguinte mensagem no terminal MongoDB connection succeeded
      
2.9 Sem mais problemas, a aplicação deverá rodar normalmente. caso haja algum problema favor entrar em contato através do email willnascimentowns@gmail.com 
