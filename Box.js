class Box{
    constructor(){
         var options = {restitution : 1.0};
        this.body = Bodies.rectangle(200,100,50,50,options);
        World.add(this.body,world);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
    }
}