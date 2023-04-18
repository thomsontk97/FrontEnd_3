console.log("Promise Chaining.......");


function greet(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Welcome to the restaurant...")
        },1000)
    })
}

function takeOrder(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("You Order Please...")
        },1500)
    })
}

function giveFood(){
    return new Promise((resolve,reject) => {
        var Order = prompt("Your Order??")
        setTimeout( () => {
            resolve(`Here is your ${Order}`)
        },2000)
    })
}

function takePayment(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Payment received successfully")
        },3000)
    })
}

function thankYou(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Thank you, Please come again later...........")
        },0)
    })
}

greet()
.then((data) => {
    console.log(data);
    return takeOrder();
})
.then((data) => {
    console.log(data);
    return giveFood();
})
.then((data) => {
    console.log(data);
    return takePayment();
})
.then((data) => {
    console.log(data);
    return thankYou();
})
.then((data) => {
    console.log(data);
})