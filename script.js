const roles = [

    "Web Developer",

    "Python Developer",

    "Frontend Developer",

    "UI Designer"

];

let roleIndex = 0;

const changingText = document.querySelector("#changing-text");

setInterval(function(){

    roleIndex++;

    if(roleIndex >= roles.length){

        roleIndex = 0;

    }

    changingText.innerHTML = roles[roleIndex];

}, 2000);
const themeBtn = document.querySelector('#themeBtn');

/* Load saved theme */

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    themeBtn.innerHTML = "Dark Mode";

}

else{

    themeBtn.innerHTML = "Light Mode";

}

/* Toggle theme */

themeBtn.addEventListener('click', function(){

    document.body.classList.toggle('light');

    if(document.body.classList.contains('light')){

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = "Dark Mode";

    }

    else{

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = "Light Mode";

    }

});
const menuBtn = document.querySelector("#menuBtn");

const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", function(){
    console.log("clicked");

    navLinks.classList.toggle("show");

});
const hiddenSections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function(){

    hiddenSections.forEach(function(section){

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show-section");

        }

    });

});
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.classList.add("show-btn");
    }

    else{

        topBtn.classList.remove("show-btn");
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");
        }

    });

});
const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let isValid = true;

    inputs.forEach(function(input){

        if(input.value.trim() === ""){

            isValid = false;
        }

    });

    if(isValid){

        alert("Message Sent Successfully 🚀");
    }

    else{

        alert("Please fill all fields");
    }

});
/* Project Modal */

const projectBtns =
document.querySelectorAll(".project-btn");

const modal =
document.querySelector("#projectModal");

const closeModal =
document.querySelector("#closeModal");

const modalTitle =
document.querySelector("#modalTitle");

const modalDesc =
document.querySelector("#modalDesc");

const modalImg =
document.querySelector("#modalImg");

const liveBtn =
document.querySelector("#liveBtn");

const githubBtn =
document.querySelector("#githubBtn");

projectBtns.forEach(function(btn){

    btn.addEventListener("click", function(){

        modal.classList.add("show");

        modalTitle.innerHTML =
        btn.dataset.title;

        modalDesc.innerHTML =
        btn.dataset.desc;

        modalImg.src =
        btn.dataset.img;

        liveBtn.href =
        btn.dataset.live;

        githubBtn.href =
        btn.dataset.github;

    });

});

/* Close Modal */

closeModal.addEventListener("click", function(){

    modal.classList.remove("show");

});

/* Close Outside Click */

window.addEventListener("click", function(event){

    if(event.target === modal){

        modal.classList.remove("show");
    }

});