import Image from "next/image";

const features = [
  { id: 1, icon: "/home/desktop.svg", text: "Sitios web de última generación" },
  { id: 2, icon: "/home/speed.svg", text: "Optimización real en buscadores" },
  {
    id: 3,
    icon: "/home/lightning.svg",
    text: "Inteligencia artificial integrada",
  },
];

export function Features() {
  return (
    <ul className="hero-features">
      {features.map((feature) => (
        <li key={feature.id} className="hero-feature">
          <Image src={feature.icon} alt={feature.text} width="32" height="32" />
          <p className="hero-feature-text">{feature.text}</p>
        </li>
      ))}
    </ul>
  );
}
