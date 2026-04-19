import serviceObject from "@/assets/service-object.jpg";
import serviceEvent from "@/assets/service-event.png";
import serviceBouw from "@/assets/service-bouw.png";
import serviceMobile from "@/assets/service-construction.jpg";
import serviceHospitality from "@/assets/service-hospitality.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  preview: string;
  intro: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "objectbeveiliging",
    title: "Objectbeveiliging",
    short: "Permanente bewaking van uw panden, kantoren en complexen.",
    preview: "Vaste post, sleutelbeheer en alarmopvolging — 24/7.",
    image: serviceObject,
    intro:
      "Onze objectbeveiliging biedt 24/7 professionele bewaking van bedrijfspanden, kantoren, industriële complexen en overheidsgebouwen. Wij leveren maatwerk dat aansluit op de specifieke risico's van uw locatie.",
    description:
      "Onze beveiligers zijn opgeleid conform Nederlandse wet- en regelgeving en beschikken over alle vereiste diploma's. Zij treden professioneel, discreet en daadkrachtig op. Wij verzorgen zowel kort- als langlopende opdrachten met een vast team per locatie voor maximale continuïteit.",
    features: [
      "24/7 fysieke bewaking door gecertificeerd personeel",
      "Toegangscontrole en bezoekersregistratie",
      "Surveillance rondes en incidentrapportage",
      "Sleutelbeheer en alarmopvolging",
      "Preventief optreden en risico-inventarisatie",
      "Directe lijn met onze meldkamer",
    ],
  },
  {
    slug: "evenementenbeveiliging",
    title: "Evenementenbeveiliging",
    short: "Crowd management, toegangscontrole en VIP-bescherming.",
    preview: "Van planning tot uitvoering — discreet en professioneel.",
    image: serviceEvent,
    intro:
      "Van festivals en concerten tot zakelijke congressen en sportevenementen — DBS levert evenementenbeveiliging op elk niveau. Wij nemen de gehele beveiligingsplanning uit handen, zodat u zich op het evenement kunt richten.",
    description:
      "Wij werken nauw samen met organisatoren, gemeenten en hulpdiensten aan een sluitend beveiligingsplan. Onze medewerkers zijn getraind in de-escalatie, EHBO en crowd management en treden gastvrij maar daadkrachtig op.",
    features: [
      "Crowd management en toegangscontrole",
      "VIP- en persoonsbeveiliging",
      "Beveiligingsplan en risicoanalyse",
      "Samenwerking met hulpdiensten en gemeente",
      "Cameratoezicht en communicatiesystemen",
      "Ervaring met vergunningstrajecten",
    ],
  },
  {
    slug: "bouwbeveiliging",
    title: "Bouwbeveiliging",
    short: "Bescherming van bouwplaatsen, materialen en machines.",
    preview: "Diefstalpreventie en flexibele inzet per projectfase.",
    image: serviceBouw,
    intro:
      "Bouwplaatsen zijn kwetsbaar voor diefstal, vandalisme en ongeautoriseerde toegang. DBS biedt specialistische bouwbeveiliging die uw materialen, machines en project beschermt — dag en nacht.",
    description:
      "Onze bouwbeveiligers kennen de specifieke risico's van de sector en werken met moderne surveillancemiddelen. Wij bieden flexibele contracten die meegroeien met de fases van uw project, van grondwerk tot oplevering.",
    features: [
      "24/7 bewaking van bouwterreinen",
      "Mobiele surveillance en patrouilles",
      "Hekwerk- en toegangscontrole",
      "Cameratoezicht en alarmering",
      "Rapportage en incidentregistratie",
      "Flexibele inzet bij wisselende projectfases",
    ],
  },
  {
    slug: "mobiele-surveillance",
    title: "Mobiele Surveillance",
    short: "Onaangekondigde controlerondes met herkenbaar voertuig.",
    preview: "Pand- en terreincontrole, alarmopvolging en sluitrondes.",
    image: serviceMobile,
    intro:
      "Met onze mobiele surveillance combineren we zichtbare aanwezigheid met scherpe controle. Onze beveiligers rijden onaangekondigde rondes, controleren panden en terreinen en treden direct op bij verdachte situaties of alarmmeldingen.",
    description:
      "Mobiele surveillance is dé kostenefficiënte oplossing voor bedrijven die geen volledige objectpost nodig hebben, maar wel zichtbare beveiliging willen. Onze beveiligers documenteren elke ronde digitaal, inclusief tijd, locatie en eventuele bevindingen.",
    features: [
      "Onaangekondigde controlerondes",
      "24/7 alarmopvolging",
      "Open- en sluitrondes",
      "Pand- en terreincontrole",
      "Digitale rapportage per ronde",
      "Snelle responstijd in heel Nederland",
    ],
  },
  {
    slug: "toegangsbeheer",
    title: "Toegangsbeheer & Receptiediensten",
    short: "Gastvrije ontvangst gecombineerd met scherpe toegangscontrole.",
    preview: "Het visitekaartje van uw organisatie — veilig én warm.",
    image: serviceHospitality,
    intro:
      "DBS combineert professionele beveiliging met hoogwaardige gastvrijheid. Onze receptie- en toegangsbeheermedewerkers zijn het visitekaartje van uw organisatie: zij ontvangen bezoekers hartelijk en bewaken tegelijkertijd de toegang.",
    description:
      "Onze medewerkers zijn geselecteerd op uitstraling, communicatieve vaardigheden en beveiligingskennis. Zij verzorgen bezoekersregistratie, badge-uitgifte en telefonie, en blijven alert op verdachte situaties. Ideaal voor kantoren, zorginstellingen en hoofdkantoren.",
    features: [
      "Receptie- en baliebemanning",
      "Bezoekersregistratie en badge-uitgifte",
      "Toegangscontrole en pasbeheer",
      "Representatieve uitstraling",
      "Telefoonbehandeling en postverwerking",
      "Flexibele inzet voor kantoren en hotels",
    ],
  },
];

export const getService = (slug?: string) =>
  services.find((s) => s.slug === slug);
