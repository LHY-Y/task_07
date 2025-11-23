class FireParticle extends Particle {
  constructor(position) {
    super(position); 
    this.velocity = createVector(random(-0.5, 0.5), random(-3, -1.5));
    this.size = random(8, 18);
    this.lifespan = 200; 
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1.5;
    this.acceleration.set(0, 0);
    this.velocity.x += random(-0.02, 0.02);
  }

  display() {
    noStroke();
    fill(255, 220, 50, this.lifespan);
    ellipse(this.position.x, this.position.y, this.size * 0.6, this.size * 0.6);
  }
}