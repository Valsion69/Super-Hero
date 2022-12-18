// const baseUrl ="https://www.superheroapi.com/api.php/1344321849711075/49/" 
// const baseUrl ="https://www.superheroapi.com/api.php/1344321849711075/"
// https://akabab.github.io/superhero-api/api/id/2.json

const baseUrl = "https://akabab.github.io/superhero-api/api/id/"
const imgdiv = document.querySelector('.imgdiv')
const btngethero = document.querySelector('.btngethero')
const inputhero = document.querySelector('#inputhero')
// const inputheroo = Number(inputhero.value)
const inputsubmit = document.querySelector('.inputsubmit')
const show = document.querySelector('.show')
const showstatsdiv = document.querySelector('.showstatsdiv')

const emoji = {
    intelligence: "🧠",
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}


const getsuperhero = (id) =>{
    const url = `${baseUrl}${id}.json`
    fetch(url)
    .then( respone => respone.json())
    .then(json => {
        console.log(json)
        imgdiv.innerHTML = `<img src="${json.images.lg}" width = 300px height= 300px />`
        const statss = showstats(json)
        show.innerHTML= ` <p>${json.id}  ${json.name} </P> ${statss}`
    
    
    })
}

const showstats = (character) =>{
  const statts =  Object.keys(character.powerstats).map(stats =>{
        return `<p>${emoji[stats]} ${stats}: ${character.powerstats[stats]} </p>`
    }) 
     console.log(statts.join(''))
    return statts.join('')
}

const chosedIdhero = (inputhero) =>{
    const inputheroo = inputhero.value
    fetch(`${baseUrl}${Number(inputheroo)}.json`)
    .then(re => re.json())
    .then(json =>{
        console.log(json)
        const chosenstat = showstats(json)
        imgdiv.innerHTML = `<img src="${json.images.lg}" width = 220px height= 220px />`
        show.innerHTML= ` <p>${json.id}  ${json.name} </P> ${chosenstat}`
    })
}

chosedIdhero(inputhero)
inputsubmit.onclick = () => chosedIdhero(inputhero)
getsuperhero(Math.floor(Math.random()*731 +1))
// getsuperhero()

btngethero.onclick = () => getsuperhero(Math.floor(Math.random()*731 +1))


// const inputsuperhero = ()
