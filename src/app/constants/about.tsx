interface About {
  intro?: React.ReactNode | string;
  skills: string[];
}

const about: About = {
  intro: (
    <>
      <p className="mb-4 mt-7">
        As a budding <strong>Full-Stack Developer</strong>, I’m passionate about
        building and enhancing web applications from start to finish. My current
        focus is on developing a strong foundation in both front-end and
        back-end technologies. Visit my <strong>Projects</strong> section to see
        the progress I’m making!
      </p>
      <p>
        I'm open to Job opportunities where I can contribute, learn and grow. If
        you have a good opportunity that matches my skills and experience then
        don't hesitate to <strong>contact me</strong>.
      </p>
    </>
  ),
  skills: [
    "HTML",
    "CSS",
    "JavaScript ES6",
    "TypeScript",
    "React JS",
    "Next JS",
    "Tailwind CSS",
    "Node JS",
    "SQL",
    "Postgre SQL",
    "Drizzle ORM",
    "Rest API",
    "Git",
    "Git Hub",
    "Node Pacage Manager | NPM",
    "Vercel",
  ],
};

export default about;
