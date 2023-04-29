let input = document.querySelector(".input")
let buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.id === "DEL"){
            input.value = input.value.slice(0, -1)
        } else if(btn.id === "CE") {
            input.value = ""
        } else if(btn.id === "=") {
            input.value = eval(input.value)
        } else {
            input.value += btn.id
        }
    })
});