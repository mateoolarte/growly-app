"use client"

import Image from "next/image";

import { Button } from "@/ui/Button";
import { IS_DEV_ENV, CMS_URL } from "@/constants/envs";

import "./Ai.scss";
import { scrollToSection } from "@/utils/scrollToSection";

export function Ai(props) {
  const { title, description, cta, image } = props;
  const imageData = image?.data?.attributes;
  const imageUrl = imageData?.url;
  const imageWidth = imageData?.width;
  const imageHeight = imageData?.height;
  const imageName = imageData?.name;

  return (
    <section className="ai">
      <div className="ai-container container-box">
        <div className="ai-content">
          <h2 className="ai-title">{title}</h2>
          <p className="ai-description">{description}</p>
          {cta && <Button onClick={() => scrollToSection(cta?.linkBtn)}>{cta?.textBtn}</Button>}
        </div>

        {imageUrl && (
          <div className="ai-asset">
            <Image
              src={`${IS_DEV_ENV ? `${CMS_URL}${imageUrl}` : imageUrl}`}
              width={imageWidth}
              height={imageHeight}
              alt={imageName}
              className="ai-image"
            />
          </div>
        )}
      </div>
    </section>
  );
}
