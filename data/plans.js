// assets
import StarterIcon from "../assets/icons/rocketship.svg";
import PortfolioIcon from "../assets/icons/funnel.svg";
import CoffeeIcon from "../assets/icons/coffee.svg";
import FoodIcon from "../assets/icons/food.svg";
import RestaurantIcon from "../assets/icons/restaurant.svg";
import FilesIcon from "../assets/icons/files.svg";
import MoneyIcon from "../assets/icons/money.svg";
import FocusIcon from "../assets/icons/focus.svg";
import CloudIcon from "../assets/icons/cloud.svg";
import MegafoneIcon from "../assets/icons/megafone.svg";
import GearIcon from "../assets/icons/gear.svg";
import MessageIcon from "../assets/icons/message.svg";
import VideoIcon from "../assets/icons/video.svg";
import SofaIcon from "../assets/icons/sofa.svg";
import BuildingIcon from "../assets/icons/building.svg";
import BriefCaseIcon from "../assets/icons/briefcase.svg";
import ComputerIcon from "../assets/icons/computer-2.svg";
import GirlIcon from "../assets/icons/girl.svg";
import PresentationIcon from "../assets/icons/presentation.svg";
import SpeakerIcon from "../assets/icons/speaker.svg";
import PetIcon from "../assets/icons/pet.svg";
import BoxIcon from "../assets/icons/box.svg";
import Presentation2Icon from "../assets/icons/presentation-2.svg";
import FruitIcon from "../assets/icons/fruit.svg";
import FlowerIcon from "../assets/icons/flower.svg";
import RunIcon from "../assets/icons/run.svg";
import StrechIcon from "../assets/icons/strech.svg";
import WeighIcon from "../assets/icons/weigh.svg";
import ScissorsIcon from "../assets/icons/scissors.svg";
import RazorIcon from "../assets/icons/razor.svg";
import AnchorIcon from "../assets/icons/anchor.svg";

const dealiaLogo = "/images/templates/dealia-logo.png";
const dealiaThumbnail = "/images/templates/dealia-thumbnail.png";
const deuterLogo = "/images/templates/deuter-logo.png";
const deuterThumbnail = "/images/templates/deuter-thumbnail.png";
const criketLogo = "/images/templates/criket-logo.png";
const criketThumbnail = "/images/templates/criket-thumbnail.png";
const snapLogo = "/images/templates/snap-logo.png";
const snapThumbnail = "/images/templates/snap-thumbnail.png";
const strikLogo = "/images/templates/strik-logo.png";
const strikThumbnail = "/images/templates/strik-thumbnail.png";
const ameliaLogo = "/images/templates/amelia-logo.png";
const ameliaThumbnail = "/images/templates/amelia-thumbnail.png";
const cretoLogo = "/images/templates/creto-logo.png";
const cretoThumbnail = "/images/templates/creto-thumbnail.png";
const veneziaLogo = "/images/templates/venezia-logo.png";
const veneziaThumbnail = "/images/templates/venezia-thumbnail.png";
const dynoLogo = "/images/templates/dyno-logo.png";
const dynoThumbnail = "/images/templates/dyno-thumbnail.png";
const printaLogo = "/images/templates/printa-logo.png";
const printaThumbnail = "/images/templates/printa-thumbnail.png";

const afairLogo = "/images/templates/afair-logo.png";
const afairThumbnail = "/images/templates/afair-thumbnail.png";
const zalepLogo = "/images/templates/zalep-logo.png";
const zalepThumbnail = "/images/templates/zalep-thumbnail.png";
const bentoLogo = "/images/templates/bento-logo.png";
const bentoThumbnail = "/images/templates/bento-thumbnail.png";
const telloLogo = "/images/templates/tello-logo.png";
const telloThumbnail = "/images/templates/tello-thumbnail.png";
const heriaLogo = "/images/templates/heria-logo.png";
const heriaThumbnail = "/images/templates/heria-thumbnail.png";

const plans = [
  {
    id: 1,
    title: "Starter",
    description:
      "El plan Starter está diseñado para empresas que necesitan comenzar su presencia digital con poco presupuesto y con una estructura de contenidos básica.",
    Icon: StarterIcon,
    pricing: "$749.000",
    priceInCents: "74900000",
    pricingPremium: "$1'049.000",
    pricePremiumInCents: "104900000",
    features: [
      "Sitio web con hasta 5 secciones incluyendo el Home.",
      "1 Formulario de contacto",
      "Customización del sitio web con la identidad gráfica de la marca.",
      "Montaje de contenido inicial: textos, imágenes y configuración inicial.",
      "Soporte técnico por email.",
      "Hosting y dominio por un año.",
      "Certificado de seguridad SSL.",
      "Secciones administrables: Imagen de portada en el Home, galería de imágenes, texto e imágenes de todas las secciones.",
    ],
    templates: [
      {
        id: 1,
        name: "dealia",
        thumbnail: dealiaThumbnail,
        logoImg: dealiaLogo,
        preferences: [
          { id: 1, Icon: CoffeeIcon, tooltipText: "Cafetería" },
          { id: 2, Icon: FoodIcon, tooltipText: "Heladería" },
          { id: 3, Icon: RestaurantIcon, tooltipText: "Restaurante" },
        ],
        demoLink: "http://dealia.getgrowly.com",
        themeLink: "/plantillas/dealia?type=Starter",
      },
      {
        id: 2,
        name: "deuter",
        thumbnail: deuterThumbnail,
        logoImg: deuterLogo,
        preferences: [
          {
            id: 1,
            Icon: FilesIcon,
            tooltipText: "Administración y contabilidad",
          },
          { id: 2, Icon: MoneyIcon, tooltipText: "Negocios y finanzas" },
          { id: 3, Icon: FocusIcon, tooltipText: "Startups" },
          { id: 4, Icon: CloudIcon, tooltipText: "Tecnología" },
        ],
        demoLink: "http://deuter.getgrowly.com",
        themeLink: "/plantillas/deuter?type=Starter",
      },
      {
        id: 3,
        name: "criket",
        thumbnail: criketThumbnail,
        logoImg: criketLogo,
        preferences: [
          {
            id: 1,
            Icon: FilesIcon,
            tooltipText: "Administración y contabilidad",
          },
          { id: 2, Icon: MoneyIcon, tooltipText: "Negocios y finanzas" },
          { id: 3, Icon: FocusIcon, tooltipText: "Startups" },
          { id: 4, Icon: CloudIcon, tooltipText: "Tecnología" },
          { id: 5, Icon: MegafoneIcon, tooltipText: "Agencias de marketing" },
        ],
        demoLink: "http://criket.getgrowly.com",
        themeLink: "/plantillas/criket?type=Starter",
      },
      {
        id: 4,
        name: "snap",
        thumbnail: snapThumbnail,
        logoImg: snapLogo,
        preferences: [
          { id: 1, Icon: GearIcon, tooltipText: "Software y apps" },
          { id: 2, Icon: FocusIcon, tooltipText: "Startups" },
          { id: 3, Icon: CloudIcon, tooltipText: "Tecnología" },
        ],
        demoLink:
          "https://drive.google.com/file/d/1vNsd_tJw1BNBgVkggyi1YYJ5bxStRgAW/view?usp=sharing",
        themeLink: "/plantillas/snap?type=Starter",
      },
      {
        id: 5,
        name: "strik",
        thumbnail: strikThumbnail,
        logoImg: strikLogo,
        preferences: [
          { id: 1, Icon: MessageIcon, tooltipText: "Diseño y publicidad" },
          { id: 2, Icon: VideoIcon, tooltipText: "Agencias audiovisuales" },
          { id: 3, Icon: MegafoneIcon, tooltipText: "Agencias de marketing" },
        ],
        demoLink:
          "https://drive.google.com/file/d/1T3cy2aQ64UdDFF0gZILuu8TLIfu1eYP8/view?usp=sharing",
        themeLink: "/plantillas/strik?type=Starter",
      },
      {
        id: 6,
        name: "amelia",
        thumbnail: ameliaThumbnail,
        logoImg: ameliaLogo,
        preferences: [
          {
            id: 1,
            Icon: SofaIcon,
            tooltipText: "Diseño interior y mobiliario",
          },
          { id: 2, Icon: BuildingIcon, tooltipText: "Arquitectura" },
        ],
        demoLink:
          "https://drive.google.com/file/d/1inz-RDJPoG8kg2Zmvq1S-xrxB4p8vbxS/view?usp=sharing",
        themeLink: "/plantillas/amelia?type=Starter",
      },
      {
        id: 7,
        name: "creto",
        thumbnail: cretoThumbnail,
        logoImg: cretoLogo,
        preferences: [
          { id: 1, Icon: BriefCaseIcon, tooltipText: "Independientes" },
          { id: 2, Icon: ComputerIcon, tooltipText: "Marketers" },
          { id: 3, Icon: GirlIcon, tooltipText: "Empresarios" },
          { id: 4, Icon: PresentationIcon, tooltipText: "Coaching" },
          { id: 5, Icon: SpeakerIcon, tooltipText: "Speakers" },
        ],
        demoLink: "http://creto.getgrowly.com",
        themeLink: "/plantillas/creto?type=Starter",
      },
      {
        id: 8,
        name: "venezia",
        thumbnail: veneziaThumbnail,
        logoImg: veneziaLogo,
        preferences: [
          { id: 1, Icon: PetIcon, tooltipText: "Centros veterinarios" },
        ],
        demoLink: "http://venezia.getgrowly.com",
        themeLink: "/plantillas/venezia?type=Starter",
      },
      {
        id: 9,
        name: "dyno",
        thumbnail: dynoThumbnail,
        logoImg: dynoLogo,
        preferences: [
          { id: 1, Icon: BoxIcon, tooltipText: "Lanzamiento de producto" },
          { id: 2, Icon: FocusIcon, tooltipText: "Startups" },
          { id: 3, Icon: CloudIcon, tooltipText: "Tecnología" },
        ],
        demoLink:
          "https://drive.google.com/file/d/1M3iPCSAbrcJ3Bi3Fcw9_sWMQ7OqwoFH1/view?usp=sharing",
        themeLink: "/plantillas/dyno?type=Starter",
      },
      {
        id: 10,
        name: "printa",
        thumbnail: printaThumbnail,
        logoImg: printaLogo,
        preferences: [
          { id: 1, Icon: Presentation2Icon, tooltipText: "Eventos" },
        ],
        demoLink:
          "https://drive.google.com/file/d/1zcoALbtD84VTk7UOLUAbQSs22Xug6QqR/view?usp=sharing",
        themeLink: "/plantillas/printa?type=Starter",
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "El plan Portfolio está diseñado para empresas que requieran un sitio web con una estructura más grande y avanzada y que requieran comunicar más información, como sus servicios independientes o su portafolio y casos de éxito.",
    Icon: PortfolioIcon,
    pricing: "$1'099.000",
    priceInCents: "109900000",
    pricingPremium: "$1'399.000",
    pricePremiumInCents: "139900000",
    features: [
      "Sitio web con hasta 8 secciones incluyendo el Home.",
      "2 Formularios de contacto",
      "Portafolio de productos o servicios",
      "Página descriptiva del producto o servicio",
      "Banner slider en el Home (Max. 5 imágenes)",
      "Hosting y dominio por un año.",
      "Ubicación en el mapa de Google",
      "Customización del sitio web con la identidad gráfica de la marca.",
      "Montaje de contenido inicial: textos, imágenes y configuración inicial.",
      "Soporte técnico por email.",
      "Certificado de seguridad SSL.",
      "Secciones administrables: Imágenes del banner del home, información de servicios ó productos, texto e imágenes de todas las secciones.",
    ],
    templates: [
      {
        id: 1,
        name: "afair",
        thumbnail: afairThumbnail,
        logoImg: afairLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: FruitIcon, tooltipText: "Yoga y relajación" },
          { id: 2, Icon: FlowerIcon, tooltipText: "SPA" },
          { id: 3, Icon: RunIcon, tooltipText: "Fitness y CAF" },
          { id: 4, Icon: StrechIcon, tooltipText: "Academías de baile" },
        ],
        demoLink: "https://afair.getgrowly.com/",
        themeLink: "/plantillas/afair?type=Portfolio",
      },
      {
        id: 2,
        name: "zalep",
        thumbnail: zalepThumbnail,
        logoImg: zalepLogo,
        preferences: [
          {
            id: 1,
            Icon: WeighIcon,
            tooltipText: "Gimnasios y centros de entrenamiento",
          },
          { id: 2, Icon: RunIcon, tooltipText: "Fitness y CAF" },
        ],
        demoLink: "https://zalepp.getgrowly.com/",
        themeLink: "/plantillas/zalep?type=Portfolio",
      },
      {
        id: 3,
        name: "bento",
        thumbnail: bentoThumbnail,
        logoImg: bentoLogo,
        preferences: [
          { id: 1, Icon: ScissorsIcon, tooltipText: "Salones de belleza" },
          { id: 2, Icon: RazorIcon, tooltipText: "Barberias" },
        ],
        demoLink: "http://bento.getgrowly.com",
        themeLink: "/plantillas/bento?type=Portfolio",
      },
      {
        id: 4,
        name: "tello",
        thumbnail: telloThumbnail,
        logoImg: telloLogo,
        preferences: [
          {
            id: 1,
            Icon: FilesIcon,
            tooltipText: "Administración y contabilidad",
          },
          { id: 2, Icon: MoneyIcon, tooltipText: "Negocios y finanzas" },
          { id: 3, Icon: FocusIcon, tooltipText: "Startups" },
          { id: 4, Icon: CloudIcon, tooltipText: "Tecnología" },
          { id: 5, Icon: MegafoneIcon, tooltipText: "Agencias de marketing" },
        ],
        demoLink: "http://tello.getgrowly.com",
        themeLink: "/plantillas/tello?type=Portfolio",
      },
      {
        id: 5,
        name: "heria",
        thumbnail: heriaThumbnail,
        logoImg: heriaLogo,
        preferences: [
          { id: 1, Icon: AnchorIcon, tooltipText: "Estudios de tattoo" },
        ],
        demoLink: "http://heria.getgrowly.com",
        themeLink: "/plantillas/heria?type=Portfolio",
      },
    ],
  },
];

export default plans;
