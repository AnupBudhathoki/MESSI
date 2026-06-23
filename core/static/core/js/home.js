window.onload = function() {

    const heart = document.getElementById("heart");

    function createHeart(){

        let clone = heart.cloneNode(true);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        clone.style.left = x + "px";
        clone.style.top = y + "px";

        document.body.appendChild(clone);

        setTimeout(()=>{
            clone.remove();
        },1500);
    }

    setInterval(createHeart, 500);

}