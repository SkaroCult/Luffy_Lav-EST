let hoje = new Date()
let semana = hoje.getDay()
let diaHoje = diaSemana(semana)

console.info(semana)

/*Dia*/
function diaSemana(diaN){
    if(semana === 1){
        return "segunda"
    }else if(semana === 2){
        return "terça"
    }else if(semana === 3){
        return "quarta"
    }else if(semana === 4){
        return "quinta"
    }else if(semana === 5){
        return "sexta"
    }else if(semana === 6){
        return "sabado"
    }else if(semana === 0){
        return "domingo"
    }
}

/*Cabeçalho*/
window.addEventListener("scroll", () => {
    let header = document.getElementById("cabeca");
    header.classList.toggle("encurta", window.scrollY > 10)
    console.log("funciona")
})

/*Json*/
async function dias(){
    let resposta = await fetch("rotina.json")
    let semanaJson = await resposta.json()
    let diaJson = await semanaJson.dias

    console.info(diaJson)
    if(diaHoje === "segunda"){
        return diaJson.segunda
    }else if(diaHoje === "terca"){
        return diaJson.terca
    }else if(diaHoje === "quarta"){
        return diaJson.quarta
    }else if(diaHoje === "quinta"){
        return diaJson.quinta
    }else if(diaHoje === "sexta"){
        return diaJson.sexta
    }else if(diaHoje === "sabado"){
        return diaJson.sabado
    }else if(diaHoje === "domingo"){
        return diaJson.domingo
    }
}

async function insert(dias){
    dias = await dias
    console.info(dias)

    let ul = document.getElementById("petsRotina")
    let h3 = document.getElementById("dia")

    h3.innerText = `Dia: ${diaHoje}`

    if(dias.length === 1){
        let hiden = document.querySelectorAll(".escondido")

        hiden[0].classList.remove("escondido")
        ul.classList.add("escondido")
    }else{
        dias.forEach((nome) => {
            console.log(nome)
            ul.innerHTML += `<li>
            <h2>${nome[0]}</h2>
            </li>`
        });
    }
}

insert(dias())