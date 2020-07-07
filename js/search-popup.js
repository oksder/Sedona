var popup = document.querySelector(".search-button");
var form = document.querySelector(".modal")
var search = form.querySelector("[name=arrival]");

popup.addEventListener("click", function(event){
  event.preventDefault();
  form.classList.toggle("modal-toggle");
  search.focus();
});
