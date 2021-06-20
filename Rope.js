class Rope{
 constructor(bodyA,bodyB,xOffset){
     var options = {
         bodyA:bodyA,
         bodyB:bodyB,
         pointB:{
             x:xOffset,
             y:0,
         }
     }
     this.rope = Constraint.create(options)
     this.xOffset = xOffset;
     World.add(world,this.rope)
 }
 display(){
     stroke('white');
     var pointA = this.rope.bodyA.position;
     var pointB = this.rope.bodyB.position;
     strokeWeight(3);
     line(pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y);
 }
}