let theme = document.getElementById("idTema");
theme.addEventListener("change",cambiarTheme);
onload

function cambiarTheme() {
    console.log(theme);
    if (theme.value == "Claro") {
        document.body.classList.add("theme-light")
        document.body.classList.remove("theme-dark")
        document.body.classList.remove("theme-darkBlue")
        localStorage.setItem("key",theme.value)
    } else if (theme.value == "Oscuro") {
        document.body.classList.add("theme-dark")
        document.body.classList.remove("theme-light")
        document.body.classList.remove("theme-darkBlue")
        localStorage.setItem("key",theme.value)
    } else {
        document.body.classList.add("theme-darkBlue")
        document.body.classList.remove("theme-light")
        document.body.classList.remove("theme-dark")
        localStorage.setItem("key",theme.value)
    }
}

