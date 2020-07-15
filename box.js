class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    //push captures new settings
    push();
    // translate changes 0 of the axis to givin x and y position 
    translate(pos.x, pos.y);
    // rotate will rotate the body with the givin angle 
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    // pop reverses to the old settings
    pop();
  }
};
