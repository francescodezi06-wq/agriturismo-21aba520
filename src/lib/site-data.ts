import cameraAurora from "@/assets/rooms/camera-aurora.jpg.asset.json";
import cameraAuroraSeconda from "@/assets/rooms/camera-aurora-2.jpg.asset.json";
import cameraAuroraBagno from "@/assets/rooms/camera-aurora-bagno.jpg.asset.json";
import cameraLuna from "@/assets/rooms/camera-luna.jpg.asset.json";
import cameraLunaSeconda from "@/assets/rooms/camera-luna-2.jpg.asset.json";
import cameraLunaBagno from "@/assets/rooms/camera-luna-bagno.jpg.asset.json";
import cameraStella from "@/assets/rooms/camera-stella.jpg.asset.json";
import cameraStellaBagno from "@/assets/rooms/camera-stella-bagno.jpg.asset.json";
import cameraTramonto from "@/assets/rooms/camera-tramonto.jpg.asset.json";
import cameraTramontoBagno from "@/assets/rooms/camera-tramonto-bagno.jpg.asset.json";
import beef5 from "@/assets/products/beef-5.jpg";
import beef10 from "@/assets/products/beef-10.jpg";
import beef15 from "@/assets/products/beef-15.jpg";
import farmSelection from "@/assets/products/farm-selection.jpg";
import seasonalProduce from "@/assets/products/seasonal-produce.jpg";

// Contenuti del sito Agriturismo La Corte di Muggiano — Milano.
const ROOM_AMENITIES = [
  "Balcone",
  "Armadio/guardaroba",
  "Vietato fumare",
];

const BATHROOM_AMENITIES = [
  "Doccia",
  "Bidet",
  "Asciugamani",
  "Asciugacapelli",
  "Carta igienica",
  "Vasca o doccia",
];

export const ROOMS = [
  {
    id: "camera-aurora",
    name: "Camera Aurora",
    tagline: "Calda e accogliente",
    description:
      "Una camera quadrupla vivace ed accogliente, caratterizzata dalle tonalità del rosso e da un elegante letto in ferro battuto. Gli arredi in legno e il lampadario classico creano un'atmosfera intima, completata da un bagno privato coordinato con doccia.",
    capacity: 4,
    size: 15,
    bed: "1 letto matrimoniale\n2 letti singoli",
    image: cameraAurora.url,
    images: [cameraAurora.url, cameraAuroraSeconda.url, cameraAuroraBagno.url],
    amenities: ROOM_AMENITIES,
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-luna",
    name: "Camera Luna",
    tagline: "Luminosa e raffinata",
    description:
      "Una camera tripla ampia e luminosa, impreziosita da una parete color giallo caldo, letto in ferro battuto e mobili d'epoca. Le grandi finestre lasciano entrare la luce naturale, mentre il bagno privato con doccia riprende i toni delicati della stanza.",
    capacity: 3,
    size: 10,
    bed: "1 letto matrimoniale\n1 letto singolo",
    image: cameraLuna.url,
    images: [cameraLuna.url, cameraLunaSeconda.url, cameraLunaBagno.url],
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-stella",
    name: "Camera Stella",
    tagline: "Romantica e raccolta",
    description:
      "Una camera matrimoniale dal carattere romantico, con parete color prugna, tessili nelle sfumature del rosso e un delicato letto in ferro bianco. L'ambiente raccolto e curato è accompagnato da un bagno privato con ampia doccia.",
    capacity: 2,
    size: 6,
    bed: "1 letto matrimoniale",
    image: cameraStella.url,
    images: [cameraStella.url, cameraStellaBagno.url],
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
  {
    id: "camera-tramonto",
    name: "Camera Tramonto",
    tagline: "Avvolgente e rilassante",
    description:
      "Una camera matrimoniale dai toni caldi dell'arancio, ispirati alla luce del tramonto. Il letto in ferro battuto, le tende leggere e la luce naturale rendono l'ambiente accogliente e rilassante; il bagno privato con doccia completa il soggiorno.",
    capacity: 2,
    size: 18,
    bed: "1 letto matrimoniale",
    image: cameraTramonto.url,
    images: [cameraTramonto.url, cameraTramontoBagno.url],
    amenities: ROOM_AMENITIES.filter((a) => a !== "Balcone"),
    bathroom: BATHROOM_AMENITIES,
  },
];

export const BOOKING_URL =
  "https://www.booking.com/hotel/it/agriturismo-la-corte-di-muggiano-citta-metropolitana-di-milano.it.html";

// Titoli e descrizioni delle cassette: da definire — per ora solo foto e categoria.
export const PRODUCTS = [
  {
    id: "cassetta-bovina-5",
    category: "Carne bovina",
    image: beef5,
  },
  {
    id: "cassetta-bovina-10",
    category: "Carne bovina",
    image: beef10,
  },
  {
    id: "cassetta-bovina-15",
    category: "Carne bovina",
    image: beef15,
  },
  {
    id: "cassetta-azienda",
    category: "Prodotti misti",
    image: farmSelection,
  },
  {
    id: "cassetta-stagionale",
    category: "Stagionale",
    image: seasonalProduce,
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
