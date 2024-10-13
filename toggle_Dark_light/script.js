const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    if (btn.innerHTML === "Light") {
        container.style.backgroundColor = "white"
        btn.innerHTML = "Dark"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
    } else if(btn.innerHTML === "Dark"){
        container.style.backgroundColor = "black"
        btn.innerHTML = "Light"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
    }
})

