/*
  Raidens Calendar - Dialog
  Gerenciamento do dialog, formulário, criar/editar/excluir eventos.
*/

let editing = null;

function pretty(value) {
  if (!value) return "";

  const [y, m, d] = value.split("-").map(Number);
  const date = new Date(y, m - 1, d);

  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function newEvent(selectedDate = key(new Date())) {
  editing = null;

  form.reset();

  dialogTitle.textContent = "Novo evento";
  deleteBtn.hidden = true;

  dateInput.value = selectedDate;
  prettyDateEl.textContent = pretty(selectedDate);

  dialog.showModal();

  requestAnimationFrame(() => {
    titleInput.focus();
  });
}

function editEvent(id) {
  const event = events.find(e => e.id === id);

  if (!event) return;

  editing = id;

  dialogTitle.textContent = "Editar evento";
  deleteBtn.hidden = false;

  titleInput.value = event.title;
  dateInput.value = event.date;
  timeInput.value = event.time || "";

  prettyDateEl.textContent = pretty(event.date);

  dialog.showModal();

  requestAnimationFrame(() => {
    titleInput.focus();
  });
}

function closeDialog() {
  if (!dialog.open) return;

  dialog.classList.add("closing");

  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("closing");
  }, 170);
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    title: titleInput.value.trim(),
    date: dateInput.value,
    time: timeInput.value
  };

  if (!data.title || !data.date) return;

  if (editing) {
    const index = events.findIndex(
      event => event.id === editing
    );

    if (index !== -1) {
      events[index] = {
        ...events[index],
        ...data
      };
    }
  } else {
    events.push({
      id:
        crypto.randomUUID?.() ||
        `${Date.now()}-${Math.random()}`,
      ...data
    });
  }

  saveEvents();
  render();
  closeDialog();
});

deleteBtn.addEventListener("click", () => {
  if (!editing) return;

  events = events.filter(
    event => event.id !== editing
  );

  saveEvents();
  render();
  closeDialog();
});

dateInput.addEventListener("change", () => {
  prettyDateEl.textContent = pretty(dateInput.value);
});

document.getElementById("newBtn")
  .addEventListener("click", () => {
    newEvent();
  });

document.getElementById("close")
  .addEventListener("click", closeDialog);

document.getElementById("cancel")
  .addEventListener("click", closeDialog);

dialog.addEventListener("click", e => {
  const rect = dialog.getBoundingClientRect();

  const outside =
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom;

  if (outside) closeDialog();
});
