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
      "El plan Starter está diseñado para empresas que necesitan comenzar su presencia digital con poco presupuesto y con una estructura de contenidos básica. ",
    Icon: StarterIcon,
    pricing: "$699.000",
    features: [
      "Sitio web online bajo plantilla seleccionada",
      "Customización de la plantilla con la identidad gráfica de la marca",
      "Montaje de contenido inicial: textos, imágenes y configuración inicial",
      "Soporte técnico por email",
      "Hosting y dominio por un año.",
      "CMS para administrar contenidos",
    ],
    templates: [
      {
        id: 1,
        thumbnail: dealiaThumbnail,
        logoImg: dealiaLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: CoffeeIcon, tooltipText: "Cafetería" },
          { id: 2, Icon: FoodIcon, tooltipText: "Comida" },
          { id: 3, Icon: RestaurantIcon, tooltipText: "Restaurante" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=dealia",
      },
      {
        id: 2,
        thumbnail: deuterThumbnail,
        logoImg: deuterLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: FilesIcon, tooltipText: "Archivos" },
          { id: 2, Icon: MoneyIcon, tooltipText: "Dinero" },
          { id: 3, Icon: FocusIcon, tooltipText: "Bombilla" },
          { id: 4, Icon: CloudIcon, tooltipText: "Nube" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=deuter",
      },
      {
        id: 3,
        thumbnail: criketThumbnail,
        logoImg: criketLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: FilesIcon, tooltipText: "Archivos" },
          { id: 2, Icon: MoneyIcon, tooltipText: "Dinero" },
          { id: 3, Icon: FocusIcon, tooltipText: "Bombilla" },
          { id: 4, Icon: CloudIcon, tooltipText: "Nube" },
          { id: 5, Icon: MegafoneIcon, tooltipText: "Megafono" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=criket",
      },
      {
        id: 4,
        thumbnail: snapThumbnail,
        logoImg: snapLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: GearIcon, tooltipText: "Rueda" },
          { id: 2, Icon: FocusIcon, tooltipText: "Bombilla" },
          { id: 3, Icon: CloudIcon, tooltipText: "Nube" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=snap",
      },
      {
        id: 5,
        thumbnail: strikThumbnail,
        logoImg: strikLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: MessageIcon, tooltipText: "Mensaje" },
          { id: 2, Icon: VideoIcon, tooltipText: "Video" },
          { id: 3, Icon: MegafoneIcon, tooltipText: "Megafono" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=strik",
      },
      {
        id: 6,
        thumbnail: ameliaThumbnail,
        logoImg: ameliaLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: SofaIcon, tooltipText: "Sofa" },
          { id: 2, Icon: BuildingIcon, tooltipText: "Edificio" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=amelia",
      },
      {
        id: 7,
        thumbnail: cretoThumbnail,
        logoImg: cretoLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: BriefCaseIcon, tooltipText: "Maletín" },
          { id: 2, Icon: ComputerIcon, tooltipText: "Computador" },
          { id: 3, Icon: GirlIcon, tooltipText: "Mujer" },
          { id: 4, Icon: PresentationIcon, tooltipText: "Presentación" },
          { id: 5, Icon: SpeakerIcon, tooltipText: "Parlantes" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=creto",
      },
      {
        id: 8,
        thumbnail: veneziaThumbnail,
        logoImg: veneziaLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [{ id: 1, Icon: PetIcon, tooltipText: "Mascota" }],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=venezia",
      },
      {
        id: 9,
        thumbnail: dynoThumbnail,
        logoImg: dynoLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: BoxIcon, tooltipText: "Caja" },
          { id: 2, Icon: FocusIcon, tooltipText: "Foco" },
          { id: 3, Icon: CloudIcon, tooltipText: "Nube" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=dyno",
      },
      {
        id: 10,
        thumbnail: printaThumbnail,
        logoImg: printaLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: Presentation2Icon, tooltipText: "Presentación 2" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=starter&template=printa",
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "El plan Starter está diseñado para empresas que necesitan comenzar su presencia digital con poco presupuesto y con una estructura de contenidos básica. ",
    Icon: PortfolioIcon,
    pricing: "$1'099.000",
    features: [
      "Sitio web online bajo plantilla seleccionada",
      "Customización de la plantilla con la identidad gráfica de la marca",
      "Montaje de contenido inicial: textos, imágenes y configuración inicial",
      "Soporte técnico por email",
      "Hosting y dominio por un año.",
      "CMS para administrar contenidos",
    ],
    templates: [
      {
        id: 1,
        thumbnail: afairThumbnail,
        logoImg: afairLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: FruitIcon, tooltipText: "Fruta" },
          { id: 2, Icon: FlowerIcon, tooltipText: "Presentación" },
          { id: 3, Icon: RunIcon, tooltipText: "Correr" },
          { id: 4, Icon: StrechIcon, tooltipText: "Estirar" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=portfolio&template=afair",
      },
      {
        id: 2,
        thumbnail: zalepThumbnail,
        logoImg: zalepLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: WeighIcon, tooltipText: "Fuerza" },
          { id: 2, Icon: RunIcon, tooltipText: "Correr" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=portfolio&template=zalep",
      },
      {
        id: 3,
        thumbnail: bentoThumbnail,
        logoImg: bentoLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: ScissorsIcon, tooltipText: "Tijeras" },
          { id: 2, Icon: RazorIcon, tooltipText: "Rasurador" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=portfolio&template=bento",
      },
      {
        id: 4,
        thumbnail: telloThumbnail,
        logoImg: telloLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [
          { id: 1, Icon: FilesIcon, tooltipText: "Archivos" },
          { id: 2, Icon: MoneyIcon, tooltipText: "Dinero" },
          { id: 3, Icon: FocusIcon, tooltipText: "Foco" },
          { id: 4, Icon: CloudIcon, tooltipText: "Nube" },
          { id: 5, Icon: MegafoneIcon, tooltipText: "Megafono" },
        ],
        demoLink: "#",
        buyLink: "/pasarela?type=portfolio&template=tello",
      },
      {
        id: 5,
        thumbnail: heriaThumbnail,
        logoImg: heriaLogo,
        description:
          "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.",
        preferences: [{ id: 1, Icon: AnchorIcon, tooltipText: "Ancla" }, ,],
        demoLink: "#",
        buyLink: "/pasarela?type=portfolio&template=heria",
      },
    ],
  },
];

export default plans;
