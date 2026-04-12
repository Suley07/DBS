import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import detailObject from "@/assets/detail-object.jpg";
import detailEvent from "@/assets/detail-event.jpg";
import detailConstruction from "@/assets/detail-construction.jpg";
import detailHospitality from "@/assets/detail-hospitality.jpg";

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  features: string[];
  description: string;
}> = {
  objectbeveiliging: {
    title: "Objectbeveiliging",
    subtitle: "Permanente bewaking van uw eigendommen",
    image: detailObject,
    intro: "Onze objectbeveiliging biedt 24/7 professionele bewaking van bedrijfspanden, kantoren, industriële complexen en overheidsgebouwen. Wij leveren maatwerk beveiligingsoplossingen die aansluiten op de specifieke risico's en behoeften van uw organisatie.",
    features: [
      "24/7 fysieke bewaking door gecertificeerd personeel",
      "Toegangscontrole en bezoekersregistratie",
      "Surveillance rondes en incidentrapportage",
      "Sleutelbeheer en alarmopvolging",
      "Preventief optreden en risico-inventarisatie",
      "Directe lijn met onze meldkamer",
    ],
    description: "Onze objectbeveiligers zijn opgeleid conform de Nederlandse wetgeving en beschikken over alle vereiste diploma's en certificeringen. Zij treden professioneel, discreet en daadkrachtig op in elke situatie. Wij verzorgen zowel kort- als langlopende opdrachten en garanderen continuïteit door middel van een vast team beveiligers per locatie.",
  },
  evenementenbeveiliging: {
    title: "Evenementenbeveiliging",
    subtitle: "Veilige evenementen, zorgeloze organisatie",
    image: detailEvent,
    intro: "Van festivals en concerten tot zakelijke congressen en sportevenementen — DBS levert professionele evenementenbeveiliging op elk niveau. Wij nemen de gehele beveiligingsplanning uit handen, zodat u zich kunt richten op een succesvol evenement.",
    features: [
      "Crowd management en toegangscontrole",
      "VIP-beveiliging en persoonsbeveiliging",
      "Beveiligingsplan en risicoanalyse",
      "Samenwerking met hulpdiensten en gemeente",
      "Cameratoezicht en communicatiesystemen",
      "Ervaring met vergunningstrajecten",
    ],
    description: "Ons team heeft ruime ervaring met grootschalige evenementen door heel Nederland. Wij werken nauw samen met organisatoren, gemeenten en hulpdiensten om een sluitend beveiligingsplan op te stellen. Onze medewerkers zijn getraind in de-escalatie, EHBO en crowd management, en treden altijd professioneel en gastvrij op.",
  },
  bouwbeveiliging: {
    title: "Bouwbeveiliging",
    subtitle: "Bescherming van uw bouwproject",
    image: detailConstruction,
    intro: "Bouwplaatsen zijn kwetsbaar voor diefstal, vandalisme en ongeautoriseerde toegang. DBS biedt specialistische bouwbeveiliging die uw materialen, machines en project beschermt — dag en nacht, zeven dagen per week.",
    features: [
      "24/7 bewaking van bouwterreinen",
      "Mobiele surveillance en patrouilles",
      "Hekwerk- en toegangscontrole",
      "Cameratoezicht en alarmering",
      "Rapportage en incidentregistratie",
      "Flexibele inzet bij wisselende projectfases",
    ],
    description: "Onze bouwbeveiligers kennen de specifieke risico's van de bouwsector. Zij zijn getraind om preventief op te treden en werken met moderne surveillancemiddelen. Wij bieden flexibele contracten die meegroeien met de fases van uw bouwproject, van grondwerk tot oplevering.",
  },
  hospitality: {
    title: "Hospitality & Receptiediensten",
    subtitle: "Gastvrij ontvangen, scherp beveiligen",
    image: detailHospitality,
    intro: "DBS combineert professionele beveiliging met hoogwaardige gastvrijheid. Onze hospitality-medewerkers zijn het visitekaartje van uw organisatie: zij ontvangen bezoekers hartelijk en zorgen tegelijkertijd voor een veilige omgeving.",
    features: [
      "Receptie- en baliebemanning",
      "Bezoekersregistratie en toegangsbeheer",
      "Gastheer/gastvrouw met beveiligingsachtergrond",
      "Representatieve uitstraling",
      "Telefoonbehandeling en postverwerking",
      "Flexibele inzet voor kantoren, hotels en evenementen",
    ],
    description: "Onze hospitality-medewerkers zijn geselecteerd op uitstraling, communicatieve vaardigheden en beveiligingskennis. Zij bieden een warm welkom aan bezoekers en gasten, terwijl zij alert blijven op verdachte situaties. Ideaal voor bedrijven die waarde hechten aan een professionele eerste indruk zonder in te leveren op veiligheid.",
  },
};

const DienstDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Dienst niet gevonden</h1>
          <Link to="/diensten" className="text-primary hover:underline">Terug naar diensten</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/diensten" className="inline-flex items-center gap-2 text-sm text-primary mb-4 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Alle Diensten
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">{service.title}</h1>
            <p className="text-lg text-muted-foreground mt-3">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.intro}</p>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-10">
                <Link to="/contact" className="btn-gradient-red text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase inline-flex items-center transition-all hover:shadow-lg hover:shadow-primary/20">
                  Offerte Aanvragen
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <h3 className="text-lg font-bold text-foreground mb-6">Wat wij bieden</h3>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DienstDetail;
