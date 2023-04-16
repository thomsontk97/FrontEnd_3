


var arr = [1,2,3,4,5,67,8];

const list = document.getElementById("list");

var myBtn = document.getElementById("btn");
myBtn.addEventListener('click',() => {


    for(var i=0; i<arr.length; i++) {
        list.innerHTML += `
                        <li>
                        ${arr[i]}
                        </li>
        `;
    }
});