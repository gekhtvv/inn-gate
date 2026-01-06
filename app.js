const content = {
  forecast: {
    title: "🔮 Прогноз дня",
    text: "Сегодняшний день несёт энергию ясности. Хорошо подойдут спокойные решения и внимание к себе."
  },
  affirmation: {
    title: "✨ Аффирмация дня",
    text: "Я доверяю жизни. Всё происходит для моего высшего блага."
  },
  practice: {
    title: "🧘 Практика дня",
    text: "Сядь удобно, закрой глаза и сделай 5 медленных глубоких вдохов и выдохов."
  }
};

function openModal(type) {
  document.getElementById("modal-title").innerText = content[type].title;
  document.getElementById("modal-text").innerText = content[type].text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
