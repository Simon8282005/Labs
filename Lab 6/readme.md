# Lab 6: JavaScript Interactive Quiz Game 🎮

## 📝 Project Overview
This lab focuses on building a dynamic, interactive Quiz Game using **HTML**, **CSS**, and **JavaScript**. The project demonstrates core frontend development concepts, including DOM manipulation, event handling, game logic randomization, and timing events.

## 🚀 Key Learning Outcomes

### 1. DOM Manipulation & Rendering
* **Modern Element Selection:** Learned to use `document.getElementById()` and `document.querySelector()` to target specific page elements instead of outdated methods.
* **Dynamic Content Updates:** Replaced the unsafe and deprecated `document.write()` method with `element.innerHTML` and `element.textContent` to update question text and feedback without reloading the page.
* **Element Creation:** Dynamically generating HTML elements (like radio buttons) based on data arrays.

### 2. JavaScript Game Logic
* **Data Structures:** Stored quiz questions, options, and answers efficiently using an **Array of Objects**.
* **Randomization (Fisher-Yates Shuffle):** Implemented the Fisher-Yates algorithm to truly shuffle the question order. This logic swaps elements in place to ensure a unique sequence every time the game initializes.
    ```javascript
    // Logic: Swap the current element with a random element before it
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // ES6 Destructuring Swap
        }
        return array;
    }
    ```
* **Input Handling:** Retrieved user choices from **Radio Button groups** using the `:checked` CSS selector in JavaScript:
    ```javascript
    const selected = document.querySelector('input[name="answer"]:checked');
    ```

### 3. Asynchronous Events & Timing
* **Timers:** utilized `setInterval()` to create a countdown timer or stopwatch for the quiz.
* **Resource Management:** Learned the "Clear-Before-Create" pattern. This ensures we never have two conflicting timers running at once by explicitly stopping the previous interval before starting a new one.
    ```javascript
    let timerId = null;

    function startTimer() {
        // 1. Check & Clear: Stop the previous timer if it exists
        if (timerId !== null) {
            clearInterval(timerId); 
        }

        // 2. Create: Start the new timer and save the ID
        timerId = setInterval(() => {
            // Timer logic here...
        }, 1000);
    }
    ```

### 4. ES6+ Modern Syntax
* **Template Literals:** Used backticks (`` ` ``) and `${variable}` syntax for cleaner string concatenation when injecting HTML.
* **Variables:** Used `const` and `let` for better scope management compared to `var`.

### 5. Initialization & Lifecycle
* **DOMContentLoaded:** Wrapped the initialization code in an event listener to ensure all HTML elements are fully loaded before the script runs.
    ```javascript
    document.addEventListener('DOMContentLoaded', () => { initGame(); });
    ```

## 🛠️ Challenges & Solutions
* **Challenge:** The timer would speed up or behave erratically if the function was called multiple times.
    * **Solution:** Implemented a global variable to track the timer ID and explicitly cleared the previous interval before starting a new one.
* **Challenge:** Getting the value of a radio button by ID returned the wrong value.
    * **Solution:** Switched to selecting the *checked* input from the named group (`input[name="answer"]:checked`).

## 📚 Technologies Used
* HTML5
* CSS3 (Flexbox/Grid for layout)
* JavaScript (ES6+)