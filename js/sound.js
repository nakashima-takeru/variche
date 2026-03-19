const images = document.querySelectorAll(".engineImage");

images.forEach((image) => {
  const sound = image.querySelector(".engineSound");
  image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});
