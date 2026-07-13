// Contenuti del sito Azienda Agricola La Corte — Muggiano, Milano.
export const ROOMS = [
  {
    id: "camera-cortile",
    name: "Camera del Cortile",
    tagline: "Affaccio sulla corte lombarda",
    description:
      "Una stanza intima con travi a vista e pavimenti in cotto originale, affacciata sulla corte chiusa ottocentesca. Silenzio, luce naturale e biancheria in lino.",
    pricePerNight: 120,
    capacity: 2,
    size: 24,
    bed: "Letto matrimoniale",
    image:
      "https://images.unsplash.com/photo-1768487422639-7ba3900d0f02?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    amenities: ["Wi-Fi gratuito", "Colazione contadina inclusa", "Bagno privato", "Vista corte", "Aria condizionata"],
  },
  {
    id: "camera-fienile",
    name: "Camera del Fienile",
    tagline: "L'antico fienile restaurato",
    description:
      "Nel vecchio fienile della cascina, un ambiente autentico con travi a vista e finestre che si aprono sul Parco Agricolo Sud. Un rifugio semplice, curato nei dettagli.",
    pricePerNight: 135,
    capacity: 2,
    size: 28,
    bed: "Letto matrimoniale",
    image:
      "https://images.unsplash.com/photo-1600661550603-64fb7a8ff958?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    amenities: ["Wi-Fi gratuito", "Colazione inclusa", "Travi a vista", "Vista campagna", "Bagno con doccia"],
  },
  {
    id: "camera-patronale",
    name: "Camera Patronale",
    tagline: "La stanza di famiglia",
    description:
      "La camera più ampia della casa patronale, dove secondo la tradizione locale sorgeva un'antica cappella. Arredi d'epoca, mobili di famiglia e un'atmosfera raccolta.",
    pricePerNight: 165,
    capacity: 3,
    size: 34,
    bed: "Matrimoniale + singolo",
    image:
      "https://images.unsplash.com/photo-1615298681607-14ec66115339?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    amenities: ["Wi-Fi gratuito", "Colazione inclusa", "Bagno privato ampio", "Salottino", "Vista corte"],
  },
  {
    id: "camera-orto",
    name: "Camera dell'Orto",
    tagline: "Sul lato dell'orto di famiglia",
    description:
      "Una stanza luminosa con vista sull'orto e sui campi coltivati. Ideale per chi vuole cominciare la giornata con il profumo dei prodotti di stagione.",
    pricePerNight: 115,
    capacity: 2,
    size: 22,
    bed: "Letto matrimoniale",
    image:
      "https://images.unsplash.com/photo-1699629208190-672f7ef56d7b?crop=entropy&cs=srgb&fm=jpg&w=1600&q=85",
    amenities: ["Wi-Fi gratuito", "Colazione inclusa", "Vista orto", "Bagno privato", "Zona lettura"],
  },
];

export const PRODUCTS = [
  { id: "p-miele-acacia", name: "Miele di Acacia", category: "Miele", price: 9, description: "Miele delicato prodotto dalle arnie del Parco Agricolo Sud, cristallino e fluido.", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-miele-millefiori", name: "Miele Millefiori", category: "Miele", price: 8, description: "Aromatico e ambrato, raccolto dai prati della campagna milanese.", image: "https://images.unsplash.com/photo-1600350768563-69d022c5e87d?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-conserva-pomodoro", name: "Passata di Pomodoro", category: "Conserve", price: 6, description: "Pomodori coltivati nell'orto della corte, lavorati a mano secondo tradizione.", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-riso-carnaroli", name: "Riso Carnaroli", category: "Riso", price: 7, description: "Riso Carnaroli coltivato nelle risaie del Parco Sud Milano. Perfetto per il risotto giallo alla milanese.", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-farina-mais", name: "Farina di Mais", category: "Farine", price: 5, description: "Farina macinata a pietra dal nostro mais, ideale per polenta gialla di tradizione lombarda.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-conserva-zucca", name: "Confettura di Zucca", category: "Conserve", price: 7, description: "Zucca dell'orto e limone: da servire con formaggi stagionati.", image: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-uova", name: "Uova Fresche della Corte", category: "Uova", price: 4, description: "Uova delle nostre galline allevate all'aperto, raccolte ogni mattina.", image: "https://images.unsplash.com/photo-1489761486274-a2c74b503aef?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
  { id: "p-ortaggi", name: "Cassetta di Ortaggi di Stagione", category: "Ortaggi", price: 15, description: "Verdure raccolte al momento dall'orto di famiglia, secondo la stagione.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85" },
];

export const PRODUCT_CATEGORIES = ["Tutti", "Miele", "Conserve", "Riso", "Farine", "Uova", "Ortaggi"];

export const MENU = [
  {
    category: "Antipasti",
    dishes: [
      { name: "Tagliere della Corte", desc: "Salumi e formaggi lombardi, confetture di casa, pane cotto a legna", price: 14 },
      { name: "Nervetti in insalata", desc: "Ricetta milanese di famiglia, cipolla rossa, prezzemolo, aceto", price: 10 },
      { name: "Uova con asparagi", desc: "Uova delle nostre galline, asparagi di stagione dell'orto", price: 11 },
    ],
  },
  {
    category: "Primi",
    dishes: [
      { name: "Risotto giallo alla milanese", desc: "Carnaroli delle risaie del Parco Sud, zafferano, midollo, Grana Padano", price: 16 },
      { name: "Minestrone della cascina", desc: "Verdure dell'orto, riso, cotenna, servito tiepido come da tradizione", price: 12 },
      { name: "Pasta e fagioli lombarda", desc: "Fagioli borlotti, pasta corta, rosmarino, olio nuovo", price: 12 },
    ],
  },
  {
    category: "Secondi",
    dishes: [
      { name: "Cassoeula", desc: "Verzata milanese con costine, salsiccia e verdure d'orto", price: 18 },
      { name: "Ossobuco con gremolada", desc: "Ossobuco cotto lento, scorza di limone, prezzemolo, aglio", price: 22 },
      { name: "Frittata con erbe della corte", desc: "Uova fresche, erbe raccolte al mattino, insalata di campo", price: 12 },
    ],
  },
  {
    category: "Dolci",
    dishes: [
      { name: "Torta di miele", desc: "Preparata con il miele delle nostre arnie e farina di mais", price: 7 },
      { name: "Sbrisolona lombarda", desc: "Mandorle, burro e farina gialla, servita con vin santo", price: 7 },
      { name: "Frutta cotta al forno", desc: "Mele e pere della campagna con cannella e miele", price: 6 },
    ],
  },
];

export const TESTIMONIALS = [
  { name: "Marta & Luca", location: "Milano", text: "Una scoperta a due passi dalla città. Ci siamo sentiti in un altro tempo: la corte, i mattoni in cotto, la colazione con le uova appena raccolte.", rating: 5 },
  { name: "Familie Weber", location: "München", text: "Un angolo di Milano che non conoscevamo. Accoglienza vera, silenzio, e la storia della famiglia raccontata con passione.", rating: 5 },
  { name: "Giovanna P.", location: "Pavia", text: "Il risotto giallo di Miriam vale il viaggio. È una cucina onesta, di casa. Torneremo di sicuro in autunno.", rating: 5 },
];
