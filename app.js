const screens = document.querySelectorAll('.screen');
const tabs = document.querySelectorAll('.tab');

function openScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function switchTab(screenId, tabEl) {
  openScreen(screenId);

  tabs.forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
}

// mock-данные
document.getElementById('forecastText').innerText =
  "Сегодня день внутреннего равновесия. Хорошо заниматься собой.";

document.getElementById('affirmationText').innerText =
  "Я доверяю жизни. Всё складывается для меня наилучшим образом.";
