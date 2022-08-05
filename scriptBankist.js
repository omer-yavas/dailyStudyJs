'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////Username Section //////////////////////////
const createUserNames = function (arr1) {
  arr1.forEach(function (str) {
    str.userName = str.owner
      .toLowerCase()
      .split(' ')
      .map(x => x[0])
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);

/////////////////////Starter Conditions////////////////////
containerApp.style.opacity = 0;
let currentAccount;

//////------------------------FUNCTIONS_---------------------------------

///////////Time--------------------------
const currentTime = function () {
  let date = new Date();

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = `${date.getFullYear()}`.padStart(2, 0);

  return `${day}/${month}/${year}`;
};

/////Movements Part//////////////////

const movementsDisplay = function (movement, i) {
  if (movement > 0) {
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--deposit">${
          i + 1
        } deposit</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  } else {
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--withdrawal">${
      i + 1
    } withdrawal</div>
    <div class="movements__value">${movement}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }
};

//////Balance Section////////////////////////////////////////////////
const balance = function (acc) {
  const x = acc.movements.reduce((a, b) => a + b, 0);
  labelBalance.textContent = `${x}€`;
};

///////////////////////////Summary Section//////////////////////////////////
const summary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, a) => sum + a, 0);
  labelSumIn.innerHTML = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, a) => sum + a, 0);
  labelSumOut.innerHTML = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(a => (a * acc.interestRate) / 100)
    .reduce((sum, a) => sum + a, 0);
  labelSumInterest.innerHTML = `${interest}€`;
};
///////////////////////////////TIMER------------------
//counter ı tanımla
//her saniyesini ekrana yansıt
//0 olunca log out yap
//btn click işlemi olunca reset counter yap
let timer = 120;
const resetTimer = () => (timer = 120);
const clock = function () {
  const min = String(Math.trunc(timer / 60)).padStart(2, 0);
  const sec = String(timer % 60).padStart(2, 0);
  labelTimer.textContent = `${min}:${sec}`;
  if (timer == 0) {
    containerApp.style.opacity = 0;
    clearInterval(t1);
  }
  timer--;
};
const t1 = setInterval(clock, 1000);
/////Update UI----------------------------------------
const updateUI = function (x) {
  timer = resetTimer();
  containerMovements.innerHTML = ' ';
  x.movements.forEach(movementsDisplay);
  balance(x);
  summary(x);
  const a = currentTime();
  labelDate.textContent = a;
};

////////////////////////////////////EVENT HANDLERS/////////////////////////////////////

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  accounts.forEach(x => {
    if (
      x.pin === Number(inputLoginPin.value) &&
      x.userName === inputLoginUsername.value
    ) {
      containerApp.style.opacity = 100;
      labelWelcome.textContent = `Welcome back, ${x.owner} `;
      currentAccount = x;
      inputLoginPin.value = ' ';
      updateUI(x);
    }
  });
});

/////////////////////////Transfer Money//////////////////////////////////////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiver = accounts.find(acc => acc.userName == inputTransferTo.value);

  if (
    Number(inputTransferAmount.value) > 0 &&
    receiver &&
    inputTransferTo.value !== currentAccount.userName &&
    currentAccount.movements.reduce((a, b) => a + b, 0) >
      Number(inputTransferAmount.value)
  ) {
    currentAccount.movements.push(-Number(inputTransferAmount.value));
    receiver.movements.push(Number(inputTransferAmount.value));
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

///////////////////////////LOAN/////////////////////////
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 2)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ' ';
});

////////////////////Close Account---------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      x => x.userName === inputCloseUsername.value
    );
    accounts.splice(index, 1);
    inputCloseUsername.value = ' ';
    inputClosePin.value = ' ';
    containerApp.style.opacity = 0;
  }
});

////////////////////////////////////////////////////////
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  containerMovements.innerHTML = ' ';
  const sorted = currentAccount.movements.sort(function (a, b) {
    return a - b;
  });
  sorted.forEach(movementsDisplay);
});
