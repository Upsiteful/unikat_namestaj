/* ============================================================
   UNIKAT NAMEŠTAJ — data.js
   Categories, products and the SR / EN / DE translation dictionary.
   Swap the "icon" paths for real photography whenever it's ready —
   every product and category card reads its image from here.
   ============================================================ */

const CATEGORIES = [
 
  {
    id: "kuhinje",
    icon: "kuhinja.png",
    name: { sr: "Kuhinje po meri", en: "Custom kitchens", de: "Küchen nach Maß" },
    desc: {
      sr: "Kuhinjski elementi projektovani za vaš prostor, sa radnom pločom i okovom po izboru.",
      en: "Kitchen units designed for your exact space, with the worktop and hardware you choose.",
      de: "Küchenmodule, geplant für Ihren Raum, mit Arbeitsplatte und Beschlägen nach Wahl."
    }
  },
  
  {
    id: "dnevne-sobe",
    icon: "dnevna-soba.png",
    name: { sr: "Dnevne sobe", en: "Living rooms", de: "Wohnzimmer" },
    desc: {
      sr: "Sofe, trosedi i TV komode koje prate liniju vašeg enterijera.",
      en: "Sofas, sectionals and TV units that follow the line of your interior.",
      de: "Sofas, Sitzgarnituren und TV-Möbel, abgestimmt auf Ihr Interieur."
    }
  },
   {
    id: "garderoberi",
    icon: "garderoberi.png",
    name: { sr: "Garderoberi", en: "Walk-in Closets", de: "Ankleidezimmer" },
    desc: {
      sr: "Garderoberi i ormani projektovani po vašoj meri, sa unutrašnjošću po izboru.",
      en: "Walk-in closets and wardrobes designed to your exact specifications, with the interior you choose.",
      de: "Ankleidezimmer und Kleiderschränke, geplant nach Ihren genauen Vorgaben, mit dem Innenleben Ihrer Wahl."
    }
  },
  {
    id: "predsoblja",
    icon: "komode.png",
    name: { sr: "Predsoblja", en: "Foyers", de: "Eingänge" },
    desc: {
      sr: "Kreveti, noćni stočići i garderoberi u istom jeziku materijala.",
      en: "Beds, nightstands and closets in one consistent material language.",
      de: "Betten, Nachttische und Kleiderschränke in einer einheitlichen Materialsprache."
    }
  }
];

/* Each product: id, cat, name/desc per language, price (EUR, "from"), material, dims, icon */



const CONFIGURATOR_DECORS = [
  { code: "F186-ST9", label: "F186 ST9", texture: "images/swatches/F186-ST9.png" },
  { code: "F187-ST9", label: "F187 ST9", texture: "images/swatches/F187-ST9.png" },
  { code: "F206-ST9", label: "F206 ST9", texture: "images/swatches/F206-ST9.png" },
  { code: "F800-ST9", label: "F800 ST9", texture: "images/swatches/F800-ST9.png" },

  { code: "H1176-ST37", label: "H1176 ST37", texture: "images/swatches/H1176-ST37.png" },
  { code: "H1180-ST37", label: "H1180 ST37", texture: "images/swatches/H1180-ST37.png" },
  { code: "H1181-ST37", label: "H1181 ST37", texture: "images/swatches/H1181-ST37.png" },
  { code: "H3303-ST10", label: "H3303 ST10", texture: "images/swatches/H3303-ST10.png" },
  { code: "H3702-ST10", label: "H3702 ST10", texture: "images/swatches/H3702-ST10.png" },
  { code: "H1242-ST10", label: "H1242 ST10", texture: "images/swatches/H1242-ST10.png" },
  { code: "H3710-ST12", label: "H3710 ST12", texture: "images/swatches/H3710-ST12.png" },
  { code: "H3730-ST10", label: "H3730 ST10", texture: "images/swatches/H3730-ST10.png" },
  { code: "H3734-ST9", label: "H3734 ST9", texture: "images/swatches/H3734-ST9.png" },

  { code: "U525-ST9", label: "U525 ST9", texture: "images/swatches/U525-ST9.png" },
  { code: "U748-ST9", label: "U748 ST9", texture: "images/swatches/U748-ST9.png" },
  { code: "U999-ST7", label: "U999 ST7", texture: "images/swatches/U999-ST7.png" },
  { code: "U961-ST7", label: "U961 ST7", texture: "images/swatches/U961-ST7.png" },
  { code: "U638-ST9", label: "U638 ST9", texture: "images/swatches/U638-ST9.png" },
  { code: "U636-ST9", label: "U636 ST9", texture: "images/swatches/U636-ST9.png" },
  { code: "U113-ST9", label: "U113 ST9", texture: "images/swatches/U113-ST9.png" },
  { code: "U321-ST9", label: "U321 ST9", texture: "images/swatches/U321-ST9.png" },
  { code: "U600-ST9", label: "U600 ST9", texture: "images/swatches/U600-ST9.png" },
  { code: "U702-ST9", label: "U702 ST9", texture: "images/swatches/U702-ST9.png" },
  { code: "U960-ST9", label: "U960 ST9", texture: "images/swatches/U960-ST9.png" },
  { code: "U727-ST9", label: "U727 ST9", texture: "images/swatches/U727-ST9.png" }
].map(decor => ({
  ...decor,

  name: {
    sr: decor.label,
    en: decor.label,
    de: decor.label
  }
}));



const PRODUCTS = [
  // ORMARI
  /*{ id: "ormar-atelje", cat: "ormari", icon: "images/configurator/ormar.svg", price: 890,
    name: { sr: "Ormar Atelje", en: "Atelje Wardrobe", de: "Kleiderschrank Atelje" },
    material: { sr: "Hrast, mesing okov", en: "Oak, brass hardware", de: "Eiche, Messingbeschläge" },
    dims: "240 × 60 × 250 cm",
    desc: { sr: "Klizni ormar sa unutrašnjošću podeljenom po vašem spisku garderobe.",
      en: "Sliding wardrobe with an interior laid out around your actual wardrobe list.",
      de: "Schiebeschrank mit einem Innenleben, das auf Ihre Garderobe abgestimmt ist." } },
  { id: "ormar-linea", cat: "ormari", icon: "images/configurator/ormar.svg", price: 760,
    name: { sr: "Ormar Linea", en: "Linea Wardrobe", de: "Kleiderschrank Linea" },
    material: { sr: "Furnir oraha", en: "Walnut veneer", de: "Nussbaum-Furnier" },
    dims: "200 × 58 × 240 cm",
    desc: { sr: "Krilna vrata bez ručki, diskretan profil za manje spavaće sobe.",
      en: "Push-to-open hinged doors, a discreet profile for smaller bedrooms.",
      de: "Push-to-open Flügeltüren, dezentes Profil für kleinere Schlafzimmer." } },
  { id: "ormar-nocturn", cat: "ormari", icon: "images/configurator/ormar.svg", price: 1150,
    name: { sr: "Ormar Nocturn", en: "Nocturn Wardrobe", de: "Kleiderschrank Nocturn" },
    material: { sr: "Mat lakirano drvo, unutra jasen", en: "Matte lacquered wood, ash interior", de: "Matt lackiertes Holz, Innenraum Esche" },
    dims: "300 × 62 × 260 cm",
    desc: { sr: "Ugaoni ormar od poda do plafona sa LED osvetljenjem unutra.",
      en: "Floor-to-ceiling corner wardrobe with interior LED lighting.",
      de: "Eck-Kleiderschrank vom Boden bis zur Decke mit Innenbeleuchtung." } },
  { id: "garderober-studio", cat: "ormari", icon: "images/configurator/ormar.svg", price: 1980,
    name: { sr: "Garderober Studio", en: "Studio Walk-in Closet", de: "Ankleide Studio" },
    material: { sr: "Hrast i mesing", en: "Oak and brass", de: "Eiche und Messing" },
    dims: "po prostoriji / per room",
    desc: { sr: "Kompletna garderobna soba projektovana za vaš prostor i naviku oblačenja.",
      en: "A complete walk-in closet designed around your room and daily routine.",
      de: "Ein komplettes Ankleidezimmer, geplant für Ihren Raum und Alltag." } },
*/
  // KUHINJE
{
  id: "kuhinja-masiv",
  cat: "kuhinje",
  icon: "kuhinjamodel1.webp",
  price: 3200,

  name: {
    sr: "Kuhinja Masiv",
    en: "Masiv Kitchen",
    de: "Küche Masiv"
  },

  material: {
    sr: "Pločasti materijal i radna ploča po izboru",
    en: "Board material and worktop of your choice",
    de: "Plattenmaterial und Arbeitsplatte nach Wahl"
  },

  dims: "po prostoriji / per room",

  desc: {
    sr: "Kuhinja izrađena po meri sa dva nezavisna izbora dekora.",
    en: "A custom kitchen with two independent decor selections.",
    de: "Maßküche mit zwei unabhängig wählbaren Dekoren."
  },

  configurator: {
    imageFolder: "kitchen/",
    imageExtension: "png",

    zones: {

      body: {
        label: {
          sr: "Prvi dekor",
          en: "First decor",
          de: "Erstes Dekor"
        },

        default: "F186-ST9",

        options: CONFIGURATOR_DECORS
      },

      accent: {
        label: {
          sr: "Drugi dekor",
          en: "Second decor",
          de: "Zweites Dekor"
        },

        default: "H1176-ST37",

        options: CONFIGURATOR_DECORS
      }

    }
  }
},,
  /*{ id: "kuhinja-otvorena", cat: "kuhinje", icon: "ig2.png", price: 4600,
    name: { sr: "Kuhinja Ostrvo", en: "Island Kitchen", de: "Küche mit Insel" },
    material: { sr: "Lakirano MDF, mesingani detalji", en: "Lacquered MDF, brass details", de: "Lackiertes MDF, Messingdetails" },
    dims: "po prostoriji / per room",
    desc: { sr: "Kuhinja sa centralnim ostrvom za druženje i pripremu hrane.",
      en: "A kitchen with a central island built for cooking and gathering.",
      de: "Küche mit zentraler Insel zum Kochen und Zusammensein." } },
  { id: "kuhinja-mala", cat: "kuhinje", icon: "ig3.png", price: 2100,
    name: { sr: "Kuhinja Kompakt", en: "Compact Kitchen", de: "Küche Kompakt" },
    material: { sr: "Furnir jasena", en: "Ash veneer", de: "Eschenfurnier" },
    dims: "do 8 m² / up to 8 m²",
    desc: { sr: "Rešenje za manje kuhinje bez kompromisa u materijalu i okovu.",
      en: "A solution for smaller kitchens with no compromise on material or hardware.",
      de: "Lösung für kleinere Küchen ohne Kompromisse bei Material und Beschlägen." } },*/

 

  // DNEVNE SOBE
  /*{ id: "sofa-como", cat: "dnevne-sobe", icon: "images/configurator/sofa.svg", price: 1450,
    name: { sr: "Sofa Como", en: "Como Sofa", de: "Sofa Como" },
    material: { sr: "Šenil tkanina, drvene noge", en: "Chenille fabric, wooden legs", de: "Chenille-Stoff, Holzfüße" },
    dims: "240 × 95 × 80 cm",
    desc: { sr: "Trosed dubokog sedenja, presvlaka po katalogu tkanina.",
      en: "A deep-seat three-seater, upholstery chosen from our fabric catalogue.",
      de: "Dreisitzer mit tiefer Sitzfläche, Bezug aus unserem Stoffkatalog." } },
  { id: "sofa-ugaona", cat: "dnevne-sobe", icon: "images/configurator/sofa.svg", price: 2100,
    name: { sr: "Ugaona sofa Modul", en: "Modul Corner Sofa", de: "Ecksofa Modul" },
    material: { sr: "Baršun, mesingane noge", en: "Velvet, brass legs", de: "Samt, Messingfüße" },
    dims: "300 × 210 cm",
    desc: { sr: "Modularna sofa koju možete prilagoditi obliku prostorije.",
      en: "A modular sofa you can rearrange to fit the shape of the room.",
      de: "Modulares Sofa, anpassbar an die Raumform." } },*/
  { id: "tv-komoda-fer", cat: "dnevne-sobe", icon: "tvkomodamodel1.png", price: 640,
    name: { sr: "TV komoda Fer", en: "Fer TV Unit", de: "TV-Möbel Fer" },
    material: { sr: "Furnir oraha, crni čelik", en: "Walnut veneer, black steel", de: "Nussbaumfurnier, schwarzer Stahl" },
    dims: "200 × 40 × 45 cm",
    desc: { sr: "Niska TV komoda sa kablovskim menadžmentom i mekim zatvaranjem.",
      en: "A low TV unit with cable management and soft-close doors.",
      de: "Niedriges TV-Möbel mit Kabelmanagement und Softclose-Türen." },  colors: [
{
    code: "KR-01",
    hex: "#ece2cd",
    name: {
        sr: "Krem bela",
        en: "Cream white",
        de: "Cremeweiß"
    },
    image: "tvkomodamodel1.png"
},

{
    code: "NV-02",
    hex: "#1b2a4a",
    name: {
        sr: "Mornarsko plava",
        en: "Navy blue",
        de: "Marineblau"
    },
    image: "tvkomodamodel2.png"
},

{
    code: "ZM-03",
    hex: "#4b5320",
    name: {
        sr: "Maslinasta",
        en: "Olive",
        de: "Oliv"
    },
    image: "tvkomodamodel3.png"
},

{
    code: "OR-04",
    hex: "#5b3a24",
    name: {
        sr: "Orah",
        en: "Walnut",
        de: "Walnuss"
    },
    image: "tvkomodamodel4.png"
}
]},
{ id: "garderober", cat: "garderoberi", icon: "garderobermodel1.png", price: 640,
    name: { sr: "Garderober", en: "Walk-in Closet", de: "Ankleidezimmer" },
    material: { sr: "Furnir oraha, crni čelik", en: "Walnut veneer, black steel", de: "Nussbaumfurnier, schwarzer Stahl" },
    dims: "200 × 40 × 45 cm",
    desc: { sr: "Niska TV komoda sa kablovskim menadžmentom i mekim zatvaranjem.",
      en: "A low TV unit with cable management and soft-close doors.",
      de: "Niedriges TV-Möbel mit Kabelmanagement und Softclose-Türen." },  colors: [
{
    code: "KR-01",
    hex: "#ece2cd",
    name: {
        sr: "Krem bela",
        en: "Cream white",
        de: "Cremeweiß"
    },
    image: "garderobermodel1model1.png"
},

{
    code: "NV-02",
    hex: "#1b2a4a",
    name: {
        sr: "Mornarsko plava",
        en: "Navy blue",
        de: "Marineblau"
    },
    image: "garderobermodel2.png"
},

{
    code: "ZM-03",
    hex: "#4b5320",
    name: {
        sr: "Maslinasta",
        en: "Olive",
        de: "Oliv"
    },
    image: "garderobermodel3.png"
},

{
    code: "OR-04",
    hex: "#5b3a24",
    name: {
        sr: "Orah",
        en: "Walnut",
        de: "Walnuss"
    },
    image: "garderobermodel4.png"
}
]},
  // PREDOSOBLJA
  { id: "Cipelarnik", cat: "predsoblja", icon: "cipelarnikmodel1.png", price: 980,
    name: { sr: "Cipelarnik", en: "Shoe Rack", de: "Schuhschrank" },
    material: { sr: "Tapacirano uzglavlje, hrastov ram", en: "Upholstered headboard, oak frame", de: "Gepolstertes Kopfteil, Eichenrahmen" },
    dims: "180 × 200 cm",
    desc: { sr: "Tapacirano uzglavlje na vidljivom drvenom postolju, dostupno u tri veličine.",
      en: "A soft headboard on a visible wooden base, available in three sizes.",
      de: "Weiches Kopfteil auf sichtbarem Holzsockel, in drei Größen erhältlich." },
    colors: [
{
    code: "KR-01",
    hex: "#ece2cd",
    name: {
        sr: "Krem bela",
        en: "Cream white",
        de: "Cremeweiß"
    },
    image: "cipelarnikmodel1.png"
},

{
    code: "NV-02",
    hex: "#1b2a4a",
    name: {
        sr: "Mornarsko plava",
        en: "Navy blue",
        de: "Marineblau"
    },
    image: "cipelarnikmodel2.png"
},

{
    code: "ZM-03",
    hex: "#4b5320",
    name: {
        sr: "Maslinasta",
        en: "Olive",
        de: "Oliv"
    },
    image: "cipelarnikmodel3.png"
},

{
    code: "OR-04",
    hex: "#5b3a24",
    name: {
        sr: "Orah",
        en: "Walnut",
        de: "Walnuss"
    },
    image: "cipelarnikmodel4.png"
}
]
    },
  /*{ id: "krevet-massiv", cat: "spavace-sobe", icon: "images/configurator/krevet.svg", price: 1240,
    name: { sr: "Krevet Massiv", en: "Massiv Bed", de: "Bett Massiv" },
    material: { sr: "Masiv hrasta", en: "Solid oak", de: "Massivholz Eiche" },
    dims: "160 × 200 cm",
    desc: { sr: "Čist geometrijski ram od masivnog drveta, bez tapaciranja.",
      en: "A clean geometric frame in solid wood, without upholstery.",
      de: "Klarer geometrischer Rahmen aus Massivholz, ohne Polsterung." } },
  { id: "nocni-stocic-uno", cat: "spavace-sobe", icon: "images/configurator/komoda.svg", price: 220,
    name: { sr: "Noćni stočić Uno", en: "Uno Nightstand", de: "Nachttisch Uno" },
    material: { sr: "Furnir oraha, mesing ručka", en: "Walnut veneer, brass handle", de: "Nussbaumfurnier, Messinggriff" },
    dims: "45 × 40 × 50 cm",
    desc: { sr: "Kompaktan noćni stočić sa jednom fiokom i otvorenom policom.",
      en: "A compact nightstand with one drawer and an open shelf.",
      de: "Kompakter Nachttisch mit einer Schublade und offenem Fach." } },*/

  // KOMODE
  /*{ id: "komoda-riva", cat: "komode", icon: "images/configurator/komoda.svg", price: 890,
    name: { sr: "Komoda Riva", en: "Riva Sideboard", de: "Kommode Riva" },
    material: { sr: "Furnir oraha, mesing", en: "Walnut veneer, brass", de: "Nussbaumfurnier, Messing" },
    dims: "160 × 45 × 75 cm",
    desc: { sr: "Tri fioke i dva odeljka sa policama, tanke konusne noge.",
      en: "Three drawers and two shelved compartments, slim tapered legs.",
      de: "Drei Schubladen, zwei Fächer mit Böden, schlanke konische Beine." } },
  { id: "konzola-fil", cat: "komode", icon: "images/configurator/komoda.svg", price: 480,
    name: { sr: "Konzola Fil", en: "Fil Console", de: "Konsole Fil" },
    material: { sr: "Hrast, crni čelik", en: "Oak, black steel", de: "Eiche, schwarzer Stahl" },
    dims: "120 × 32 × 78 cm",
    desc: { sr: "Uska konzola za hodnik, jedna fioka, metalna osnova.",
      en: "A slim hallway console with one drawer and a metal base.",
      de: "Schlanke Flurkonsole mit einer Schublade und Metallsockel." } },
  { id: "kredenac-forma", cat: "komode", icon: "images/configurator/komoda.svg", price: 1340,
    name: { sr: "Kredenac Forma", en: "Forma Credenza", de: "Sideboard Forma" },
    material: { sr: "Furnir oraha, kamena ploča", en: "Walnut veneer, stone top", de: "Nussbaumfurnier, Steinplatte" },
    dims: "210 × 45 × 80 cm",
    desc: { sr: "Veliki kredenac za trpezariju sa kamenom pločom odozgo.",
      en: "A large dining-room credenza finished with a stone top.",
      de: "Großes Sideboard fürs Esszimmer mit Steinplatte." } }*/
];

/* ============================================================
   Instagram gallery — add real photos here.
   1. Drop your photos into images/instagram/ using these exact
      file names (or change the paths below to match your files).
   2. As soon as a file exists at that path, it replaces the
      placeholder wood-tone tile automatically — nothing else to edit.
   ============================================================ */
/* ============================================================
   Instagram gallery — 20 mesta za fotografije.
   Slike stoje direktno pored index.html, bez podfoldera:
   ig1.png, ig2.png ... ig20.png
   ============================================================ */
const INSTAGRAM_IMAGES = Array.from({ length: 20 }, (_, i) => `ig${i + 1}.png`);

/* ============================================================
   Testimonials — replace with real client quotes whenever ready.
   ============================================================ */
const TESTIMONIALS = [
  {
    initials: "MJ",
    name: "Milica J.",
    role: { sr: "Ormar i garderober, Beograd", en: "Wardrobe & closet, Belgrade", de: "Kleiderschrank & Ankleide, Belgrad" },
    quote: {
      sr: "Od prve izmere do montaže sve je išlo tačno onako kako su najavili. Ormar je uklopljen u milimetar, a unutrašnjost je baš onako kako smo je zamislili.",
      en: "From the first measurement to installation, everything went exactly as promised. The wardrobe fits to the millimetre, and the interior is exactly how we imagined it.",
      de: "Vom ersten Aufmaß bis zur Montage lief alles genau wie angekündigt. Der Schrank passt auf den Millimeter, und das Innenleben ist genau so, wie wir es uns vorgestellt haben."
    },
    rating: 5
  },
  {
    initials: "NP",
    name: "Nemanja P.",
    role: { sr: "Kuhinja po meri, Novi Sad", en: "Custom kitchen, Novi Sad", de: "Küche nach Maß, Novi Sad" },
    quote: {
      sr: "Kuhinja izgleda bolje uživo nego na 3D prikazu. Cenim što su nam pre svega postavljali pitanja o tome kako kuvamo, a tek onda predložili rešenje.",
      en: "The kitchen looks even better in person than in the 3D render. I appreciated that they first asked how we actually cook, and only then proposed a layout.",
      de: "Die Küche sieht in echt noch besser aus als in der 3D-Ansicht. Ich habe geschätzt, dass zuerst gefragt wurde, wie wir kochen, und erst dann eine Lösung vorgeschlagen wurde."
    },
    rating: 5
  },
  {
    initials: "AT",
    name: "Ana T.",
    role: { sr: "Dnevna soba, Zemun", en: "Living room, Zemun", de: "Wohnzimmer, Zemun" },
    quote: {
      sr: "Naručili smo sofu i TV komodu u istom materijalu — sad izgledaju kao da su oduvek pripadale toj sobi. Isporuka i montaža su bile brze i uredne.",
      en: "We ordered a sofa and TV unit in the same material — they now look like they always belonged in that room. Delivery and installation were fast and tidy.",
      de: "Wir haben Sofa und TV-Möbel im selben Material bestellt — sie wirken jetzt, als hätten sie immer in diesen Raum gehört. Lieferung und Montage waren schnell und sauber."
    },
    rating: 5
  },
  {
    initials: "VR",
    name: "Vladimir R.",
    role: { sr: "Spavaća soba, Beograd", en: "Bedroom, Belgrade", de: "Schlafzimmer, Belgrad" },
    quote: {
      sr: "Cenu su ispoštovali od prve ponude do fakture, bez iznenađenja. Krevet i noćni stočići su masivni i osećaju se kvalitetno.",
      en: "The price stayed exactly as first quoted, no surprises on the invoice. The bed and nightstands are solid and feel genuinely well made.",
      de: "Der Preis blieb vom ersten Angebot bis zur Rechnung gleich, keine Überraschungen. Bett und Nachttische sind massiv und fühlen sich hochwertig an."
    },
    rating: 5
  }
];

/* ============================================================
   Boje — radna verzija sa 4 boje dok ne stignu prave šifre/uzorci.
   Svaka boja stvarno menja SLIKU proizvoda (nije samo filter preko iste
   slike): za svaki od 6 osnovnih oblika nameštaja (ormar, komoda,
   trpezarija, sofa, krevet, kuhinja) postoje 4 gotove SVG varijante u
   images/configurator/colors/, npr. images/configurator/colors/ormar-NV-02.svg.
   main.js (funkcija colorImagePath) automatski pogodi putanju na osnovu
   naziva osnovne ilustracije proizvoda + šifre boje.

   Kad stignu prave fotografije:
   - najlakše: fotografišite svaki proizvod u svakoj boji i sačuvajte ih
     kao images/products/<id>-<šifra>.jpg, pa u PRODUCTS dodajte polje
     `colors: [{ code:"NV-02", hex:"#1b2a4a", name:{...}, image:"images/products/ormar-atelje-NV-02.jpg" }, ...]`
     — polje `image` ima prednost nad automatski generisanom putanjom.
   - ako sve boje dele isti šablon fotografisanja, dovoljno je zameniti
     fajlove u images/configurator/colors/ istim imenima kao sada.
   ============================================================ */
const COLORS = [
  { code: "KR-01", hex: "#ece2cd", name: { sr: "Krem bela", en: "Cream white", de: "Cremeweiß" } },
  { code: "NV-02", hex: "#1b2a4a", name: { sr: "Mornarsko plava", en: "Navy blue", de: "Marineblau" } },
  { code: "ZM-03", hex: "#4b5320", name: { sr: "Tamno maslinasto zelena", en: "Dark olive green", de: "Dunkles Olivgrün" } },
  { code: "OR-04", hex: "#5b3a24", name: { sr: "Orah braon", en: "Walnut brown", de: "Nussbaumbraun" } }
];

/* ---------- Translation dictionary ---------- */
const I18N = {
  sr: {
    top_phone: "+381 60 123 4567",
    top_email: "info@unikatnamestaj.rs",
    top_address: "Beograd, Srbija",
    top_hours: "Pon–Pet 09–17h",
    top_tagline: "Nameštaj po meri, izrađen za vaš prostor",

    nav_home: "Početna",
    nav_about: "O nama",
    nav_categories: "Kategorije",
    nav_configurator: "Zamislite sobu",
    nav_gallery: "Realizacije",
    nav_faq: "Pitanja",
    nav_contact: "Kontakt",
    nav_cta: "Zatražite ponudu",

    hero_eyebrow: "Radionica nameštaja po meri",
    hero_title: "Nameštaj koji je mera vašeg prostora, ne kompromisa",
    hero_text: "Svaki komad projektujemo, secemo i sklapamo ručno u našoj radionici — od jednog ormara do kompletnog enterijera.",
    hero_cta_primary: "Istražite kategorije",
    hero_cta_secondary: "Zakažite besplatnu izmeru",
    hero_stat1_num: "12",
    hero_stat1_label: "godina rada",
    hero_stat2_num: "640+",
    hero_stat2_label: "izrađenih komada",
    hero_stat3_num: "100%",
    hero_stat3_label: "po meri, bez serija",

    about_eyebrow: "O nama",
    about_title: "Iz porodične stolarske radionice do studija za enterijer",
    about_text1: "Unikat Nameštaj je porodična radionica koja od 2013. godine izrađuje nameštaj po meri za domove i poslovne prostore širom Srbije. Ne prodajemo gotova rešenja iz kataloga — svaki projekat počinje merenjem vašeg prostora i razgovorom o tome kako ga koristite.",
    about_text2: "Radimo sa masivnim drvetom, furnirima i mesinganim okovom, a proces pratimo od skice, preko 3D prikaza, do montaže na licu mesta.",
    about_point1_title: "Besplatna izmera",
    about_point1_text: "Naš stolar dolazi kod vas, meri prostor i predlaže rešenje.",
    about_point2_title: "3D projekat pre izrade",
    about_point2_text: "Vidite tačan izgled komada pre nego što krene proizvodnja.",
    about_point3_title: "Sopstvena radionica",
    about_point3_text: "Sve secemo i sklapamo interno — bez posrednika i podizvođača.",
    about_point4_title: "Garancija 5 godina",
    about_point4_text: "Stojimo iza konstrukcije, okova i lakiranja svakog komada.",

    cat_eyebrow: "Ponuda",
    cat_title: "Kategorije nameštaja",
    cat_text: "Šest osnovnih programa koje najčešće radimo — svaki komad se prilagođava dimenzijama i materijalu koji izaberete.",
    cat_cta: "Pogledaj proizvode",

    conf_eyebrow: "Isprobajte",
    conf_title: "Zamislite sobu pre nego što naručite",
    conf_text: "Prostorija je prazna. Birajte komade iz naše ponude sa desne strane i gledajte kako popunjavaju prostor — ovo je samo ilustracija stila, konačan izgled dogovaramo na izmeri.",
    conf_empty_label: "Prazna soba",
    conf_hint: "Kliknite na komad da ga postavite u sobu",
    conf_clear: "Isprazni sobu",
    conf_cta: "Sviđa mi se — zatražite ponudu za ovu kombinaciju",

    gallery_eyebrow: "Realizacije",
    gallery_title: "Sa našeg Instagram profila",
    gallery_text: "Pratite nas za svakodnevne fotografije radionice i gotovih projekata.",
    gallery_cta: "Otvorite @unikatnamestaj",
    gallery_note: "Mesto za fotografije koje ćete povezati sa vašim Instagram nalogom.",
    gallery_view_all: "Pogledajte kompletnu galeriju",
    galerija_eyebrow: "Realizacije",
    galerija_title: "Kompletna Instagram galerija",
    galerija_text: "Sve fotografije sa našeg Instagram profila na jednom mestu.",
    galerija_back: "Nazad na početnu",

    testi_eyebrow: "Utisci klijenata",
    testi_title: "Šta kažu ljudi za koje smo radili",
    testi_text: "Nekoliko utisaka sa nedavnih projekata — od izmere do montaže.",

    faq_eyebrow: "Pitanja",
    faq_title: "Često postavljana pitanja",
    faq_q1: "Koliko traje izrada nameštaja po meri?",
    faq_a1: "U proseku od 3 do 6 nedelja od potvrde projekta, u zavisnosti od obima porudžbine i izabranih materijala.",
    faq_q2: "Da li dolazite na besplatnu izmeru?",
    faq_a2: "Da, izmera i prva konsultacija su besplatne za teritoriju Beograda i okoline. Za ostale gradove, javite se za dogovor.",
    faq_q3: "Koje materijale koristite?",
    faq_a3: "Masivno drvo (hrast, jasen, orah), furnire, MDF u boji, kao i mesingani i čelični okov, u zavisnosti od projekta.",
    faq_q4: "Da li mogu da promenim dimenzije prikazanih proizvoda?",
    faq_a4: "Da — svi komadi u ponudi su polazna tačka. Konačne dimenzije uvek prilagođavamo vašem prostoru.",
    faq_q5: "Kako izgleda proces plaćanja?",
    faq_a5: "Uobičajeno je avans od 50% pri potvrdi projekta, a ostatak pri isporuci i montaži.",
    faq_q6: "Da li nudite montažu?",
    faq_a6: "Da, montaža je uključena u cenu za sve porudžbine u Srbiji.",

    contact_eyebrow: "Kontakt",
    contact_title: "Popunimo prostor koji imate na umu",
    contact_text: "Pišite nam ili nas posetite u radionici — odgovaramo u toku radnog dana.",
    contact_form_title: "Pošaljite upit",
    form_name: "Ime i prezime",
    form_email: "Email adresa",
    form_phone: "Broj telefona",
    form_message: "Opišite šta vam je potrebno",
    form_submit: "Pošaljite upit",
    form_success: "Hvala! Vaš upit je poslat, javićemo vam se u toku radnog dana.",
    form_required: "Popunite obavezna polja pre slanja.",

    contact_info_title: "Podaci o radionici",
    contact_address_label: "Adresa",
    contact_address_value: "Kneza Miloša 45, 11000 Beograd",
    contact_phone_label: "Telefon",
    contact_email_label: "Email",
    contact_hours_label: "Radno vreme",
    contact_hours_value: "Ponedeljak – petak: 09:00 – 17:00",
    contact_social_label: "Društvene mreže",

    footer_tagline: "Nameštaj po meri, izrađen ručno u Beogradu.",
    footer_categories: "Kategorije",
    footer_company: "Kompanija",
    footer_company_about: "O nama",
    footer_company_gallery: "Realizacije",
    footer_company_faq: "Pitanja",
    footer_company_contact: "Kontakt",
    footer_legal: "Pravne informacije",
    footer_privacy: "Politika privatnosti",
    footer_terms: "Uslovi korišćenja",
    footer_rights: "Sva prava zadržana.",
    footer_made: "Izrada sajta",

    widget_label: "Popričajmo",
    widget_call: "Pozovite nas",
    widget_whatsapp: "WhatsApp poruka",
    widget_email: "Pošaljite email",

    cat_page_breadcrumb_home: "Početna",
    cat_page_all: "Svi proizvodi",
    cat_page_from: "od",
    cat_page_view: "Detalji i porudžbina",
    cat_page_back: "Sve kategorije",

    product_breadcrumb: "Nazad na kategoriju",
    product_material_label: "Materijal",
    product_dims_label: "Okvirne dimenzije",
    product_price_label: "Cena od",
    product_price_note: "Konačna cena zavisi od dimenzija i izbora materijala.",
    product_order_title: "Poručite ovaj komad",
    product_order_text: "Pošaljite osnovne podatke — javljamo se sa predlogom termina za izmeru.",
    form_dims_wanted: "Željene dimenzije (ako ih znate)",
    form_address: "Adresa isporuke / montaže",
    product_order_submit: "Pošaljite porudžbinu",
    product_order_success: "Hvala na porudžbini! Naš tim vas kontaktira u roku od 24h.",
    product_color_label: "Boja",
    product_color_selected: "Izabrana boja",
    color_search_placeholder: "Pretražite šifru ili naziv boje (npr. NV-02)",
    color_no_results: "Nema boje pod tom šifrom ili nazivom.",

    related_title: "Slično iz iste kategorije"
  },

  en: {
    top_phone: "+381 60 123 4567",
    top_email: "info@unikatnamestaj.rs",
    top_address: "Belgrade, Serbia",
    top_hours: "Mon–Fri 9am–5pm",
    top_tagline: "Custom furniture, built for your space",

    nav_home: "Home",
    nav_about: "About",
    nav_categories: "Categories",
    nav_configurator: "Visualize a room",
    nav_gallery: "Our work",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Request a quote",

    hero_eyebrow: "A custom furniture workshop",
    hero_title: "Furniture built to the measure of your space, not a compromise",
    hero_text: "We design, cut and assemble every piece by hand in our own workshop — from a single wardrobe to a full interior.",
    hero_cta_primary: "Browse categories",
    hero_cta_secondary: "Book a free measurement",
    hero_stat1_num: "12",
    hero_stat1_label: "years in business",
    hero_stat2_num: "640+",
    hero_stat2_label: "pieces built",
    hero_stat3_num: "100%",
    hero_stat3_label: "made to order",

    about_eyebrow: "About us",
    about_title: "From a family joinery to an interior studio",
    about_text1: "Unikat Nameštaj is a family-run workshop that has been building custom furniture for homes and businesses across Serbia since 2013. We don't sell ready-made catalogue pieces — every project starts by measuring your space and talking through how you actually use it.",
    about_text2: "We work with solid wood, veneers and brass hardware, and stay involved from the first sketch through 3D visualisation to on-site installation.",
    about_point1_title: "Free measurement visit",
    about_point1_text: "Our carpenter comes to you, measures the space and proposes a layout.",
    about_point2_title: "3D design before production",
    about_point2_text: "See the exact piece before manufacturing begins.",
    about_point3_title: "Our own workshop",
    about_point3_text: "Everything is cut and assembled in-house — no middlemen, no subcontractors.",
    about_point4_title: "5-year guarantee",
    about_point4_text: "We stand behind the construction, hardware and finish of every piece.",

    cat_eyebrow: "What we build",
    cat_title: "Furniture categories",
    cat_text: "Six core programmes we build most often — every piece is adapted to the dimensions and material you choose.",
    cat_cta: "View products",

    conf_eyebrow: "Try it yourself",
    conf_title: "Visualize the room before you order",
    conf_text: "The room starts empty. Pick pieces from our range on the right and watch the space fill in — this is a style guide only; final looks are confirmed at the measurement visit.",
    conf_empty_label: "Empty room",
    conf_hint: "Click a piece to place it in the room",
    conf_clear: "Clear the room",
    conf_cta: "I like this — request a quote for this combination",

    gallery_eyebrow: "Our work",
    gallery_title: "From our Instagram",
    gallery_text: "Follow us for daily photos from the workshop and finished projects.",
    gallery_cta: "Open @unikatnamestaj",
    gallery_note: "A place for the photos you connect from your Instagram account.",
    gallery_view_all: "View the full gallery",
    galerija_eyebrow: "Our work",
    galerija_title: "Full Instagram gallery",
    galerija_text: "All photos from our Instagram profile in one place.",
    galerija_back: "Back to home",

    testi_eyebrow: "Client feedback",
    testi_title: "What people we've worked with say",
    testi_text: "A few notes from recent projects — from measurement to installation.",

    faq_eyebrow: "Questions",
    faq_title: "Frequently asked questions",
    faq_q1: "How long does custom furniture take to build?",
    faq_a1: "On average 3 to 6 weeks after the project is confirmed, depending on the scope of the order and the materials chosen.",
    faq_q2: "Do you come for a free measurement?",
    faq_a2: "Yes, the measurement visit and first consultation are free within Belgrade and the surrounding area. For other cities, get in touch to arrange it.",
    faq_q3: "What materials do you work with?",
    faq_a3: "Solid wood (oak, ash, walnut), veneers, coloured MDF, as well as brass and steel hardware, depending on the project.",
    faq_q4: "Can I change the dimensions of the products shown?",
    faq_a4: "Yes — every piece on the site is a starting point. Final dimensions are always adapted to your space.",
    faq_q5: "How does payment work?",
    faq_a5: "Typically a 50% deposit when the project is confirmed, with the balance due on delivery and installation.",
    faq_q6: "Do you offer installation?",
    faq_a6: "Yes, installation is included in the price for all orders within Serbia.",

    contact_eyebrow: "Contact",
    contact_title: "Let's fill the space you have in mind",
    contact_text: "Write to us or visit the workshop — we reply within the working day.",
    contact_form_title: "Send an inquiry",
    form_name: "Full name",
    form_email: "Email address",
    form_phone: "Phone number",
    form_message: "Tell us what you need",
    form_submit: "Send inquiry",
    form_success: "Thank you! Your inquiry has been sent — we'll reply within the working day.",
    form_required: "Please fill in the required fields before sending.",

    contact_info_title: "Workshop details",
    contact_address_label: "Address",
    contact_address_value: "Kneza Miloša 45, 11000 Belgrade",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_hours_label: "Working hours",
    contact_hours_value: "Monday – Friday: 9:00 AM – 5:00 PM",
    contact_social_label: "Social media",

    footer_tagline: "Custom furniture, handmade in Belgrade.",
    footer_categories: "Categories",
    footer_company: "Company",
    footer_company_about: "About us",
    footer_company_gallery: "Our work",
    footer_company_faq: "FAQ",
    footer_company_contact: "Contact",
    footer_legal: "Legal",
    footer_privacy: "Privacy policy",
    footer_terms: "Terms of use",
    footer_rights: "All rights reserved.",
    footer_made: "Site by",

    widget_label: "Let's talk",
    widget_call: "Call us",
    widget_whatsapp: "WhatsApp message",
    widget_email: "Send an email",

    cat_page_breadcrumb_home: "Home",
    cat_page_all: "All products",
    cat_page_from: "from",
    cat_page_view: "Details & order",
    cat_page_back: "All categories",

    product_breadcrumb: "Back to category",
    product_material_label: "Material",
    product_dims_label: "Approx. dimensions",
    product_price_label: "Price from",
    product_price_note: "Final price depends on dimensions and material chosen.",
    product_order_title: "Order this piece",
    product_order_text: "Send us the basics — we'll follow up to arrange a measurement visit.",
    form_dims_wanted: "Preferred dimensions (if known)",
    form_address: "Delivery / installation address",
    product_order_submit: "Send order",
    product_order_success: "Thanks for your order! Our team will contact you within 24h.",
    product_color_label: "Color",
    product_color_selected: "Selected color",
    color_search_placeholder: "Search by color code or name (e.g. NV-02)",
    color_no_results: "No color matches that code or name.",

    related_title: "More from this category"
  },

  de: {
    top_phone: "+381 60 123 4567",
    top_email: "info@unikatnamestaj.rs",
    top_address: "Belgrad, Serbien",
    top_hours: "Mo–Fr 9–17 Uhr",
    top_tagline: "Möbel nach Maß, gebaut für Ihren Raum",

    nav_home: "Start",
    nav_about: "Über uns",
    nav_categories: "Kategorien",
    nav_configurator: "Raum visualisieren",
    nav_gallery: "Referenzen",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    nav_cta: "Angebot anfragen",

    hero_eyebrow: "Werkstatt für Möbel nach Maß",
    hero_title: "Möbel, die sich nach Ihrem Raum richten — nicht nach Kompromissen",
    hero_text: "Wir entwerfen, schneiden und montieren jedes Stück von Hand in unserer eigenen Werkstatt — vom einzelnen Schrank bis zum kompletten Interieur.",
    hero_cta_primary: "Kategorien ansehen",
    hero_cta_secondary: "Kostenlosen Aufmaßtermin buchen",
    hero_stat1_num: "12",
    hero_stat1_label: "Jahre Erfahrung",
    hero_stat2_num: "640+",
    hero_stat2_label: "gefertigte Stücke",
    hero_stat3_num: "100%",
    hero_stat3_label: "Maßanfertigung",

    about_eyebrow: "Über uns",
    about_title: "Von der Familientischlerei zum Interieur-Studio",
    about_text1: "Unikat Nameštaj ist eine Familienwerkstatt, die seit 2013 Möbel nach Maß für Wohn- und Geschäftsräume in ganz Serbien fertigt. Wir verkaufen keine Katalogware — jedes Projekt beginnt mit dem Aufmaß Ihres Raums und einem Gespräch darüber, wie Sie ihn nutzen.",
    about_text2: "Wir arbeiten mit Massivholz, Furnieren und Messingbeschlägen und begleiten den Prozess von der ersten Skizze über die 3D-Ansicht bis zur Montage vor Ort.",
    about_point1_title: "Kostenloser Aufmaßtermin",
    about_point1_text: "Unser Tischler kommt zu Ihnen, misst den Raum und schlägt eine Lösung vor.",
    about_point2_title: "3D-Entwurf vor der Fertigung",
    about_point2_text: "Sehen Sie das genaue Möbelstück, bevor die Produktion beginnt.",
    about_point3_title: "Eigene Werkstatt",
    about_point3_text: "Alles wird intern geschnitten und montiert — ohne Zwischenhändler oder Subunternehmer.",
    about_point4_title: "5 Jahre Garantie",
    about_point4_text: "Wir stehen für Konstruktion, Beschläge und Lackierung jedes Stücks ein.",

    cat_eyebrow: "Unser Angebot",
    cat_title: "Möbelkategorien",
    cat_text: "Sechs Hauptprogramme, die wir am häufigsten fertigen — jedes Stück wird an Maße und Material Ihrer Wahl angepasst.",
    cat_cta: "Produkte ansehen",

    conf_eyebrow: "Probieren Sie es aus",
    conf_title: "Visualisieren Sie den Raum vor der Bestellung",
    conf_text: "Der Raum ist zunächst leer. Wählen Sie rechts Stücke aus unserem Angebot und beobachten Sie, wie sich der Raum füllt — dies dient nur der Stilorientierung, das endgültige Aussehen wird beim Aufmaß festgelegt.",
    conf_empty_label: "Leerer Raum",
    conf_hint: "Klicken Sie auf ein Stück, um es im Raum zu platzieren",
    conf_clear: "Raum leeren",
    conf_cta: "Gefällt mir — Angebot für diese Kombination anfragen",

    gallery_eyebrow: "Referenzen",
    gallery_title: "Von unserem Instagram",
    gallery_text: "Folgen Sie uns für tägliche Fotos aus der Werkstatt und von fertigen Projekten.",
    gallery_cta: "@unikatnamestaj öffnen",
    gallery_note: "Ein Platz für Fotos, die Sie mit Ihrem Instagram-Konto verbinden.",
    gallery_view_all: "Komplette Galerie ansehen",
    galerija_eyebrow: "Referenzen",
    galerija_title: "Komplette Instagram-Galerie",
    galerija_text: "Alle Fotos von unserem Instagram-Profil an einem Ort.",
    galerija_back: "Zurück zur Startseite",

    testi_eyebrow: "Kundenstimmen",
    testi_title: "Was unsere Kunden sagen",
    testi_text: "Ein paar Eindrücke aus aktuellen Projekten — vom Aufmaß bis zur Montage.",

    faq_eyebrow: "Fragen",
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Wie lange dauert die Fertigung von Möbeln nach Maß?",
    faq_a1: "Im Durchschnitt 3 bis 6 Wochen nach Projektbestätigung, abhängig vom Auftragsumfang und den gewählten Materialien.",
    faq_q2: "Kommen Sie zu einem kostenlosen Aufmaßtermin?",
    faq_a2: "Ja, Aufmaß und Erstberatung sind in Belgrad und Umgebung kostenlos. Für andere Städte kontaktieren Sie uns zur Terminabsprache.",
    faq_q3: "Mit welchen Materialien arbeiten Sie?",
    faq_a3: "Massivholz (Eiche, Esche, Nussbaum), Furniere, farbiges MDF sowie Messing- und Stahlbeschläge, je nach Projekt.",
    faq_q4: "Kann ich die gezeigten Produktmaße ändern?",
    faq_a4: "Ja — jedes Stück auf der Seite ist ein Ausgangspunkt. Die endgültigen Maße passen wir immer an Ihren Raum an.",
    faq_q5: "Wie läuft die Zahlung ab?",
    faq_a5: "Üblich sind 50% Anzahlung bei Projektbestätigung, der Rest bei Lieferung und Montage.",
    faq_q6: "Bieten Sie die Montage an?",
    faq_a6: "Ja, die Montage ist bei allen Bestellungen innerhalb Serbiens im Preis inbegriffen.",

    contact_eyebrow: "Kontakt",
    contact_title: "Lassen Sie uns den Raum füllen, den Sie im Kopf haben",
    contact_text: "Schreiben Sie uns oder besuchen Sie die Werkstatt — wir antworten noch am selben Werktag.",
    contact_form_title: "Anfrage senden",
    form_name: "Vor- und Nachname",
    form_email: "E-Mail-Adresse",
    form_phone: "Telefonnummer",
    form_message: "Beschreiben Sie, was Sie brauchen",
    form_submit: "Anfrage senden",
    form_success: "Danke! Ihre Anfrage wurde gesendet — wir melden uns noch am selben Werktag.",
    form_required: "Bitte füllen Sie die Pflichtfelder aus, bevor Sie senden.",

    contact_info_title: "Werkstattdaten",
    contact_address_label: "Adresse",
    contact_address_value: "Kneza Miloša 45, 11000 Belgrad",
    contact_phone_label: "Telefon",
    contact_email_label: "E-Mail",
    contact_hours_label: "Öffnungszeiten",
    contact_hours_value: "Montag – Freitag: 9:00 – 17:00 Uhr",
    contact_social_label: "Soziale Medien",

    footer_tagline: "Möbel nach Maß, handgefertigt in Belgrad.",
    footer_categories: "Kategorien",
    footer_company: "Unternehmen",
    footer_company_about: "Über uns",
    footer_company_gallery: "Referenzen",
    footer_company_faq: "FAQ",
    footer_company_contact: "Kontakt",
    footer_legal: "Rechtliches",
    footer_privacy: "Datenschutz",
    footer_terms: "Nutzungsbedingungen",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_made: "Website erstellt von",

    widget_label: "Sprechen wir",
    widget_call: "Anrufen",
    widget_whatsapp: "WhatsApp-Nachricht",
    widget_email: "E-Mail senden",

    cat_page_breadcrumb_home: "Start",
    cat_page_all: "Alle Produkte",
    cat_page_from: "ab",
    cat_page_view: "Details & Bestellung",
    cat_page_back: "Alle Kategorien",

    product_breadcrumb: "Zurück zur Kategorie",
    product_material_label: "Material",
    product_dims_label: "Ca.-Maße",
    product_price_label: "Preis ab",
    product_price_note: "Der Endpreis hängt von Maßen und Materialwahl ab.",
    product_order_title: "Dieses Stück bestellen",
    product_order_text: "Senden Sie uns die Basisdaten — wir melden uns zur Terminabsprache für das Aufmaß.",
    form_dims_wanted: "Gewünschte Maße (falls bekannt)",
    form_address: "Liefer- / Montageadresse",
    product_order_submit: "Bestellung senden",
    product_order_success: "Danke für Ihre Bestellung! Unser Team meldet sich innerhalb von 24 Stunden.",
    product_color_label: "Farbe",
    product_color_selected: "Gewählte Farbe",
    color_search_placeholder: "Nach Farbcode oder Name suchen (z. B. NV-02)",
    color_no_results: "Keine Farbe mit diesem Code oder Namen.",

    related_title: "Mehr aus dieser Kategorie"
  }
};

/* Helper: read a nested product/category name in the current language */
function pickLang(obj, lang) {
  return obj[lang] || obj.sr;
}
