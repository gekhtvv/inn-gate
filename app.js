const content = {
  forecast: {
    title: "Прогноз дня",
    text: "Сегодняшний день несёт мягкую, но глубокую энергию. Прислушайтесь к интуиции."
  },
  affirmation: {
    title: "Аффирмация дня",
    text: "Я доверяю процессу жизни и нахожусь в гармонии с собой."
  },
  practice: {
    title: "Практика дня",
    text: "Закрой глаза и сделай 7 медленных вдохов и выдохов."
  }
};

function openModal(type) {
  modal.style.display = "flex";
  modalTitle.innerText = content[type].title;
  modalText.innerText = content[type].text;
}

function closeModal() {
  modal.style.display = "none";
}

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
