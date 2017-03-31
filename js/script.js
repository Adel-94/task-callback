var kvadrat =document.getElementById("kvadrat");
var pink=document.getElementById("pink");
kvadrat.addEventListener("click",function(){  
    border(boyut);
})


 function border(callback){
 kvadrat.style.border='2px solid hotpink';
 callback(100,100,2000);
 }
function boyut(w,h,saniye){
    var pinkset =setTimeout(function() {
    pink.style.width=w;
     pink.style.height=h;  
    }, saniye);

}



















