function calculateDepositDividends(
  startingDeposit,
  monthlyDeposit,
  interestRate,
  withholdingTaxRate
) {
  let error = "";
  let response = "";
  happyEmoji = " &#128559";
  sadEmoji = " &#128551;";
  try {
    if (!startingDeposit) {
      error = "Starting deposit is required";
    } else if (!monthlyDeposit) {
      error = "Monthly contribution is required";
    } else if (!interestRate) {
      error = "Deposits Interest is required";
    } else if (!withholdingTaxRate) {
      error = "Withholding tax rate is required";
    } else {
      //   calculate dividends
      startingDepositDividends = (interestRate * startingDeposit) / 100;
      yearDividends = getDividendsPerYear(monthlyDeposit, interestRate);
      totalDividends = startingDepositDividends + yearDividends;
      totalTax = (totalDividends * withholdingTaxRate) / 100;
      dividendsAfterTax = totalDividends - totalTax;

      response =
        "Dividends on deposits: " +
        startingDepositDividends +
        "</br>Dividends earned withing the year: " +
        yearDividends +
        "</br>Total Dividends: " +
        totalDividends +
        "</br>Total Tax: " +
        totalTax +
        "</br>Total earnings after tax: " +
        dividendsAfterTax;
    }
  } catch (err) {
    error = err;
    console.log(err);
  }

  if (!error) {
    document.getElementById("response").innerHTML = response + happyEmoji;

    document.getElementById("error").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = error + sadEmoji;
    document.getElementById("response").innerHTML = "";
  }
}

function getDividendsPerYear(monthlyDeposit, interestRate) {
  interest = 0;
  for (i = 1; i <= 11; i++) {
    interest = interest + (((monthlyDeposit * i) / 12) * interestRate) / 100;
  }
  return interest;
}

function getDaysEquivalentSavingsValue() {
  let todayValue = getDayNumber();
  let savingsValue = getSavingsValue(todayValue);
  let today = new Date();
  let yearlyDays = 365;
  if (today.getFullYear() % 4 === 0) {
    yearlyDays = 366;
  }
  let yearlySavings = getSavingsValue(yearlyDays);

  //set the data
  document.getElementById("year").innerHTML = "YEAR " + today.getFullYear();
  document.getElementById("dayValue").innerHTML =
    "Day " + todayValue + " of " + yearlyDays;

  document.getElementById("expectedSavings").innerHTML =
    "Today's expected savings:  " + todayValue;
  document.getElementById("savingsToDate").innerHTML =
    "Total savings to date:  " + savingsValue;
  document.getElementById("ExpectedSavingForTheYear").innerHTML =
    "Total expected savings for the year:  " + yearlySavings;
}
function getDayNumber() {
  const today = new Date();

  let firstJan = new Date();
  firstJan.setMonth(0); //jan
  firstJan.setDate(1); //first

  let oneDay = 1000 * 3600 * 24;
  const todayValue =
    Math.round((today.getTime() - firstJan.getTime()) / oneDay) + 1;

  return todayValue;
}

function getSavingsValue(todayValue) {
  let savingsValue = 0;
  for (let i = 1; i <= todayValue; i++) {
    savingsValue = savingsValue + i; //sum the numbers
  }
  return savingsValue;
}

function a100PerDaySavingsPlan() {
  const todayValue = getDayNumber();
  const dailySavings = 100;
  const savingsToDate = todayValue * dailySavings;
  const today = new Date();
  const yearlySavings = getNoOfDaysInYear() * dailySavings;

  //set the data
  document.getElementById("year100").innerHTML = "YEAR " + today.getFullYear();

  document.getElementById("expectedSavings100").innerHTML =
    "Today's expected savings:  " + dailySavings;
  document.getElementById("savingsToDate100").innerHTML =
    "Total savings to date:  " + savingsToDate;
  document.getElementById("ExpectedSavingForTheYear100").innerHTML =
    "Total expected savings for the year:  " + yearlySavings;
}

function start() {
  getDaysEquivalentSavingsValue();
  a100PerDaySavingsPlan();
}
function getNoOfDaysInYear() {
  const today = new Date();
  let yearlyDays = 365;
  if (today.getFullYear() % 4 === 0) {
    yearlyDays = 366;
  }
  return yearlyDays;
}
