function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondAngle = (seconds / 60) * 360 + 90;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    document.querySelector('.segundo').style.transform = `rotate(${secondAngle}deg)`;
    document.querySelector('.minuto').style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector('.hora').style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(setClock, 1000);
setClock();

function obterDataAtual() {
    const data = new Date();

    let periodoDoDia;
    const hora = data.getHours();
    if (hora >= 6 && hora < 12) {
        periodoDoDia = "Manhã"
    } else if (hora >= 12 && hora < 18) {
        periodoDoDia = "Tarde"
    } else {
        periodoDoDia = "Noite"
    }

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

    return `${periodoDoDia} de ${semana}, ${dia} de ${mes} de ${ano}.`;
}

document.addEventListener("DOMContentLoaded", () => {
    const elementoTexto = document.querySelector(".info-texto");
    if (elementoTexto) {
        elementoTexto.innerText = obterDataAtual();
    }
});

const titulo = document.querySelector(".hora-digital");
const imagem = document.querySelector(".imagem");

function atualizarFundoEImagem(hora) {
    if (hora < 12) { 
        imagem.src = "assets/img/dia.jpg";
        imagem.alt = "Imagem representando o dia";
        document.body.style.background = "#94d8f5";
    } else if (hora < 18) {
        imagem.src = "assets/img/tarde.jpg";
        imagem.alt = "Imagem representando a tarde";
        document.body.style.background = "#F3C776";
    } else {
        imagem.src = "assets/img/noite.jpg";
        imagem.alt = "Imagem representando a noite";
        document.body.style.background = "#1D3044";
    }
}

function atualizar() {
    const data = new Date();
    const hora = String(data.getHours()).padStart(2, '0'); 
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    titulo.innerText = `${hora}:${minutos}:${segundos}`;
    atualizarFundoEImagem(hora);
}

atualizar();
setInterval(atualizar, 1000);