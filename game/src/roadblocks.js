class Roadblock {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("duaxe")
        this.ctx = this.canvas.getContext("2d")
        
    }

    draw(){
        this.ctx.fillStyle ='black'
        this.ctx.fillRect(this.x,this.y,this.width,this.height)
     
       
    }

    // movedown() {
    //     this.ctx.clearRect(this.x, this.y, this.width, this.height)
    //     this.y -= this.speed;
    //     this.draw();
    // }
}


