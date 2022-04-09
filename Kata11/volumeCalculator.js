const PI = 3.14159;

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

const sphereVolume = function(radius) {
  if (typeof radius === "object") {
    radius = radius.radius;
    return Math.floor(4 / 3 * PI * radius * radius * radius);
  } else {
    return Math.floor(4 / 3 * PI * radius * radius * radius);
  }
};


const coneVolume = function(radius, height) {
  return Math.floor(1 / 3 * (PI * radius * radius * height));
};


const prismVolume = function(height, width, depth) {
  // Probably here too! Volume of Prism =h*w*d
  return Math.floor(height * width * depth);
};


const totalVolume = function(solids) {
  // Code here? Yup!
  solids.largeSphere = sphereVolume(largeSphere);
  solids.smallSphere = sphereVolume(smallSphere);
  solids.cone = coneVolume(cone.radius,cone.height);
  return solids.largeSphere + solids.smallSphere + solids.cone;
};

//console.log(coneVolume(cone))

console.log(prismVolume(3, 4, 5) === 60);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);