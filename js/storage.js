/*
  Raidens Calendar - Storage
  Gerencia persistência de eventos no localStorage.
*/

const STORAGE_KEY = "raidens-calendar-v2";

function loadEvents() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!Array.isArray(data)) return [];

    return data;
  } catch {
    return [];
  }
}

let events = loadEvents();

function saveEvents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));

  saved.classList.remove("show");

  requestAnimationFrame(() => {
    saved.classList.add("show");
  });

  clearTimeout(saveEvents.timer);

  saveEvents.timer = setTimeout(() => {
    saved.classList.remove("show");
  }, 1100);
}
