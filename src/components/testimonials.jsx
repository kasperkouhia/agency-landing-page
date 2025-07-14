import Emily from "../assets/image-emily.jpg";
import Thomas from "../assets/image-thomas.jpg";
import Jennie from "../assets/image-jennie.jpg";

function Testimonial({ image, testimonial, name, title }) {
  return (
    <div className="flex flex-col items-center text-center">
      <figure className="mb-8 w-16 overflow-hidden rounded-full">
        <img src={image} />
      </figure>
      <p className="text-agency-grey-600 mb-8 font-semibold md:min-h-[5lh]">
        {testimonial}
      </p>
      <p className="text-agency-grey-950 font-accent mb-2 font-black">{name}</p>
      <p className="text-agency-grey-400 text-xs font-semibold">{title}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-agency-white px-6 py-12 lg:px-12 lg:py-24">
      <h4 className="text-agency-grey-400 font-accent mb-12 text-center font-black tracking-[0.2em] uppercase lg:mb-24 lg:text-lg">
        Client testimonials
      </h4>
      <div className="flex flex-col gap-12 md:flex-row md:gap-6 lg:gap-12">
        <Testimonial
          image={Emily}
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          title="Marketing Director"
        />
        <Testimonial
          image={Thomas}
          testimonial="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          title="Chief Operating Officer"
        />
        <Testimonial
          image={Jennie}
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          title="Business Owner"
        />
      </div>
    </div>
  );
}

export default Testimonials;
