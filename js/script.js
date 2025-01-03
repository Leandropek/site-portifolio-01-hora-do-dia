
let data = new Date();
let hora = data.getHours()
let minutos = data.getMinutes()

const titulo = document.querySelector("h2");
const imagem = document.querySelector("img");

titulo.innerText = `Agora são ${hora} horas e ${minutos} minutos.`;

if (hora < 12) { 
    imagem.src = "assets/img/dia.jpg";
    imagem.alt = "Dia";
    document.body.style.backgroundColor = "#8DCAE6"

} else if (hora < 18) {
    imagem.src = "assets/img/tarde.jpg";
    imagem.alt = "Tarde";
    document.body.style.backgroundColor = "#F3C776"

} else {
    imagem.src = "assets/img/noite.jpg";
    imagem.alt = "Noite";
    document.body.style.backgroundColor = "#1D3044"
}