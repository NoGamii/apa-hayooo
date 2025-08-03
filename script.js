function showsection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

window.onload = function () {
  showSection('nano');
};
