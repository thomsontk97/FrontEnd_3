var arr = ["Tom", "Bob", "John", "Jane", "Hulk", "Thor", "Tony", "Nick" ,"Steve"];

function showItems(items) {
    list.innerHTML = "";
    for(var i=0; i<items.length; i++) {
        list.innerHTML += `
                        <li>
                        ${items[i]}
                        </li>
        `;
    }
    
}



function searchFilter(){

const searchVal = document.querySelector('#search').value.toLowerCase(); // search text that is typed
//and is converted to lower case to be case sensitive



var filteredArr = arr.filter( (arrItem) => 
    arrItem.toLowerCase().includes(searchVal)
   
)

// alert(filteredArr);
// console.log(filteredArr);

showItems(filteredArr);

}

showItems(arr);
document.getElementById("btn").addEventListener("click", searchFilter);