import { ReactComponent as Chevron } from '../assets/chevron.svg';
import hero1 from '../assets/hero-1.jpeg';
import hero2 from '../assets/hero-2.jpeg';
import hero3 from '../assets/hero-3.jpeg';
import hero4 from '../assets/hero-4.jpeg';

type HeroCard = {
  header: string;
  image: string;
};

const heroCards: HeroCard[] = [
  {
    header: 'starlink mission',
    image: hero1,
  },
  {
    header: 'starlink mission',
    image: hero2,
  },
  {
    header: 'esa euclid mission',
    image: hero3,
  },
  {
    header: 'starship flight test',
    image: hero4,
  },
];

export const Hero = () => {
  return (
    <>
      {heroCards.map((card, index) => (
        <section key={index} className="relative">
          <img
            src={card.image}
            alt="hero"
            className="w-full object-cover min-h-[850px]"
          />
          <section className="absolute bottom-36 left-16 xl:left-52">
            <h4 className="mb-2 text-xl uppercase font-light tracking-tight text-white">
              recent launch
            </h4>
            <h2 className="text-3xl lg:text-5xl uppercase font-bold tracking-tight text-white">
              {card.header}
            </h2>
            <button className="bg-transparent border-2 text-white text-xs px-12 py-4 mt-4 uppercase tracking-tight">
              rewatch
            </button>
          </section>
          <Chevron className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse fill-transparent" />
        </section>
      ))}
    </>
  );
};
