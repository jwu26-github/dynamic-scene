let cloudX = [0, 150, 300]; // Initial x-positions for clouds
let isDay = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Sky background based on day/night
  if (isDay) {
    background(135, 206, 235); // Daytime sky color
  } else {
    background(0, 24, 72); // Nighttime sky color
  }

  // Draw sun or moon
  if (isDay) {
    fill(255, 223, 0); // Yellow for sun
  } else {
    fill(255, 250, 250); // White for moon
  }
  ellipse(350, 80, 50, 50);

  // Draw clouds
  fill(255);
  for (let i = 0; i < cloudX.length; i++) {
    ellipse(cloudX[i], 80, 50, 30);
    ellipse(cloudX[i] + 20, 80, 50, 30);
    ellipse(cloudX[i] - 20, 80, 50, 30);

    // Move clouds to the right
    cloudX[i] += 1;
    if (cloudX[i] > width) {
      cloudX[i] = -50; // Reset cloud to the left side
    }
  }

  // Grass floor
  fill(34, 139, 34);
  rect(0, 350, width, 50);

  // Draw buildings or vegetation based on mouseY position
  let vegetationAppears = false;
  for (let i = 0; i < 5; i++) {
    let x = 50 + i * 70;
    let buildingHeight = height - mouseY;

    if (buildingHeight > 0) {
      // Draw building
      fill(100);
      rect(x, 350 - buildingHeight, 50, buildingHeight);
    } else {
      // When buildings are below the grass, draw vegetation and trees
      vegetationAppears = true;

      // Draw different types of trees
      if (i % 2 === 0) {
        // Round tree
        fill(139, 69, 19); // Brown trunk
        rect(x + 15, 300, 10, 50); // Trunk
        fill(34, 139, 34); // Green foliage
        ellipse(x + 20, 280, 40, 40); // Tree top
      } else {
        // Pointy triangle tree
        fill(139, 69, 19); // Brown trunk
        rect(x + 20, 320, 10, 30); // Trunk
        fill(0, 128, 0); // Darker green for triangle tree
        triangle(x, 320, x + 25, 270, x + 50, 320); // Triangle foliage
      }
    }
  }

  // Change day/night based on vegetation appearance
  isDay = !vegetationAppears;
}
