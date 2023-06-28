function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


function countdownTimer(seconds) {
    let timeLeft = seconds;
    const timerId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            console.log("Timer finished");
        } else {
            console.log(timeLeft);
            timeLeft--;
        }
    }, 1000);
}

countdownTimer(10);


