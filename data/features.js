// assets
import responsiveImage from "../assets/features/responsive.png";
import customizeImage from "../assets/features/customize.png";
import seoImage from "../assets/features/seo.png";

const features = [
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

export default features;
