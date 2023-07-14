document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    {
      name: "The Godfather",
      description: "A large Italian family has an eventful reunion.",
      hint: "Directed by Francis Ford Coppola",
    },
    {
      name: "Titanic",
      description: "People on a ship have a very bad time.",
      hint: "Directed by James Cameron",
    },
    {
      name: "Star Wars",
      description: "Farm boy, old man, and smuggler rescue princess.",
      hint: "Directed by George Lucas",
    },
    {
      name: "Inception",
      description: "Man with a spinning top has really vivid dreams.",
      hint: "Directed by Christopher Nolan",
    },
    {
      name: "The Matrix",
      description:
        "Office worker learns kung-fu and discovers reality isn’t real.",
      hint: "Directed by the Wachowskis",
    },
    {
      name: "The Lion King",
      description:
        "An exiled prince returns home after his uncle takes over the kingdom.",
      hint: "It's a Disney Movie",
    },
    {
      name: "Fight Club",
      description: "An insomniac starts a club for fighting.",
      hint: "Directed by David Fincher",
    },
    {
      name: "Jurassic Park",
      description: "Theme park's main attractions escape and cause chaos.",
      hint: "Directed by Steven Spielberg",
    },
    {
      name: "The Shining",
      description:
        "Family’s winter vacation ruined by hotel’s poor choice in caretakers.",
      hint: "Directed by Stanley Kubrick",
    },
    {
      name: "The Shawshank Redemption",
      description: "Man becomes best friends with another man in prison.",
      hint: "Based on a story by Stephen King",
    },
  ];

  let currentMovie = getRandomMovie();
  updateDescription();

  document.querySelector(".btn-primary").addEventListener("click", () => {
    let userGuess = document.getElementById("guess").value;
    let message = document.getElementById("message");

    if (userGuess.toLowerCase() === currentMovie.name.toLowerCase()) {
      message.textContent = "Congratulations! You guessed the movie correctly.";
      message.style.color = "green";
      currentMovie = getRandomMovie();
      updateDescription();
      document.getElementById("guess").value = "";
    } else {
      message.textContent = "Sorry, that's not correct. Try again!";
      message.style.color = "red";
    }
  });

  document.querySelector(".btn-secondary").addEventListener("click", () => {
    let message = document.getElementById("message");
    message.textContent = `Hint: ${currentMovie.hint}`;
    message.style.color = "blue";
  });

  function getRandomMovie() {
    return movies[Math.floor(Math.random() * movies.length)];
  }

  function updateDescription() {
    document.querySelector(".lead").textContent = currentMovie.description;
  }
});
