const draggableContactForm = document.querySelector(".draggable-contact-form");
const contactIcon = document.querySelector(".contact-icon");
const dragIcon = document.querySelector(".draggable-contact-form .drag-icon");

contactIcon.addEventListener("click", () => {
  draggableContactForm.classList.toggle("active");
});

const drag = (position) => {
  let styles = draggableContactForm.getBoundingClientRect();
  let left = styles.left;
  let top = styles.top;

  draggableContactForm.style.setProperty(
    "left",
    `${left + position.movementX}px`
  );

  draggableContactForm.style.setProperty(
    "top",
    `${top + position.movementY}px`
  );
};

dragIcon.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", drag);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", drag);
});
