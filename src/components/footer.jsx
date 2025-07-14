import Logo from "../assets/logo.svg?react";

import Facebook from "../assets/icon-facebook.svg?react";
import Instagram from "../assets/icon-instagram.svg?react";
import Twitter from "../assets/icon-twitter.svg?react";
import Pinterest from "../assets/icon-pinterest.svg?react";

function List({ items, gap }) {
  const gapVariants = {
    large: "gap-12",
    small: "gap-6",
  };

  return (
    <ul className={`${gapVariants[gap]} mb-16 flex`}>
      {items.map((item, index) => (
        <li key={index}>
          <a className="hover:text-agency-white font-semibold" href="">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="text-agency-green-800 bg-agency-green-500 flex flex-col items-center">
      <Logo className="mt-16 mb-8 w-36" />
      <List items={["About", "Services", "Projects"]} gap="large" />
      <List
        items={[
          <Facebook className="w-4" />,
          <Instagram className="w-4" />,
          <Twitter className="w-4" />,
          <Pinterest className="w-4" />,
        ]}
        gap="small"
      />
    </footer>
  );
}

export default Footer;
