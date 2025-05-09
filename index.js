let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let resetBtn = document.getElementById("reset-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    countEl.classList.add('pulse')
    setTimeout(() => {
        countEl.classList.remove('pulse')
    }, 300)
}

function save() {
    if (count === 0) return
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    countEl.classList.add('pulse')
    setTimeout(() => {
        countEl.classList.remove('pulse')
    }, 300)
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = ""
    countEl.classList.add('pulse')
    setTimeout(() => {
        countEl.classList.remove('pulse')
    }, 300)
}

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)
resetBtn.addEventListener("click", reset)
