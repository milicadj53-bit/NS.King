# Tepih Servis NS King – sajt

Statički sajt (HTML, CSS, malo JavaScripta). Nema build koraka ni zavisnosti: fajlovi rade onakvi kakvi jesu.

## Struktura

```
index.html          Početna
usluge.html         Usluge (tepisi, nameštaj, dušeci, auto sedišta)
kako-radimo.html    Kako radimo (5 koraka, česta pitanja)
cenovnik.html       Cenovnik
za-firme.html       Za firme
kontakt.html        Kontakt (sa Google mapom)
404.html            Stranica za pogrešan link
css/style.css       Svi stilovi (desktop, tablet, mobilni)
js/main.js          Meni na telefonu, klizač pre/posle, Za dom / Za firme
images/             Slike sajta
favicon.svg, apple-touch-icon.png, robots.txt, sitemap.xml
```

## Postavljanje na GitHub Pages

1. Napravite novi repozitorijum na GitHubu i otpremite sadržaj ovog foldera (ne sam folder) u koren repozitorijuma.
2. Settings → Pages → Source: „Deploy from a branch“, grana `main`, folder `/ (root)`.
3. Posle minut-dva sajt je na `https://<korisnik>.github.io/<repozitorijum>/`.

### Sopstveni domen (tepihservisnovisad.co.rs)

1. U Settings → Pages → Custom domain upišite `tepihservisnovisad.co.rs` (GitHub sam napravi fajl `CNAME`).
2. Kod registra domena podesite DNS: A zapisi na `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, i CNAME za `www` na `<korisnik>.github.io`.
3. Uključite „Enforce HTTPS“.

Adrese u `sitemap.xml`, `robots.txt` i `canonical` tagovima već su podešene na `https://tepihservisnovisad.co.rs`. Ako sajt ide na drugi domen, promenite ih.

## Šta menjati

- **Slike:** svaka slika postoji kao WebP u nekoliko širina (`ime-480.webp`, `ime-800.webp`, `ime-1200.webp`) i kao rezervni `ime.jpg`. Browser sam bira najmanju koja mu treba. Kad menjate sliku, napravite sve te verzije, na primer na squoosh.app (WebP, kvalitet oko 72). Sadašnje slike su napravljene veštačkom inteligencijom.
- **Telefon, email, adresa, radno vreme:** ponavljaju se na više stranica (pretraga i zamena u svim `.html` fajlovima).
- **Cene:** `index.html`, `usluge.html` i `cenovnik.html`.
