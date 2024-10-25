
// Wait for the DOM content to fully load before running the code
document.addEventListener("DOMContentLoaded", () => {

    // Dynamically inject the HTML for categories, activities, and details section into the page
    document.body.innerHTML += `
    <div>Categories</div>
    <select id="cats"></select> <!-- Dropdown for selecting categories -->

    <div>Activities</div>
    <select id="acts"></select> <!-- Dropdown for selecting activities within the chosen category -->

    <div>Details</div>
    <table id="details"></table> <!-- Table where selected activity details will be displayed -->
    `;

    // Populate the 'categories' dropdown with the list of categories
    for (let c of categories) {
        cats.appendChild(new Option(c)); // Add an option element for each category
    }

    // Event listener: when the user selects a category from the 'categories' dropdown
    cats.addEventListener("change", () => {
        acts.innerHTML = ""; // Clear previous activity options

        // Loop through each activity in the activities array
        for (let a of activities) {
            // If the selected category matches the activity's category, add it to the activities dropdown
            if (cats.value === a.category) {
                acts.appendChild(new Option(a.name, a.id)); // Create an option for the activity
            }
        }
    });
        
    // Event listener: when the user selects an activity from the 'activities' dropdown
    acts.addEventListener("change", () => {
        details.innerHTML = ""; // Clear the previous activity details

        // Loop through all activities to find the selected one
        for (let a of activities) {
            // If the selected activity ID matches the current activity
            if (a.id === acts.value) {
                // Loop through the properties of the selected activity (e.g., category, name, location, etc.)
                for (let prop in a) {
                    let value = a[prop]; // Get the value of the current property
                    // Dynamically create a table row with the property name and its value
                    details.innerHTML += `
                        <tr>
                            <th>${prop.toUpperCase()}:</th> <!-- Display the property name in uppercase -->
                            <td>${value}</td> <!-- Display the corresponding value -->
                        </tr>
                    `;
                }
            }
        }
    });
});
