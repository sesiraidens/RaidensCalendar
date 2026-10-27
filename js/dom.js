/*
  Raidens Calendar - DOM
  Referências aos elementos da página. Carrega antes dos outros scripts,
  porque calendar.js, summary.js e dialog.js usam estas constantes.
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
