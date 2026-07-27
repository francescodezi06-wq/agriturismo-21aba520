// Contenuti del sito Agriturismo La Corte di Muggiano — Milano.
const ROOM_AMENITIES = [
  "Balcone",
  "Aria condizionata",
  "Ingresso indipendente",
  "TV a schermo piatto",
  "Frigorifero",
  "Bollitore elettrico",
  "Armadio/guardaroba",
  "Riscaldamento",
  "Zanzariera",
  "Pavimento in marmo/piastrelle",
  "Aria condizionata indipendente",
  "Accessibile solo tramite scale",
  "Vietato fumare",
];

const BATHROOM_AMENITIES = [
  "Doccia",
  "Bidet",
  "Prodotti da bagno in omaggio",
  "Asciugamani",
  "Asciugacapelli",
  "Carta igienica",
  "Vasca o doccia",
];

export const ROOMS = [
  {
    id: "camera-matrimoniale-balcone",
    name: "Camera Matrimoniale con Balcone",
    tagline: "Con balcone privato",
    description:
      "Camera matrimoniale climatizzata dotata di ingresso indipendente, balcone con vista su una strada tranquilla e bagno privato con doccia.",
    pricePerNight: 95,
    capacity: 2,
    size: 15,
    bed: "1 letto matrimoniale alla francese",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85",
    amenities: ROOM_AMENITIES,
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-tripla-classic",
    name: "Camera Tripla Classic",
    tagline: "Ideale per piccoli gruppi",
    description:
      "Camera tripla climatizzata con bagno privato completo di doccia, bidet e asciugacapelli. Dispone di ingresso indipendente, TV a schermo piatto, armadio, bollitore elettrico e vista su una tranquilla strada.",
    pricePerNight: 120,
    capacity: 3,
    size: 10,
    bed: "1 letto singolo + 1 matrimoniale alla francese",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1600&q=85",
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-quadrupla-standard",
    name: "Camera Quadrupla Standard",
    tagline: "Perfetta per famiglie",
    description:
      "Camera quadrupla climatizzata con bagno privato completo di doccia, bidet e asciugacapelli. Dispone di ingresso indipendente, TV a schermo piatto, armadio, bollitore elettrico e vista su una tranquilla strada.",
    pricePerNight: 145,
    capacity: 4,
    size: 6,
    bed: "2 letti singoli + 1 matrimoniale alla francese",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85",
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-doppia-superior",
    name: "Camera Doppia Superior con Vista Corte",
    tagline: "La più ampia e luminosa",
    description:
      "Camera doppia climatizzata con ingresso indipendente, affaccio sulla corte interna della cascina e bagno privato completo di doccia, bidet e asciugacapelli. Spaziosa e silenziosa, ideale per chi cerca tranquillità senza rinunciare alla comodità del centro di Milano.",
    pricePerNight: 110,
    capacity: 2,
    size: 18,
    bed: "1 letto matrimoniale alla francese",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d537334fa?auto=format&fit=crop&w=1600&q=85",
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
];

export const BOOKING_URL =
  "https://www.booking.com/hotel/it/agriturismo-la-corte-di-muggiano-citta-metropolitana-di-milano.it.html";

export const PRODUCTS = [
  {
    id: "cassetta-bovina-5",
    name: "Cassetta di Carne Bovina · 5 kg",
    category: "Carne bovina",
    price: 89,
    description:
      "Selezione di tagli misti di carne bovina allevata nella nostra azienda: bistecche, arrosti, macinato e pezzi per bollito. Confezionata sottovuoto.",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cassetta-bovina-10",
    name: "Cassetta di Carne Bovina · 10 kg",
    category: "Carne bovina",
    price: 169,
    description:
      "Cassetta famiglia con 10 kg di carne bovina della nostra azienda: tagli per griglia, arrosto, spezzatino, macinato e brodo. Sottovuoto e pronta al congelamento.",
    image:
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cassetta-bovina-15",
    name: "Cassetta di Carne Bovina · 15 kg",
    category: "Carne bovina",
    price: 239,
    description:
      "La cassetta più completa: 15 kg di carne bovina dell'azienda, dai tagli nobili al bollito, macinato e ossobuco. Perfetta per riempire il freezer di casa.",
    image:
      "https://images.unsplash.com/photo-1588347818481-c7c1e02d20a4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cassetta-azienda",
    name: "Cassetta Prodotti dell'Azienda Agricola",
    category: "Prodotti misti",
    price: 55,
    description:
      "Una selezione dei prodotti della corte: uova fresche, miele, conserve di stagione, farine e ortaggi coltivati nei nostri campi.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cassetta-stagionale",
    name: "Cassetta Prodotti Stagionali",
    category: "Stagionale",
    price: 35,
    description:
      "Ortaggi, frutta ed erbe raccolti al momento nei nostri orti, secondo il ritmo delle stagioni della pianura padana.",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1200&q=85",
  },
];

export const PRODUCT_CATEGORIES = ["Tutti", "Carne bovina", "Prodotti misti", "Stagionale"];

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
  { name: "Familie Weber", location: "München", text: "Un angolo di Milano che non conoscevamo. Accoglienza vera, silenzio e grande cortesia. Perfetto anche per visitare San Siro e la Fiera.", rating: 5 },
  { name: "Giovanna P.", location: "Pavia", text: "Colazione buonissima, camere pulite e curate, parcheggio comodo. Un vero agriturismo a due passi da Milano. Torneremo!", rating: 5 },
];
