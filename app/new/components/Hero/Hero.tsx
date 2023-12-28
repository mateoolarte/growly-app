import { Button } from "@/components/Button";
import "./Hero.scss";
import Image from "next/image";

export function Hero(props) {
  const { title, description, cta, image } = props;
  const imageData = image?.data?.attributes;
  const imageUrl = imageData?.url;
  const imageWidth = imageData?.width;
  const imageHeight = imageData?.height;
  const imageName = imageData?.name;

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>

        {cta && (
          <>
            {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
            <Button className="hero-cta">{cta?.textBtn}</Button>
          </>
        )}

        {imageUrl && (
          <Image
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
            alt={imageName}
            className="hero-image"
            priority
          />
        )}
      </div>
    </section>
  );
}
