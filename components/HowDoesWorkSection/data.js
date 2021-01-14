// assets
import FirstIconStep from "../../assets/icons/computer.svg";
import SecondIconStep from "../../assets/icons/card.svg";
import ThirdIconStep from "../../assets/icons/email.svg";
import FourthIconStep from "../../assets/icons/layout.svg";

const stepsNumbers = [1, 2, 3, 4];
const stepsContent = [
  {
    id: 1,
    Icon: FirstIconStep,
    title: "Selecciona la plantilla que te guste",
  },
  {
    id: 2,
    Icon: SecondIconStep,
    title: "Elige un método de pago",
  },
  {
    id: 3,
    Icon: ThirdIconStep,
    title: "Envías la información correspondiente",
  },
  {
    id: 4,
    Icon: FourthIconStep,
    title: "Tienes tu sitio web al aire",
  },
];

export { stepsNumbers, stepsContent };
