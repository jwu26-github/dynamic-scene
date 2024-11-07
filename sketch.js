let cloudX = [0, 150, 300]; // Initial x-positions for clouds
let isDay = true;
let treeHeight = 0; // Variable to control tree growth
let stars = []; // Array to hold star positions


function setup() {
  createCanvas(400, 400);
  noStroke();

  
  // Initialize stars with random positions
  for (let i = 0; i < 50; i++) {
    stars.push({
      x: random(width),
      y: random(50, 200) // Limit stars to upper half of the canvas
    });
  }
}


function draw() {
  // Sky background based on day/night
  if (isDay) {
    background(135, 206, 235); // Daytime sky color
  } else {
    background(0, 24, 72); // Nighttime sky color
    drawStars(); // Draw stars at night
  }

  
  // Draw sun or moon
  if (isDay) {
    fill(255, 223, 0); // Yellow for sun
  } else {
    fill(255, 250, 250); // White for moon
  }
  ellipse(350, 80, 80, 80);

  
  // Draw clouds
  fill(255);
  for (let i = 0; i < cloudX.length; i++) {
    ellipse(cloudX[i], 80, 50, 40, 30);
    ellipse(cloudX[i] + 20, 80, 50, 30);
    ellipse(cloudX[i] - 20, 80, 50, 30);

    
    // Move clouds to the right
    cloudX[i] += 1.5;
    if (cloudX[i] > 445) {
      cloudX[i] = -50; // Reset cloud to the left side
    }
  }
  
  //Mountain 0 light shadow
    fill(34, 130, 34);
  triangle(400, 400, 400, 200, 150, 400);
    //Mountain 0
  fill(34, 90, 34);
  triangle(400, 400, 400, 200, 200, 400);
  
  
      //Mountain 1 light shadow
  fill(34, 160, 34);
  triangle(-100, 400, 30, 100, 450, 400);
    //Mountain 1
  fill(34, 120, 34);
  triangle(-100, 400, 30, 100, 400, 400);
  
  

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
      buildingHeight = min(buildingHeight + 1, 200);
      fill(100);
      rect(x, 350 - buildingHeight, 50, buildingHeight);
    } else {
      // When buildings are below the grass, draw vegetation and trees
      vegetationAppears = true;

      
      
      // Draw different types of trees with variable heights
      let individualTreeHeight = treeHeight; // Uneven growth
      if (i % 2 === 0) {
        // Round tree
        fill(139, 69, 19); // Brown trunk
        rect(x + 15, 350 - individualTreeHeight, 10, individualTreeHeight); // Trunk
        fill(34, 139, 34); // Green foliage
        ellipse(x + 20, 350 - individualTreeHeight - 20, 40, 40); // Tree top
      } else {
        // Pointy triangle tree
        fill(139, 69, 19); // Brown trunk
        rect(x + 20, 350 - individualTreeHeight, 10, individualTreeHeight); // Trunk
        fill(0, 128, 0); // Darker green for triangle tree
        triangle(x, 350 - individualTreeHeight, x + 25, 350 - individualTreeHeight - 50, x + 50, 350 - individualTreeHeight); // Triangle foliage
      }
    }
  }

  // Change day/night based on vegetation appearance
  isDay = !vegetationAppears;

  // Increase tree height if mouse is pressed, up to a maximum
  if (mouseIsPressed) {
    treeHeight = min(treeHeight + 1, 100); // Limit tree height to 100
  }
}


// Function to draw stars at random positions
function drawStars() {
  fill(255, 250, 250); // White color for stars
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 3, 3); // Draw each star as a small dot
  }
}

function mouseReleased() {
  // Reset tree height when mouse is released
  treeHeight = min(treeHeight = 100, 0);
}
