let compliments = [
    "Ты самая добрая!",
    "Ты невероятная!",
    "Ты вдохновляешь!",
    "Ты делаешь каждый день лучше!"
];

function generate() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let randomText = compliments[Math.floor(Math.random() * compliments.length)];

    let message = `С 8 Марта, ${role} ${name}! 💐 ${randomText}`;
    document.getElementById("output").innerText = message;

    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(conf);
    }
}