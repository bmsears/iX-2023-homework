document.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  document.getElementById("submit").addEventListener("click", () => {
    let userGuess = document.getElementById("guess").value;
    let message = document.getElementById("message");

    if (userGuess == randomNumber) {
      message.textContent =
        "Congratulations! You guessed the number correctly.";
      message.style.color = "green";
    } else {
      message.textContent = "Sorry, that's not correct. Try again!";
      message.style.color = "red";
    }
  });
});

//use DOM to create a random number to guess for
