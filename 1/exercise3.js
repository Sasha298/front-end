// Розробіть кальулятор, використовуючи prompt() та змінні. Розробіть программу, яка виконує наступне:
// 1. Запитує користувача про перший номер
// 2. Зберігає цей номер
// 3. Запитує користувача про другий номер
// 4. Зберігає другий номер та дає відповідь з сумою двох чисел за допомогою alert()

var firstNumber = prompt("Введіть перше число:");
var secondNumber = prompt("Введіть друге число:");
var sum = firstNumber + secondNumber;
alert("Сума двох чисел: " + sum);

// Додатково: Зробіть програму, яка може ділити, множити, та віднімати ці два номери

var num1 = prompt("Введіть перше число:");
var num2 = prompt("Введіть друге число:");

num1 = parseInt(num1);
num2 = parseInt(num2);

var operation = prompt("Введіть операцію (віднімання (-), множення (*) чи ділення (/)):");
var result;
if  (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} 

alert("Результат: " + result);