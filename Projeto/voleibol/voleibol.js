const volleyURL = "https://v1.volleyball.api-sports.io"

// criacao dos urls para o fetch das ligas de voleibol

let campeonatoportuguesURL = volleyURL + '/leagues?id=126'
let copaItaliaURL = volleyURL + '/leagues?id=93'
let vLeagueURL = volleyURL + '/leagues?id=98'
let voleychampionsleagueURL = volleyURL + '/leagues?id=248'

// criacao das funcoes para fazer fetch das ligas de voleibol

function getcampeonatoportuguesvolei(){
    fetch(campeonatoportuguesURL,{
        method:'GET',
        headers:{
            'x-rapidapi-key': '766a9ac83bbc42f2be2e149db4677726'
        },
    })
    .then(response=>response.json())
    .then(response=> {
        console.log(response)
    })
}

function getcopaitaliavolei(){
    fetch(copaItaliaURL,{
        method:'GET',
        headers:{
            'x-rapidapi-key': '766a9ac83bbc42f2be2e149db4677726'
        },
    })
    .then(response=>response.json())
    .then(response=> {
        console.log(response)
    })
}

function getvleaguevolei(){
    fetch(vLeagueURL,{
        method:'GET',
        headers:{
            'x-rapidapi-key': '766a9ac83bbc42f2be2e149db4677726'
        },
    })
    .then(response=>response.json())
    .then(response=> {
        console.log(response)
    })
}

function getCLvolei(){
    fetch(voleychampionsleagueURL,{
        method:'GET',
        headers:{
            'x-rapidapi-key': '766a9ac83bbc42f2be2e149db4677726'
        },
    })
    .then(response=>response.json())
    .then(response=> {
        console.log(response)
    })
}

console.log(getcampeonatoportuguesvolei())

console.log(getcopaitaliavolei())

console.log(getCLvolei())

console.log(getvleaguevolei())