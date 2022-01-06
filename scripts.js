let array = ["Rock", "Paper", "Scissors"];
        let Rock = document.querySelector("#Rock");
        let Paper = document.querySelector("#Paper");
        let Scissors = document.querySelector("#Scissors");
        let resultado = document.querySelector("#response");
        let playerPoints = document.querySelector("#playerPoints");
        let aiPoints = document.querySelector("#computerPoints");
        let playerScore = 0;
        let aiScore = 0;

        Rock.addEventListener("click", function () {
            let response = array[Math.floor(Math.random() * array.length)];
            if (response === "Rock") {
                resultado.textContent = "Rock! Draw!"
                resultado.style.color = 'whitesmoke';
            } else if (response === "Scissors") {
                resultado.textContent = "Scissors! You win!"
                resultado.style.color = '#18A558';
                playerScore++
            } else {
                resultado.textContent = "Paper! You Lost!"
                resultado.style.color = '#E34234'
                aiScore++
            }
            playerPoints.textContent = playerScore;
            aiPoints.textContent = aiScore;
        })

        Paper.addEventListener("click", function () {
            let response = array[Math.floor(Math.random() * array.length)];
            if (response === "Rock") {
                resultado.textContent = "Rock! You win!"
                resultado.style.color = '#18A558';
                playerScore++
            } else if (response === "Scissors") {
                resultado.textContent = "Scissors! You Lost!"
                resultado.style.color = '#E34234'
                aiScore++
            } else {
                resultado.textContent = "Paper! Draw!"
                resultado.style.color = 'whitesmoke';
            }
            playerPoints.textContent = playerScore;
            aiPoints.textContent = aiScore;
        })

        Scissors.addEventListener("click", function () {
            let response = array[Math.floor(Math.random() * array.length)];
            if (response === "Rock") {
                resultado.textContent = "Rock! You Lost!"
                resultado.style.color = '#E34234'
                aiScore++
            } else if (response === "Scissors") {
                resultado.textContent = "Scissors! Draw!"
                resultado.style.color = 'whitesmoke';
            } else {
                resultado.textContent = "Paper! You win!"
                resultado.style.color = '#18A558';
                playerScore++
            }
            playerPoints.textContent = playerScore;
            aiPoints.textContent = aiScore;
        })
