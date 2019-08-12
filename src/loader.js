var spinnertime;
                
function spinnerTimeout() {
  spinnertime = setTimeout(showPage, 3000);
}
                
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}