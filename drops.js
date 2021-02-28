class Drops{
    constructor(x,y){

        var options={
            isStatic:false,
            friction:0.1,
        }
        this.body = Bodies.circle(x,y,1);
        this.radius = 1;
        if(this.body.positon.y > height){
            Matter.Body.setPosiiton(this.body,{x:random(0,500),y:random(0,400)});
        }
    }

    display(){
        
        
        elipse(this.body.position.x,this.body.position.y,this.radius);
    }
}