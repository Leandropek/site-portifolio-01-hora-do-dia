function obterDataAtual() {
    const data = new Date();

    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const semana = diasDaSemana[data.getDay()];
    const dia = String(data.getDate()).padStart(2, '0'); 
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${semana}, ${dia} de ${mes} de ${ano}.`;
}


// Inserindo a data atual no HTML
document.addEventListener("DOMContentLoaded", () => {
    const elementoTexto = document.querySelector(".info-texto");
    if (elementoTexto) {
        elementoTexto.innerText = obterDataAtual();
    }


});





const titulo = document.querySelector(".hora");
const imagem = document.querySelector(".img");

function atualizar() {
    const data = new Date(); // Obtém a data e hora atuais
    const hora = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    titulo.innerText = `${hora}:${minutos}:${segundos}`;

    if (hora < 12) { 
        imagem.src = "assets/img/dia.jpg";
        imagem.alt = "Dia";
        document.body.style.background = "#8DCAE6";
    } else if (hora < 18) {
        imagem.src = "assets/img/tarde.jpg";
        imagem.alt = "Tarde";
        document.body.style.background = "#F3C776";
    } else {
        imagem.src = "assets/img/noite.jpg";
        imagem.alt = "Noite";
        document.body.style.background = "#1D3044";
    }
}

setInterval(atualizar, 1000);

atualizar();