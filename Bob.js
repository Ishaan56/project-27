class Bob{
    constructor(x,y,r){
      var options = {
          isStatic:false,
          restitution:1,
          friction:0.3,
          density:0.8,
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill('orange');
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}