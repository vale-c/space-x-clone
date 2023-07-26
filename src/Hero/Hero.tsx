import { ReactComponent as Chevron } from '../assets/chevron.svg';
import hero1 from '../assets/hero-1.jpg';
import hero3 from '../assets/hero-3.jpeg';
import hero4 from '../assets/hero-4.jpeg';

type HeroCard = {
  header: string;
  image: string;
  link: string;
  launchType?: 'upcoming' | 'recent';
};

const heroCards: HeroCard[] = [
  {
    header: 'starlink mission',
    image: hero1,
    link: 'https://www.spacex.com/launches/mission/?missionId=sl-6-6',
    launchType: 'recent',
  },
  {
    header: 'esa euclid mission',
    image: hero3,
    link: 'https://www.spacex.com/launches/mission/?missionId=euclid',
    launchType: 'recent',
  },
  {
    header: 'starship flight test',
    image: hero4,
    link: 'https://www.spacex.com/launches/mission/?missionId=starship-flight-test',
  },
];

export const Hero = () => {
  return (
    <>
      {heroCards.map((card, index) => (
        <section key={`${card.header}-${index}`} className="relative">
          <img
            src={card.image}
            alt="hero"
            className="w-full object-cover min-h-[850px]"
          />
          <section className="absolute bottom-36 left-6 xl:left-24 drop-shadow-lg">
            {card.launchType && (
              <h4 className="mb-1 text-xl uppercase font-light tracking-tight text-white">
                {card.launchType} launch
              </h4>
            )}
            <h2 className="text-3xl lg:text-5xl uppercase font-bold tracking-tight text-white mb-8 sm:mb-12">
              {card.header}
            </h2>
            <a
              href={card.link}
              className="bg-gradient-to-t from-transparent to-transparent border-2 text-white text-xs font-semibold px-16 py-5 uppercase tracking-tight transition-all duration-500 ease-in-out hover:text-black hover:from-white hover:to-white"
            >
              {card.launchType === 'upcoming' ? 'watch' : 'rewatch'}
            </a>
          </section>
          <Chevron className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse fill-transparent" />
        </section>
      ))}
    </>
  );
};
