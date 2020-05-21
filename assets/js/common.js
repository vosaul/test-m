function toggle_menu() {
  var t = document.getElementsByClassName("toggle_icon");
  var nav = document.getElementById("navbar_top");
  
  if (t[0].classList.contains('hidden')) {
     t[0].classList.remove('hidden');
    t[1].classList.add('hidden');
    t[1].classList.add('hidden_small');
    nav.classList.add('hidden_small');
  }
  else {
    t[0].classList.add('hidden');
    t[1].classList.remove('hidden');
    t[1].classList.remove('hidden_small');
    nav.classList.remove('hidden_small');
  }
}
function close_price_descr() {
  var d = document.getElementById("price_descr");
  d.classList.add('hidden');
}
function open_price_descr() {
  var d = document.getElementById("price_descr");
  d.classList.remove('hidden');
}