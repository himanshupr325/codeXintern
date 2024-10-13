const button = document.querySelector(".btn")
const pass = document.querySelector(".password")

const generatepassword = (iteration) =>{

    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&=+?/"
    let password = ""

    for (let i=1;i<=iteration;i++){

        const index = Math.floor(Math.random() * chars.length)
        password += chars[index]
    }

    return password
}
console.log(generatepassword(9))

button.addEventListener("click", (event) => {
    event.preventDefault()

    const length = Number(document.querySelector(".length").value)

    pass.innerHTML =generatepassword(length)
})


