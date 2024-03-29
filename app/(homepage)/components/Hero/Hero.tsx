"use client";

import Image from "next/image";

import { IS_DEV_ENV, CMS_URL } from "@/constants/envs";
import { Button } from "@/ui/Button";

import "./Hero.scss";
import { ArrowCircleRight } from "@/assets/icons/ArrowCircleRight";
import { scrollToSection } from "@/utils/scrollToSection";

export function Hero(props) {
  const { title, description, cta, image } = props;
  const imageData = image?.data?.attributes;
  const imageUrl = imageData?.url;
  const imageWidth = imageData?.width;
  const imageHeight = imageData?.height;
  const imageName = imageData?.name;

  return (
    <section className="hero" id="hero">
      <div className="container-box text-center">
        <h1
          className="hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="hero-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {cta && (
          <>
            {cta?.title && <p className="hero-ctaTitle">{cta?.title}</p>}
            <Button
              className="hero-cta"
              onClick={() => scrollToSection(cta?.linkBtn)}
            >
              {cta?.textBtn}
              <ArrowCircleRight />
            </Button>
          </>
        )}

        {imageUrl && (
          <Image
            src={`${IS_DEV_ENV ? `${CMS_URL}${imageUrl}` : imageUrl}`}
            width={imageWidth}
            height={imageHeight}
            alt={imageName}
            className="hero-image"
          />
        )}
      </div>
    </section>
  );
}
