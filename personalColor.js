function generatePersonalColor(selectedTypes) {
    let totalRGB = [0, 0, 0];
    selectedTypes.forEach(type => {
        const color = calculateMBTIColor(type);
        totalRGB = totalRGB.map((value, index) => value + color[index]);
    });

    return totalRGB.map(value => Math.floor(value / selectedTypes.length));
}
