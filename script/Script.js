function mostrarMensagem(event) { 
    event.preventDefault();


    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let telefone = document.getElementById("ipTel").value; 
    let mensagem = document.getElementById("aMensagem").value;
    let campoData = document.getElementById("dataNasc").value;
    let motivoSelect = document.getElementById("slMotivo");
    let motivoSelecionado = motivoSelect.options[motivoSelect.selectedIndex].text;

    let partes = campoData.split("-");
    let data = new Date(partes[0], partes[1] - 1, partes[2]);
    let dataNascimentoFormatada = data.toLocaleDateString("pt-BR");


        document.getElementById("resposta").innerText = `Olá, ${nome}! confira seus dados`;
        document.getElementById("nomeExibido").innerText = "Nome: " + nome;
        document.getElementById("emailExibido").innerText = "Email: " + email;
        document.getElementById("telExibido").innerText = "Telefone: " + telefone;
        document.getElementById("dataExibida").innerText = "Data de Nascimento: " + dataNascimentoFormatada;
        document.getElementById("motivoExibido").innerText = "Onde nos conheceu: " + motivoSelecionado;
        document.getElementById("mensagemExibida").innerText = "Mensagem: " + mensagem;
}