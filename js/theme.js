/*
  Raidens Calendar - Tema e rolagem
  Alternância claro/escuro, reveal, barra de progresso e sombra da topbar.
*/

(function () {
  const sun = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const btn = document.getElementById("themeBtn");

  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    btn.innerHTML = t === "dark" ? sun : moon;
  }

  setTheme(document.documentElement.getAttribute("data-theme") || "light");

  btn.addEventListener("click", () => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* Título herói linha a linha */
  const hero = document.querySelector(".hero");
  requestAnimationFrame(() => hero.classList.add("is-ready"));

  /* Reveal ao rolar */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* Barra de progresso + sombra da topbar */
  const fill = document.getElementById("progressFill");
  const bar = document.getElementById("topbar");

  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight;
    const y = scrollY;

    fill.style.width = (h > 0 ? Math.min(y / h, 1) * 100 : 0) + "%";
    bar.classList.toggle("scrolled", y > 20);
  }

  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

