document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    changeColorBtn.addEventListener('click', function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});



function calculateTotalCarbonFootprint() {
    // Define emission factors
    const emissionFactors = {
        electricity: 0.8,    // kg CO2 per kWh 900-1200
        NaturalG: 0.2,      // kg CO2 per liter 250-300
        coal: 2.42,          // kg CO2 per kg 300kg 
        biomass: 0.18,       // kg CO2 per kg 
        lpg: 3,              // kg CO2 per kg 140-150
        heatingOil: 2.52,    // kg CO2 per liter 500-700
        personalCar:0,   // kg CO2 per km  10000-15000
        fuelConsumed: 2.31,  // kg CO2 per liter 500-600
        publicTransport: 0.1, // kg CO2 per km 
        airTravel: 0.17,     // kg CO2 per km
        meat: 20,     // kg CO2 per kg 4kg
        dairy : 2,  // 80-100 
        // plantBased: 1.48,     // kg CO2 per kg 
        foodWasted: 2.5,      // kg CO2 per kg <215 kg
        consumerGoods: 3,  // kg CO2 100-150 kg
        packaging: 2.5,      // kg CO2 per kg 35-52 kg
        waterUse: 0.000298,      // kg CO2 per liter
        constructionMaterials: 0.688, // kg CO2 per kg
        maintenanceRenovation: 1.838,  // kg CO2 per kg
        entertainment: 0.063,       // kg CO2 per kg
        healthWellness: 0.05      // kg CO2 per kg
    };
    
    // Get values from input fields
    const electricityUsage = parseFloat(document.getElementById("electricity").value) || 0;
    const NaturalG= parseFloat(document.getElementById("NaturalG").value) || 0;
    const coalUsage = parseFloat(document.getElementById("coal").value) || 0;
    const biomassUsage = parseFloat(document.getElementById("biomass").value) || 0;
    const lpgUsage = parseFloat(document.getElementById("lpg").value) || 0;
    const heatingOilUsage = parseFloat(document.getElementById("heatingOil").value) || 0;
    const personalCarUsage = parseFloat(document.getElementById("personalCar").value) || 0;
    const fuelConsumedUsage = parseFloat(document.getElementById("fuelConsumed").value) || 0;
    const publicTransportUsage = parseFloat(document.getElementById("publicTransport").value) || 0;
    const airTravelUsage = parseFloat(document.getElementById("airTravel").value) || 0;
    const meatUsage = parseFloat(document.getElementById("meat").value) || 0;
    const dairyUsage = parseFloat(document.getElementById("dairy").value) || 0;
    // const plantBasedUsage = parseFloat(document.getElementById("plantBased").value) || 0;
    const foodWastedUsage = parseFloat(document.getElementById("foodWasted").value) || 0;
    const consumerGoodsUsage = parseFloat(document.getElementById("consumerGoods").value) || 0;
    const packagingUsage = parseFloat(document.getElementById("packaging").value) || 0;
    const waterUseUsage = parseFloat(document.getElementById("waterUse").value) || 0;
    const constructionMaterialsUsage = parseFloat(document.getElementById("constructionMaterials").value) || 0;
    const maintenanceRenovationUsage = parseFloat(document.getElementById("maintenanceRenovation").value) || 0;
    const entertainmentUsage = parseFloat(document.getElementById("entertainment").value) || 0;
    const healthWellnessUsage = parseFloat(document.getElementById("healthWellness").value) || 0;

    // Validate inputs
    if (isNaN(electricityUsage) || isNaN(coalUsage) || isNaN(biomassUsage) ||
        isNaN(lpgUsage) || isNaN(heatingOilUsage) || isNaN(NaturalG)||isNaN(personalCarUsage) || isNaN(fuelConsumedUsage) || isNaN(publicTransportUsage) ||
        isNaN(airTravelUsage)|| isNaN(meatUsage) ||isNaN(dairyUsage) || isNaN(foodWastedUsage)|| isNaN(consumerGoodsUsage) || isNaN(packagingUsage) ||
        isNaN(waterUseUsage)|| isNaN(constructionMaterialsUsage) || isNaN(maintenanceRenovationUsage) || isNaN(entertainmentUsage) || isNaN(healthWellnessUsage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    
    // Calculate individual carbon footprints
    const electricityFootprint = electricityUsage * emissionFactors.electricity;
    const NaturalGFootprint = NaturalG * emissionFactors.NaturalG;
    const coalFootprint = coalUsage * emissionFactors.coal;
    const biomassFootprint = biomassUsage * emissionFactors.biomass;
    const lpgFootprint = lpgUsage * emissionFactors.lpg;
    const heatingOilFootprint = heatingOilUsage * emissionFactors.heatingOil;
    const personalCarFootprint = personalCarUsage * emissionFactors.personalCar;
    const fuelConsumedFootprint = fuelConsumedUsage * emissionFactors.fuelConsumed;
    const publicTransportFootprint = publicTransportUsage * emissionFactors.publicTransport;
    const airTravelFootprint = airTravelUsage * emissionFactors.airTravel;
    const meatFootprint = meatUsage * emissionFactors.meat;
    const dairyFootprint = dairyUsage * emissionFactors.dairy;
    // const plantBasedFootprint = plantBasedUsage * emissionFactors.plantBased;
    const foodWastedFootprint = foodWastedUsage * emissionFactors.foodWasted;
    const consumerGoodsFootprint = consumerGoodsUsage * emissionFactors.consumerGoods;
    const packagingFootprint = packagingUsage * emissionFactors.packaging;
    const waterUseFootprint = waterUseUsage * emissionFactors.waterUse;
    const constructionMaterialsFootprint = constructionMaterialsUsage * emissionFactors.constructionMaterials;
    const maintenanceRenovationFootprint = maintenanceRenovationUsage * emissionFactors.maintenanceRenovation;
    const entertainmentFootprint = entertainmentUsage * emissionFactors.entertainment;
    const healthWellnessFootprint = healthWellnessUsage * emissionFactors.healthWellness;
    
    // Sum up all carbon footprints
    const totalCarbonFootprint = electricityFootprint + coalFootprint + biomassFootprint + lpgFootprint + heatingOilFootprint + NaturalGFootprint +
    personalCarFootprint + fuelConsumedFootprint + publicTransportFootprint +
    airTravelFootprint + meatFootprint + dairyFootprint+
    foodWastedFootprint+ consumerGoodsFootprint + packagingFootprint +
    waterUseFootprint+ constructionMaterialsFootprint + maintenanceRenovationFootprint+ entertainmentFootprint + healthWellnessFootprint;
    
    // // Log the result to the console
    // console.log(`Stored Total Carbon Footprint: ${totalCarbonFootprint.toFixed(2)} kg CO2`);
    
    // // Display the result
    // document.getElementById("result").innerText = `Total Carbon Footprint: ${totalCarbonFootprint.toFixed(2)} kg CO2`;

    // Store the result in localStorage
    localStorage.setItem("totalCarbonFootprint", totalCarbonFootprint.toFixed(2));

    // Redirect to the results page
    window.location.href = "results.html";  
}
