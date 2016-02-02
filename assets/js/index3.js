$(document).ready(function () {
  testCalc();
});

function testCalc()
{
  $('#radius').on('change', function () {
    var circumference = calcCircumfrence($('#radius').val());
    var str = "".concat("The circumference is " + circumference);
    $("#result31").text(str);
    var area = calcArea($('#radius').val());
    str = "".concat("The area is " + area);
    $("#result32").text(str);
  });
}

function calcCircumfrence(radius)
{
  return (Math.PI * 2 * radius);
}

function calcArea(radius)
{
  return (Math.PI * radius * radius); 
}
