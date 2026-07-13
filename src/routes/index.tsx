import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Azienda Agricola La Corte · Muggiano, Milano" },
      {
        name: "description",
        content:
          "Antica corte lombarda del 1800 nel Parco Agricolo Sud di Milano. La storia dell'Azienda Agricola La Corte a Muggiano.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-stone-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Muggiano · Parco Agricolo Sud Milano
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-stone-900 md:text-7xl">
            Azienda Agricola
            <br />
            <span className="italic">La Corte</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600">
            Una corte lombarda costruita intorno al 1800, custode di una storia
            contadina che affonda le radici nell'epoca romana e nel Medioevo
            milanese.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a
              href="#chi-siamo"
              className="rounded-full bg-stone-900 px-6 py-3 text-stone-50 transition hover:bg-stone-700"
            >
              La nostra storia
            </a>
            <a
              href="#contatti"
              className="rounded-full border border-stone-300 px-6 py-3 text-stone-800 transition hover:border-stone-800"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
          Chi siamo
        </p>
        <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">
          Una storia di famiglia, terra e tempo
        </h2>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-stone-700">
          <p>
            L'Azienda Agricola La Corte è stata costruita intorno al 1800 circa.
            La nostra azienda si trova a Muggiano, un quartiere situato
            all'estremità occidentale di Milano all'interno del Parco Agricolo
            Sud.
          </p>
          <p>
            Il nome <em>"Muggiano"</em> è di origine romana: indicava un
            insediamento di coloni chiamato <em>Modianus</em>, dal nome romano
            dell'assegnatario di quel terreno, <em>Modius</em>. Muggiano è stato
            comune autonomo con le frazioni Guascona, Guasconcina e Assiano fino
            al 1869, per poi essere inglobato dall'allora comune di Baggio.
          </p>
          <p>
            Oggi il conduttore di questa azienda è la Sig.ina{" "}
            <strong>Alberti Miriam</strong>, che continua l'attività che i
            nonni, nel loro piccolo, avevano cominciato, con la collaborazione
            di tutti i componenti familiari, grandi e piccini.
          </p>

          <h3 className="pt-6 font-serif text-2xl text-stone-900">
            Architettura e paesaggio
          </h3>
          <p>
            L'utilizzo del cotto e le particolari strutture architettoniche a
            corte chiusa sono caratteristiche tipiche delle strutture lombarde e
            denotano un particolare carattere agricolo anche per l'Azienda
            Agricola La Corte, dove trovano un impiego sostanziale.
          </p>
          <p>
            Una situazione che rispecchia al meglio la presente destinazione di
            questo luogo. L'attuale corte deriva, infatti, da un complesso
            agricolo più ampio che faceva parte della proprietà delle sorelle
            Callegaris di Milano nel secolo scorso.
          </p>
          <p>
            Siamo nel pieno centro storico di Muggiano, proprio di fronte alla
            blasonata <em>"Corte Grande"</em>, caratterizzata dai lobbioni su
            tre piani, aspetto non proprio comune in questa tipologia di
            strutture.
          </p>

          <h3 className="pt-6 font-serif text-2xl text-stone-900">
            Origini antiche
          </h3>
          <p>
            Questo angolo del borgo nasconde delle origini molto più profonde:
            nei documenti antichi è possibile scoprire che ben prima della
            funzione agricola in questo luogo esisteva un'antica cappella
            religiosa. Era la chiesa dedicata ai Santi Cornelio e Cipriano, che
            poggiava le sue basi in particolare dove oggi si trova la casa
            patronale.
          </p>
          <p>
            È un'antica testimonianza della storia medievale locale, oggi
            purtroppo scomparsa, che cela un fascino misterioso al momento
            senza una spiegazione plausibile. Sono ignote le motivazioni per
            cui in una realtà piccola e modesta come Muggiano, in poche decine
            di metri, si trovassero due piccole cappelle in una comunità che
            contava poche decine di anime in tempi antichi.
          </p>
          <p>
            L'altra chiesuola era, infatti, nella piazza principale del borgo.
            Un'anomalia notata anche dalle autorità religiose: durante una
            visita pastorale alla fine del '500 il Cardinale Carlo Borromeo
            ordinò che la cappella dedicata a San Cornelio e Cipriano fosse
            demolita, recuperando i materiali per un'altra cappella simile a
            Terzago, località nei pressi dell'attuale Gaggiano.
          </p>
          <p>
            Ad oggi non sono rimaste tracce visibili di questo antico passato,
            ma oralmente si tramanda che, durante i lavori per il condotto
            fognario stradale all'inizio degli anni '90, furono notate delle
            tracce di ossa nel materiale di scavo. Verità unita a fantasia, chi
            lo sa… ma certamente una situazione plausibile con l'usanza
            medievale di posizionare dinanzi e attorno alle chiese i cimiteri.
            Senza ombra di dubbio, questa è una delle parti più antiche del
            borgo di Muggiano.
          </p>
        </div>
      </section>

      {/* Contatti */}
      <section
        id="contatti"
        className="border-t border-stone-200 bg-stone-900 text-stone-100"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
            Vieni a trovarci
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Muggiano, Milano
          </h2>
          <p className="mt-6 max-w-xl text-stone-300">
            Nel cuore del Parco Agricolo Sud, all'estremità occidentale di
            Milano.
          </p>
          <p className="mt-10 text-sm text-stone-500">
            © {new Date().getFullYear()} Azienda Agricola La Corte
          </p>
        </div>
      </section>
    </main>
  );
}
