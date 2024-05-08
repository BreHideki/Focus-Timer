let darkMode = true
const buttonTooggle = document.getElementById("toggle-mode")

buttonTooggle.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light")

    const mode = darkMode ? "light" : "dark"


    event.currentTarget
    .querySelector("span").textContent = `${mode} mode ativado!`

    darkMode = !darkMode
})