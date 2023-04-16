var myDiv = document.querySelector('#img');

var visible = false;
function showPic(){
   if(!visible){
    visible = true;
    myDiv.innerHTML = '<div><img src="./img.jpg" height ="100px"></div>';
   } else{
    visible = false;
    myDiv.innerHTML = '<div><img src=""></div>';
   }
}