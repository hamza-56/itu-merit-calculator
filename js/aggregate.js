function calculateBSMerit(event) {
  var part1 = parseInt(document.getElementById('part1').value);
  var part1total = parseInt(document.getElementById('part1total').value);
  var matric = parseInt(document.getElementById('matric').value);
  var matrictotal = parseInt(document.getElementById('matrictotal').value);
  var test = parseInt(document.getElementById('test').value); // itu marks
  var testtotal = parseInt(document.getElementById('testtotal').value);

  if (isNaN(part1) || isNaN(part1total) || isNaN(matric) || isNaN(matrictotal) || isNaN(test) || isNaN(testtotal)) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.25 * (matric / matrictotal) + 0.25 * (part1 / part1total) + 0.5 * (test / testtotal)) * 100;
    $('#BSResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
  }
}

function calculateMSMerit(event) {
  var part1 = parseInt(document.getElementById('part1').value);
  var part1total = parseInt(document.getElementById('part1total').value);
  var matric = parseInt(document.getElementById('matric').value);
  var matrictotal = parseInt(document.getElementById('matrictotal').value);
  var test = parseInt(document.getElementById('test').value); // itu marks
  var testtotal = parseInt(document.getElementById('testtotal').value);

  if (isNaN(part1) || isNaN(part1total) || isNaN(matric) || isNaN(matrictotal) || isNaN(test) || isNaN(testtotal)) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.25 * (matric / matrictotal) + 0.25 * (part1 / part1total) + 0.5 * (test / testtotal)) * 100;
    $('#BSResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
  }
}
