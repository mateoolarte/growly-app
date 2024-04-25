import { File } from "@/ui/icons/File";
import { Video } from "@/ui/icons/Video";
import { Layers } from "@/ui/icons/Layers";
import { Barbell } from "@/ui/icons/Barbell";

export const firstTimeData = [
  // {
  //   id: 1,
  //   Icon: File,
  //   title: "Google Form",
  //   description:
  //     "Completa el formulario para recopilar la información necesaria que necesitamos para comenzar con el diseño de tu sitio web.",
  //   btn: {
  //     label: "Continuar con el formulario",
  //     url: "https://docs.google.com/forms/d/e/1FAIpQLSdU1fslnvyDJtqriQ1QQNRP_d1SpciyTVNaYh1mRm7V2QQ11g/viewform?usp=sf_link",
  //     target: "_blank",
  //   },
  // },
  {
    id: 2,
    Icon: Video,
    title: "Entrevista",
    description:
      "Agenda una entrevista de 30 minutos donde podremos conocer mucho mas de cerca tus requerimientos.",
    btn: {
      label: "Agendar entrevista",
      url: "https://cal.com/usegrowly/30min",
      target: "_blank",
    },
  },
];

export const defaultData = (handleMarketplace) => [
  {
    id: 1,
    Icon: Layers,
    title: "Administrar tu sitio web",
    description:
      "Administra el contenido de tu sitio web como imágenes, textos, sliders y demás componentes dinámicos.",
    btn: {
      label: "Ir al administrador",
      url: "/",
      target: "_blank",
    },
  },
  // {
  //   id: 2,
  //   Icon: Barbell,
  //   title: "Escalar tu sitio web",
  //   description:
  //     "Adiciona superpoderes a tu sitio web, explora las opciones que tenemos o crea una solicitud con lo que necesitas.",
  //   btn: {
  //     label: "Crear solicitud",
  //     action: handleMarketplace,
  //   },
  // },
];
