function calculateImpact() {
    const dataUsage = document.getElementById('data-usage').value;
    const impactPerGB = 0.06; // Estimated emissions per GB of data in kg CO2
    const totalImpact = dataUsage * impactPerGB;
  
    document.getElementById('result').innerText = `Your estimated carbon footprint is ${totalImpact.toFixed(2)} kg of CO2.`;
  }
  