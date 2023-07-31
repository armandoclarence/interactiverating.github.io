const rateContainer = document.querySelector(".rate");
const selectedContainer = document.querySelector(".select");
const stars = document.querySelectorAll("ul .list");
const submit = document.querySelector("input[type=submit]");
let selectedP = document.querySelector(".select p");
stars.forEach((star,index)=>{
    star.addEventListener("click", function(){
        stars.forEach((star,index2)=>{
            index == index2 ? star.classList.add("active") : star.classList.remove("active");
            index == index2 ? submit.addEventListener("click", e=>{
                let dataRate = this.getAttribute("data-rate");
                rateContainer.style.display = "none";
                selectedContainer.style.display = "flex";
                selectedP.innerHTML = `You selected ${dataRate} out of 5`;
            }) : "";
        })
    })
});


    

