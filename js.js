let obj = {}

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        obj = data
    }
})

request.open('GET', 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes')
request.send()
const setup = document.getElementById('setup')
const punchline = document.getElementById('punchline')

document.getElementById('getJoke').addEventListener('click', (e) => {
    setup.textContent = obj.setup
    punchline.textContent = obj.punchline
})

document.getElementById('button1').addEventListener('click', (e) => {
    window.location.reload();
})