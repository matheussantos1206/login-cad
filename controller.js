// VALIDAR ACESSO EM TELA DE LOGIN
function acessar(){
    let loginEmail = document.getElementById('loginEmail').Value;
    let loginSenha = document.getElementById('loginSenha').Value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todo os campos");
    }else{
        alert("campos preenchidos com sucesso");
    }
} 