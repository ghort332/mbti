const mbtiColors = {
    "INFJ": [94, 125, 156],
    "INTJ": [79, 106, 135],
    "ENFP": [212, 128, 163],
    "ENTP": [48, 213, 200],
    "INFP": [192, 64, 128],
    "INTP": [75, 0, 130],
    "ENTJ": [178, 34, 34],
    "ESTP": [0, 255, 0],
};

function calculateColor() {
    const selectedTypes = Array.from(document.getElementById("mbti-select").selectedOptions).map(option => option.value);
    if (selectedTypes.length === 0) return alert("MBTIタイプを選択してください！");

    let totalRGB = [0, 0, 0];
    selectedTypes.forEach(type => {
        const color = mbtiColors[type];
        totalRGB = totalRGB.map((value, index) => value + color[index]);
    });

    let personalColor = totalRGB.map(value => Math.floor(value / selectedTypes.length));
    document.getElementById("result-color").style.backgroundColor = `rgb(${personalColor.join(",")})`;
}
