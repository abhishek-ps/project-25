class Dustbin{
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,200,20,options);
        this.body1=Bodies.rectangle(x+100,y-40,20,100,options);
        this.body2=Bodies.rectangle(x-100,y-40,20,100,options);
        this.image=loadImage("dustbingreen.png")
        
        World.add(world,this.body);
        World.add(world,this.body1);
        World.add(world,this.body2);
        }
        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,100,100);
            pop();
        }
}