const icons = document.querySelectorAll(".section-heading-icons i");
let i = 0;
// console.log(icons.length);

setInterval(() => {
  icons.forEach((icon) => {
    icon.classList.remove("change");
  });

  if (i <= icons.length - 1) {
    icons[i].classList.toggle("change");
  } else {
    i = 0;
    icons[i].classList.toggle("change");
  }
  i++;
}, 4000);

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((ele) => {
    ele.classList.toggle("change");
  });
});
