var canvasX=1535,canvasY=721;
// Creating variables
var x=[],y=[],dx=[],dy=[],tarX=[],tarY=[],birds=600,size=10,tar=[];
for(b=0;b<=birds;b++){
    x[b]=randomInteger(canvasX-size)
    y[b]=randomInteger(canvasY-size)

    tar[b]=Math.floor(b/100)
    console.log(tar[b])

}
for(c=-1;c<birds/100;c++){
    tarX[c]=randomInteger(canvasX-size)
    tarY[c]=randomInteger(canvasY-size)
}
function update() {
    for(b=0;b<=birds;b++){ 

        if(x[b]<tarX[tar[b]]){
            x[b]=x[b]+randomInteger(5)
        }
        if(x[b]>tarX[tar[b]]){
            x[b]=x[b]-randomInteger(5)
        }
        if(y[b]<tarY[tar[b]]){
            y[b]=y[b]+randomInteger(5)
        }
        if(y[b]>tarY[tar[b]]){
            y[b]=y[b]-randomInteger(5)
        }
        if(y[b]==tarY[tar[b]]){
            if(x[b]==tarX[tar[b]]){
                tarX[tar[b]]=randomInteger(canvasX-size)
                tarY[tar[b]]=randomInteger(canvasY-size)
            }
        }
         for(b2=0;b2<=birds;b2++){
             if(areColliding(x[b],y[b],size,size,x[b2],y[b2],size,size)){
                 if(x[b]==x[b2]&&y[b]==y[b2]){

                 }else{
                 if(x[b]<x[b2]){
                    x[b]=x[b]-randomInteger(5)
                    x[b2]=x[b2]+randomInteger(5)
                  }
                 if(x[b]>x[b2]){
                    x[b]=x[b]+randomInteger(5)
                    x[b2]=x[b2]-randomInteger(5)
                  }
                 if(y[b]<y[b2]){
                    y[b]=y[b]-randomInteger(5)
                    y[b2]=y[b2]+randomInteger(5)
                  }
                 if(y[b]>y[b2]){
                    y[b2]=y[b2]-randomInteger(5)
                  }
             }
         }
     }   
}   

};
function draw() {
for(b=0;b<=birds;b++){
    if(tar[b]>5){
        drawImage(ballOrTarget,x[b],y[b],size,size)
    }else{
        drawImage(gem[tar[b]+1],x[b],y[b],size,size)
    }
}

    };
function keyup(key) {

};
function mouseup() {

};
