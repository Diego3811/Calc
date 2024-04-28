/* 
document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.id === "=") {
                display.textContent = eval(display.textContent);
            } else if (btn.id === "reset") {
                display.textContent = "0";
            } else if (btn.id === "negative") {
                display.textContent = (parseFloat(display.textContent) * -1).toString();
            } else if (btn.id === "percentage") {
                display.textContent = (parseFloat(display.textContent) / 100).toString();
            } else if (btn.id === "dot") {
                if (!display.textContent.includes(".")) {
                    display.textContent += btn.textContent;
                }
            } else {
                display.textContent += btn.textContent;
            }

            

        });
    });
});
 */




document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll("button");
    let operacionPrev = ""; // Almacena la operación previa

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.textContent === "=") {
                // Obtener la expresión del display
                let expresion = display.textContent;
                if (expresion !== "" && !esOperador(expresion.slice(-1))) {
                    // Calcular el resultado y mostrarlo en el display
                    display.textContent = calcular(expresion);
                    // Almacenar la operación previa
                    operacionPrev = display.textContent;
                }
            } else if (btn.textContent === "AC") {
                display.textContent = "0";
            } else if (btn.textContent === "+/-") {
                display.textContent = (parseFloat(display.textContent) * -1).toString();
            } else if (btn.textContent === "%") {
                display.textContent = (parseFloat(display.textContent) / 100).toString();
            } else if (btn.textContent === ".") {
                if (!display.textContent.includes(".")) {
                    display.textContent += btn.textContent;
                }
            } else if (btn.classList.contains("symbol_orange")) {
                // Verificar que el display no esté vacío y no termine con un operador
                if (display.textContent !== "" && !esOperador(display.textContent.slice(-1))) {
                    // Agregar el operador al display
                    display.textContent += btn.textContent;
                    // Almacenar la operación previa
                    operacionPrev = display.textContent;
                }
            } else {
                // Reemplazar el cero del display con el número presionado
                if (display.textContent === "0") {
                    display.textContent = btn.textContent;
                } else {
                    display.textContent += btn.textContent;
                }
            }
        });
    });
});

function calcular(expresion) {
    expresion = expresion.replace(/x/g, "*"); // Reemplazar X con *
    expresion = expresion.replace(/÷/g, "/"); // Reemplazar ÷ con /
    try {
        return eval(expresion);
    } catch (error) {
        return "Error";
    }
}


function esOperador(caracter) {
    return caracter === "+" || caracter === "-" || caracter === "X" || caracter === "÷";
}




