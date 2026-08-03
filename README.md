# Unikat Nameštaj — sajt (statični HTML/CSS/JS)

## Struktura fajlova
```
index.html            → početna stranica
kategorija.html        → lista proizvoda (npr. kategorija.html?kat=ormari)
proizvod.html          → stranica pojedinačnog proizvoda + forma za porudžbinu
css/style.css          → kompletan dizajn sistem (boje, tipografija, sekcije)
js/data.js             → kategorije, proizvodi i prevodi (SR / EN / DE)
js/main.js             → sva interaktivnost (jezik, meni, FAQ, konfigurator, forme)
images/configurator/   → SVG ilustracije za "Zamislite sobu" i kategorije
```

## Kako da izmenite sadržaj

**Tekstovi i prevodi** — sve se nalazi u `js/data.js`, u objektu `I18N`
(tri jezika: `sr`, `en`, `de`). Menjate samo tekst desno od `:`.

**Proizvodi i kategorije** — takođe u `js/data.js`, nizovi `CATEGORIES` i
`PRODUCTS`. Svaki proizvod ima cenu, materijal, dimenzije i putanju do slike
(`icon`). Kada dobijete prave fotografije, samo zamenite putanju, npr.:
`icon: "images/products/ormar-atelje.jpg"` — dizajn kartica automatski
prihvata i .jpg/.png i .svg.

**Instagram fotografije** — sekcija "Sa našeg Instagram profila" na početnoj
strani je već spremna za prave slike:
1. Ubacite fotografije u folder `images/instagram/`.
2. Nazovite ih tačno `insta-1.jpg`, `insta-2.jpg`, ... `insta-6.jpg`
   (ili izmenite putanje u nizu `INSTAGRAM_IMAGES` na vrhu `js/data.js`
   ako želite drugačija imena ili više/manje od 6 slika).
3. To je sve — čim fajl postoji na toj putanji, on automatski preklapa
   stilizovanu pločicu boje drveta koja služi kao rezervoar dok slika
   ne stigne. Ako slika nedostaje, pločica ostaje vidljiva bez greške.

**Utisci klijenata (testimonials)** — nova sekcija na početnoj strani
(`#testimonials`, između "Realizacije" i "Pitanja"). Sadržaj se uređuje u
`js/data.js`, niz `TESTIMONIALS` — za svaki utisak menjate `name`, `role`
(prevodi za sr/en/de), `quote` (takođe prevodi) i `rating` (broj zvezdica
od 1 do 5). Dodavanje ili brisanje utisaka je isto tako jednostavno —
dodajte ili obrišite jedan objekat iz niza, kartice se automatski
prerasporede.

**Mapa** — u `index.html`, sekcija `#contact`, ubačen je OpenStreetMap embed.
Zamenite koordinate u `iframe src` pravom adresom radionice, ili zamenite
celokupan `<iframe>` sa Google Maps embed kodom.

**Kontakt forma i forma za porudžbinu** — trenutno rade na strani pretraživača
(front-end validacija + poruka o uspehu), pošto sajt nema server. Da bi upiti
zaista stizali na mejl, povežite `<form data-form="...">` sa servisom po
izboru (npr. Formspree, EmailJS, ili sopstveni backend) tako što ćete u
`initForms()` funkciji u `js/main.js` dodati pravi `fetch()` poziv ka tom
servisu.

**Brojevi telefona / email** — pretražite fajlove po `+381 60 123 4567` i
`info@unikatnamestaj.rs` i zamenite realnim podacima radionice (nalaze se u
top baru, kontakt sekciji, footeru i plutajućem dugmetu za kontakt).

## "Zamislite sobu" — kako radi
U `index.html`, sekcija `#configurator`, sve slike (`images/configurator/*.svg`)
su postavljene tačno preko iste prazne sobe i sakrivene (`opacity:0`). Klik na
dugme u `js/main.js` (`initConfigurator`) dodaje klasu `.active` odgovarajućem
sloju, čime se on prikazuje preko sobe. Kada budete imali prave fotografije
enterijera i proizvoda bez pozadine (PNG sa providnim pozadinom), samo
zamenite SVG fajlove PNG fotografijama istih dimenzija — logika ostaje ista.

## Pokretanje lokalno
Sajt je potpuno statičan — dovoljno je otvoriti `index.html` u pretraživaču,
ili ga postaviti na bilo koji hosting (Netlify, Vercel, obično deljeno
hostovanje).
