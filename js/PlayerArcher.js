class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
      this.image2 = loadImage("./assets/arrow.png")
      Matter.Body.setAngle(this.body, -PI / 2) }

      display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        if (keyIsDown(DOWN_ARROW) && angle < -0.8) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
          if (keyIsDown(UP_ARROW) && angle > -2.3) {
            angle = angle - 0.01;
            Matter.Body.setAngle(this.body, angle);
          }


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    
      shoot (){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image2,0,0,50,20)
        pop();
      
      
       
        }
    
    
    
    
    
    
    
    
    }