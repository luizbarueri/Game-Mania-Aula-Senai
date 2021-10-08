const nomes = ['Ana', 'Luiz', 'Pedro'];
//recebe dados do input em index.htm
function Login() {
    var usuario = document.getElementById('usuario').value;
    var nomeAtual = "";
    //alert(nome);
    for (let x = 0; x < nomes.length; x++) {
        nomeAtual = nomes[x];
        if (nomeAtual == usuario) {
            return alert("Bem vindo usuario(a) " + usuario);
        }
    }
    if (nomeAtual != usuario) {
        return alert("Usuário não cadastrado! \n Nome: " + usuario + "\n e-mail: " + usuario + "@gmail.com")
    }
}
