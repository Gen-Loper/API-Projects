// Function to Fetch a Joke from JokeAPI
function getJoke() {
    // Make a GET request to the JokeAPI
    axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(response => {
            // Extract the joke data from API response
            const data = response.data;
            let jokeText = "";

            // Check if the joke is a single-line or a two-part joke
            if (data.type === "single") {
                jokeText = data.joke; // Single joke
            } else {
                jokeText = `${data.setup} - ${data.delivery}`; // Two-part joke
            }

            // Display the joke in the paragraph with id="joke"
            document.getElementById("joke").innerText = jokeText;
        })
        .catch(error => {
            // Log error in the console and show a fallback message
            console.error("Error fetching joke:", error);
            document.getElementById("joke").innerText = "Failed to load a joke.";
        });
}
