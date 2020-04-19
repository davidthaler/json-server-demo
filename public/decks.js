window.addEventListener('DOMContentLoaded', getDecks)

function makeItem(deck){
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute("href", `/decks/${deck.id}`)
    a.textContent = `${deck.topic}: ${deck.title}`
    li.appendChild(a)
    return li
}

function getDecks(){
    const decklist = document.getElementById('deckList')
    fetch('http://localhost:3000/decks')
        .then(response => {
            return response.json()
        }).then( data => {  
            data.forEach(x => decklist.appendChild(makeItem(x)))
        }).catch(error => {
            console.error(error)
        })
}
