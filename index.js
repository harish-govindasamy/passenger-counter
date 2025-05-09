// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const saveEl = document.getElementById("save-el")
    const countEl = document.getElementById("count-el")
    const incrementBtn = document.getElementById("increment-btn")
    const saveBtn = document.getElementById("save-btn")
    const resetBtn = document.getElementById("reset-btn")
    
    // Initialize counter
    let count = 0

    // Function to add pulse animation
    function addPulseAnimation(element) {
        element.classList.add('pulse')
        setTimeout(() => {
            element.classList.remove('pulse')
        }, 300)
    }

    // Function to update counter display
    function updateCounterDisplay() {
        countEl.textContent = count
        addPulseAnimation(countEl)
    }

    // Increment function
    function increment() {
        count += 1
        updateCounterDisplay()
    }

    // Save function
    function save() {
        if (count === 0) return
        
        let countStr = count + " - "
        saveEl.textContent += countStr
        count = 0
        updateCounterDisplay()
    }

    // Reset function
    function reset() {
        count = 0
        saveEl.textContent = ""
        updateCounterDisplay()
    }

    // Add event listeners with error handling
    try {
        incrementBtn.addEventListener("click", increment)
        saveBtn.addEventListener("click", save)
        resetBtn.addEventListener("click", reset)
    } catch (error) {
        console.error("Error adding event listeners:", error)
    }

    // Initialize display
    updateCounterDisplay()
})
