
window.onload = function(){
    alert("Welcome to Vaishnavi's Portfolio!");
};


const elements = document.querySelectorAll("p, h2, h3");

window.addEventListener("scroll", () => {

    elements.forEach((element) => {

        const position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            element.classList.add("show");
            element.classList.add("fade-in");
        }
    });

});

const hobbies = document.querySelectorAll(".hobby");

hobbies.forEach((hobby) => {

    hobby.addEventListener("click", () => {

        alert("This is one of my favorite hobbies!");

    });

});