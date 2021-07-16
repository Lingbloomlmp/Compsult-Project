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
        console.log(com)
        newCom.innerHTML = com[0]
        statmentPlaceholder = com[0]
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
            fetch('https://yomomma-api.herokuapp.com/jokes', {mode:'no-cors'})
                .then(response => console.log(response))
                // .then(data => console.log(data))
                .catch(error => console.log("Error: ", error)) 
        }
        // const insult = (insultData) => {
            //     ins = Object.values(insultData) 
            //     let newIns = document.querySelector('.Statments')
            //     newIns.innerHTML = ins[0]
            //     console.log(ins[0])
            // }
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