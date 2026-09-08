/*
  Raidens Calendar - Calendar
  Renderização do calendário, navegação e atalhos de teclado.
*/

let view = new Date();
view.setDate(1);

function pad(n) {
  return String(n).padStart(2, "0");
}

function key(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function render(direction = null) {
  const year = view.getFullYear();
  const month = view.getMonth();

  monthEl.textContent = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric"
  }).format(view);

  if (direction) {
    monthEl.classList.remove(
      "in-left",
      "in-right"
    );

    void monthEl.offsetWidth;

    monthEl.classList.add(
      direction === "next"
        ? "in-left"
        : "in-right"
    );
  }

  days.innerHTML = "";

  const first = new Date(year, month, 1);
  const start = new Date(
    year,
    month,
    1 - first.getDay()
  );

  const todayKey = key(new Date());

  for (let i = 0; i < 42; i++) {
    const date = new Date(start);

    date.setDate(start.getDate() + i);

    const dateString = key(date);

    const dayEvents = events
      .filter(e => e.date === dateString)
      .sort((a, b) =>
        (a.time || "").localeCompare(b.time || "")
      );

    const cell = document.createElement("div");
    cell.className = "day";
    cell.style.animationDelay = `${Math.min(i * 6, 120)}ms`;

    if (date.getMonth() !== month) {
      cell.classList.add("other");
    }

    if (dateString === todayKey) {
      cell.classList.add("today");
    }

    const number = document.createElement("span");
    number.className = "number";
    number.textContent = date.getDate();

    const eventBox = document.createElement("div");
    eventBox.className = "events";

    dayEvents.slice(0, 3).forEach((event, index) => {
      const item = document.createElement("div");

      item.className = "event";
      item.style.animationDelay = `${index * 35}ms`;

      item.textContent =
        (event.time ? event.time + " " : "") +
        event.title;

      item.title = item.textContent;

      item.addEventListener("click", e => {
        e.stopPropagation();
        editEvent(event.id);
      });

      eventBox.appendChild(item);
    });

    if (dayEvents.length > 3) {
      const more = document.createElement("div");
      more.className = "more";
      more.textContent = `+${dayEvents.length - 3}`;
      eventBox.appendChild(more);
    }

    cell.append(number, eventBox);

    cell.addEventListener("click", () => {
      newEvent(dateString);
    });

    days.appendChild(cell);
  }
}

function changeMonth(amount) {
  const direction = amount > 0 ? "next" : "prev";

  monthEl.classList.add(
    amount > 0 ? "out-left" : "out-right"
  );

  setTimeout(() => {
    view.setMonth(view.getMonth() + amount);

    monthEl.classList.remove(
      "out-left",
      "out-right"
    );

    render(direction);
  }, 150);
}

document.getElementById("prev")
  .addEventListener("click", () => {
    changeMonth(-1);
  });

document.getElementById("next")
  .addEventListener("click", () => {
    changeMonth(1);
  });

document.getElementById("today")
  .addEventListener("click", () => {
    const now = new Date();

    view = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    render("next");
  });

document.addEventListener("keydown", e => {
  if (dialog.open) return;

  if (e.key === "ArrowLeft") {
    changeMonth(-1);
  }

  if (e.key === "ArrowRight") {
    changeMonth(1);
  }
});
