var x=0;
let gap=20
var flagMove=false
var countStep=0;
var maxCountStep=0;
var elemArrFirst=[];
var elemArr=[];
var elemChilds=[];
var perent;
var interval;
window.addEventListener('resize',(e) => {
       
    //let width=document.getElementsByClassName('reviews-item')[0].offsetWidth;
    x=0;
    countStep=0;
    flagMove=false;
    clearInterval(interval);
    console.log('resize')
    document.getElementsByClassName('reviews__container-for-items')[0].style.transform=`translateX(${x}px)`;
});
window.addEventListener("load",()=>{
    document.getElementsByClassName('arrow-right')[0].addEventListener('click',()=>{
        if ( flagMove==false)
        {

            moveRight();
            console.log("max",maxCountStep);
        }

    });    
    document.getElementsByClassName('arrow-left')[0].addEventListener('click',()=>{
        if (flagMove==false)
        {

            moveLeft();
            console.log('max',maxCountStep);
        }

    });  

    parent=document.getElementsByClassName('reviews__container-for-items')[0]; 
    elemArrFirst=document.getElementsByClassName('reviews-item');
    maxCountStep=elemArrFirst.length;
    for (let i=0;i<elemArrFirst.length;i++)
    {
        let obj=elemArrFirst[i].cloneNode(true)
        elemArr.push(obj)
    }


});
function moveLeft()
{
    
    let width=document.getElementsByClassName('reviews-item')[0].offsetWidth;
    if (countStep % maxCountStep==0)
    {
        x-=(width+gap)*maxCountStep;
        insertElemInStart()
    }
    interval=setInterval(function(){
        x+=1;
        
        flagMove=true
        if (x % (width+gap)==0) 
        {
            flagMove=false;
            countStep--;
            clearInterval(interval);

        }
        document.getElementsByClassName('reviews__container-for-items')[0].style.transform=`translateX(${x}px)`;
        //document.getElementsByClassName('reviews-item')[0].style.color="red";
    },1);
}
function moveRight()
{
  

    let width=document.getElementsByClassName('reviews-item')[0].offsetWidth;
    if (countStep % maxCountStep==0)
    {
        insertElemInEnd()
    }
    interval=setInterval(function(){
        x-=1;
        
        flagMove=true
        if (x % (width+gap)==0) 
        {
            flagMove=false;
            countStep++;
            clearInterval(interval);
        }   
        document.getElementsByClassName('reviews__container-for-items')[0].style.transform=`translateX(${x}px)`;
        //document.getElementsByClassName('reviews-item')[0].style.color="red";
    },1);
}
function insertElemInStart()
{
    
    for (let i=elemArr.length-1;i>=0; i--)
    {
        parent.prepend(elemArr[i].cloneNode(true))
        console.log(i); 
    }
    console.log(parent)
    console.log(countStep);
    
}
function insertElemInEnd()
{
    for (let i=0; i<elemArr.length; i++)
    {
        parent.append(elemArr[i].cloneNode(true)); 
        console.log(i);    
    }
    console.log(parent)
    console.log(countStep);
    console.log('InsertEnd');
}
// function calibrationX()
// {

// }