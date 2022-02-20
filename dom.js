
const collapsibles = document.querySelectorAll(".collapsible");

for (let i = 0; i < collapsibles.length; i++) {
  const collaps = collapsibles[i];


  collaps.addEventListener("click", function () {
    const collapsibleContent = collaps.nextElementSibling;
    collapsibleContent.classList.toggle("visible");
  })
};





