import { useState } from "react";

import Logo from "../assets/logo.svg?react";
import Hamburger from "../assets/icon-hamburger.svg?react";

import DesktopHeader from "../assets/desktop/image-header.jpg";
import MobileHeader from "../assets/mobile/image-header.jpg";

import ArrowDown from "../assets/icon-arrow-down.svg?react";

function DesktopMenu({ className, items }) {
  return (
    <div className={className}>
      <ul className="flex items-center gap-6 lg:gap-12">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className={`${
                index === items.length - 1
                  ? "font-accent text-agency-grey-950 bg-agency-white hover:text-agency-white hover:bg-agency-white/25 rounded-full px-6 py-4 text-xs font-bold uppercase lg:text-sm"
                  : "text-agency-white text-sm font-semibold lg:text-base"
              } block`}
              href=""
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenu({ className, items }) {
  const styles = getComputedStyle(document.documentElement);
  const agencyWhite = styles.getPropertyValue("--color-agency-white");

  return (
    <div className={className}>
      <ul
        style={{
          "--base": "3rem",
          "--height": "1.5rem",
          "--pos": "100%",
          "--color": agencyWhite,
        }}
        className="bg-agency-white absolute m-6 flex w-[calc(100%_-_var(--spacing)_*_12)] flex-col items-center gap-6 px-12 py-8 [border-image:_fill_0//var(--height)_conic-gradient(var(--color)_0_0)] [clip-path:_polygon(0_0,_0_100%,_100%_100%,_100%_0,_min(100%,_var(--pos)_+_var(--base)/2)_0,_var(--pos)_calc(-1_*_var(--height)),_max(0%,_var(--pos)_-_var(--base)/2)_0)]"
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              className={`${
                index === items.length - 1
                  ? "font-accent text-agency-grey-950 bg-agency-yellow-500 hover:bg-agency-yellow-500/25 rounded-full px-6 py-4 text-sm font-bold uppercase"
                  : "text-agency-grey-550 font-semibold"
              } inline-block`}
              href=""
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        "--desktop-bg-url": `url(${DesktopHeader})`,
        "--mobile-bg-url": `url(${MobileHeader})`,
      }}
      className="text-agency-white bg-[image:var(--mobile-bg-url)] bg-cover bg-bottom bg-no-repeat md:bg-[image:var(--desktop-bg-url)]"
    >
      <div className="flex justify-between px-6 py-8 lg:px-10 lg:py-12">
        <Logo className="w-28 lg:w-40" />
        <button
          type="button"
          className="hover:cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Hamburger className="h-4" />
        </button>
        <DesktopMenu
          className="hidden md:block"
          items={["About", "Services", "Projects", "Contact"]}
        />
      </div>
      <MobileMenu
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}
        items={["About", "Services", "Projects", "Contact"]}
      />
      {/* aspect-4/5 px-6 py-14 and limit to (100vh - top bar height), also break/change aspect ratio when need be */}
      {/* Consider something similar for the graphic design and photography sections found in about.jsx? */}
      <div className="flex flex-col items-center px-8 pt-[20%] pb-[40%] md:pt-[4%] md:pb-[22%]">
        <h1 className="font-accent mb-12 text-center text-4xl font-black tracking-[0.2em] uppercase lg:mb-24 lg:text-5xl">
          We are creatives
        </h1>
        <ArrowDown className="w-8" />
      </div>
    </header>
  );
}

export default Header;
