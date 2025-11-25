class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    addParticle() {
    this.particles.push(new Particle(this.origin));
    }

    run() {
    for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }       
    }

    applyForce(force) {
    for (let i = 0; i < this.particles.length; i++) {
    this.particles[i].applyForce(force);
  }
}

  applyRepeller(repeller) {
    //{!4} Calculating a force for each Particle based on a Repeller
    for (let particle of this.particles) {
      let force = repeller.repel(particle);
      particle.applyForce(force);
    }
  }

}