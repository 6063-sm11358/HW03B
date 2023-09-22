function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill(255,0,0);                                          //setting fill for circles
  noStroke();
  let baseDim = 20;                                       //defining minimum diameter of circles
  randomSeed(3);
  for(let i=0;i<=width;i+=baseDim*4)                      //generate circles along x-axis
  {
    for(let j=0;j<=width;j+=baseDim*4)                    //generate circles along y-axis
    {
      let xpos = i+int(random(20));                       //jiggling x-coordinates by 20px (randomly)
      let ypos = j+int(random(20));                       //jiggling y-coordinates by 20px (randomly)
      let circleDim = baseDim*(random([1,2,3]));          //generating circles with 3 different diameters (randomly)
      ellipse(xpos,ypos,circleDim);                       //creating circles with randomly generated values
    }
  }
}
