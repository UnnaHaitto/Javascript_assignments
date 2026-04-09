const trigger = document.getElementById("trigger");

trigger.addEventListener("mouseenter", function(){
    document.getElementById("target").src = "img/picB.jpg";
})

trigger.addEventListener("mouseleave", function(){
    document.getElementById("target").src = "img/picA.jpg";
})