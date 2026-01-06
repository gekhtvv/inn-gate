const API_URL = "https://opensheet.elk.sh/1pA-O9rLmXeROhPbzGQhTRwHJRNW8HuGRudHGOTuWs84/Sheet1";

function today() {
  return new Date().toISOString().split("T")[0];
}

async function loadData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const todayRow = data.find(row => row.date === today());

    if (!todayRow) {
      document.getElementById("modal-text").innerText =
        "Прогноз на сегодня ещё не добавлен";
      return;
    }

    window.content = {
      forecast: {
        title: "Прогноз дня",
        text: todayRow.forecast
      },
      affirmation: {
        title: "Аффирмация дня",
        text: todayRow.affirmation
      },
      practice: {
        title: "Практика дня",
        text: todayRow.practice
      }
    };

  } catch (e) {
    console.error("Ошибка загрузки данных", e);
  }
}

loadData();

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
