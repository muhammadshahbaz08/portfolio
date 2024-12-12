import Image from "next/image";
import mouseScroll from "../../../public/images/mouse-scroll.gif";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-overlay-white to-overlay-white z-10"></div>
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center z-0"></div>
      <div className="relative h-full font-sourceSans flex flex-col items-center justify-center z-20">
        {/* Hero Content */}
        <div className="flex flex-col text-center space-y-6 sm:space-y-8 ">
          <h1 className="text-5xl text-[#111111] sm:text-5xl  md:text-[70px] md:leading-[80px]  font-sourceSansBold  font-extrabold tracking-wider">
            HEY, I'M SHAHBAZ
          </h1>
          <p className="mx-auto text-[#333333] text-[23px]  md:leading-10 flex-wrap w-3/5">
            From the Database to the Browser, I ensure every part of the web
            application works together smoothly.
          </p>
          {/* Button */}
          <div className="flex justify-center ">
            <a
              href={"#projects"}
              className="text-white bg-primary border-0 py-4 px-16  rounded-md text-xl font-sourceSansBold font-semibold tracking-widest mt-4 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 duration-150"
            >
              PROJECTS
            </a>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-r-lg hidden md:flex flex-col items-center space-y-8">
          <a
            href="https://github.com/muhammadshahbaz08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="http://www.linkedin.com/in/developer-muhammad-shahbaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube size={30} />
          </a>
        </div>
        {/* Mouse Scroll */}
        <div className="absolute bottom-10 w-full flex justify-center  invisible md:visible">
          <Image
            src={mouseScroll}
            alt="mouse-scroll-animation"
            width={40}
            height={40}
            className="w-[40px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
