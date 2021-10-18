window.onload = function(){
  document.getElementById('down').onclick = function(event) {
    smoothScroll({toElement: document.getElementById('container-2'), duration: 300});
  }
  document.getElementById('up').onclick = function(event) {
    smoothScroll({toElement: document.getElementById('container-1'), duration: 300});
  }
}
