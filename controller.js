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