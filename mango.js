class mango{
   
       constructor(x,y,r)
       { 
        var options ={
            isStatic:true,
            restitution:0,
            friction:1, 
        }
        this.body= Bodies.circle(x,y,this.r,options);
        this.r=r;
        this.image=loadImage("mango.png");
        World.add(world,this.body);
    }
   
    display(){
        image(this.image,x,y,this.r);
    }






}