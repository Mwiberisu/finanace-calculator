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

  console.log(response);
  console.log(error);

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

console.log(getDividendsPerYear(50000, 10));
