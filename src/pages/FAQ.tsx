import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Zijn jullie beveiligers 24/7 inzetbaar?",
    a: "Ja, ons team is dag en nacht inzetbaar en bereikbaar in heel Nederland. Of het nu gaat om een acute alarmopvolging of een langlopende objectpost — wij staan paraat.",
  },
  {
    q: "Kunnen jullie snel starten met een opdracht?",
    a: "In de meeste gevallen kunnen wij binnen 24 tot 48 uur opstarten. Voor spoedopdrachten en alarmopvolging zijn wij vaak nog sneller beschikbaar. Neem gerust direct contact op om de mogelijkheden te bespreken.",
  },
  {
    q: "Zijn jullie beveiligers opgeleid en gescreend?",
    a: "Al onze beveiligers beschikken over het wettelijk verplichte diploma Beveiliger 2 (SVPB) en zijn voorzien van een geldig legitimatiebewijs uitgegeven door Justis. Daarnaast doorlopen wij een eigen interne screening op betrouwbaarheid, communicatie en presentatie.",
  },
  {
    q: "Hoe worden tarieven bepaald?",
    a: "Onze tarieven zijn altijd maatwerk. Verschillende factoren bepalen de uiteindelijke prijs: het type dienst (object, evenement, mobiel, hospitality), de inzettijden (dag, nacht, weekend, feestdag), de duur en omvang van de opdracht, eventuele specifieke risico-omstandigheden en de gewenste rapportagevorm. Op basis van een korte intake stellen wij binnen één werkdag een transparante offerte op zonder verborgen kosten.",
  },
  {
    q: "Werken jullie ook voor kleinere opdrachtgevers of eenmalige evenementen?",
    a: "Absoluut. Of u nu een eenmalige bruiloft, een buurtevenement of een meerjarig contract wilt afsluiten — wij denken graag mee in elke situatie en op elke schaal.",
  },
  {
    q: "Wat doen jullie bij een incident of alarmmelding?",
    a: "Onze beveiligers volgen vaste protocollen: de situatie wordt direct beoordeeld, indien nodig worden hulpdiensten ingeschakeld en u ontvangt binnen korte tijd een schriftelijke rapportage met tijdlijn, foto's en eventuele bevindingen.",
  },
];

const FAQ = () => (
  <main className="pt-24">
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Veelgestelde <span className="text-gradient-red">vragen</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Heeft u een vraag over onze beveiligingsdiensten of werkwijze?
            Hieronder vindt u de antwoorden op de meest voorkomende vragen.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card/60 border border-border rounded-xl px-5 data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-gradient-card border border-border rounded-2xl p-8 h-fit lg:sticky lg:top-28"
          >
            <h3 className="text-xl font-extrabold text-foreground mb-3">
              Vragen over onze diensten?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Ons team helpt u graag met persoonlijk advies of een offerte op maat.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full btn-gradient-red text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Neem contact op
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  </main>
);

export default FAQ;
