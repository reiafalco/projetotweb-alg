const basketURL = "https://v1.basketball.api-sports.io"

// criacao dos urls para o fetch das ligas de futebol

let NbaURL = basketURL + '/leagues?id=12'
let euroleagueURL = basketURL + '/leagues?id=52'
let ncaaURL = basketURL + '/leagues?id=116'
let lpbURL = basketURL + 'leagues?id=35'

// criacao das funcoes para fazer fetch das ligas de baquetebol

function getNBA(){
    fetch(NbaURL,{
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

function getLPB(){
    fetch(lpbURL,{
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

function getNCAA(){
    fetch(ncaaURL,{
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

function geteuroleague(){
    fetch(euroleagueURL,{
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


console.log(getLPB())

console.log(getNBA())

console.log(getNCAA())

console.log(geteuroleague())







