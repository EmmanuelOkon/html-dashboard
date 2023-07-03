let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".mainContent");
menu.onclick = function () {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
};
