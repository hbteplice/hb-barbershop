# HB Barbershop Teplice – web

Jednostránkový web barbershopu. Rezervace běží přes Reservio: tlačítko „Vybrat termín“ otevře rezervační stránku Reservia v okně nad webem.

## Jak upravit obsah (bez programování)

Texty, ceny, služby, otevírací doba, telefon a adresa jsou v jednom souboru `src/_data/site.json`. Nejpohodlnější je upravovat ho v editoru:

1. Otevřete **https://app.pagescms.org** a přihlaste se GitHub účtem.
2. Vyberte repozitář `hb-barbershop` a v něm **Obsah webu**.
3. Změňte, co potřebujete, a klikněte na **Save**.
4. Za 1–2 minuty je změna na webu (nasazení proběhne samo).

Když se něco pokazí, každá změna se dá na GitHubu vrátit (záložka *Commits*).

Fotky (`src/img/hero.jpg` = pozadí, `src/img/logo.png` = logo) se mění nahráním nového souboru se **stejným názvem**.

## Jak to funguje technicky

- Stránka je šablona `src/index.njk`, data jsou v `src/_data/site.json`. Z obojího [Eleventy](https://www.11ty.dev/) sestaví statické HTML do složky `_site/`.
- Po každé změně ve větvi `main` GitHub Actions (`.github/workflows/deploy.yml`) web sestaví a nasadí na GitHub Pages.
- `.pages.yml` popisuje formulář editoru Pages CMS.
- Pole `domain` v `site.json` určuje doménu (soubor `CNAME`, sitemap, odkazy pro Google).

Lokální spuštění (potřeba Node.js 20+):

```bash
npm install
npm start
```

Web pak běží na http://localhost:8080. Rezervační okno Reservia se lokálně nenačte, protože Reservio povoluje vložení jen na weby s HTTPS. Na ostrém webu funguje.

## Jednorázové nastavení (už hotovo / k dokončení)

**GitHub Pages:** Settings → Pages → Source: *GitHub Actions*. Custom domain: doména webu. Po ověření zapnout *Enforce HTTPS*.

**DNS u Forpsi** (Správa domény → DNS záznamy). Pro hlavní doménu (bez www):

| Typ | Název | Hodnota |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hbteplice.github.io. |

Původní A záznamy hlavní domény (od Forpsi hostingu) je potřeba smazat. MX záznamy pro e-mail nechte, jak jsou.

**Reservio odkaz:** v Reserviu Online rezervace → Nastavení → Získat rezervace. Zkopírovaný odkaz vložte do pole „Odkaz na Reservio“.
