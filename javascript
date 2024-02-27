let randomNum = Math.floor(Math.random() * 100);
        const result = document.getElementById("result");
        let count = 1;

        function guess() {
            let guessed = Number(document.getElementById("textBox").value);

            if (guessed === randomNum) {
                result.textContent = `Well done, you guessed the number ${randomNum} in ${count} attempts`;
            } else if (guessed > randomNum) {
                result.textContent = `Attempt no ${count}, you guessed too high, try aiming lower`;
            } else {
                result.textContent = `Attempt no ${count}, you guessed too low, try aiming higher`;
            }

            count++;
        }
