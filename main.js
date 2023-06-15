

const display = document.querySelector ("#display"); //o queryselector retorna o primeiro elemento dentro do documento 
const buttons = document.querySelectorAll ("button"); // retorna uma linha de elemtos presentes no documento

buttons.forEach ((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})  