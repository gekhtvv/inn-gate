const messages = [
  "Сегодня важно замедлиться и услышать себя.",
  "День подходит для мягких решений и заботы о теле.",
  "Не спеши — ответы придут сами.",
  "Позволь себе быть в потоке, без контроля."
];

document.getElementById("dayMessage").innerText =
  messages[Math.floor(Math.random() * messages.length)];

function openLink(url) {
  window.open(url, "_blank");
}

function openPage(page) {
  alert("Открывается раздел: " + page + "\n(экран будет добавлен позже)");
}
