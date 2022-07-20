// comment section starts like this

//Challenge 1 and 2
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMI_mark = massMark / heightMark ** 2;
const BMI_John = massJohn / heightJohn ** 2;

markHigherBMI = BMI_mark > BMI_John;
console.log(BMI_mark);
console.log(BMI_John);
console.log(markHigherBMI);

if (BMI_mark > BMI_John) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

if (BMI_mark > BMI_John) {
  console.log(`Mark's BMI (${BMI_mark}) is higher than John's (${BMI_John})`);
} else {
  console.log("John's BMI is higher than Mark's");
}
*/

//Challenge 3
/*
const data1Score1Dolphin = 96;
const data1Score2Dolphin = 108;
const data1Score3Dolphin = 89;

const data1Score1Koala = 88;
const data1Score2Koala = 91;
const data1Score3Koala = 110;

const averagedata1Dolphin =
  (data1Score1Dolphin + data1Score2Dolphin + data1Score3Dolphin) / 3;
const averagedata1Koala =
  (data1Score1Koala + data1Score2Koala + data1Score3Koala) / 3;

if (averagedata1Dolphin > averagedata1Koala) {
  console.log("Data1 result:winner is dolphin");
} else if (averagedata1Dolphin < averagedata1Koala) {
  console.log("Data1 result:winner is Koala");
} else {
  console.log("Data1 result: Draw");
}

const data2Score1Dolphin = 92;
const data2Score2Dolphin = 112;
const data2Score3Dolphin = 101;

const data2Score1Koala = 109;
const data2Score2Koala = 95;
const data2Score3Koala = 123;

const averagedata2Dolphin =
  (data2Score1Dolphin + data2Score2Dolphin + data2Score3Dolphin) / 3;
const averagedata2Koala =
  (data2Score1Koala + data2Score2Koala + data2Score3Koala) / 3;

if (averagedata2Dolphin > averagedata2Koala && averagedata2Dolphin > 100) {
  console.log("Data2 result:winner is dolphin");
} else if (averagedata2Dolphin < averagedata2Koala && averagedata2Koala > 100) {
  console.log("Data2 result:winner is Koala");
} else if (averagedata2Dolphin > 100 && averagedata2Koala > 100) {
  console.log("Data2 result: Draw");
} else console.log("Data2 result: No winner");

const data3Score1Dolphin = 92;
const data3Score2Dolphin = 112;
const data3Score3Dolphin = 101;

const data3Score1Koala = 109;
const data3Score2Koala = 95;
const data3Score3Koala = 106;

const averagedata3Dolphin =
  (data3Score1Dolphin + data3Score2Dolphin + data3Score3Dolphin) / 3;
const averagedata3Koala =
  (data3Score1Koala + data3Score2Koala + data3Score3Koala) / 3;

if (averagedata3Dolphin > averagedata3Koala && averagedata3Dolphin > 100) {
  console.log("Data3 result:winner is dolphin");
} else if (averagedata3Dolphin < averagedata3Koala && averagedata3Koala > 100) {
  console.log("Data3 result:winner is Koala");
} else if (
  averagedata3Dolphin === averagedata3Koala &&
  averagedata3Dolphin >= 100 &&
  averagedata3Koala >= 100
) {
  console.log("Data3 result: Draw");
} else console.log("Data3 result: No winner");

*/

//Challenge 4
/*
const bill = Number(prompt("how much the bill"));

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : (tip = bill * 0.2);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
*/
//Challange 5
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphin = calcAverage(44, 23, 71);
const avgKoala = calcAverage(165, 54, 49);

function checkWinner(a, b) {
  if (a >= b * 2) {
    console.log(`winner a: ${a} vs${b}`);
  } else if (b >= a * 2) {
    console.log(`winner b: ${a} vs${b}`);
  } else {
    console.log(`No winner: ${a} vs${b}`);
  }
}
checkWinner(avgDolphin, avgKoala);
*/
//Challange 2
/*
function calcTip(x) {
  if (x >= 50 && x <= 300) {
    return x * 0.15;
  } else {
    return x * 0.2;
  }
}

console.log(calcTip(100));
bills = [125, 555, 44];
console.log(bills);
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

//Challange 3
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

john.BMI > mark.BMI
  ? console.log(
      `John's BMI ${john.calcBMI()} is higher than Mark's ${mark.calcBMI()}!`
    )
  : console.log(
      `John's BMI ${john.calcBMI()} is smaller than Mark's ${mark.calcBMI()}!`
    );
*/

//Challange4
/*
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calcTip(x) {
  if (x >= 50 && x <= 300) {
    return x * 0.15;
  } else {
    return x * 0.2;
  }
}
for (i = 0; i < 10; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

//arr = [];
let sum = 0;
function calcAverage(arr) {
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));
*/
//Challange on Developer Skills
/*arr = [17, 21, 23];
function printForecast(aaa) {
  set = "";
  for (let i = 0; i < aaa.length; i++) {
    set = set + `${aaa[i]}C in ${i + 1} days...`;
  }
  console.log(set);
}
printForecast(arr);*/

//----------------------Challange 3 ----------------------
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Create an array 'events' of the different game events that happened (no duplicates)

const [...events] = new Set(gameEvents.values());
console.log(events);

//After the game has finished, is was found that the yellow card from minute 64
//was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//Compute and log the following string to the console: "An event happened, on
//average, every 9 minutes" (keep in mind that a game has 90 minutes)

const [...arrayV] = gameEvents.values();
console.log(arrayV);

for (let i = 0; i < events.length; i++) {
  let counter = 0;
  for (let j = 0; j < arrayV.length; j++) {
    if (events[i] === arrayV[j]) counter += 1;
  }
  let averageTime = Math.trunc(90 / counter);
  console.log(
    `${events[i]} happened, on average, every ${averageTime} minutes`
  );
}

/*Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:⚽GOAL*/

const [...arrayK] = gameEvents.keys();
let period = ' ';

for (const cc of arrayK) {
  cc < 46 ? (period = '[FIRST HALF] ') : (period = '[ SECOND HALF]');
  console.log(`${period} ${cc}: ${gameEvents.get(cc)}`);
}
