let vitalsRiskLevel = "LOW";

function checkVitals() {
  const bp = +document.getElementById("bp").value;
  const sugar = +document.getElementById("sugar").value;

  const result = document.getElementById("vitalsResult");
  const badge = document.getElementById("vitalsRisk");
  const text = document.getElementById("vitalsText");

  if (!bp || !sugar) {
    alert("Please enter all vitals.");
    return;
  }

  vitalsRiskLevel = "LOW";

  if (bp > 140 || sugar > 180) vitalsRiskLevel = "HIGH";
  else if (bp > 120 || sugar > 140) vitalsRiskLevel = "MEDIUM";

  badge.className = "risk-badge " + vitalsRiskLevel.toLowerCase();
  badge.innerText = `Vitals Risk: ${vitalsRiskLevel}`;

  text.innerText =
    vitalsRiskLevel === "LOW"
      ? "Vitals are within a safe range."
      : vitalsRiskLevel === "MEDIUM"
      ? "Vitals need monitoring."
      : "High risk detected. Medical consultation recommended.";

  result.classList.remove("hidden");
}

