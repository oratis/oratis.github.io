(() => {
  document.querySelector('#print-resume')?.addEventListener('click', () => window.print());
  // Full content and navigation work without JavaScript. Stars are progressive enhancement.
  const locale = document.documentElement.lang;
  document.querySelectorAll('[data-repo]').forEach(async link => {
    const repo = link.dataset.repo;
    const cacheKey = `oratis-stars-${repo}`;
    try {
      let cached;
      try { cached = JSON.parse(sessionStorage.getItem(cacheKey)); } catch {}
      let count;
      if (cached && Date.now() - cached.time < 3600000 && Number.isInteger(cached.count)) count = cached.count;
      else {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);
        let response;
        try { response = await fetch(`https://api.github.com/repos/oratis/${repo}`, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } }); }
        finally { clearTimeout(timeout); }
        if (!response.ok) return;
        const result = await response.json();
        count = result.stargazers_count;
        if (!Number.isInteger(count)) return;
        try { sessionStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), count })); } catch {}
      }
      link.textContent = `☆ ${new Intl.NumberFormat(locale).format(count)}`;
      link.setAttribute('aria-label', `${repo}: ${count} GitHub stars`);
      link.hidden = false;
    } catch { /* Rate limits and offline mode leave the repository links fully usable. */ }
  });
  document.querySelectorAll('.languages a').forEach(link => {
    link.addEventListener('click', () => { if (location.hash) link.hash = location.hash; });
  });
})();
