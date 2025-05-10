const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

// Checked => 
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// Change Blackground
function updateBody(){
  if(inputEl.checked){
    bodyEl.style.background = "black";
  }
  else{
    bodyEl.style.background = "white";
  }
}

// input updatebody-Function, updateLocalStorage-Function
inputEl.addEventListener("input", ()=>{
  updateBody();
  updateLocalStorage();
});

// LocalStorage
function updateLocalStorage(){
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}