# oratis

Professional résumé in Chinese, English and Japanese.

- 中文: https://oratis.github.io/
- English: https://oratis.github.io/en/
- 日本語: https://oratis.github.io/ja/

## Update the site

Edit `content/profile.json` and `content/resume.json`, then run `node scripts/build.mjs`. Commit the content and generated pages. GitHub Pages publishes the root of `main`; `.nojekyll` keeps the deployment static. Preview with `python3 -m http.server 8765`.

Layout is in `scripts/build.mjs`; styles and browser interactions are in `assets/`. Each language is a complete static page with canonical and alternate language metadata. Content and language navigation remain usable without JavaScript.

## Content provenance

Career history and education were supplied by oratis. Kuaishou dates are August 2022 to November 2023. The co-founder role at 心影随形 begins in November 2023. Venture metrics and market-position claims are founder-reported as of November 2026. Historical career results come from the supplied résumé; they are not presented as current company statistics. Baidu's 2013–2018 overview includes the April 2015–January 2016 mobile brand advertising project described in the résumé.

Project descriptions were checked against the public project sites and current GitHub READMEs on 2026-11-16. The résumé uses typography and CSS, with no photographic or generated image assets. The site does not publish the original résumé or personal phone number, birth date or private contact details.

## GitHub Pages documentation

- https://docs.github.com/zh/pages
- https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub user sites use `username.github.io`. `oratis.github.com` is not the current supported user-site address.
