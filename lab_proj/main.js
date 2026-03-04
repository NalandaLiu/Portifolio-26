document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const assunto = `Contato via Portfólio - ${nome}`;
    const corpo = `
Nome: ${nome}
Email: ${email}

Mensagem:
${mensagem}
    `;

    const mailtoLink = `mailto:seuemail@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailtoLink;
});