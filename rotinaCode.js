let data = new Date()
let dia = data.getDay()

insert()

function formatarDia(dia){
    if(dia === 0){
        return "domingo"
    }else if(dia === 1){
        return "segunda"
    }else if(dia === 2){
        return "terca"
    }else if(dia === 3){
        return "quarta"
    }else if(dia === 4){
        return "quinta"
    }else if(dia === 5){
        return "sexta"
    }else if(dia === 6){
        return "sabado"
    }
}

async function pegandoJson(){
    let resposta = await fetch("rotina.json")
    //nome, local, link, aparece na página.
    let cont = await resposta.json()
    let dias = await cont.dias
    let hoje = formatarDia(dia) 

    if(hoje === "segunda"){
        return dias.segunda
    }else if(hoje === "terca"){
        return dias.terca
    }else if(hoje === "quarta"){
        return dias.quarta
    }else if(hoje === "quinta"){
        return dias.quinta
    }else if(hoje === "sexta"){
        return dias.sexta
    }else if(hoje === "sabado"){
        return dias.sabado
    }else if(hoje === "domingo"){
        return dias.domingo
    }
}

async function insert(){
    let pets = await pegandoJson()
    let div = document.getElementById("pets")
    let diaHtml = document.getElementById("dia")
    let cont = 0

    console.log(pets[2])
    pets.forEach((pet, index) => {
        if(pet[3] != false && pet[2] != undefined){
            // Incrementando o índice diretamente, sem a necessidade de uma variável 'cont'
            div.innerHTML += `<div>
                <div class="up">
                    <h3>${pet[0]}</h3>
                    <div id="div_${cont}" class="mapa">${pet[1]}<i class="fa-solid fa-map-location-dot"></i></div>
                </div>
                <div class="down">
                    <div id="locate_${cont}" class="escondido mapa">${pet[2]}</div>
                </div>
            </div>`
            cont += 1
        }else if(pet[3] != false){
            div.innerHTML += `<div>
                <div class="up">
                    <h3>${pet[0]}</h3>
                    <div>
                        <div>${pet[1]}<i class="fa-solid fa-truck fa-flip-horizontal"></i></div>
                        <h4>Pet Movel</h4>
                    </div>
                </div>
            </div>`
        }
        let divLocal = document.querySelectorAll(".up > div.mapa")
        let locate = document.querySelectorAll(".down div")
        console.info(divLocal)
        console.info(locate)

        divLocal.forEach((local, index) => {
            local.addEventListener("click", () => {
                console.log("funciona" + index)
                locate[index].classList.toggle("escondido")
            })
        })
        console.log(index)
    });
    
    if(formatarDia(dia) === "terca"){
        diaHtml.innerText = `Rota de Terça`
    }else{
        diaHtml.innerText = `Rota de ${formatarDia(dia)}`
    }
}

function abrir(id){
    let div = document.getElementById(id)

    div.classList.add("escondido")
}