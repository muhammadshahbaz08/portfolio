import Image from "next/image";
import { FaGithub, FaNpm, FaYoutube } from "react-icons/fa";
import projects from "../constants/projects";
const Projects = () => {
  return (
    <section className="font-sourceSans px-7 py-28" id="projects">
      {/* Projects Heading  */}
      <div className="flex flex-col items-center mx-auto space-y-5 max-w-3xl ">
        <h1 className="text-4xl font-sourceSansBold  font-bold tracking-wider ">
          PROJECTS
        </h1>
        <p className="border-2 border-primary w-8 rounded-2xl "></p>
        <p className="text-slate-600 text-xl text-center block ">
          Discover the various projects I've worked on, showcasing my
          development skills and the technologies I've mastered
        </p>
      </div>

      {/* Projects  */}
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
          {
            projects.map((project, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 bg-slate-50 border-slate-400  border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-slate-500 ">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.img}
                    alt={project.alt}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest flex space-x-3 font-medium  mb-1">
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600"
                      >
                        <FaGithub size={35} />
                      </a>
                      {project.npmURL && (
                        <a
                          href={project.npmURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500"
                        >
                          <FaNpm size={35} />
                        </a>
                      )}
                      {project.youtubeURL && (
                        <a
                          href={project.youtubeURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500"
                        >
                          <FaYoutube size={35} />
                        </a>
                      )}
                      {project.liveURL && (
                        <a
                          href={project.liveURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 mt-2"
                        >
                          | LIVE LINK
                        </a>
                      )}
                    </h2>
                    <h1 className="text-xl font-semibold text-slate-450 mt-4 leading-loose">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed my-3 text-slate-600 ">
                      {project.description}
                    </p>
                    <ul className="ml-6 list-disc  text-slate-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) //map ends
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
