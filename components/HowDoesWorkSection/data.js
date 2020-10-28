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
    title: "Selecciona una plantilla",
  },
  {
    id: 2,
    Icon: SecondIconStep,
    title: "Elige un plan y método de pago",
  },
  {
    id: 3,
    Icon: ThirdIconStep,
    title: "Nos envías tu información",
  },
  {
    id: 4,
    Icon: FourthIconStep,
    title: "Tienes tu sitio web al aire",
  },
];

export { stepsNumbers, stepsContent };
