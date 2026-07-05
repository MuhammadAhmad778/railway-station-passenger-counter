let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function animateCounter(){

    countEl.classList.add("animate")

    setTimeout(function(){

        countEl.classList.remove("animate")

    },200)
}

function increment(){

    count++

    countEl.textContent = count

    animateCounter()
}

function save(){

    if(saveEl.textContent === "No entries yet."){

        saveEl.textContent = ""
    }

    saveEl.textContent += count + " - "

    count = 0

    countEl.textContent = count
}

function resetCounter(){

    count = 0

    countEl.textContent = 0

    saveEl.textContent = "No entries yet."
}