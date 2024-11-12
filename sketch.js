// Starting x position for clouds
let cloudX = [0, 150, 300]; 



// Control tree growth
let isDay = true;
let treeHeight = 0; 



// Star positions
let stars = [        
  { x: 50, y: 60 },
  { x: 100, y: 80 },
  { x: 150, y: 40 },
  { x: 200, y: 70 },
  { x: 250, y: 50 },
  { x: 300, y: 90 },
  { x: 350, y: 60 },
  { x: 75, y: 100 },
  { x: 125, y: 120 },
  { x: 175, y: 110 }
];



function setup() {
  createCanvas(400, 400);
  noStroke();
}



function draw() {
  // Sky background based on day/night
  if (isDay) {
    background(135, 206, 235); // Day color
  } else {
    background(0, 24, 72); // Night color
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
  drawCloud(cloudX[0]);
  drawCloud(cloudX[1]);
  drawCloud(cloudX[2]);

  
  
  // Move clouds to the right
  cloudX[0] += 1.5;
  cloudX[1] += 1.5;
  cloudX[2] += 1.5;

  
  
  // Reset clouds if they go off screen
  if (cloudX[0] > 445) cloudX[0] = -50;
  if (cloudX[1] > 445) cloudX[1] = -50;
  if (cloudX[2] > 445) cloudX[2] = -50;

  
  
  // Mountains 1
  fill(34, 130, 34);
  triangle(400, 400, 400, 200, 150, 400);

  // Mountains shadow 1
  fill(34, 90, 34);
  triangle(400, 400, 400, 200, 200, 400);

  // Mountains 2
  fill(34, 160, 34);
  triangle(-100, 400, 30, 100, 450, 400);
 
  // Mountains shadow 2
  fill(34, 120, 34);
  triangle(-100, 400, 30, 100, 400, 400);

  
  
  // Grass floor
  fill(34, 139, 34);
  rect(0, 350, width, 50);

  
  
  // Draw buildings or vegetation based on mouseY
  let vegetationAppears = false;

  
  
  // Draw each building
  vegetationAppears |= drawBuildingOrTree(50, height - mouseY, treeHeight, 0); 
  vegetationAppears |= drawBuildingOrTree(120, height - mouseY, treeHeight, 1); 
  vegetationAppears |= drawBuildingOrTree(190, height - mouseY, treeHeight, 2); 
  vegetationAppears |= drawBuildingOrTree(260, height - mouseY, treeHeight, 3); 
  vegetationAppears |= drawBuildingOrTree(330, height - mouseY, treeHeight, 4); 

  
  
  // Change day/night based on vegetation appearance
  isDay = !vegetationAppears;

  
  
  // Increase tree height if mouse is pressed
  if (mouseIsPressed) {
    treeHeight = min(treeHeight + 1, 100); // Limit tree height to 100
  }
}



// Cloud initial position
function drawCloud(x) {
  ellipse(x, 80, 50, 40);
  ellipse(x + 20, 80, 50, 30);
  ellipse(x - 20, 80, 50, 30);
}



// Function to draw mountains
function drawMountains() {
  fill(34, 130, 34);
  triangle(400, 400, 400, 200, 150, 400);
  fill(34, 90, 34);
  triangle(400, 400, 400, 200, 200, 400);

  fill(34, 160, 34);
  triangle(-100, 400, 30, 100, 450, 400);
  fill(34, 120, 34);
  triangle(-100, 400, 30, 100, 400, 400);
}



// Function to draw a building or tree based on mouseY position and index
function drawBuildingOrTree(x, buildingHeight, treeHeight, index) {
  if (buildingHeight > 0) {
    
    
    // Draw building
    buildingHeight = min(buildingHeight + 1, 200);
    fill(100);
    rect(x, 350 - buildingHeight, 50, buildingHeight);
    return false; // No vegetation appears
  } else {
    // When buildings are below the grass, draw vegetation and trees
    if (index % 2 === 0) {
      // Round tree
      fill(139, 69, 19); // Brown trunk
      rect(x + 15, 350 - treeHeight, 10, treeHeight); // Trunk
      fill(34, 139, 34); // Green foliage
      ellipse(x + 20, 350 - treeHeight - 20, 40, 40); // Tree top
    } else {
      // Pointy triangle tree
      fill(139, 69, 19); // Brown trunk
      rect(x + 20, 350 - treeHeight, 10, treeHeight); // Trunk
      fill(0, 128, 0); // Darker green for triangle tree
      triangle(x, 350 - treeHeight, x + 25, 350 - treeHeight - 50, x + 50, 350 - treeHeight); // Triangle foliage
    }
    return true; // Vegetation appears
  }
}

// Function to draw stars at predefined positions
function drawStars() {
  fill(255, 250, 250); // White color for stars
  noStroke();
  ellipse(50, 60, 3, 3);
  ellipse(100, 80, 3, 3);
  ellipse(150, 40, 3, 3);
  ellipse(200, 70, 3, 3);
  ellipse(250, 50, 3, 3);
  ellipse(300, 90, 3, 3);
  ellipse(350, 60, 3, 3);
  ellipse(75, 100, 3, 3);
  ellipse(125, 120, 3, 3);
  ellipse(175, 110, 3, 3);
}

function mouseReleased() {
  // Reset tree height when mouse is released
  treeHeight = 0;
}
