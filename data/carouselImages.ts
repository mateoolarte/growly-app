const afairHero = '/images/carousel-images/afair-hero.jpg';
const afairMockup = '/images/carousel-images/afair-mockup.png';
const dealiaHero = '/images/carousel-images/dealia-hero.jpg';
const dealiaMockup = '/images/carousel-images/dealia-mockup.png';
const strikHero = '/images/carousel-images/strik-hero.jpg';
const strikMockup = '/images/carousel-images/strik-mockup.png';
const zalepHero = '/images/carousel-images/zalep-hero.jpg';
const zalepMockup = '/images/carousel-images/zalep-mockup.png';

export interface ICarouselImage {
  id: number;
  thumbnail: string;
  background: string;
}

export const carouselImages = [
  {
    id: 1,
    thumbnail: afairMockup,
    background: afairHero,
  },
  {
    id: 2,
    thumbnail: dealiaMockup,
    background: dealiaHero,
  },
  {
    id: 3,
    thumbnail: strikMockup,
    background: strikHero,
  },
  {
    id: 4,
    thumbnail: zalepMockup,
    background: zalepHero,
  },
];
