


let info;
let url = "https://dummyjson.com/products/1";

fetch(url)
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
    info = data;
})

var btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    var  myDiv = document.createElement('div');
    myDiv.innerHTML = `
                        ${info.id}
                        ${info.title}
                        </br>
                        ${info.description}

    `;
    document.body.appendChild(myDiv);
})