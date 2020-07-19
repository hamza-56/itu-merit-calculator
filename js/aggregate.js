function calculateBSMerit1(event) {
  var part1 = parseInt(document.getElementById('bs-merit-1-part1').value);
  var part1Total = parseInt(document.getElementById('bs-merit-1-part1Total').value);
  var matric = parseInt(document.getElementById('bs-merit-1-matric').value);
  var matricTotal = parseInt(document.getElementById('bs-merit-1-matricTotal').value);
  var interview = parseInt(document.getElementById('bs-merit-1-interview').value);
  var interviewTotal = parseInt(document.getElementById('bs-merit-1-interviewTotal').value);

  if (
    isNaN(part1) ||
    isNaN(part1Total) ||
    isNaN(matric) ||
    isNaN(matricTotal) ||
    isNaN(interview) ||
    isNaN(interviewTotal)
  ) {
    console.log('Something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.32 * (matric / matricTotal) + 0.48 * (part1 / part1Total) + 0.2 * (interview / interviewTotal)) * 100;
    $('#BSResult').html('<h3 class="mt-5 text-primary">Your Aggregate for BSM&T/BSEDS= ' + sum.toFixed(2) + '% </h3>');
    $('html, body').animate({ scrollTop: $('#BSResult').offset().top - 150 }, 1000);
  }
}

function calculateBSMerit2(event) {
  var part1 = parseInt(document.getElementById('bs-merit-2-part1').value);
  var part1Total = parseInt(document.getElementById('bs-merit-2-part1Total').value);
  var matric = parseInt(document.getElementById('bs-merit-2-matric').value);
  var matricTotal = parseInt(document.getElementById('bs-merit-2-matricTotal').value);

  if (isNaN(part1) || isNaN(part1Total) || isNaN(matric) || isNaN(matricTotal)) {
    console.log('Something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.4 * (matric / matricTotal) + 0.6 * (part1 / part1Total)) * 100;
    $('#BSResult').html(
      '<h3 class="mt-5 text-primary">Your Aggregate for BSCS/BSEE/BSCE= ' + sum.toFixed(2) + '% </h3>'
    );
    $('html, body').animate({ scrollTop: $('#BSResult').offset().top - 150 }, 1000);
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

function calculatePhDMerit(event) {
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
