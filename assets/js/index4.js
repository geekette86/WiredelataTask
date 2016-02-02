$(document).ready(function () {
  testTemperature();
});
function testTemperature()
{
  $('#C').on('change', function () {
    var f = celsiusToFahrenheit($('#C').val());
    var str = "".concat($('#C').val() + "°C is " + f + "°F");
    $("#result41").text(str);
  });
  $('#F').on('change', function () {
    var c = fahrenheitToCelsius($('#F').val());
    var str = "".concat($('#F').val() + "°F is " + c + "°C");
    $("#result42").text(str);
  });
}

function celsiusToFahrenheit(c)
{
  return ((c * 9) / 5 + 32); 
}

function fahrenheitToCelsius(f)
{
  return (((f - 32) * 5) / 9);
}
