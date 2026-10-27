/*
  Raidens Calendar - Resumo
  Cartão escuro com o próximo evento e a contagem do mês exibido.
*/

const sumNext = document.getElementById("sumNext");
const sumNextDate = document.getElementById("sumNextDate");
const sumCount = document.getElementById("sumCount");
const sumUnit = document.getElementById("sumUnit");
const sumMonth = document.getElementById("sumMonth");
const sumList = document.getElementById("sumList");

function shortDate(value) {
  const [y, m, d] = value.split("-").map(Number);

  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "numeric",
    month: "short"
  }).format(new Date(y, m - 1, d));
}

function bump(el, value) {
  const previous = Number(el.textContent);

  el.textContent = value;

  if (previous === value) return;

  el.classList.remove("bump-up", "bump-down");
  void el.offsetWidth;
  el.classList.add(value > previous ? "bump-up" : "bump-down");
}

function renderSummary() {
  const monthPrefix = `${view.getFullYear()}-${pad(view.getMonth() + 1)}-`;
  const inMonth = events.filter(e => e.date.startsWith(monthPrefix)).length;

  bump(sumCount, inMonth);
  sumUnit.textContent = inMonth === 1 ? "evento" : "eventos";
  sumMonth.textContent = "em " + new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(view);

  const todayKey = key(new Date());
  const upcoming = events
    .filter(e => e.date >= todayKey)
    .sort((a, b) => (a.date + (a.time || "")).localeCompare(b.date + (b.time || "")));

  if (!upcoming.length) {
    sumNext.textContent = "Nenhum evento marcado";
    sumNextDate.textContent = "Toque em um dia do calendário para criar o próximo.";
    sumList.innerHTML = "";
    return;
  }

  const [next, ...rest] = upcoming;

  sumNext.textContent = next.title;
  sumNextDate.textContent =
    (next.date === todayKey ? "Hoje" : pretty(next.date)) +
    (next.time ? ` · ${next.time}` : "");

  sumList.innerHTML = "";

  rest.slice(0, 3).forEach(event => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "br-row";

    const label = document.createElement("span");
    label.className = "lbl";
    label.textContent = event.title;

    const value = document.createElement("span");
    value.className = "val";
    value.textContent = shortDate(event.date) + (event.time ? ` · ${event.time}` : "");

    row.append(label, value);
    row.addEventListener("click", () => editEvent(event.id));
    sumList.appendChild(row);
  });
}

