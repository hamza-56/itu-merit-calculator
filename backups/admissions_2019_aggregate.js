function calculateBSMerit(event) {
  var part1 = parseInt(document.getElementById('part1').value);
  var part1Total = parseInt(document.getElementById('part1Total').value);
  var matric = parseInt(document.getElementById('matric').value);
  var matricTotal = parseInt(document.getElementById('matricTotal').value);
  var BSTest = parseInt(document.getElementById('BSTest').value);
  var BSTestTotal = parseInt(document.getElementById('BSTestTotal').value);

  if (isNaN(part1) || isNaN(part1Total) || isNaN(matric) || isNaN(matricTotal) || isNaN(BSTest) || isNaN(BSTestTotal)) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.25 * (matric / matricTotal) + 0.25 * (part1 / part1Total) + 0.5 * (BSTest / BSTestTotal)) * 100;
    $('#BSResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
  }
}

function calculateMSMerit(event) {
  var undergrad = parseFloat(document.getElementById('undergrad').value);
  var undergradTotal = 4.0;
  var interview = parseFloat(document.getElementById('interview').value);
  var interviewTotal = parseFloat(document.getElementById('interviewTotal').value);
  var MSTest = parseInt(document.getElementById('MSTest').value);
  var MSTestTotal = parseInt(document.getElementById('MSTestTotal').value);

  if (isNaN(undergrad) || isNaN(interview) || isNaN(interviewTotal) || isNaN(MSTest) || isNaN(MSTestTotal)) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum =
      (0.4 * (undergrad / undergradTotal) + 0.2 * (interview / interviewTotal) + 0.4 * (MSTest / MSTestTotal)) * 100;
    $('#MSResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
  }
}
