const footballURL = "https://v3.football.api-sports.io"

// criacao dos urls para o fetch das ligas de futebol

let premierleagueURL = footballURL + '/leagues?id=39'
let primeiraligaURL = footballURL + '/leagues?id=94'
let serieAURL = footballURL + '/leagues?id=135'
let championsleagueURL = footballURL + 'leagues?id=2'


// criacao das funcoes para fazer fetch das ligas de futebol

function getpremierleagueFUT(){
    fetch(premierleagueURL,{
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

function getprimeiraligaFUT(){
    fetch(primeiraligaURL,{
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

function getserieAFUT(){
    fetch(serieAURL,{
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

function getCLFUT(){
    fetch(championsleagueURL,{
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

// resultados dos fetch das ligas 

console.log(getpremierleagueFUT())

console.log(getprimeiraligaFUT())

console.log(getserieAFUT())

console.log(getCLFUT())