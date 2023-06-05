function handleScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.9) {
      element.classList.add("animate-show");
    } else {
      element.classList.remove("animate-show");
    }
  });
}
window.addEventListener("scroll", handleScroll);
