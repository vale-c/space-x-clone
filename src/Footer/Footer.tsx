type FooterLink = {
  title: string;
  link: string;
};

const footerLink: FooterLink[] = [
  {
    title: "twitter",
    link: "https://twitter.com/spacex",
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/spacex",
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/spacex/",
  },
  {
    title: "flickr",
    link: "https://www.flickr.com/photos/spacex",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/company/spacex",
  },
  {
    title: "privacy policy",
    link: "https://www.spacex.com/media/privacy_policy_spacex.pdf",
  },
  {
    title: "suppliers",
    link: "https://www.spacex.com/supplier/",
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="bottom-0">
        <div className="flex justify-center items-center bg-black px-16 py-8 xl:px-52">
          <div className="flex flex-row space-x-10">
            <h4 className="text-white text-xs uppercase font-light tracking-tight uppercase">
              spacex © {new Date().getFullYear()}
            </h4>
            {footerLink.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target="_blank"
                className="hover:text-slate-300 ease-in-out duration-500 text-white text-xs uppercase font-medium tracking-tight uppercase"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
