/* ----------- Script de digitação do nome ---------- */

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 120 * i)
    });
}


const nome = document.querySelector('.inicio_nome');
typeWriter(nome)
