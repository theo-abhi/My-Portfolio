AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const container = document.querySelector(".draggable-row");

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.scrollBehavior = "unset"; // Disable smooth scrolling during drag
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
  container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling after drag
});

container.addEventListener("mouseup", () => {
  isDragging = false;
  container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling after drag
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1; // Adjust scroll speed as needed
  container.scrollLeft = scrollLeft - walk;
});
