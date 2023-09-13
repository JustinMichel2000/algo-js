
function calcDistance(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let distance = 
    Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    return distance;
  }
  

  let x1 = parseFloat(prompt
    ("Enter the x-coordinate of point A:"));
  let y1 = parseFloat(prompt
    ("Enter the y-coordinate of point A:"));
  

  let x2 = parseFloat(prompt
    ("Enter the x-coordinate of point B:"));
  let y2 = parseFloat(prompt
    ("Enter the y-coordinate of point B:"));
  
  let distance = 
  calcDistance(x1, y1, x2, y2);
  console.log(`The distance between A(${x1},${y1}) 
  and B(${x2},${y2}) is ${distance}`);
  
  

  