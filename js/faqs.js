let faqs = document.querySelectorAll(".faqs .faq");
faqs.forEach((e) => {
  e.addEventListener('click',() => {
    faqs.forEach((el) => {
      e === el ? el.classList.toggle("added") : el.classList.remove("added");
    });
  });
});
