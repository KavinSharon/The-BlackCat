class Soldier{
    constructor(x,y,img){
        var options={

            density:2
        }

        this.x=x;
        this.y=y;
        this.width=100;
        this.height=100;
        this.image=img
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        
        
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
    
}