let canvas = document.getElementById('duaxe')
let widthcar = 100;
let ycar = 500;
let xcar = canvas.width/2- widthcar/2
let car = new Car(xcar,ycar,100,70,30)
car.draw();




let roadBlock = new Roadblock(50,50,100,70)
roadBlock.draw();

window.addEventListener('keydown',function(e){
    if (e.keyCode ===37 && car.x >= 0) {
    car.moveleft()
    }
    else if(e.keyCode ===39 && car.x <= 200){
        car.moveright()
    }else if(e.keyCode===38 && car.y >= 0){
        car.moveup()
    }else if(e.keyCode && car.y <= 400){
        car.movedown()
    }
   })