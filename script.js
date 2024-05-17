function converterTemp(){
    let tempo_Input = document.getElementById('tempo_user')
    let to_Select = document.getElementById('to')
    let from_Select = document.getElementById('from')
    let result = document.getElementById('res_temp')
    
    //valores dos inputs
    let tempo = parseFloat(tempo_Input.value)
    let to = to_Select.value
    let from = from_Select.value

    // Verifica se a temperatura é um número valido
    if(isNaN(tempo)){
        window.alert("Insira um número válido!")
        return;
    }

    if(from === "Celsius" && to === "Fahrenheit"){ //Celsius para Fahrenheit
        result.innerHTML = (tempo * 9/5) + 32      
    }
    else if(from === "Fahrenheit" && to === "Celsius"){ //Fahrenheit para Celsius
        result.innerHTML = (tempo - 32) * (5/9)     
    }

    if(from === "Celsius" && to === "Kelvin"){//Celsius para Kelvin
        result.innerHTML = (tempo + 273)
    } 
    else if(from === "Kelvin" && to === "Celsius"){//Kelvin para Celsius
        result.innerHTML = (tempo - 273)
    }
    if(from === "Fahrenheit" && to === "Kelvin"){
        result.innerHTML = (tempo + 459.67) * 5/9 
    }
    else if(from == "Kelvin" && to === "Fahrenheit"){
        result.innerHTML = (tempo - 273.15) * 9/5 + 32
    }
}
