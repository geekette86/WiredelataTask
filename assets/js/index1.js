$(document).ready(function () {
  testCalculateAge();
});

function testCalculateAge()
{
  $('#year').on('change', function () {
	if ($('#year').val() > 0 && $('#year').val() < new Date().getFullYear()) {
        	var age = calculateAge($('#year').val(), new Date().getFullYear());
    		var str = "".concat("You are either " + age, " or ", (age - 1)); 		
		$("#result1").text(str);
 	} else {
  		$("#result1").text(''); 
  	} 
  });
}

function calculateAge(birthYear, currentYear)
{
    return (currentYear - birthYear);
}
