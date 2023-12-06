let boton = document.querySelector(".nav_button")
let tru = false

boton.addEventListener("click", ()=>{
    if(tru == false){
        document.querySelector(".header_menu").style.display = "flex"
        tru = true
}

    else if(tru == true){
        document.querySelector(".header_menu").style.display = "none"
        tru = false
    }
})

window.addEventListener("resize",()=>{
    if(window.innerWidth >= 1000){
        document.querySelector(".header_menu").style.display = "flex"
    }
})