var slideBlog = new Swiper(".slide-blog", {
  slidesPerView: 4,  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* SCRIPT ACCORDION */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {   
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

