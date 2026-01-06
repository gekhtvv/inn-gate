const messages = [
  "Сегодня важно замедлиться и позволить событиям идти своим чередом.",
  "Обрати внимание на тело — в нём сейчас много ответов.",
  "День для мягких решений и честности с собой.",
  "Позволь себе быть неидеальной — в этом твоя сила."
];

document.getElementById("dayMessage").innerText =
  messages[Math.floor(Math.random() * messages.length)];

function openLink(url) {
  window.open(url, "_blank");
}

function openPage(page) {
  alert("Раздел \"" + page + "\"\nЭкран будет добавлен на следующем этапе.");
}
