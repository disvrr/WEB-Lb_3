const gallery = document.querySelector(".gallery");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const borderInput = document.getElementById("border");
const alternInput = document.getElementById("altern");
const acceptButton =  document.getElementById("accept");

let selectedImage = null;
//let positionY = 0;

gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    if (selectedImage) {
        selectedImage.classList.remove("selected");
    }
    selectedImage = event.target;
    selectedImage.classList.add("selected");
    widthInput.value = selectedImage.width;
    heightInput.value = selectedImage.height;
    borderInput.value = parseInt(getComputedStyle(selectedImage).borderWidth);
    alternInput.value = selectedImage.alt;
})
acceptButton.addEventListener("click", function (event) {
 if (!selectedImage) return;

    selectedImage.width = widthInput.value;
    selectedImage.height = heightInput.value;
    selectedImage.style.borderWidth = borderInput.value + "px";
    selectedImage.alt = alternInput.value;
});


document.getElementById("upperBtn").addEventListener("click", function () {
    if (!selectedImage) return;
    const previous = selectedImage.previousElementSibling;

    if (previous) {
        gallery.insertBefore(selectedImage, previous);
    }
});
document.getElementById("lowerBtn").addEventListener("click", function () {
    if (!selectedImage) return;
    const next = selectedImage.nextElementSibling;

    if (next) {
        gallery.insertBefore(next, selectedImage); 
    }

});


// document.getElementById("upperBtn").addEventListener("click", function() {
//     if (!selectedImage) return;

//     positionY -= 1;
//     selectedImage.style.transform = `translateY(${positionY}px)`;
// });


// document.getElementById("lowerBtn").addEventListener("click", function() {
//     if (!selectedImage) return;

//     positionY += 1;
//     selectedImage.style.transform = `translateY(${positionY}px)`;
// });


gallery.querySelector("img").click();