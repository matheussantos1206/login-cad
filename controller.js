// VALIDAR ACESSO EM TELA DE LOGIN
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todo os campos");
    } else {
        //alert("campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}

//FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO

var dadosListas = [];
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosListas.push(nomeUser)
        //console.log(dadosListas);
        criaLista();
        document.getElementById('nomeUser').value = "";
    } else {
        alert("favor informar o nome para o cadastro");
    }
}

// FUNÇÃO PARA CRIAR LISTA
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosListas.length - 1); i++) {
        tabela += "<tr><td>" + dadosListas[i] + "</td><td> <button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)' class='btn btn-warning'>Editar</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}


//FUNÇÃO EDITA O NOME DA LISTA 

function editar(i){
     document.getElementById('nomeUser').value = dadosListas[(i -1)];
     dadosListas.splice(dadosListas[(i - 1)], 1);
}