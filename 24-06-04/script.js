const divEl = document.querySelector('.counter')
const pEl = document.createElement('p')

const btnStartEl = document.createElement('button')
const btnStopEl = document.createElement('button')

btnStartEl.classList.add('btn-start')
btnStartEl.textContent = 'Start'

btnStopEl.classList.add('btn-stop')
btnStopEl.textContent = 'Stop'

const currentDate = new Date()

const hour = currentDate.getHours()
const minute = currentDate.getMinutes()
const second = currentDate.getSeconds()




// const currentDate = new Date()
// const hour = currentDate.getHours().toString()
// console.log(hour)
// pEl.textContent = hour



// pEl.textContent = new Date()
// const formatter = new Intl.DateTimeFormat({ huor: '2-digit', minute: '2-digit', second: '2-digit'})
// const formattedTime = formatter.format(pEl)
// console.log(formattedTime)


divEl.append(pEl, btnStartEl, btnStopEl)
console.log(divEl)

// pEl.textContent = new Date()
// console.log(new Date())

// let intervalNumber = 0 

const intervalStart = () => {

    const startIntervalId = setInterval(() => {
    // intervalNumber = intervalNumber + 1;
    const printSec = pEl.textContent = new Date()
    console.log(printSec)
    
    }, 1000)

    return startIntervalId;
}

let intervalId = intervalStart() // salviamo intervalId per fare il stop interval 

btnStartEl.addEventListener('click', function() {
    // console.log(intervalStart())
    clearInterval(intervalId) // stoppo l'intervallo che ho prima e faccio partire un intervallo nuovo -- MOLTO IMPORTANTE PER NON CREARE MEMORY LEAKs
    intervalId = intervalStart()// riassegno la variabile let intervalId per ricreare un nuovo ID appena clicco start
})

btnStopEl.addEventListener('click', function() {
    // console.log('click!')
    clearInterval(intervalId)
})


// const intervalId = setInterval(() => {
//     // intervalNumber = intervalNumber + 1;
//     pEl.textContent = new Date()
//     console.log(`numero intervallo: ${intervalId}`)
    
// }, 1000)


// setTimeout(() => {
//     clearInterval(intervalId)
//     console.log(`intervallo finito ${intervalId}`)
// }, 5000)