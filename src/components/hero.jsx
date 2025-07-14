import ArrowDown from "../assets/icon-arrow-down.svg?react";

function Hero() {
  return (
    <div className="font-accent text-agency-white flex h-[75%] flex-col items-center bg-[url(./assets/mobile/image-header.jpg)] bg-cover bg-bottom bg-no-repeat py-36 text-center text-4xl font-black tracking-widest uppercase md:bg-[url(./assets/desktop/image-header.jpg)]">
      <h1 className="mb-12">We are creatives</h1>
      <ArrowDown className="w-8" />
    </div>
  );
}

export default Hero;
