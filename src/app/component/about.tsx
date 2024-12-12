import about from "../constants/about";
const About = () => {
  return (
    <section
      className=" font-sourceSans px-7 py-28 bg-zinc-50 scroll-smooth"
      id="about"
    >
      {/* About Me Heading  */}
      <div className="flex flex-col items-center mx-auto space-y-5 max-w-3xl">
        <h1 className="text-[42px] text-[#111111] font-sourceSansBold  font-bold tracking-wider ">
          ABOUT ME
        </h1>
        <p className="border-2 border-primary w-8 rounded-2xl "></p>
        <p className="text-[#555555] text-[21px] font-medium text-center block leading-8">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 gap-y-9 mt-20 md:mx-auto  max-w-[75rem]  md:grid-cols-2 md:gap-32">
        {/* Get to Know Me */}
        <div className="max-w-lg ">
          <h3 className="text-[29px] font-sourceSansBold  leading-10">
            Get to Know me!
          </h3>
          <div className="text-left text-xl text-[#666666] leading-[32px] tracking-wider ">
            {about.intro}
            <button className="text-white bg-primary my-8 border-0 py-4 px-10 rounded-md text-base font-sourceSansBold font-bold tracking-wider shadow-2xl uppercase transition ease-in-out delay-150 hover:-translate-y-1 duration-150">
              <a href={"#contact"}>Contact</a>
            </button>
          </div>
        </div>
        {/* My Skils*/}
        <div className="max-w-xl">
          <h1 className="text-[29px] font-sourceSansBold  leading-10">
            My Skills
          </h1>
          <div className="flex flex-wrap mt-8 text-base font-sourceSans font-semibold  text-[#666666]">
            {about.skills.map((skill, index) => (
              <div
                className="bg-[#e7e7e7] px-6 py-3 mb-4 mr-4 rounded-lg"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
