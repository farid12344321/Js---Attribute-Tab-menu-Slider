"use strict"


// let linkElem =document.querySelector("a");

// linkElem.getAttribute("href");

// linkElem.setAttribute("href","https://www.linkedin.com/")


// console.log(linkElem.hasAttribute("href"));


// let btnGoogle =document.querySelector("button:nth-child(1)")
// let btnLinkedin =document.querySelector("button:nth-child(2)")


// console.log(btnGoogle);


// btnGoogle.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.google.com/")
// })


// btnLinkedin.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.linkedin.com/")
// })



// let headers =document.querySelectorAll(".tab-menu .header .item");

// let contents =document.querySelectorAll(".tab-menu .content .item");



// headers.forEach(element => {
//     element.addEventListener("click",function(){
//         document.querySelector(".active").classList.remove("active");
//         this.classList.add("active");

//         contents.forEach(content => {
//             if(content.getAttribute("data-id")==this.getAttribute("data-id")){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });


// let nameInput =document.querySelector("#exampleInputEmail1")


// document.querySelector(".login-btn").addEventListener("click",function(){
//     console.log(nameInput.value);
// })

let leftIcon = document.querySelector(".slider .left");


let rightIcon = document.querySelector(".slider .right");


function rightSlider(){
    let activeImage = document.querySelector(".active");
    if (activeImage.nextElementSibling != null) {
        activeImage.classList.remove("active");
        activeImage.nextElementSibling.classList.add("active");

    } else {
        activeImage.classList.remove("active");
        activeImage.parentNode.firstElementChild.classList.add("active");
    }
}

function leftSlider(){
    let activeImage = document.querySelector(".active");
    if (activeImage.previousElementSibling != null) {
        activeImage.classList.remove("active");
        activeImage.previousElementSibling.classList.add("active");
        
    } else {
        activeImage.classList.remove("active");
        activeImage.parentNode.lastElementChild.classList.add("active");
    }
}

rightIcon.addEventListener("click", rightSlider)

leftIcon.addEventListener("click", leftSlider)

rightIcon.addEventListener("mouseover", rightSlider)

leftIcon.addEventListener("mouseover", leftSlider)

// setInterval(() => {
//     rightSlider()
// }, 2000);