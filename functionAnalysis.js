function findClosestFunction(color) {
    let minDistance = Infinity;
    let closestFunction = "";

    Object.keys(functionColors).forEach(func => {
        const funcColor = functionColors[func];
        let distance = Math.sqrt(
            (color[0] - funcColor[0]) ** 2 +
            (color[1] - funcColor[1]) ** 2 +
            (color[2] - funcColor[2]) ** 2
        );

        if (distance < minDistance) {
            minDistance = distance;
            closestFunction = func;
        }
    });

    return closestFunction;
}
