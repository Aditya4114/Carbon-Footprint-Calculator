function calculateTotalCarbonFootprint() {
    // Define emission factors (example values)
    const emissionFactors = {
        electricity: 0.5, // kg CO2 per kWh
        gasoline: 2.31   // kg CO2 per liter
    };
    
    // Get values from input fields
    const electricityUsage = parseFloat(document.getElementById("electricity").value) || 0;
    const gasolineUsage = parseFloat(document.getElementById("gasoline").value) || 0;
    
    // Validate inputs
    if (isNaN(electricityUsage) || isNaN(gasolineUsage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    
    // Calculate individual carbon footprints
    const electricityFootprint = electricityUsage * emissionFactors.electricity;
    const gasolineFootprint = gasolineUsage * emissionFactors.gasoline;
    
    // Sum up all carbon footprints
    const totalCarbonFootprint = electricityFootprint + gasolineFootprint;
    
    // Store the result in a variable for further calculations
    let result = totalCarbonFootprint;
    
    // Display the result
    document.getElementById("result").innerText = `Total Carbon Footprint: ${result.toFixed(2)} kg CO2`;

    // You can use the result variable for further calculations or redirect to another page
    console.log("Stored Total Carbon Footprint: ", result);

    // Redirect to a separate page to display the result (optional)
    // window.location.href = "result.html?totalCarbonFootprint=" + result.toFixed(2);
}

// Additional code to handle redirection and display on a separate page
// Uncomment and adjust as needed
/*
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const totalCarbonFootprint = urlParams.get('totalCarbonFootprint');
    if (totalCarbonFootprint) {
        document.getElementById("result").innerText = `Total Carbon Footprint: ${totalCarbonFootprint} kg CO2`;
    }
});
*/
