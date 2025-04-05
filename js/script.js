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

document.addEventListener("DOMContentLoaded", () => {
    const elementoTexto = document.querySelector(".info-texto");
    const titulo = document.querySelector(".hora-digital");
    const imagem = document.querySelector(".imagem");

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

    function atualizarFundoEImagem(hora) {
        const periodos = [
            { horaMax: 12, cor: "#94d8f5", img: "assets/img/dia.jpg", alt: "Imagem representando o dia" },
            { horaMax: 18, cor: "#F3C776", img: "assets/img/tarde.jpg", alt: "Imagem representando a tarde" },
            { horaMax: 24, cor: "#1D3044", img: "assets/img/noite.jpg", alt: "Imagem representando a noite" }
        ];

        const periodoAtual = periodos.find(p => hora < p.horaMax);
        if (periodoAtual) {
            imagem.src = periodoAtual.img;
            imagem.alt = periodoAtual.alt;
            document.body.style.background = periodoAtual.cor;
        }
    }

    function atualizar() {
        const data = new Date();
        const hora = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        const segundos = String(data.getSeconds()).padStart(2, '0');

        titulo.innerText = `${hora}:${minutos}:${segundos}`;
        atualizarFundoEImagem(parseInt(hora, 10));
    }

    if (elementoTexto) {
        elementoTexto.innerText = obterDataAtual();
    }

    atualizar();
    setInterval(atualizar, 1000);
});