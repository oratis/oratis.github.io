(() => {
  document.querySelector('#print-resume')?.addEventListener('click', () => window.print());
  document.querySelectorAll('.languages a').forEach(link => {
    link.addEventListener('click', () => { if (location.hash) link.hash = location.hash; });
  });
})();
