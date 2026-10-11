function Enviar() {
    var
        nome = document.getElementById("nomeid");
    fone = document.getElementById("foneid");
    email = document.getElementById("emailid");


    if (nome.value != "" && fone.value != "" && email.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('ATENÇÃO!!!' + nome.value + ' É preciso preencher TODOS os campos para os dados serem encaminhados! ');
    }


}

    