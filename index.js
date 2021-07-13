document.addEventListener('DOMContentLoaded', () => {}) 
// const getData =() => {
//     fetch('https://complimentr.com/api')
//         .then(response => response.json())
//         .then(data => renderData(data))
//         .catch(error => console.log("Error: ", error))
//     }
const getData =() => {
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error: ", error))
    }
const btn = () => {
   let button = document.querySelector('button')
    button.addEventListener('click', (e)=>{
       e.preventDefault()
       renderData()
    //    console.log(renderData)
    } )
}
btn()
const renderData = (data) =>{
    console.log(data)   
}
