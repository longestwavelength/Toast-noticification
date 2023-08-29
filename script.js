const btn = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = ['Hey there', 'How you doing!', 'somethingscbsjc', 'Whatre you doin']

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNoticification())

function createNoticification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    
    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random()*messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random()*types.length)]
}