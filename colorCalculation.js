function calculateMBTIColor(type) {
    const weights = [0.4, 0.3, 0.2, 0.1]; 
    const functions = mbtiColors[type];

    let finalColor = [0, 0, 0];
    functions.forEach((func, i) => {
        const funcColor = functionColors[func];
        finalColor = finalColor.map((value, index) => value + funcColor[index] * weights[i]);
    });

    return finalColor.map(Math.round);
}
