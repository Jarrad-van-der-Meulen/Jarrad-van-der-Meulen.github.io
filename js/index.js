window.onload = function(){
  document.getElementById('down').onclick = function(event) {
    var el = document.getElementById('container-2');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  document.getElementById('up').onclick = function(event) {
    var el = document.getElementById('container-1');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
