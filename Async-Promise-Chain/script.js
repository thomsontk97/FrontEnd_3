console.log("Async Promise Chaining.......");


function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Welcome to the restaurant...")
        }, 1000)
    })
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You Order Please...")
        }, 1500)
    })
}

function giveFood() {
    return new Promise((resolve, reject) => {
        var Order = prompt("Your Order??")
        setTimeout(() => {
            resolve(`Here is your ${Order}`)
        }, 2000)
    })
}

function takePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment received successfully")
        }, 3000)
    })
}

function thankYou() {
    console.log("Thank You, Please visit again");
}

async function callChain(){
    const data1 = await greet();
    console.log(data1,"     ", new Date());

    const data2 = await takeOrder();
    console.log(data2,"     ", new Date());

    const data3 = await giveFood();
    console.log(data3,"     ", new Date());

    const data4 = await takePayment();
    console.log(data4,"     ", new Date());
    
    thankYou();
    
}

callChain();