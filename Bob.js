class Bob{
    constructor(x, y, radius){
        var options = {
            isStatic:true,
            restitution:1,
            friction:0.5,
            density:1.2
        }

        this.x =x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        fill("pink");

        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}