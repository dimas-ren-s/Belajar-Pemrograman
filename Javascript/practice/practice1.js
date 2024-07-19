// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number){
    if (number <= 0) return 0;
    let waitingList = [];

    let looping3 = Math.floor((number-1)/3);
    let looping5 = Math.floor((number-1)/5);

    for(let i = 1; i <= looping3; i++){
        waitingList.push(i*3);
    }
    for(let i = 1; i <= looping5; i++){
        waitingList.push(i*5);
    }

    let result = [...new Set([...waitingList, ...waitingList])].reduce((total, value) => total + value, 0);
    console.log(result);
    return result;
}

console.log(solution(10));

// Pro Player
function solutionPro(number){
    if (number <= 0) return 0;
    let sum = 0;
    for(let i=1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(solutionPro(10));

// Pro Player 2
function solutionPro2(number){
    if (number <= 0) return 0;
    let sum = 0;
    while(number > 0){
        number--;
        if(number % 3 === 0 || number % 5 === 0){
            sum += number;
        }
    }
    return sum;
}

console.log(solutionPro2(10));