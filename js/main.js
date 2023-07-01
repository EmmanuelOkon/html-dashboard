let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let mainContent = document.querySelector('.main--content')
menu.onclick = function() {
    sidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
}

{/* <i class="fa fa-home" aria-hidden="true"></i>
<i class="fa fa-graduation-cap" aria-hidden="true"></i>
<i class="fa fa-lightbulb-o" aria-hidden="true"></i>
<i class="fa fa-pie-chart" aria-hidden="true"></i>
<i class="fa fa-cog" aria-hidden="true"></i> */}