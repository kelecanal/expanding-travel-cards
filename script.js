//we just need to change class on each to be able to expand each card
//querySelectorALL puts all 'panels' into node list (similar to an array)
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  //console.log(panel);
  panel.addEventListener("click", () => {
    console.log("this is clicked");
    //remove active classes
    removeActiveClasses();
    //add the class 'active' to whatever panel was clicked
    panel.classList.add("active");
  });
});

//function to remove the class 'active' from div
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
