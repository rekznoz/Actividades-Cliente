const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')

let tweets = []

// Local Storage
document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || []
    mostrarTweets()
})

function publicarTweet(e) {
    e.preventDefault()

    const tweet = document.querySelector('#tweet').value

    if (tweet.trim() === '') {
        alert('El campo no puede estar vacio')
        return
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj]

    guardarStorage()

    mostrarTweets()

    formulario.reset()

}
formulario.addEventListener('submit', publicarTweet)

function mostrarTweets() {

    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }

    tweets.forEach(tweet => {
        const li = document.createElement('li')
        li.innerText = tweet.tweet

        const btnBorrar = document.createElement('button')
        btnBorrar.innerText = 'X'
        btnBorrar.classList.add('borrar-tweet')

        btnBorrar.onclick = () => {
            borrarTweet(tweet.id)
        }

        li.appendChild(btnBorrar)
        listaTweets.appendChild(li)
    })

}

function guardarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    guardarStorage()
    mostrarTweets()
}
