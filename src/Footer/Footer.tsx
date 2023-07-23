type FooterLink = {
  title: string;
  link: string;
};

const footerLink: FooterLink[] = [
  {
    title: 'twitter',
    link: 'https://twitter.com/spacex',
  },
  {
    title: 'youtube',
    link: 'https://www.youtube.com/spacex',
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/spacex/',
  },
  {
    title: 'flickr',
    link: 'https://www.flickr.com/photos/spacex',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/company/spacex',
  },
  {
    title: 'privacy policy',
    link: 'https://www.spacex.com/media/privacy_policy_spacex.pdf',
  },
  {
    title: 'suppliers',
    link: 'https://www.spacex.com/supplier/',
  },
];

export const Footer = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <footer className="bottom-0 ">
        <div className="flex flex-col items-center px-4 py-4 sm:flex-row sm:justify-center sm:space-x-4 sm:px-16 sm:py-8 xl:px-52 mx-auto sm:max-w-full">
          <h4 className="text-white text-xs uppercase font-light tracking-tight mb-4 sm:mb-0 sm:mr-10">
            spacex © {new Date().getFullYear()}
          </h4>
          <div className="flex flex-row space-x-3 sm:space-x-10 sm:pb-0">
            {footerLink.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target="_blank"
                className="hover:text-slate-300 ease-in-out duration-500 text-white text-xs uppercase font-medium tracking-tight"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
