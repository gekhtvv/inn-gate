const screens = document.querySelectorAll('.screen');
const tabs = document.querySelectorAll('.tab');

function openScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  openScreen('home');
  tabs.forEach(t => t.classList.remove('active'));
  tabs[0].classList.add('active');
}

function switchTab(id, el) {
  openScreen(id);
  tabs.forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
