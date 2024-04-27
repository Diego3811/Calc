/*    if (button.id === "reset"){
            display.textContent = "0";
            return;
        }



        if(button.id === "equal"){
            try{
                display.textContent = eval(display.textContent);
            }catch{
                display.textContent = "Syntax Error!";
            }
            
            return;
        } 
        */







const display = document.querySelector("#calculator")
const buttons = document.querySelectorAll(".number_gray")
const orange = document.querySelectorAll(".symbol_orange")
const dark = document.querySelectorAll(".dark")



buttons.forEach(button => {
    button.addEventListener ("click", () => {
        console.log(button.textContent);

        orange.forEach(button =>{
            button.addEventListener ("click",() => {
                console.log(button.textContent);
            })
        })

        dark.forEach(button =>{
            button.addEventListener("click",() => {
                console.log(button.textContent);
            })
        })

        if (button.id === "reset"){
            display.textContent = "0";
            return;
        }

        if(button.id === "equal"){
            try{
                display.textContent = eval(display.textContent);
            }catch{
                display.textContent = "Syntax Error!";
            }
             return;
        } 

        if (display.textContent === "0"){
            display.textContent = buttonpresed;
        }else{
            display.textContent += buttonpresed;
        }
    })
})




