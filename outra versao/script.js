const data = new Date().toLocaleDateString("pt-BR");

document.getElementById("dataAtual").textContent = data;

let curtidas = 0;

document.getElementById("curtirBtn").addEventListener("click", () => {
    curtidas++;

    document.getElementById("contador").textContent =
        `${curtidas} curtida${curtidas > 1 ? "s" : ""}`;
});