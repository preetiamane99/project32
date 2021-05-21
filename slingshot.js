class Slingshot{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
      stiffness:0.04,
      lenght:1
       
        }
        this.Suspender = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Suspender);
        }
        fly(){
            this.Suspender.bodyA= null;
        }
        display(){
            if(this.Suspender.bodyA){
                 var pointA = this.Suspender.bodyA.position;
                  var pointB = this.pointB;
                   strokeWeight(4); 
                   stroke("Black");
                    line(pointA.x, pointA.y, pointB.x, pointB.y); }

            
        }
        
}