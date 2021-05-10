class Bob {
    constructor(x,y,r){
        var options= {
            isStatic: false,
            restitution: 1.0,
            friction: 0.5,
            density: 0.5
        }
        this.r= r
        this.body=Bodies.circle(x,y,(this.r),options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}