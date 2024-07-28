const main = document.querySelectorAll('main');
const foodItems = ["Burger", "Submarine", "Fries", "Chicken", "Pasta", "Beverages"];

let htmlString = "";
for (let i = 0; i < 6; i++) {
    for (let y = 0; y < 10; y++) {
        htmlString += `<div class="card rounded-5 m-3">
                        <div class="card-body d-flex align-items-center">
                            <div class="circle">

                            </div>
                            <label class="me-5 fw-bold">${y+1} | ${foodItems[i]}</label>
                            <div
                                class="d-flex align-items-center gap-3 p-3 border-start border-2 border-black">
                                <label class="bg-dark-subtle rounded-5 p-3">Rs
                                    750.00</label>
                                <div
                                    class="d-flex align-items-center p-2 gap-2 bg-danger rounded-5">
                                    <div class="mx-2">
                                        <label class="bg-dark-subtle my-2 rounded-4 w-100">0</label>
                                    </div>
                                    <button class="btn btn-dark rounded-5">+</button>
                                    <div class="fw-bolder border-start border-2 border-black">
                                        <button class="btn btn-dark rounded-5 ms-2">-</button>
                                    </div>
                                    <button class="btn btn-success rounded-4 fw-bolder">Add
                                        to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
}
main.innerHTML = htmlString;