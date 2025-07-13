const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Use getElementById for 'area'

let area = 0;
const PI = 3.14159;

const radius = 10;
area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Removed invalid reassignments below
// radius = 10;
// area = PI * radius * radius;
// radiusOutput = radius;
// areaOutput = area;