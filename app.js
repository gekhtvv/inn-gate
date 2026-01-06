const screens = document.querySelectorAll('.screen');

function openScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goBack() {
  openScreen('home');
}

// MOCK-ДАННЫЕ (ПОТОМ ЗАМЕНИМ НА API)
const forecast = "Сегодня благоприятный день для внутренних решений и спокойных действий.";
const affirmation = "Я доверяю жизни. Всё происходит вовремя.";

document.getElementById('forecastText').innerText = forecast;
document.getElementById('affirmationText').innerText = affirmation;
