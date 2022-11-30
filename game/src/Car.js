class Car {
    constructor(x,y,width,heigth,speed){
        this.x = x
        this.y = y
        this.width = width
        this.heigth = heigth
        this.canvas = document.getElementById("duaxe")
        this.ctx = this.canvas.getContext("2d")
        this.speed = speed
    }
    draw(){
        
        this.ctx.fillStyle ='black'
        this.ctx.fillRect(this.x,this.y,this.width,this.heigth)
        // let img = document.getElementById("car");
        // this.ctx.drawImage(img,this.x, this.y, this.width, this.heigth, this.speed)
        
    }
   
    moveleft() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.x -= this.speed;
        this.draw();

    }
    moveright() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.x += this.speed;
        this.draw();
    }
    moveup(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.y -= this.speed;
        this.draw();
    }
    movedown(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.y += this.speed;
        this.draw();
    }
}