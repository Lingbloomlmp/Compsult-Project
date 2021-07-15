document.addEventListener('DOMContentLoaded', () => {
    comData()
    comBtn()
    insData()
}) 
//Comliment Section....
const comData =() => {
    fetch('https://complimentr.com/api')
        .then(response => response.json())
        .then(data => compliment(data))
        .catch(error => console.log("Error: ", error))
}
const compliment = (data) => {
    com = Object.values(data)
    let newCom = document.querySelector('.Compliment')
    newCom.innerHTML = com[0]
    console.log(com[0])
}
const comBtn = () => {
    let button = document.querySelector('.goodBtn')
     button.addEventListener('click', (e)=>{
        e.preventDefault()
        comData()
     })
}
//.......

//Insult Section....
const insData =() => {
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json',{mode: 'no-cors'})
        .then(response => response.json())
        .then(insultData => insult(insultData))
        .catch(error => console.log("Error: ", error))
}
const insult = (insultData) => {
    console.log(insultData)
}

// const insBtn = (data) => {
//    let button = document.querySelector('.badBtn')
//     button.addEventListener('click', (e)=>{
//        e.preventDefault()
//        renderData(data)
//     } )
// }

