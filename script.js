/* Typing Animation */

const roles = [

    "Web Developer",
    "Python Developer",
    "Frontend Developer",
    "UI Designer"

];

const changingText =
document.querySelector("#changing-text");

let roleIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(isDeleting){

        changingText.innerHTML =
        currentRole.substring(0, charIndex);

        charIndex--;
    }

    else{

        changingText.innerHTML =
        currentRole.substring(0, charIndex);

        charIndex++;
    }

    let speed = 100;

    if(isDeleting){

        speed = 50;
    }

    if(!isDeleting &&
    charIndex > currentRole.length){

        isDeleting = true;

        speed = 1500;
    }

    if(isDeleting &&
    charIndex < 0){

        isDeleting = false;

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
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
emailjs.init("AlYojjb0eFtjOVAy9");

const contactForm =
document.querySelector("#contactForm");

contactForm.addEventListener("submit",
function(event){

    event.preventDefault();

    emailjs.sendForm(

        "service_mvgy0e6",
        "template_64cvqy2",
        "#contactForm"

    )

    .then(function(){

        alert("Message Sent Successfully 🚀");

        contactForm.reset();

    })

    .catch(function(error){

        alert("Failed To Send Message");

        console.log(error);

    });

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
/* Counter Animation */

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCount, 30);
        }

        else{

            counter.innerText = target;
        }

    };

    updateCount();

});
/* Mouse Glow Effect */

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",
function(event){

    cursorGlow.style.left =
    event.clientX + "px";

    cursorGlow.style.top =
    event.clientY + "px";

});
/* Particles */

function loadParticles(color){

    tsParticles.load("particles-js", {

        particles: {

            number: {

                value:50
            },

            color: {

                value:color
            },

            links: {

                enable:true,

                color:color,

                distance:150
            },

            move: {

                enable:true,

                speed:2
            },

            size: {

                value:3
            },

            opacity: {

                value:0.5
            }

        },

        background: {

            color:"transparent"
        }

    });

}

/* Default Theme */

if(document.body.classList.contains("light")){

    loadParticles("#7c3aed");
}

else{

    loadParticles("#00ffff");
}

/* Update On Theme Change */

themeBtn.addEventListener("click", function(){

    if(document.body.classList.contains("light")){

        loadParticles("#7c3aed");
    }

    else{

        loadParticles("#00ffff");
    }

});
const buttons =
document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mousemove",
    function(event){

        const rect =
        button.getBoundingClientRect();

        const x =
        event.clientX - rect.left - rect.width / 2;

        const y =
        event.clientY - rect.top - rect.height / 2;

        button.style.transform =
        `translate(${x * 0.2}px,
        ${y * 0.2}px)`;

    });

    button.addEventListener("mouseleave",
    function(){

        button.style.transform =
        "translate(0,0)";
    });

});
const tiltCards =
document.querySelectorAll(
".project-card, .card, .stat-box"
);

tiltCards.forEach(card => {

    card.addEventListener("mousemove",
    function(event){

        const rect =
        card.getBoundingClientRect();

        const x =
        event.clientX - rect.left;

        const y =
        event.clientY - rect.top;

        const rotateX =
        ((y / rect.height) - 0.5) * -20;

        const rotateY =
        ((x / rect.width) - 0.5) * 20;

        card.style.transform =
        `rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",
    function(){

        card.style.transform =
        "rotateX(0) rotateY(0)";
    });

});
/* GitHub API */

async function loadGitHub(){

    const username = "piyush874";

    const response =
    await fetch(
    `https://api.github.com/users/${username}`
    );

    const data =
    await response.json();

    document.querySelector("#githubAvatar").src =
    data.avatar_url;

    document.querySelector("#githubName").innerHTML =
    data.name || data.login;

    document.querySelector("#githubBio").innerHTML =
    data.bio || "Frontend Developer";

    document.querySelector("#repoCount").innerHTML =
    data.public_repos;

    document.querySelector("#followers").innerHTML =
    data.followers;

    document.querySelector("#following").innerHTML =
    data.following;

    document.querySelector("#githubProfile").href =
    data.html_url;
}

loadGitHub();
/* AI Chatbot */

const chatbotToggle =
document.querySelector("#chatbotToggle");

const chatbotContainer =
document.querySelector("#chatbotContainer");

const closeChatbot =
document.querySelector("#closeChatbot");

const chatInput =
document.querySelector("#chatInput");

const sendBtn =
document.querySelector("#sendBtn");

const chatbotBody =
document.querySelector("#chatbotBody");

/* Open */

chatbotToggle.addEventListener("click",
function(){

    chatbotContainer.classList.add("show");

});

/* Close */

closeChatbot.addEventListener("click",
function(){

    chatbotContainer.classList.remove("show");

});

/* Send Message */

sendBtn.addEventListener("click",
sendMessage);

chatInput.addEventListener("keypress",
function(event){

    if(event.key === "Enter"){

        sendMessage();
    }

});

function sendMessage(){

    const message =
    chatInput.value.trim().toLowerCase();

    if(message === "") return;

    /* User Message */

    chatbotBody.innerHTML += `

    <div class="user-message">
        ${message}
    </div>

    `;

    chatInput.value = "";

    chatbotBody.scrollTop =
    chatbotBody.scrollHeight;

    /* Bot Reply */

    setTimeout(function(){

        let reply = "";

        if(message.includes("skills")){

            reply =
            "Piyush knows HTML, CSS, JavaScript and Python 🚀";
        }

        else if(message.includes("projects")){

            reply =
            "Portfolio Website and Notes App are some featured projects 🔥";
        }

        else if(message.includes("contact")){

            reply =
            "You can contact Piyush using the contact form below 📩";
        }

        else if(message.includes("github")){

            reply =
            "GitHub: github.com/piyush874 💻";
        }

        else if(message.includes("hello")
        || message.includes("hi")){

            reply =
            "Hello 👋 Nice to meet you!";
        }

        else{

            reply =
            "I'm still learning 🤖";
        }

        chatbotBody.innerHTML += `

        <div class="bot-message">
            ${reply}
        </div>

        `;

        chatbotBody.scrollTop =
        chatbotBody.scrollHeight;

    }, 700);

}