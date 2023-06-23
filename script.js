const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// JavaScript code
// JavaScript code
function openPage(pageId) {
    // Get all components
    const components = document.getElementsByClassName("component");
    
    // Hide all components
    for (let i = 0; i < components.length; i++) {
      components[i].style.display = "none";
    }
    
    // Show the selected component
    const selectedComponent = document.getElementById(pageId);
    selectedComponent.style.display = "block";
  }
  
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});