
var i = 100;
document.getElementById('add-btn').addEventListener('click',() => {
    var listItem = document.createElement('li');
    listItem.setAttribute('id',`my-id-${i}`);
    // listItem.setAttribute('onclick',`deleteItem("my-id-${i}")`);
    listItem.setAttribute('class','items');
    listItem.style.cursor = 'pointer';

    // listItem.style.display='inline-block';

    listItem.innerText = i;
   


    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('class','btn');
    delBtn.setAttribute('id',`btn-id-${i}`);

    delBtn.style.cursor='pointer';
    
    delBtn.setAttribute('onclick',`deleteItem("my-id-${i}","btn-id-${i}")`);
    


//     listItem.innerHTML = `
//     ${i}
//     &nbsp;&nbsp;
//     <button id="btn-id-${i}" class="btn">Delete<button>
// `;


    document.getElementById('list').appendChild(listItem);
    document.getElementById('list').appendChild(delBtn);

    
    i++;

})

function deleteItem(id,btn){
    var itemToDelete = document.getElementById(id);
    document.getElementById('list').removeChild(itemToDelete);

    var btnToDelete = document.getElementById(btn);
    document.getElementById('list').removeChild(btnToDelete);
}

