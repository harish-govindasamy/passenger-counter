let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    // Reset the count to 0 after saving
    count = 0
    countEl.textContent = count  // Update the count display to 0
}
