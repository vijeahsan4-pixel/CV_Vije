// Welcome Message
function welcomeMessage(){
    alert("Selamat datang di Website CV Ahmad Vije Ahsan!");
}

// Jam Realtime
function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleDateString("id-ID") +
    " | " +
    now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);
updateClock();

// Typing Effect
const text = "Mahasiswa | IT Support";
let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,100);

    }

}

typingEffect();

// Dark Mode
function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    const btn = document.querySelector("header button");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️ Light Mode";
    }else{
        btn.innerHTML = "🌙 Dark Mode";
    }

}

function topFunction(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}