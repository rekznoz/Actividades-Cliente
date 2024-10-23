const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')

let tweets = []

function publicarTweet(e) {
    e.preventDefault()

    const tweet = document.querySelector('#tweet').value

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj]

    mostrarTweet(tweetObj)

    formulario.reset()

}
formulario.addEventListener('submit', publicarTweet)

function mostrarTweet(tweet) {
    const li = document.createElement('li')
    li.innerText = tweet.tweet
    listaTweets.appendChild(li)
}