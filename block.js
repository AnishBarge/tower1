class block extends baseClass {
    constructor(x, y){
      super(x,y,50,50);
      
      this.Visiblity=255
    }
    display(){
      console.log(this.body.speed)
      fill("yellow");
      if(this.body.speed<3){
        rect(this.body.position.x,this.body.position.y,50,50)
      super.display()
      }
      else{
        
        World.remove(world,this.body)
        push()
        this.Visiblity=this.Visiblity-5
        tint(255,this.Visiblity)
        
        pop()
      }
    }
  };