document.addEventListener('DOMContentLoaded', () => {comData()}) 
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


// const insData =() => {
//     fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
//         .then(response => response.json())
//         .then(data => insBtn(data))
//         .catch(error => console.log("Error: ", error))
// }
// const insBtn = (data) => {
//    let button = document.querySelector('.badBtn')
//     button.addEventListener('click', (e)=>{
//        e.preventDefault()
//        renderData(data)
//     } )
// }
// const comBtn = (data) => {
//     let button = document.querySelector('.goodBtn')
//      button.addEventListener('click', (e)=>{
//         e.preventDefault()
//         renderData(data)
//      })
// }
// const renderData = (data) => {
//     for(sentence of data){
//         console.log(data)
//     }
// }
