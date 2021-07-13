document.addEventListener('DOMContentLoaded', () => {}) 
const comData =() => {
    fetch('https://complimentr.com/api')
        .then(response => response.json())
        .then(data => comBtn(data))
        .catch(error => console.log("Error: ", error))
}
const insData =() => {
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(response => response.json())
        .then(data => insBtn(data))
        .catch(error => console.log("Error: ", error))
}
const insBtn = (data) => {
   let button = document.querySelector('.badBtn')
    button.addEventListener('click', (e)=>{
       e.preventDefault()
       renderData(data)
    } )
}
const comBtn = (data) => {
    let button = document.querySelector('.goodBtn')
     button.addEventListener('click', (e)=>{
        e.preventDefault()
        renderData(data)
     }
}
const renderData = (data) => {
    for(sentence of data){
        
    }
}
