const coffeeIcon = '/icons/coffee.svg';
const foodIcon = '/icons/food.svg';
const restaurantIcon = '/icons/restaurant.svg';
const filesIcon = '/icons/files.svg';
const moneyIcon = '/icons/money.svg';
const focusIcon = '/icons/focus.svg';
const cloudIcon = '/icons/cloud.svg';
const megafoneIcon = '/icons/megafone.svg';
const gearIcon = '/icons/gear.svg';
const messageIcon = '/icons/message.svg';
const videoIcon = '/icons/video.svg';
const sofaIcon = '/icons/sofa.svg';
const buildingIcon = '/icons/building.svg';
const briefCaseIcon = '/icons/briefcase.svg';
const computerIcon = '/icons/computer-2.svg';
const girlIcon = '/icons/girl.svg';
const presentationIcon = '/icons/presentation.svg';
const speakerIcon = '/icons/speaker.svg';
const petIcon = '/icons/pet.svg';
const boxIcon = '/icons/box.svg';
const presentation2Icon = '/icons/presentation-2.svg';
const fruitIcon = '/icons/fruit.svg';
const flowerIcon = '/icons/flower.svg';
const runIcon = '/icons/run.svg';
const strechIcon = '/icons/strech.svg';
const weighIcon = '/icons/weigh.svg';
const scissorsIcon = '/icons/scissors.svg';
const razorIcon = '/icons/razor.svg';
const anchorIcon = '/icons/anchor.svg';

const rocketshipIcon = '/icons/rocketship.svg';
const funnelIcon = '/icons/funnel.svg';

const dealiaLogo = '/images/templates/dealia-logo.png';
const dealiaThumbnail = '/images/templates/dealia-thumbnail.png';
const deuterLogo = '/images/templates/deuter-logo.png';
const deuterThumbnail = '/images/templates/deuter-thumbnail.png';
const criketLogo = '/images/templates/criket-logo.png';
const criketThumbnail = '/images/templates/criket-thumbnail.png';
const snapLogo = '/images/templates/snap-logo.png';
const snapThumbnail = '/images/templates/snap-thumbnail.png';
const strikLogo = '/images/templates/strik-logo.png';
const strikThumbnail = '/images/templates/strik-thumbnail.png';
const ameliaLogo = '/images/templates/amelia-logo.png';
const ameliaThumbnail = '/images/templates/amelia-thumbnail.png';
const cretoLogo = '/images/templates/creto-logo.png';
const cretoThumbnail = '/images/templates/creto-thumbnail.png';
const veneziaLogo = '/images/templates/venezia-logo.png';
const veneziaThumbnail = '/images/templates/venezia-thumbnail.png';
const dynoLogo = '/images/templates/dyno-logo.png';
const dynoThumbnail = '/images/templates/dyno-thumbnail.png';
const printaLogo = '/images/templates/printa-logo.png';
const printaThumbnail = '/images/templates/printa-thumbnail.png';

const afairLogo = '/images/templates/afair-logo.png';
const afairThumbnail = '/images/templates/afair-thumbnail.png';
const zalepLogo = '/images/templates/zalep-logo.png';
const zalepThumbnail = '/images/templates/zalep-thumbnail.png';
const bentoLogo = '/images/templates/bento-logo.png';
const bentoThumbnail = '/images/templates/bento-thumbnail.png';
const telloLogo = '/images/templates/tello-logo.png';
const telloThumbnail = '/images/templates/tello-thumbnail.png';
const heriaLogo = '/images/templates/heria-logo.png';
const heriaThumbnail = '/images/templates/heria-thumbnail.png';

export const plansData = [
  {
    id: 1,
    title: 'starter',
    description:
      'El plan Starter está diseñado para empresas que necesitan comenzar su presencia digital con poco presupuesto y con una estructura de contenidos básica.',
    icon: rocketshipIcon,
    pricing: '$749.000',
    priceInCents: '74900000',
    premiumPrice: "$1'049.000",
    premiumPriceInCents: '104900000',
    features: [
      'Sitio web con hasta 5 secciones incluyendo el Home.',
      '1 Formulario de contacto',
      'Customización del sitio web con la identidad gráfica de la marca.',
      'Montaje de contenido inicial: textos, imágenes y configuración inicial.',
      'Soporte técnico por email.',
      'Hosting y dominio por un año.',
      'Certificado de seguridad SSL.',
      'Secciones administrables: Imagen de portada en el Home, galería de imágenes, texto e imágenes de todas las secciones.',
    ],
    templates: [
      {
        id: 1,
        name: 'dealia',
        thumbnail: dealiaThumbnail,
        logoImg: dealiaLogo,
        preferences: [
          { id: 1, icon: coffeeIcon, tooltipText: 'Cafetería' },
          { id: 2, icon: foodIcon, tooltipText: 'Heladería' },
          { id: 3, icon: restaurantIcon, tooltipText: 'Restaurante' },
        ],
        demoLink: 'http://dealia.getgrowly.com',
        templateLink: '/plantillas/starter/dealia',
      },
      {
        id: 2,
        name: 'deuter',
        thumbnail: deuterThumbnail,
        logoImg: deuterLogo,
        preferences: [
          {
            id: 1,
            icon: filesIcon,
            tooltipText: 'Administración y contabilidad',
          },
          { id: 2, icon: moneyIcon, tooltipText: 'Negocios y finanzas' },
          { id: 3, icon: focusIcon, tooltipText: 'Startups' },
          { id: 4, icon: cloudIcon, tooltipText: 'Tecnología' },
        ],
        demoLink: 'http://deuter.getgrowly.com',
        templateLink: '/plantillas/starter/deuter',
      },
      {
        id: 3,
        name: 'criket',
        thumbnail: criketThumbnail,
        logoImg: criketLogo,
        preferences: [
          {
            id: 1,
            icon: filesIcon,
            tooltipText: 'Administración y contabilidad',
          },
          { id: 2, icon: moneyIcon, tooltipText: 'Negocios y finanzas' },
          { id: 3, icon: focusIcon, tooltipText: 'Startups' },
          { id: 4, icon: cloudIcon, tooltipText: 'Tecnología' },
          { id: 5, icon: megafoneIcon, tooltipText: 'Agencias de marketing' },
        ],
        demoLink: 'http://criket.getgrowly.com',
        templateLink: '/plantillas/starter/criket',
      },
      {
        id: 4,
        name: 'snap',
        thumbnail: snapThumbnail,
        logoImg: snapLogo,
        preferences: [
          { id: 1, icon: gearIcon, tooltipText: 'Software y apps' },
          { id: 2, icon: focusIcon, tooltipText: 'Startups' },
          { id: 3, icon: cloudIcon, tooltipText: 'Tecnología' },
        ],
        demoLink:
          'https://drive.google.com/file/d/1vNsd_tJw1BNBgVkggyi1YYJ5bxStRgAW/view?usp=sharing',
        templateLink: '/plantillas/starter/snap',
      },
      {
        id: 5,
        name: 'strik',
        thumbnail: strikThumbnail,
        logoImg: strikLogo,
        preferences: [
          { id: 1, icon: messageIcon, tooltipText: 'Diseño y publicidad' },
          { id: 2, icon: videoIcon, tooltipText: 'Agencias audiovisuales' },
          { id: 3, icon: megafoneIcon, tooltipText: 'Agencias de marketing' },
        ],
        demoLink:
          'https://drive.google.com/file/d/1T3cy2aQ64UdDFF0gZILuu8TLIfu1eYP8/view?usp=sharing',
        templateLink: '/plantillas/starter/strik',
      },
      {
        id: 6,
        name: 'amelia',
        thumbnail: ameliaThumbnail,
        logoImg: ameliaLogo,
        preferences: [
          {
            id: 1,
            icon: sofaIcon,
            tooltipText: 'Diseño interior y mobiliario',
          },
          { id: 2, icon: buildingIcon, tooltipText: 'Arquitectura' },
        ],
        demoLink:
          'https://drive.google.com/file/d/1inz-RDJPoG8kg2Zmvq1S-xrxB4p8vbxS/view?usp=sharing',
        templateLink: '/plantillas/starter/amelia',
      },
      {
        id: 7,
        name: 'creto',
        thumbnail: cretoThumbnail,
        logoImg: cretoLogo,
        preferences: [
          { id: 1, icon: briefCaseIcon, tooltipText: 'Independientes' },
          { id: 2, icon: computerIcon, tooltipText: 'Marketers' },
          { id: 3, icon: girlIcon, tooltipText: 'Empresarios' },
          { id: 4, icon: presentationIcon, tooltipText: 'Coaching' },
          { id: 5, icon: speakerIcon, tooltipText: 'Speakers' },
        ],
        demoLink: 'http://creto.getgrowly.com',
        templateLink: '/plantillas/starter/creto',
      },
      {
        id: 8,
        name: 'venezia',
        thumbnail: veneziaThumbnail,
        logoImg: veneziaLogo,
        preferences: [
          { id: 1, icon: petIcon, tooltipText: 'Centros veterinarios' },
        ],
        demoLink: 'http://venezia.getgrowly.com',
        templateLink: '/plantillas/starter/venezia',
      },
      {
        id: 9,
        name: 'dyno',
        thumbnail: dynoThumbnail,
        logoImg: dynoLogo,
        preferences: [
          { id: 1, icon: boxIcon, tooltipText: 'Lanzamiento de producto' },
          { id: 2, icon: focusIcon, tooltipText: 'Startups' },
          { id: 3, icon: cloudIcon, tooltipText: 'Tecnología' },
        ],
        demoLink:
          'https://drive.google.com/file/d/1M3iPCSAbrcJ3Bi3Fcw9_sWMQ7OqwoFH1/view?usp=sharing',
        templateLink: '/plantillas/starter/dyno',
      },
      {
        id: 10,
        name: 'printa',
        thumbnail: printaThumbnail,
        logoImg: printaLogo,
        preferences: [
          { id: 1, icon: presentation2Icon, tooltipText: 'Eventos' },
        ],
        demoLink:
          'https://drive.google.com/file/d/1zcoALbtD84VTk7UOLUAbQSs22Xug6QqR/view?usp=sharing',
        templateLink: '/plantillas/starter/printa',
      },
    ],
  },
  {
    id: 2,
    title: 'portfolio',
    description:
      'El plan Portfolio está diseñado para empresas que requieran un sitio web con una estructura más grande y avanzada y que requieran comunicar más información, como sus servicios independientes o su portafolio y casos de éxito.',
    icon: funnelIcon,
    pricing: "$1'099.000",
    priceInCents: '109900000',
    premiumPrice: "$1'399.000",
    premiumPriceInCents: '139900000',
    features: [
      'Sitio web con hasta 8 secciones incluyendo el Home.',
      '2 Formularios de contacto',
      'Portafolio de productos o servicios',
      'Página descriptiva del producto o servicio',
      'Banner slider en el Home (Max. 5 imágenes)',
      'Hosting y dominio por un año.',
      'Ubicación en el mapa de Google',
      'Customización del sitio web con la identidad gráfica de la marca.',
      'Montaje de contenido inicial: textos, imágenes y configuración inicial.',
      'Soporte técnico por email.',
      'Certificado de seguridad SSL.',
      'Secciones administrables: Imágenes del banner del home, información de servicios ó productos, texto e imágenes de todas las secciones.',
    ],
    templates: [
      {
        id: 1,
        name: 'afair',
        thumbnail: afairThumbnail,
        logoImg: afairLogo,
        description:
          'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump.',
        preferences: [
          { id: 1, icon: fruitIcon, tooltipText: 'Yoga y relajación' },
          { id: 2, icon: flowerIcon, tooltipText: 'SPA' },
          { id: 3, icon: runIcon, tooltipText: 'Fitness y CAF' },
          { id: 4, icon: strechIcon, tooltipText: 'Academías de baile' },
        ],
        demoLink: 'https://afair.getgrowly.com/',
        templateLink: '/plantillas/portfolio/afair',
      },
      {
        id: 2,
        name: 'zalep',
        thumbnail: zalepThumbnail,
        logoImg: zalepLogo,
        preferences: [
          {
            id: 1,
            icon: weighIcon,
            tooltipText: 'Gimnasios y centros de entrenamiento',
          },
          { id: 2, icon: runIcon, tooltipText: 'Fitness y CAF' },
        ],
        demoLink: 'https://zalepp.getgrowly.com/',
        templateLink: '/plantillas/portfolio/zalep',
      },
      {
        id: 3,
        name: 'bento',
        thumbnail: bentoThumbnail,
        logoImg: bentoLogo,
        preferences: [
          { id: 1, icon: scissorsIcon, tooltipText: 'Salones de belleza' },
          { id: 2, icon: razorIcon, tooltipText: 'Barberias' },
        ],
        demoLink: 'http://bento.getgrowly.com',
        templateLink: '/plantillas/portfolio/bento',
      },
      {
        id: 4,
        name: 'tello',
        thumbnail: telloThumbnail,
        logoImg: telloLogo,
        preferences: [
          {
            id: 1,
            icon: filesIcon,
            tooltipText: 'Administración y contabilidad',
          },
          { id: 2, icon: moneyIcon, tooltipText: 'Negocios y finanzas' },
          { id: 3, icon: focusIcon, tooltipText: 'Startups' },
          { id: 4, icon: cloudIcon, tooltipText: 'Tecnología' },
          { id: 5, icon: megafoneIcon, tooltipText: 'Agencias de marketing' },
        ],
        demoLink: 'http://tello.getgrowly.com',
        templateLink: '/plantillas/portfolio/tello',
      },
      {
        id: 5,
        name: 'heria',
        thumbnail: heriaThumbnail,
        logoImg: heriaLogo,
        preferences: [
          { id: 1, icon: anchorIcon, tooltipText: 'Estudios de tattoo' },
        ],
        demoLink: 'http://heria.getgrowly.com',
        templateLink: '/plantillas/portfolio/heria',
      },
    ],
  },
];
