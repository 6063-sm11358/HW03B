# ReadMe - HW03B Working Document

For this exercise, I've utilized a square canvas of size 700px, with a black background for better legibility.

Since we need to implement 3 different sizes of circles, I've used a variable *baseDim* to set a minimum diameter value for the circles. I'll be using the *random()* function to multiply this value to generate the different diameters.

The *randomSeed(500)* is used for generatig pseudo-random values so that the circle positions don't keep shifting with every frame. No specific reason behind choosing 500 as the seed value.

```
for(let i=0;i<=width;i+=baseDim*4)                        //generate circles along x-axis
  {
    for(let j=0;j<=width;j+=baseDim*4)                    //generate circles along y-axis
    {
      let xpos = i+int(random(20));                       //jiggling x-coordinates by 20px (randomly)
      let ypos = j+int(random(20));                       //jiggling y-coordinates by 20px (randomly)
      let circleDim = baseDim*(random([1,2,3]));          //generating circles with 3 different diameters (randomly)
      ellipse(xpos,ypos,circleDim);                       //creating circles with randomly generated values
    }
  }

```

In the above code snippet, I'm using 2 *for* loops for generating circles in a grid fashion.

1. *random([1,2,3])* is being passed an array, and generates discrete values i.e. 1,2,3 only .. no floating-point values

2. Since I'm multiplying *baseDim* with either 1,2,3 for getting different diameter sizes, that's why I'm incrementing *i* by *(baseDim x 4)*, so that the circles don't overlap each other. This ensures that even the biggest of circles can be besides each other without touching each other

3. To jiggle the circles' positions, I'm shifting the *xpos* and *ypos* values by upto 20px using *random()* in lines 14 & 15. *int(random(20))* results in a randomly generated ***integer***, and not a decimal (float) value

4. The result contains all three properties:
    - Multiple sizes of ellipses (3 different diameters)
    - Non-overlapping shapes
    - Not in straight lines