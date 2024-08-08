// VALIDAR ACESSO EM TELA DE LOGIN
// Função chamada 'acessar' que é executada quando um evento é acionado (como um clique em um botão)
function acessar() {
    // Obtém o valor do campo de entrada com o id 'loginEmail'
    let loginEmail = document.getElementById('loginEmail').value;
    // Obtém o valor do campo de entrada com o id 'loginSenha'
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se algum dos campos está vazio
    if (!loginEmail || !loginSenha) {
        // Se algum campo estiver vazio, exibe um alerta informando o usuário para preencher todos os campos
        alert("Favor preencher todo os campos");
    } else {
        // Caso ambos os campos estejam preenchidos, redireciona o usuário para a página 'cadastro.html'
        window.location.href = 'cadastro.html';
    }
}


// Cria um array global para armazenar os nomes dos usuários
var dadosListas = [];

// Função que salva o nome do usuário no array e atualiza a lista na tela
function salvarUser() {
    // Obtém o valor do campo de entrada com o id 'nomeUser'
    let nomeUser = document.getElementById('nomeUser').value;

    // Verifica se o campo 'nomeUser' não está vazio
    if (nomeUser) {
        // Adiciona o nome ao array 'dadosListas'
        dadosListas.push(nomeUser);
        // Atualiza a lista na tela chamando a função 'criaLista'
        criaLista();
        // Limpa o campo de entrada após salvar o nome
        document.getElementById('nomeUser').value = "";
    } else {
        // Se o campo estiver vazio, exibe uma mensagem de alerta para informar o usuário
        alert("Favor informar o nome para o cadastro");
    }
}

// Função que cria e atualiza a lista na tela com os nomes dos usuários armazenados
function criaLista() {
    // Inicializa o conteúdo da tabela com cabeçalhos
    let tabela = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    // Itera sobre o array 'dadosListas' para criar uma linha para cada nome
    for (let i = 0; i <= (dadosListas.length - 1); i++) {
        // Adiciona uma nova linha à tabela com o nome e um botão para editar
        tabela += "<tr><td>" + dadosListas[i] + "</td><td> <button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)' class='btn btn-warning'>Editar</button> </td></tr>";
    }

    // Atualiza o conteúdo da tabela no DOM com a nova lista
    document.getElementById('tabela').innerHTML = tabela;
}

// Função que edita o nome na lista
function editar(i) {
    // Define o valor do campo de entrada 'nomeUser' para o nome a ser editado
    document.getElementById('nomeUser').value = dadosListas[(i - 1)];
    // Remove o nome do array 'dadosListas' (esse comando está incorreto, o correto seria usar dadosListas.splice(i - 1, 1))
    dadosListas.splice(dadosListas[(i - 1)], 1);
}
