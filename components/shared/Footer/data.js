// assets
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";

const navigationItems = [
  {
    id: 1,
    title: "Política de privacidad",
    link: "/politica-de-privacidad",
  },
  {
    id: 2,
    title: "Términos y condiciones",
    link: "/terminos-y-condiciones",
  },
  {
    id: 3,
    title: "Ayuda",
    link: "https://growly.tawk.help/",
    isExternal: true,
  },
];

const socialLinks = [
  {
    id: 1,
    Icon: FacebookIcon,
    link: "#",
  },
  {
    id: 2,
    Icon: InstagramIcon,
    link: "#",
  },
  {
    id: 3,
    Icon: TwitterIcon,
    link: "#",
  },
];

export { navigationItems, socialLinks };
