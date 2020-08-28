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
    $('#BSResult').html('<h3 class="mt-5 text-primary">Your Aggregate for BSMT/BSEDS= ' + sum.toFixed(2) + '% </h3>');
    $('html, body').animate({ scrollTop: $('#BSResult').offset().top - 150 }, 1000, 'easeInOutExpo');
  }

  gtag('event', 'BSMT/BSEDS Merit', {
    event_category: 'Merit Calculation',
    event_label: 'BSMT/BSEDS',
    value: sum.toFixed(2),
  });
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
    $('html, body').animate({ scrollTop: $('#BSResult').offset().top - 150 }, 1000, 'easeInOutExpo');
  }

  gtag('event', 'BSCS/BSEE/BSCE Merit', {
    event_category: 'Merit Calculation',
    event_label: 'BSCS/BSEE/BSCE',
    value: sum.toFixed(2),
  });
}

function calculateMSMerit(event) {
  var undergrad = parseFloat(document.getElementById('ms-merit-undergrad').value);
  var undergradTotal = 4.0;
  var interview = parseFloat(document.getElementById('ms-merit-interview').value);
  var interviewTotal = parseFloat(document.getElementById('ms-merit-interviewTotal').value);

  if (isNaN(undergrad) || isNaN(interview) || isNaN(interviewTotal)) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum = (0.8 * (undergrad / undergradTotal) + 0.2 * (interview / interviewTotal)) * 100;
    $('#MSResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
    $('html, body').animate({ scrollTop: $('#MSResult').offset().top - 150 }, 1000, 'easeInOutExpo');
  }

  gtag('event', 'MS Merit', {
    event_category: 'Merit Calculation',
    event_label: 'MS',
    value: sum.toFixed(2),
  });
}

function calculatePhDMerit(event) {
  var undergrad = parseFloat(document.getElementById('phd-merit-undergrad').value);
  var undergradTotal = 4.0;
  var grad = parseFloat(document.getElementById('phd-merit-grad').value);
  var gradTotal = 4.0;
  var interview = parseFloat(document.getElementById('phd-merit-interview').value);
  var interviewTotal = parseFloat(document.getElementById('phd-merit-interviewTotal').value);
  var phdTest = parseInt(document.getElementById('phd-merit-PhdTest').value);
  var phdTestTotal = parseInt(document.getElementById('phd-merit-PhdTestTotal').value);

  if (
    isNaN(undergrad) ||
    isNaN(grad) ||
    isNaN(interview) ||
    isNaN(interviewTotal) ||
    isNaN(phdTest) ||
    isNaN(phdTestTotal)
  ) {
    console.log('something went wrong');
  } else {
    event.preventDefault();
    var sum =
      (0.2 * (undergrad / undergradTotal) +
        0.2 * (grad / gradTotal) +
        0.2 * (interview / interviewTotal) +
        0.4 * (phdTest / phdTestTotal)) *
      100;
    $('#PhDResult').html('<h3 class="mt-5 text-primary">Your Aggregate = ' + sum.toFixed(2) + '% </h3>');
    $('html, body').animate({ scrollTop: $('#PhDResult').offset().top - 150 }, 1000, 'easeInOutExpo');
  }

  gtag('event', 'PhD Merit', {
    event_category: 'Merit Calculation',
    event_label: 'PhD',
    value: sum.toFixed(2),
  });
}
