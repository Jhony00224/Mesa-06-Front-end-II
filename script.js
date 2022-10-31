function modeDark(modo){
    let modoEscuro = confirm(`Olá ${modo} deseja ativar o modo escuro ?`)
    
    let dark = document.querySelector(".dark")
    
        if(modoEscuro){
        }else{
            alert("Caso queria ativar o dark mode basta recarregar a página")
            return dark.classList.toggle("dark")
        }
    }
    
    modeDark(prompt("Insira seu nome"));