function openCurtain() {
    document.querySelector(".curtain").classList.add("open");
    document.querySelector(".curtain2").classList.add("open");
    document.getElementById("btn").style.display = "none";
    setTimeout(()=>{
        document.getElementById("message").classList.add("show");
    })
}

setTimeout(() => {
    document.getElementById("message").classList.add("fade-out");
}, 10000);

window.onload = () => {

    const wire = document.getElementById("wire");
    const bulb = document.getElementById("bulb");
    const setup = document.getElementById("setup");
    for (let i = 1; i <= 5; i++) {

        let wireRight = wire.cloneNode(true);
        let bulbRight = bulb.cloneNode(true);

        wireRight.style.left = `${50 + i * 10}%`;
        bulbRight.style.left = `${50 + i * 10}%`;

        setup.appendChild(wireRight);
        setup.appendChild(bulbRight);

        let wireLeft = wire.cloneNode(true);
        let bulbLeft = bulb.cloneNode(true);

        wireLeft.style.left = `${50 - i * 10}%`;
        bulbLeft.style.left = `${50 - i * 10}%`;

        setup.appendChild(wireLeft);
        setup.appendChild(bulbLeft);
    }

};