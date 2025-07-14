import DesktopTransform from "../assets/desktop/image-transform.jpg";
import MobileTransform from "../assets/mobile/image-transform.jpg";

import DesktopStandOut from "../assets/desktop/image-stand-out.jpg";
import MobileStandOut from "../assets/mobile/image-stand-out.jpg";

import DesktopGraphicDesign from "../assets/desktop/image-graphic-design.jpg";
import MobileGraphicDesign from "../assets/mobile/image-graphic-design.jpg";

import DesktopPhotography from "../assets/desktop/image-photography.jpg";
import MobilePhotography from "../assets/mobile/image-photography.jpg";

function LargeSection({ image, heading, paragraph, direction, color }) {
  const styles = getComputedStyle(document.documentElement);
  const mdBreakpoint = styles.getPropertyValue("--breakpoint-md");

  const directionVariants = {
    normal: "md:flex-row",
    reverse: "md:flex-row-reverse",
  };

  const colorVariants = {
    yellow: "after:border-agency-yellow-500",
    red: "after:border-agency-red-400",
  };

  return (
    <div className={`${directionVariants[direction]} md:flex`}>
      <picture className="md:flex-1/2">
        <source srcSet={image.desktop} media={`(min-width: ${mdBreakpoint})`} />
        <img src={image.mobile} className="h-full w-full object-cover" />
      </picture>
      <section className="bg-agency-white flex flex-col items-center justify-center px-6 py-12 text-center md:flex-1/2 md:items-start md:text-start lg:p-18 xl:p-30">
        <h2 className="font-accent text-agency-grey-950 mb-4 text-3xl font-black lg:mb-8 lg:text-4xl">
          {heading}
        </h2>
        <p className="text-agency-grey-550 mb-4 font-semibold lg:mb-8">
          {paragraph}
        </p>
        <a
          className={`${colorVariants[color]} font-accent text-agency-grey-950 relative z-0 w-min px-1 font-black whitespace-nowrap uppercase after:absolute after:inset-x-0 after:bottom-[0.125rem] after:-z-1 after:rounded-sm after:border-[0.25rem] after:border-solid after:opacity-25 hover:after:opacity-100`}
          href=""
        >
          Learn more
        </a>
      </section>
    </div>
  );
}

function SmallSection({ image, heading, paragraph, color }) {
  const colorVariants = {
    green: "text-agency-green-800",
    blue: "text-agency-blue-800",
  };

  return (
    <section
      style={{
        "--desktop-bg-url": `url(${image.desktop})`,
        "--mobile-bg-url": `url(${image.mobile})`,
      }}
      className={`${colorVariants[color]} flex aspect-5/8 flex-col justify-end bg-[image:var(--mobile-bg-url)] bg-cover bg-center px-4 py-16 text-center md:aspect-6/5 md:bg-[image:var(--desktop-bg-url)] md:px-8 md:py-8 lg:px-16 xl:px-40`}
    >
      <h3 className="font-accent mb-8 text-3xl font-black md:mt-48">
        {heading}
      </h3>
      <p className="min-h-[3lh] text-sm font-semibold md:min-h-[4lh]">
        {paragraph}
      </p>
    </section>
  );
}

function About() {
  return (
    <>
      <LargeSection
        image={{
          desktop: DesktopTransform,
          mobile: MobileTransform,
        }}
        heading="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        direction="reverse"
        color="yellow"
      />
      <LargeSection
        image={{
          desktop: DesktopStandOut,
          mobile: MobileStandOut,
        }}
        heading="Stand out to the right audience"
        paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        direction="normal"
        color="red"
      />
      <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2">
        <SmallSection
          image={{
            desktop: DesktopGraphicDesign,
            mobile: MobileGraphicDesign,
          }}
          heading="Graphic design"
          paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          color="green"
        />
        <SmallSection
          image={{
            desktop: DesktopPhotography,
            mobile: MobilePhotography,
          }}
          heading="Photography"
          paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="blue"
        />
      </div>
    </>
  );
}

export default About;
