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

import dealiaLogo from "../assets/templates/dealia-logo.png";
import dealiaThumbnail from "../assets/templates/dealia-thumbnail.png";
import deuterLogo from "../assets/templates/deuter-logo.png";
import deuterThumbnail from "../assets/templates/deuter-thumbnail.png";
import criketLogo from "../assets/templates/criket-logo.png";
import criketThumbnail from "../assets/templates/criket-thumbnail.png";
import snapLogo from "../assets/templates/snap-logo.png";
import snapThumbnail from "../assets/templates/snap-thumbnail.png";
import strikLogo from "../assets/templates/strik-logo.png";
import strikThumbnail from "../assets/templates/strik-thumbnail.png";
import ameliaLogo from "../assets/templates/amelia-logo.png";
import ameliaThumbnail from "../assets/templates/amelia-thumbnail.png";
import cretoLogo from "../assets/templates/creto-logo.png";
import cretoThumbnail from "../assets/templates/creto-thumbnail.png";
import veneziaLogo from "../assets/templates/venezia-logo.png";
import veneziaThumbnail from "../assets/templates/venezia-thumbnail.png";
import dynoLogo from "../assets/templates/dyno-logo.png";
import dynoThumbnail from "../assets/templates/dyno-thumbnail.png";
import printaLogo from "../assets/templates/printa-logo.png";
import printaThumbnail from "../assets/templates/printa-thumbnail.png";

import afairLogo from "../assets/templates/afair-logo.png";
import afairThumbnail from "../assets/templates/afair-thumbnail.png";
import zalepLogo from "../assets/templates/zalep-logo.png";
import zalepThumbnail from "../assets/templates/zalep-thumbnail.png";
import bentoLogo from "../assets/templates/bento-logo.png";
import bentoThumbnail from "../assets/templates/bento-thumbnail.png";
import telloLogo from "../assets/templates/tello-logo.png";
import telloThumbnail from "../assets/templates/tello-thumbnail.png";
import heriaLogo from "../assets/templates/heria-logo.png";
import heriaThumbnail from "../assets/templates/heria-thumbnail.png";

const plans = [
  {
    id: 1,
    title: "Starter",
    description:
      "El plan Starter está diseñado para empresas que necesitan comenzar su presencia digital con poco presupuesto y con una estructura de contenidos básica.",
    Icon: StarterIcon,
    pricing: "$749.000",
    priceInCents: "74900000",
    pricingPremium: "$999.000",
    pricePremiumInCents: "99900000",
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
        demoLink: "#",
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
        demoLink: "#",
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
        demoLink: "#",
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
        demoLink: "#",
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
        demoLink: "#",
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
      "Ubicación en el mapa de Google",
      "Customización del sitio web con la identidad gráfica de la marca.",
      "Montaje de contenido inicial: textos, imágenes y configuración inicial.",
      "Soporte técnico por email.",
      "Hosting y dominio por un año.",
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
        demoLink: "#",
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
        demoLink: "#",
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
