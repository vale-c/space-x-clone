import { ReactComponent as SpaceXLogo } from '../assets/spacex.svg';
import { useEffect, useRef, useState } from 'react';

type MenuItem = {
  href: string;
  title: string;
};

const TopBarMenuItems: MenuItem[] = [
  { href: 'falcon9', title: 'FALCON 9' },
  { href: 'falconheavy', title: 'FALCON HEAVY' },
  { href: 'dragon', title: 'DRAGON' },
  { href: 'starship', title: 'STARSHIP' },
  { href: 'humanspaceflight', title: 'HUMAN SPACEFLIGHT' },
  { href: 'rideshare', title: 'RIDESHARE' },
  { href: 'starshield', title: 'STARSHIELD' },
  { href: 'starlink', title: 'STARLINK' },
];

const SideBarMenuItems: MenuItem[] = [
  { href: 'mission', title: 'mission' },
  { href: 'launches', title: 'launches' },
  { href: 'careers', title: 'careers' },
  { href: 'updates', title: 'updates' },
  { href: 'shop', title: 'shop' },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: Event) => {
    if (node?.current?.contains(e.target as Node)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="py-0 lg:py-6 justify-between lg:flex break-keep px-16 justify-between items-center bg-black xl:px-52">
        <div className="flex">
          <SpaceXLogo className="hidden lg:block w-56 h-auto mr-12" />
          <ul className="hidden lg:flex mt-4 space-x-8 font-bold text-xs text-white tracking-tight">
            {TopBarMenuItems.map((item: MenuItem) => (
              <li key={item.title}>
                <a
                  href="#!"
                  className="hover:underline ease-in-out duration-300 uppercase"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between lg:absolute right-12 md:flex justify-items-end items-center mt-4">
          <a href="#!" className="lg:text-white font-bold text-xs uppercase">
            shop
          </a>
          <SpaceXLogo className="lg:hidden w-36" />
          <button onClick={handleToggle} className="text-white text-2xl ml-8">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      <aside
        ref={node}
        className={`transform top-0 right-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="text-white p-5">
          <button onClick={handleToggle} className="text-xl float-right">
            {isOpen ? '✕' : ''}
          </button>
          <ul className="space-y-4 text-right mt-12">
            {SideBarMenuItems.map((item: MenuItem) => (
              <li key={item.title}>
                <a
                  href="#!"
                  className="hover:underline ease-in-out duration-300 uppercase"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
