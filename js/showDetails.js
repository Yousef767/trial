let detailsBtns = document.querySelectorAll(".text button");
detailsBtns.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("showText");
    if (e.parentElement.classList.contains("showText")) {
      e.innerHTML = `<span>see less</span> <i class="fa-solid fa-play"></i>`;
    } else {
      e.innerHTML = `<span>see details</span> <i class="fa-solid fa-play"></i>`;
    }
  });
});
