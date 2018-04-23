var sp_selected = document.getElementById("specs");
sp_selected.addEventListener("click", function(e){
  if (document.getElementById("a_specs").style.display == "none"){
  document.getElementById("a_specs").style.display = "block";
  document.getElementById("specs").innerText = "AVIATOR guitar amplifier - front view (click here to close specs)";
}
else {
  document.getElementById("a_specs").style.display = "none";
  document.getElementById("specs").innerText = "AVIATOR guitar amplifier - front view (click here to view specs)";
};
  e.stopPropagation();
}, false);

var spx_selected = document.getElementById("specsx");
spx_selected.addEventListener("click", function(e){
  if (document.getElementById("a_specsx").style.display == "none"){
  document.getElementById("a_specsx").style.display = "block";
  document.getElementById("specsx").innerText = "AVIATOR guitar amplifier - front view (click here to close specs)";
  }
  else {
  document.getElementById("a_specsx").style.display = "none";
  document.getElementById("specsx").innerText = "AVIATOR guitar amplifier - front view (click here to view specs)";
  };
  e.stopPropagation();
}, false);
