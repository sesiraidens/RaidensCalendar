/*
  Raidens Calendar - App
  Ponto de entrada, inicialização e referências DOM.
*/

const days = document.getElementById("days");
const monthEl = document.getElementById("month");

const dialog = document.getElementById("dialog");
const form = document.getElementById("form");

const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

const dialogTitle = document.getElementById("dialogTitle");
const prettyDateEl = document.getElementById("prettyDate");
const deleteBtn = document.getElementById("deleteBtn");
const saved = document.getElementById("saved");

render();
