function writeAnimation() {
    document.getElementById("bar").classList.toggle("animation");
};

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(() => {
       writeAnimation(); 
    }, 700);
});