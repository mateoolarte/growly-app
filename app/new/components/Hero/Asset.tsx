import Image from "next/image";

const IMG_ASSET = "/home/hero-cover.png";

export function Asset() {
  return (
    <div className="hero-asset">
      <Image
        src={IMG_ASSET}
        className="hero-image"
        alt="Sitios web con super poderes"
        width="704"
        height="515"
      />
    </div>
  );
}
