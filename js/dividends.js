function calculateDepositDividends(
  startingDeposit,
  monthlyDeposit,
  interestRate
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
    } else {
      //   calculate dividends
      response = "Request is valid " + happyEmoji;
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
