function getPrediction() {
    const symptomsInput = document.getElementById('symptoms').value;
    const symptoms = symptomsInput.split(',').map(s => s.trim().toLowerCase());
    
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('predicted-disease').textContent = data.disease;
        document.getElementById('description').textContent = data.description;
        document.getElementById('precautions').innerHTML = data.precautions.map(p => `<li>${p}</li>`).join('');
        document.getElementById('medications').textContent = data.medications.join(', ');
        document.getElementById('diets').textContent = data.diets.join(', ');
        document.getElementById('workout').innerHTML = data.workout.map(w => `<li>${w}</li>`).join('');
    })
    .catch(error => console.error('Error:', error));
}
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('collapsed');
}

const predictButton = document.getElementById("predict-btn");
    const resultDiv = document.getElementById("result");

    // Add event listener to the button
    predictButton.addEventListener("click", function() {
        // You can replace this with the actual prediction result
        document.getElementById("predicted-disease").textContent = "Sample Disease";
        document.getElementById("description").textContent = "Sample description about the disease.";
        document.getElementById("medications").textContent = "Sample medication list.";
        document.getElementById("diets").textContent = "Sample diet recommendations.";
        document.getElementById("precautions").innerHTML = "<li>Precaution 1</li><li>Precaution 2</li>";
        document.getElementById("workout").innerHTML = "<li>Workout 1</li><li>Workout 2</li>";

        // Show the result div
        resultDiv.style.display = "block";
    });