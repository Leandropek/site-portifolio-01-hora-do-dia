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

// Atualiza o relógio a cada segundo
setInterval(setClock, 1000);

// Ajusta os ponteiros no carregamento da página
setClock();
