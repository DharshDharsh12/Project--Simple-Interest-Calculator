function show() {
  const RESULT = document.getElementById('errresult');
  const PRINCIPAL = parseFloat(document.getElementById('principal').value);
  const RATE = parseFloat(document.getElementById('rate').value);
  const DURATION = document.getElementById('duration').value;

  const TIME = parseFloat(document.getElementById('time').value);
  const AMOUNT_SHOW = document.getElementById('one');
  const INTEREST_SHOW = document.getElementById('two');


  if (PRINCIPAL <= 0 || RATE <= 0 || TIME <= 0 || isNaN(PRINCIPAL) || isNaN(RATE) || isNaN(TIME)) {
    RESULT.innerText = 'Enter the Valid INPUTS for Calculating Simple Interest';
    RESULT.style.color = 'red';
    AMOUNT_SHOW.textContent = '';
    INTEREST_SHOW.textContent = '';
    return;
  }
  let correctedTime = TIME;

  if (DURATION === 'months') {
    correctedTime = TIME / 12;
  }

  const INTEREST = (PRINCIPAL * correctedTime * RATE) / 100;
  const AMOUNT = INTEREST + PRINCIPAL;
  RESULT.textContent = '';
  AMOUNT_SHOW.textContent = AMOUNT.toFixed(2);
  INTEREST_SHOW.textContent = INTEREST.toFixed(2);
}

function clearInputs() {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("time").value = "";
}

document.getElementById("clearButton").addEventListener("click", clearInputs);
