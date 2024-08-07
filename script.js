const pages = document.querySelectorAll(".box");
const orderPages = document.querySelectorAll(".orders");
const reportPages = document.querySelectorAll(".report");
const btns = document.querySelectorAll(".menubtn");

const customerArray = new Array(100);
let nextIndex = 0;

const translateAmount = 100;
let translate = 0;





const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav a").
    forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
            console.log(activePage);
        }
    })

slide = (givenindex, pageIndex) => {
    if (pageIndex === 1) {
        translate = translateAmount * (1 - givenindex);
        pages.forEach(
            pages => (
                pages.style.transform = `translateX(${translate}%)`
            )
        );
    } else if (pageIndex === 2) {
        translate = translateAmount * (1 - givenindex);
        orderPages.forEach(
            orderPages => (
                orderPages.style.transform = `translateX(${translate}%)`
            )
        );
    } else if (pageIndex === 3) {
        translate = translateAmount * (1 - givenindex);
        reportPages.forEach(
            reportPages => (
                reportPages.style.transform = `translateX(${translate}%)`
            )
        );
    }
}

const foodItems = [".Burger", ".Submarine", ".Fries", ".Pasta", ".Chicken", ".Beverages"];
const ar = [1, 3, 4, 6, 7, 9, 10, 12, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 37, 40, 41, 42, 44];
const menu = [
    burgers = [
        id = ["B1001", "B1002", "B1003", "B1004", "B1005", "B1006", "B1007", "B1008", "B1009", "B1010",
            "B1012", "B1013", "B1014", "B1015"],
        item = ["Classic Burger (Large)", "Classic Burger (Regular)", "Turkey Burger",
            "Chicken Burger (Large)", "Chicken Burger (Regular)", "Cheese Burger (Large)", "Cheese Burger (Regular)",
            "Bacon Burger", "Shawarma Burger", "Olive Burger", "Double-Cheese Burger", "Crispy Chicken Burger (Regular)",
            "Crispy Chicken Burger (Large) ", "Paneer Burger"],
        price = [750.00, 1500.00, 1600.00, 1400.00, 800.00, 1000.00,600.00, 650.00, 800.00,1800.00, 1250.00, 1200.00, 1600.00, 900.00 ]
    ],
    submarine = [
        id = ["B1016", "B1017", "B1018", "B1019", "B1020", "B1021", "B1022", "B1023", "B1024"],
        item = ["Crispy Chicken Submarine (Large)", "Crispy Chicken Submarine (Regular) ", "Chicken Submarine (Large)",
            "Chicken Submarine (Regular) ", "Grinder Submarine", "Cheese Submarine ", "Double Cheese n Chicken Submarine ",
            "Special Horgie Submarine", "MOS Special Submarine"],
        price = [2000.00, 1500.00, 1800.00, 1400.00, 2300.00, 2200.00, 1900.00, 2800.00, 3000.00]
    ],
    fries = [
        id = ["B1025", "B1026", "B1027", "B1028", "B1029", "B1030"],
        item = ["Steak Fries (Large) ", "Steak Fries (Medium)", "French Fries (Large) ",
            "French Fries (Medium)  ", "French Fries (Small)", "Sweet Potato Fries (Large)"],
        price = [1200.00, 600.00, 800.00, 650.00, 450.00, 600.00]
    ],
    pasta = [
        id = ["B1031", "B1032", "B1033", "B1034", "B1035", "B1036", "B1037"],
        item = ["Chicken n Cheese Pasta", "Chicken Penne Pasta", "Ground Turkey Pasta Bake",
            "Creamy Shrimp Pasta ", "Lemon Butter Pasta", "Tagliatelle Pasta ", "Baked Ravioli"],
        price = [1600.00, 1700.00, 2900.00, 2000.00, 1950.00, 2400.00, 2000.00]
    ],
    chicken = [
        id = ["B1038", "B1039", "B1040", "B1041", "B1042", "B1043"],
        item = ["Fried Chicken (Small)", "Fried Chicken (Regular)", "Fried Chicken (Large)",
            "Hot Wings (Large)", "Devilled Chicken (Large) ", "BBQ Chicken (Regular)"],
        price = [1200.00, 2300.00, 3100.00, 2400.00, 900.00, 2100.00]
    ],
    beverages = [
        id = ["B1044", "B1045", "B1046", "B1047"],
        item = ["Pepsi (330ml) ", "Coca-Cola (330ml) ", "Sprite (330ml)", "Mirinda (330ml)"],
        price = [990.00, 1230.00, 1500.00, 850.00]
    ]
]

let index = 0;

loadMenu = () => {
    for (let j = 0; j < foodItems.length; j++) {
        const main = document.querySelector(foodItems[j]);
        let htmlString = "";
        for (let i = 0; i < menu[j][0].length; i++) {
            if (activePage == "/orders.html" || activePage == "/MOS-Burgers/orders.html") {
                index++;
                htmlString += `<div class="card rounded-5 m-3">
                                    <div class="card-body row">
                                        <div class="col d-flex align-items-center">
                                            <div class="position-relative circle col-2">
                                            </div>
                                            <label class="me-5 fw-bold">${menu[j][0][i]} | ${menu[j][1][i]}</label>
                                        </div>
                                        <div class="col d-flex align-items-center gap-3 mx-5 border-start border-2 border-black">
                                            <label class="bg-dark-subtle rounded-5 p-3 d-flex align-items-center">Rs. ${menu[j][2][i]} <div class="mx-2">
                                            <button id="${index}" class="btn btn-dark rounded-5 ms-2" onclick = "showDiscount(${index})">di</button>
                                        </div></label>
                                            
                                            <div
                                                class="d-flex align-items-center p-2 gap-2 bg-danger rounded-5">
                                                <div class="mx-2">
                                                    <input type="text" id="${menu[j][0][i]}" class="amountInput rounded-4" placeholder="00">
                                                </div>
                                                <button class="btn btn-dark rounded-5" onclick = "add(${menu[j][0][i]},1)">+</button>
                                                <div class="fw-bolder border-start border-2 border-black">
                                                    <button class="btn btn-dark rounded-5 ms-2" onclick = "sub(${menu[j][0][i]},1)">-</button>
                                                </div>
                                            </div>
                                            <button class="btn btn-success rounded-4 ms-2" onclick = "addCart('${menu[j][0][i]}','${menu[j][1][i]}',${index},${menu[j][2][i]})">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>`

            } else if (activePage == "/inventory.html" || activePage == "/MOS-Burgers/inventory.html") {
                htmlString += `<div class="card rounded-5 m-3">
                <div class="card-body row">
                    <div class="col d-flex align-items-center">
                        <div class="position-position-absolute circle col-2">
                        </div>
                        <label class="me-5 fw-bold">${menu[j][0][i]} | ${menu[j][1][i]}</label>
                    </div>
                    <div class="col d-flex align-items-center gap-3 mx-5 border-start border-2 border-black">
                        <label class="bg-dark-subtle rounded-5 p-3 d-flex align-items-center">Rs. ${menu[j][2][i]}</label>
                        
                        <div
                            class="d-flex align-items-center p-2 gap-2 bg-danger rounded-5">
                            <div class="mx-2">
                                <input type="text" id="${menu[j][0][i]}" class="amountInput rounded-4" placeholder="00">
                            </div>
                            <button class="btn btn-dark rounded-5" onclick = "add(${menu[j][0][i]},1)">+</button>
                            <div class="fw-bolder border-start border-2 border-black">
                                <button class="btn btn-dark rounded-5 ms-2" onclick = "sub(${menu[j][0][i]},1)">-</button>
                            </div>
                        </div>
                        <button class="btn btn-outline-danger rounded-4 fw-bolder">Expired</button>
                        <button class="btn btn-outline-danger rounded-4 fw-bolder">Delete</button>
                    </div>
                </div>
            </div>`
            } main.innerHTML = htmlString;
        }
    }
    for (let i = 0; i < ar.length; i++) {
        document.getElementById(ar[i]).style.display = 'none';
    }
}

let currentId;
let tot = 0;
add = (id, amount) => {
    if (currentId != id) {
        currentId = id;
        tot = 1;
        id.value = tot;
    } else {
        tot += amount;
        id.value = tot;
    }
}
sub = (id, amount) => {
    if (id.value == 0) {

    } else {
        if (currentId != id) {
            currentId = id;
            tot = id.value;
        }
        tot -= amount;
        id.value = tot;

    }
}


const discountsArray = [
    discountId = [2, 5, 8, 11, 13, 17, 21, 30, 32, 35, 36, 38, 39, 43, 45, 46],
    discountAmount = [15, 20, 15, 20, 10, 3, 16, 15, 10, 1, 1, 10, 5, 5, 3, 7]
]
showDiscount = (index) => {
    for (let i = 0; i < discountsArray[0].length; i++) {
        if (index == discountsArray[0][i]) {
            alert("Discount Amount: " + discountsArray[1][i] + "%");
        }
    }
}

addCustomer = () => {
    let phoneNumber = document.getElementById("customerNumber").value;
    let customerName = document.getElementById("customerName").value;
    let customerDiv = "";
    if (phoneNumber === "" || customerName == "") {

    } else {
        let customerPage = document.querySelector(".customer");
        customerDiv = `<div id = "${phoneNumber}" class="card rounded-5 m-3">
                    <div class="card-body d-flex col ps-5">
                        <div class="col d-flex align-items-center">
                            <label class="me-5 fw-bold">${phoneNumber} | ${customerName}</label>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center gap-5 px-5 border-start border-2 border-black">
                            <button class="btn btn-success rounded-4 fw-bolder w-100">View</button>
                            <button class="btn btn-success rounded-4 fw-bolder w-100">Edit</button>
                            <button class="btn btn-success rounded-4 fw-bolder w-100" onclick = "removeItem('${phoneNumber}')">Delete</button>
                        </div>
                    </div>
                </div>`
        customerPage.innerHTML += customerDiv;
    }customerArray[nextIndex++] = customerName;
    
    console.log(customerArray[nextIndex-1],nextIndex);
}
let totDiscount = 0;
let totPrice = 0;
let cartId = "I00"
let cartIdInt = 1;
addCart = (id, name, disId, price) => {
    let idTemp = cartId + (cartIdInt++);
    let itemAmt = document.getElementById(id).value;
    totPrice += (price * (itemAmt == 0? 1: itemAmt));
    alert((itemAmt == 0 ? 1 : itemAmt) + " " + name + " added to cart");
    for (let i = 0; i < discountsArray[0].length; i++) {
        if(disId == discountsArray[0][i]){
            totDiscount += discountsArray[1][i];
            document.getElementById("Discount").innerHTML = totDiscount + "%";
        }
    }

    let Cart = document.querySelector(".Cart");
    document.getElementById("Price").innerHTML = "Rs. " + totPrice;
    document.getElementById("Total").innerHTML = "Rs. " + (totPrice - (totPrice * (totDiscount/100)));
    Cart.innerHTML += `<div id="${idTemp}" class="card rounded-5 m-3 p-2">
                    <div class="card-body d-flex justify-content-between">
                        <div class="border-1 border w-100 p-3 mx-3 rounded-5 d-flex justify-content-between  align-items-center">
                            <label class="me-5 fw-bold">${id} | ${name} | ${price}</label> 
                            <label class="me-5 fw-bold p-2 rounded-5 bg-danger text-white">X${itemAmt == 0 ? 1 : itemAmt}</label>
                        </div>
                        <div class="pb-5">
                            <button class="btn btn-outline-danger rounded-5 fw-bolder text-warning" onclick = "removeItem('${idTemp}')">X</button>
                        </div>
                    </div>
                </div>`
}
let orderId = "OR00"
let idInt = 1;
newOrder = () => {
    alert("Order placed Successfully!");
    let idTemp = orderId + (idInt++);
    let orderDiv = "";
        let orderPage = document.querySelector(".ordered");
        orderDiv = `<div id="${idTemp}" class="card rounded-5 m-3">
                    <div class="card-body d-flex col ps-5">
                        <div class="col d-flex align-items-center">
                            <label class="me-5 fw-bold">${idTemp} | ${customerArray[0]}</label>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center gap-5 px-5 border-start border-2 border-black">
                            <button class="btn btn-success rounded-4 fw-bolder w-100">View</button>
                            <button class="btn btn-success rounded-4 fw-bolder w-100">Edit</button>
                            <button class="btn btn-success rounded-4 fw-bolder w-100" onclick = "removeItem('${idTemp}')">Delete</button>
                        </div>
                        
                    </div>
                </div>`
        orderPage.innerHTML += orderDiv;
}

removeItem = (reIndex) =>{
    console.log("working",id);
    let element = document.getElementById(reIndex);
    element.remove(); 
    
    document.getElementById("Price").innerHTML = "Rs. 0.00";
    document.getElementById("Discount").innerHTML = "0%";
    document.getElementById("Total").innerHTML = "Rs. 0.00";
}