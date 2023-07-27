import { ReactComponent as SpaceXLogo } from '../assets/spacex.svg';
import { useEffect, useRef, useState } from 'react';

type MenuItem = {
  href: string;
  title: string;
};

const MenuItem = ({
  item,
  className,
}: {
  item: MenuItem;
  className: string;
}) => (
  <li key={item.title}>
    <a href={item.href} className={className}>
      {item.title}
    </a>
  </li>
);

const MenuItems: { [key: string]: MenuItem[] } = {
  TopBarMenu: [
    { href: 'https://www.spacex.com/vehicles/falcon-9/', title: 'falcon 9' },
    {
      href: 'https://www.spacex.com/vehicles/falcon-heavy/',
      title: 'falcon heavy',
    },
    { href: 'https://www.spacex.com/vehicles/dragon/', title: 'dragon' },
    { href: 'https://www.spacex.com/vehicles/starship/', title: 'starship' },
    {
      href: 'https://www.spacex.com/human-spaceflight/',
      title: 'human spaceflight',
    },
    { href: 'https://www.spacex.com/rideshare/', title: 'rideshare' },
    { href: 'https://www.spacex.com/starshield/', title: 'starshield' },
    { href: 'https://www.starlink.com/', title: 'starlink' },
  ],
  SideBarMenu: [
    { href: 'https://www.spacex.com/mission/', title: 'mission' },
    { href: 'https://www.spacex.com/launches/', title: 'launches' },
    { href: 'https://www.spacex.com/careers/', title: 'careers' },
    { href: 'https://www.spacex.com/updates/', title: 'updates' },
    { href: 'https://shop.spacex.com/', title: 'shop' },
  ],
};

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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="py-0 lg:py-6 justify-between lg:flex break-keep px-16 justify-between items-center xl:px-24 absolute w-full z-10 mix-blend-lighten">
        <div className="flex">
          <SpaceXLogo className="hidden lg:block w-56 h-auto mr-12 " />
          <ul className="hidden lg:flex mt-4 space-x-8 font-bold text-xs text-white tracking-tight">
            {MenuItems.TopBarMenu.map((item: MenuItem) => (
              <MenuItem
                key={item.title}
                item={item}
                className="hover:underline ease-in-out duration-300 uppercase"
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-between right-12 lg:absolute md:flex justify-items-end items-center mt-4">
          <a
            href="https://shop.spacex.com/"
            className="lg:text-white font-bold text-xs uppercase"
          >
            shop
          </a>
          <SpaceXLogo className="lg:hidden w-36" />
          <button
            className="flex flex-col h-4 w-4 rounded justify-center items-center group bg-transparent px-8"
            onClick={handleToggle}
          >
            <span
              className={`block w-4 h-2 bg-white mb-1 transition-transform ${
                isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'
              }`}
            ></span>
            <span
              className={`block w-4 h-2 bg-white mb-1 transition-opacity ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-4 h-2 bg-white transition-transform ${
                isOpen
                  ? '-rotate-45 -translate-y-1.5'
                  : 'rotate-0 translate-y-0'
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <aside
        ref={node}
        className={`transform top-0 right-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="text-white p-8">
          <button onClick={handleToggle} className="text-xl float-right">
            {isOpen ? '✕' : ''}
          </button>
          <ul className="divide-y divide-slate-600 text-right mt-12">
            {MenuItems.SideBarMenu.map((item: MenuItem) => (
              <MenuItem
                key={item.title}
                item={item}
                className="uppercase hover:text-slate-300 ease-in-out duration-500"
              />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
