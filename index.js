
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
