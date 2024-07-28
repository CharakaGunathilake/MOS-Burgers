const pages = document.querySelectorAll(".box");
const orderPages = document.querySelectorAll(".orders");
const reportPages = document.querySelectorAll(".report");
const btns = document.querySelectorAll(".menubtn");
const translateAmount = 100;
let translate = 0;

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav a").
    forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    })

slide = (givenindex, pageIndex) => {
    if(pageIndex === 1){
        translate = translateAmount * (1 - givenindex);
        pages.forEach(
            pages => (
                pages.style.transform = `translateX(${translate}%)`
            )
        );
    }else if(pageIndex === 2){
        translate = translateAmount * (1 - givenindex);
        orderPages.forEach(
            orderPages => (
                orderPages.style.transform = `translateX(${translate}%)`
            )
        );
    }else if(pageIndex === 3){
        translate = translateAmount * (1 - givenindex);
        reportPages.forEach(
            reportPages => (
                reportPages.style.transform = `translateX(${translate}%)`
            )
        );
    }
        
}