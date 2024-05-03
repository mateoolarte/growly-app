import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles["hero-title"]}>Descubre, aprende y emprende</h1>
      <p className={styles["hero-description"]}>
        Explora nuestros artículos expertos en Tecnología, E-commerce,
        Marketing, Desarrollo Web y Emprendimiento. Mantente al día con las
        últimas tendencias y herramientas que están transformando el mundo
        digital.
      </p>
    </section>
  );
}
