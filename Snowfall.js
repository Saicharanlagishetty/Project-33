class Snowfall {
    constructor(x,y,width,height){
    var options={
    friction:20,
    density:12,
    restitution:0.4
    }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,this.width,this.height,options);
    this.image = loadImage("snow4.webp")
    World.add(world,this.body);
  }
  display(){
     var pos = this.body.position;
    
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(image,this.image.position.x,this.image.position.y,this.width);
        pop();
    }
    
  }
