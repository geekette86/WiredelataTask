/************* TASK 1 *****************/
function testCalculateAge()
{
  calculateAge("1991", new Date().getFullYear());
  calculateAge("1986", new Date().getFullYear());
  calculateAge("2000", new Date().getFullYear());
}

function calculateAge(birthYear, currentYear)
{
  var age = currentYear - birthYear;
  var str = 'You are either ' + age, ' or ', (age - 1);
  document.write(str);
}

/************* TASK 2 *****************/
function testCalculateSupply()
{
  calculateSupply(35, 10.15);
  calculateSupply(75, 20.10);
  calculateSupply(20, 15);
}

function calculateSupply(age, amount)
{
  var max = 100;
  var total = (amount * 365) * (max - age);
  var str = 'You will need ' + parseInt(total) + ' to last you until the ripe old age of ' + max;
  document.write(str);
}

/************* TASK 3 *****************/
function testCalc()
{
  calcCircumfrence(3);
  calcArea(3);
}

function calcCircumfrence(radius)
{
  var circumference = Math.PI * 2 * radius;
  document.write("The circumference is " + circumference);
}

function calcArea(radius)
{
  var area = Math.PI * radius * radius;
  document.write("The area is " + area);
}

/************* TASK 4 *****************/
function testTemperature()
{
  celsiusToFahrenheit(30);
  fahrenheitToCelsius(30);
}

function celsiusToFahrenheit(c)
{
  var f = (c * 9) / 5 + 32;
  document.write(c + '°C is ' + f + '°F');
}

function fahrenheitToCelsius(f)
  var c = ((f - 32) * 5) / 9;
  document.write(f + '°F is ' + c + '°C');
}
