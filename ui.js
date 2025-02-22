function updateUI() {
    const selectedTypes = Array.from(document.getElementById("mbti-select").selectedOptions).map(option => option.value);
    const personalColor = generatePersonalColor(selectedTypes);
    
    document.getElementById("result-color").style.backgroundColor = `rgb(${personalColor.join(",")})`;
    document.getElementById("result-functions").innerText = `主機能: ${findClosestFunction(personalColor)}`;
}
