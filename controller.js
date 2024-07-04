// VALIDAR ACESSO EM TELA DE LOGIN
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todo os campos");
    }else{
        //alert("campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
} 

//FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO

var dadosListas = [];
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){

    }else{
        alert("favor informar o nome para o cadastro");
    }
}