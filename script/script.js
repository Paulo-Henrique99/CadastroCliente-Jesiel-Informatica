function enviarMensagem() {
    // Obtém os valores dos campos do formulário
    var firstName = document.getElementsByName('firstname')[0].value;
    var dataNascimento = document.getElementsByName('data_nascimento')[0].value;
    var genero = document.getElementsByName('genero')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var number = document.getElementsByName('number')[0].value;
    var endereco = document.getElementsByName('endereco')[0].value;
    var bairro = document.getElementsByName('bairro')[0].value;
    var cidade = document.getElementsByName('cidade')[0].value;
    var estado = document.getElementsByName('estado')[0].value;
    var comoConheceu = document.querySelector('input[name="conheceu"]:checked');

    // Verifica se todos os campos estão preenchidos
    if (
        !firstName || !dataNascimento || !genero || !email || !number || !endereco ||
        !bairro || !cidade || !estado || !comoConheceu
    ) {
        // Se algum campo estiver vazio, exibe um alerta
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    // Constrói a mensagem para o WhatsApp
    var mensagem = `Nome: ${firstName}%0AData de Nascimento: ${dataNascimento}%0AGênero: ${genero}%0AEmail: ${email}%0ACelular: ${number}%0AEndereço: ${endereco}%0ABairro: ${bairro}%0ACidade: ${cidade}%0AEstado: ${estado}%0AComo conheceu: ${comoConheceu.value}`;

    // Cria o link do WhatsApp com a mensagem
    var link = `https://api.whatsapp.com/send?phone=+5531988423060&text=${mensagem}`;

    // Abre o link em uma nova guia
    window.open(link, '_blank');
}
