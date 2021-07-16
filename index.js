// document.addEventListener('DOMContentLoaded', () => {
    // insData()
    // }) 
    let statmentPlaceholder = ''
    let newCom = document.querySelector('.Statments')
    
    //Comliment Section....
    const comData =() => {
        fetch('https://complimentr.com/api')
        .then(response => response.json())
        .then(data => compliment(data))
        .catch(error => console.log("Error: ", error))
    }
    const compliment = (data) => {
        com = Object.values(data)
        //console.log(com)
        newCom.innerHTML = com[0]
        statmentPlaceholder = com[0]
        //console.log(com[0])
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
            fetch('https://official-joke-api.appspot.com/random_joke')
                .then(response => response.json())
                .then(data => insult(data))
                .catch(error => console.log("Error: ", error)) 
        }
    const insult = (insultData) => {
        jokeObj = Object.values(insultData) 
        let newIns = document.querySelector('.Statments')
        let joke = jokeObj[2]
        let punchLine = jokeObj[3]
        newIns.innerHTML = `${joke}... ${punchLine}`
        statmentPlaceholder = newIns.textContent
        // console.log(ins[2,3])
    }
    const insBtn = () => {
        let badBtn =document.querySelector('.badBtn')
        badBtn.addEventListener('click', ()=>{
            insData()
        })
    }
                    //.......
                    //Rate Section....
                    const statmentForm = document.querySelector('#form')
                    const renderLi =(statmentData, rateValue) => {
                        let postBoard = document.querySelector('.postedStatments')
                        let li = document.createElement('li')
                        li.textContent = `${statmentData}:  Rateing:${rateValue}` 
                        console.log(statmentData)
                        postBoard.append(li) 
                    }
                    const statment = document.querySelector('.Statments')
                    
                    statmentForm.addEventListener('submit', (e)=>{
                        e.preventDefault()
                        renderLi(statmentPlaceholder, e.target.rate.value)
                        console.log(e.target.rate.value)
                        newCom.textContent = ''
                    })
                    // const currentScore = rateSection.values 
                    // console.log(currentScore)
                    comData()
                    comBtn()
                    insBtn()