// Selecting the button and unordered list (ul) elements from the DOM
let btn = document.querySelector("button"); 
let list = document.querySelector("ul"); 

// API URL to fetch university data based on country name
let url = "http://universities.hipolabs.com/search?name=";

// Adding a click event listener to the button
btn.addEventListener("click", async () => {
    // Getting the input value (country name) entered by the user
    let country = document.querySelector("input").value;
    
    // Fetching the list of universities from the API based on the entered country
    let colArr = await getCollege(country);
    
    // Displaying the retrieved universities in the UI
    show(colArr);
});

// Function to display the list of universities on the webpage
function show(colArr) {
    // Clearing any previous list items before adding new ones
    list.innerText = "";

    // Looping through the array of universities and adding them as list items
    for (col of colArr) {
        let li = document.createElement("li"); // Creating a new list item (li)
        li.innerText = col.name; // Setting the text of the list item to the university name
        list.appendChild(li); // Appending the list item to the unordered list (ul)
    }
}

// Function to fetch university data from the API
async function getCollege(country) {
    try {
        // Sending an HTTP GET request to fetch university data based on the entered country
        let res = await axios.get(url + country);
        console.log(res); // Logging the API response for debugging
        return res.data; // Returning the university data (array of objects)
    } catch (err) {
        // Handling errors in case the API request fails
        console.log("Error = ", err);
    }
}
