import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="relative rounded-xl bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-black backdrop-blur-cyber py-32 text-blue-50 sm:overflow-hidden glow-effect">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <p className="mb-12 font-general text-sm uppercase tracking-wider text-glow">
            Join CYSCOM
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> ha<b>c</b>king t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] text-glow"
          />

          <Button 
            title="contact us" 
            containerClass="mt-16 cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 animate-pulse-glow" 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
