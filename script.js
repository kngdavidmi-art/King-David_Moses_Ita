console.log("Portfolio loaded sucessfully");
function openImage(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").style.display = "block";
  document.getElementById("lightbox-video").style.display = "none";
  document.getElementById("lightbox-img").src = src;
}

function openVideo(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-video").style.display = "block";
  document.getElementById("lightbox-img").style.display = "none";
  document.getElementById("lightbox-video").src = src;
  document.getElementById("lightbox-video").play();
}

function closeImage(event) {
  if (event.target.id === "lightbox") {
    document.getElementById("lightbox").style.display = "none";
  }
}

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    openImage(img.src);
  });
});

document.querySelectorAll(".gallery video").forEach(video => {
  video.addEventListener("click", (e) => {
    e.stopPropagation();
    openVideo(video.src);
  });
});

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href.includes("#")) return;

    e.preventDefault();
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location = this.href;
    }, 300);
  });
});