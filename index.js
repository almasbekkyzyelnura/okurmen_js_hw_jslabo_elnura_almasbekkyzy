
       


/*


let words = [
    "китеп","парта","сумка","доска"
];
let word = words[Math.floor(Math.random() * words.length)];

let array = [];
for (let i = 0; i < word.length; i++) {
    array[i]= "_";
}
let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(array.join(""))
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                array[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(array.join(""));
alert("Отлично:Было загадано слово:" + word);
*/










/*


function nom() {
    const choices = ["камень", "ножница", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame() {
    let inet = 0;
    let computerScore = 0;

    while (true) {
        let user = prompt("Сделайте свой выбор:     камень, ножница, бумага?").toLowerCase();
        while (user !== "камень" && user !== "ножница" && user !== "бумага" && user !== "отмена") {
            user = prompt(" Попробуйте снова:      камень, ножница, бумага?").toLowerCase();
        }
        
        if (user === "отмена") {
            break;
        }
        
        const computer = nom();
        alert(`Компьютер выбрал: ${computer}`);

        if (user === computer) {
            alert("Ничья!");
        } else if ((user === "камень" && computer === "ножница") ||
                   (user === "ножница" && computer === "бумага") ||
                   (user === "бумага" && computer === "камень")) {
            alert("Вы выиграли!");
            inet++;
        } else {
            alert("Компьютер выиграл!");
            computerScore++;
        }

        alert(`Текущий счет: Вы ${inet}, Компьютер ${computerScore}`);
    }

    if (inet > computerScore) {
        alert("Вы победили!");
    } else if (inet < computerScore) {
        alert("Компьютер победил!");
    } else {
        alert("Ничья!");
    }
}

playGame(); 


*/




















