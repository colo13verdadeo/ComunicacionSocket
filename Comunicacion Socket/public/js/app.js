const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")
//Declaraciones para obtener el los divs de topmenu
const paginas = document.querySelectorAll(".paginas")
const dependientesinmenu = document.getElementById('topmenu-dependiente')

//Funciones
function buscarysw(elemento){
    document.querySelector('.abierto').classList.replace('abierto','cerrado')
    document.getElementById(elemento).classList.replace('cerrado','abierto')
}


// dependientesinmenu.addEventListener("click", () => {
//     dashboardinmenu.style.display = 'none'
// })

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("xxx")){
        iconoMenu.classList.replace("xxx", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "xxx")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("xxx", "bx-x")
    })
})