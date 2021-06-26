// Features
const responsiveImage = "/images/features/responsive.png";
const customizeImage = "/images/features/customize.png";
const seoImage = "/images/features/seo.png";

// Hero
const afairHero = "/images/home-hero/afair-hero.jpg";
const afairMockup = "/images/home-hero/afair-mockup.png";
const dealiaHero = "/images/home-hero/dealia-hero.jpg";
const dealiaMockup = "/images/home-hero/dealia-mockup.png";
const strikHero = "/images/home-hero/strik-hero.jpg";
const strikMockup = "/images/home-hero/strik-mockup.png";
const zalepHero = "/images/home-hero/zalep-hero.jpg";
const zalepMockup = "/images/home-hero/zalep-mockup.png";

// Steps
const computerIcon = "/icons/computer.svg";
const cardIcon = "/icons/card.svg";
const emailIcon = "/icons/email.svg";
const layoutIcon = "/icons/layout.svg";

export const featuresData = [
  {
    id: 1,
    title: "Un sitio web adaptable a todos los dispositivos",
    description:
      "Todas nuestras plantillas son adaptables a dispositivos móviles como tablets y smartphones. Es decir, tu sitio web podrá ser navegado desde un celular.",
    image: responsiveImage,
    bgText: "Responsive",
  },
  {
    id: 2,
    title: "Configuración rápida y personalizada",
    description:
      "La plantilla que elijas, se ajustará a la imagen de tu marca (colores, logo, tipo de letra y contenido). No tendrás que tocar una sola  línea de código ó entenderte con terminología técnica, nuestro equipo se encargará de crear tu sitio web.",
    image: customizeImage,
    bgText: "Customizable",
  },
  {
    id: 3,
    title: "Fácil indexación y posicionamiento en Google",
    description:
      "Indexamos tu sitio web con las palabras claves que nos otorgues y hacemos que seas visible para Google. Con esto, ayudamos a que tu marca pueda estar en el motor de búsqueda más popular de internet y que muchos clientes potenciales puedan encontrarte.",
    image: seoImage,
    bgText: "Posicionamiento",
  },
];

export const heroImagesData = [
  {
    id: 1,
    thumbnail: afairMockup,
    background: afairHero,
  },
  {
    id: 2,
    thumbnail: dealiaMockup,
    background: dealiaHero,
  },
  {
    id: 3,
    thumbnail: strikMockup,
    background: strikHero,
  },
  {
    id: 4,
    thumbnail: zalepMockup,
    background: zalepHero,
  },
];

export const stepsData = {
  numbers: [1, 2, 3, 4],
  content: [
    {
      id: 1,
      icon: computerIcon,
      title: "Selecciona la plantilla que te guste",
    },
    {
      id: 2,
      icon: cardIcon,
      title: "Elige un método de pago",
    },
    {
      id: 3,
      icon: emailIcon,
      title: "Envías la información correspondiente",
    },
    {
      id: 4,
      icon: layoutIcon,
      title: "Tienes tu sitio web al aire",
    },
  ],
};
