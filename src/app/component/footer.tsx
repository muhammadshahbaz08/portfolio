import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="font-sourceSans bg-black text-white p-10 ">
      <div className=" flex mt-7 max-w-[70rem] mx-auto  flex-col-reverse sm:flex-row sm:gap-x-24  justify-between">
        {/* Discription */}
        <div className="space-y-6 mb-6">
          <h1 className="text-xl font-semibold tracking-wider">SHAHBAZ</h1>
          <p className="text-[15px] max-w-[30rem]">
            From the database to the browser, I ensure every part of the web
            application works together smoothly.
          </p>
        </div>
        {/* social's */}
        <div className="text-xl font-semibold tracking-wider mb-10  ">
          <h1>SOCIAL</h1>
          <div className="flex mt-6 space-x-4 flex-wrap ">
            <a
              href="https://github.com/muhammadshahbaz08/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="http://www.linkedin.com/in/developer-muhammad-shahbaz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>
      {/*Captions */}
      <div className="max-w-[70rem] border-t-2 border-gray-500 mx-auto mt-10">
        <div className="mx-auto text-center w-full  mt-10">
          Developed By 🧑‍💻{" "}
          <Link href={"/"} className="hover:text-blue-400">
            Shahbaz
          </Link>
          {""} | Design Insipiration By🎨 {""}
          <a
            href="https://www.linkedin.com/in/rammcodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Ram Maheshwari
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
