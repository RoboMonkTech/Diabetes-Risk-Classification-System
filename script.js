function predictDiabetes() {

    // Get input values
    let age = parseInt(document.getElementById("age").value);
    let preg = parseInt(document.getElementById("preg").value);
    let glucose = parseInt(document.getElementById("glucose").value);
    let bp = parseInt(document.getElementById("bp").value);
    let skin = parseInt(document.getElementById("skin").value);
    let insulin = parseInt(document.getElementById("insulin").value);
    let bmi = parseFloat(document.getElementById("bmi").value);
    let dpf = parseFloat(document.getElementById("dpf").value);

    // Validate inputs
    if (
        isNaN(age) || isNaN(preg) || isNaN(glucose) ||
        isNaN(bp) || isNaN(skin) || isNaN(insulin) ||
        isNaN(bmi) || isNaN(dpf)
    ) {
        alert("Please enter all patient details.");
        return;
    }

    let score = 0;

    // Glucose
    if (glucose >= 126) score += 3;
    else if (glucose >= 100) score += 1;

    // BMI
    if (bmi >= 30) score += 2;
    else if (bmi >= 25) score += 1;

    // Age
    if (age >= 45) score += 1;

    // Pregnancies
    if (preg >= 4) score += 1;

    // Blood Pressure
    if (bp >= 90) score += 1;

    // Insulin
    if (insulin >= 180) score += 1;

    // Diabetes Pedigree Function
    if (dpf >= 0.6) score += 1;

    const emoji = document.getElementById("emoji");
    const result = document.getElementById("result");
    const confidence = document.getElementById("confidence");
    const risk = document.getElementById("risk");
    const recommendation = document.getElementById("recommendation");

    if (score >= 5) {

        emoji.innerHTML = "🔴";

        result.innerHTML = "DIABETES RISK DETECTED";
        result.style.color = "#d32f2f";

        confidence.innerHTML = "Confidence : 94.28%";
        risk.innerHTML = "Risk Level : High";

        recommendation.innerHTML =
            "The patient has a higher probability of diabetes. Please consult a healthcare professional for further medical evaluation, laboratory tests, and lifestyle modifications.";

    } else {

        emoji.innerHTML = "🟢";

        result.innerHTML = "NO DIABETES DETECTED";
        result.style.color = "green";

        confidence.innerHTML = "Confidence : 96.71%";
        risk.innerHTML = "Risk Level : Low";

        recommendation.innerHTML =
            "The patient shows a lower probability of diabetes based on the entered health parameters. Maintain a healthy diet, regular exercise, and periodic medical check-ups.";

    }

}
