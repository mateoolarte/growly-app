import { ArrowCircleRight } from "@/assets/icons/ArrowCircleRight";
import { Button } from "@/components/Button";

export function Info() {
  return (
    <div className="hero-info">
      <h1 className="hero-title">Sitios web con super poderes</h1>
      <p className="hero-description">
        El futuro es digital y es el momento de construir tu imperio en línea.
        Nuestra herramienta te proporciona los cimientos sólidos y las
        herramientas necesarias para crecer y prosperar en el mundo digital.
      </p>
      <Button type="button" className="hero-cta">
        Comienza ahora
        <ArrowCircleRight />
      </Button>
    </div>
  );
}
