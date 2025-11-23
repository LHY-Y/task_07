let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, height/5*2));
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.05);
  system.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = p5.Vector.sub(createVector(mouseX, mouseY), system.origin);
    wind.normalize();
    wind.mult(0.2);
    system.applyForce(wind);
  }

  system.addParticle();
  system.run();
}