const messageButton = document.getElementById('msgButton')
const message = document.getElementById('message')

messageButton.addEventListener('click', displayMsg)

function displayMsg() {
    message.removeAttribute('hidden')
    setTimeout(() => {
        message.setAttribute('hidden', '')
    }, 5000);
}


const startButton = document.getElementById('newButton')
const pTag = document.getElementById('timer')
const stopButton = document.getElementById('stopButton')

startButton.addEventListener('click', startTimer)
//stopButton.addEventListener('click', stopTimer)

function startTimer() {
    let timer = 0;
    pTag.innerText = 0;
        setInterval (() => {
        pTag.innerText = timer ++
    }, 1000)
}

/*function stopTimer() {
    clearInterval(interval)
}*/

//figure out stopTimer function so that stop timer button
//works