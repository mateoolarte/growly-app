const step1Img = '/images/steps/step1.png';
const step2Img = '/images/steps/step2.png';
const step3Img = '/images/steps/step3.png';

export interface IStep {
  id: number;
  stepNum: number;
  title: string;
  description: string;
  image: string;
}

export const stepsData = [
  {
    id: 1,
    stepNum: 1,
    title: 'Selecciona un plan',
    description:
      'Actualmente contamos con 2 planes: <br /> <br /> <strong>Plan Starter:</strong> Diseñado para empresas que buscan comenzar su presencia digital con poco presupuesto y con una estructura básica. <br /> <br /> <strong>Plan Portfolio:</strong> Para empresas que requieran un sitio web con una estructura más grande y avanzada y que requieran comunicar más información, como sus servicios independientes o su portafolio y casos de éxito',
    image: step1Img,
  },
  {
    id: 2,
    stepNum: 2,
    title: 'Elige y compra una plantilla',
    description:
      'Navega y conoce las plantillas que hay dentro de cada plan y selecciona la que más se acomode a tu negocio. Al seleccionarla, puedes proceder con la compra online por medio de la plataforma de pagos. Trabajamos con <strong>WOMPI</strong>, la plataforma de pagos del <strong>grupo Bancolombia</strong>.',
    image: step2Img,
  },
  {
    id: 3,
    stepNum: 3,
    title: 'Creación del sitio web',
    description:
      'Con la comprobación del pago te llegará un correo de bienvenida contándote los pasos a seguir, e inmediatamente el equipo de Growly se comunicará contigo para comenzar el proceso de la creación del sitio web. Una vez la información sea enviada, el sitio web estará listo en <strong>5 días hábiles</strong>.',
    image: step3Img,
  },
];
