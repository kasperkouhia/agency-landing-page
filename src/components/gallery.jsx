import DesktopMilkBottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import MobileMilkBottles from "../assets/mobile/image-gallery-milkbottles.jpg";

import DesktopOrange from "../assets/desktop/image-gallery-orange.jpg";
import MobileOrange from "../assets/mobile/image-gallery-orange.jpg";

import DesktopCone from "../assets/desktop/image-gallery-cone.jpg";
import MobileCone from "../assets/mobile/image-gallery-cone.jpg";

import DesktopSugarCubes from "../assets/desktop/image-gallery-sugar-cubes.jpg";
import MobileSugarCubes from "../assets/mobile/image-gallery-sugar-cubes.jpg";

function Picture({ image }) {
  const styles = getComputedStyle(document.documentElement);
  const mdBreakpoint = styles.getPropertyValue("--breakpoint-md");

  return (
    <picture>
      <source srcSet={image.desktop} media={`(min-width: ${mdBreakpoint})`} />
      <img src={image.mobile} className="w-full object-cover" />
    </picture>
  );
}

function Gallery() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
      <Picture
        image={{ desktop: DesktopMilkBottles, mobile: MobileMilkBottles }}
      />
      <Picture image={{ desktop: DesktopOrange, mobile: MobileOrange }} />
      <Picture image={{ desktop: DesktopCone, mobile: MobileCone }} />
      <Picture
        image={{ desktop: DesktopSugarCubes, mobile: MobileSugarCubes }}
      />
    </div>
  );
}

export default Gallery;
