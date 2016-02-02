$(document).ready(function () {
  testCalculateSupply();
});

function testCalculateSupply()
{
  $('#age, #amount').on('change', function () {
	if ($('#age').val() > 0 && $('#age').val() < 100) {
		var max = 100;      		
		var total = calculateSupply($('#age').val(), $('#amount').val());
		var str = "".concat("You will need " + total + " to last you until the ripe old age of " + max);
   		$("#result2").text(str);
  	} else {
    		$("#result2").text(''); 
 	} 
  });
}

function calculateSupply(age, amount)
{
  var max = 100;
  return (parseInt((amount * 365) * (max - age)));
}
