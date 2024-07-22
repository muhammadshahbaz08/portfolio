import { StaticImageData } from "next/image";
import cliRepoPreview from "../../../public/images/cli-repo-preview.jpg";
import todoAppPreview from "../../../public/images/todo-app-preview.jpg";
import expenseTrackerPreview from "../../../public/images/expense-tracker-preview.jpg";

interface Project {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
  features: string[];
  githubURL: string;
  liveURL?: string;
  npmURL?: string;
  youtubeURL?: string;
}

const projects: Project[] = [
  {
    img: cliRepoPreview,
    alt: "cli-project-repo-image",
    title: "TypeScript & Node.js CLI Projects",
    description:
      "In this project, I devloped 10 Command Line Interface / CLI based Projects using TypeScript & Node.js & deployed them as a pacage on NPM. Some of these Projects:",
    features: [
      "Calculator & ATM",
      "TodoList & Currency Converter",
      "Quiz & Word Counter",
      "Adventure Game & Number Guessing Game",
    ],
    githubURL:
      "https://github.com/muhammadshahbaz08/TypeScript-Node.js-CLI-Projects",
    npmURL: "https://www.npmjs.com/~shahbaz1111",
  },
  {
    img: todoAppPreview,
    alt: "todo-app-project-preview",
    githubURL: "https://github.com/muhammadshahbaz08/next-todo-app",
    youtubeURL: "https://www.youtube.com/watch?v=dqJr7lnJcGs/",
    liveURL: "https://next-todo-app-nine-nu.vercel.app/",
    title: "TODO APP",
    description:
      "In this project, I built a Todo app using TypeScript, Next.js, TailwindCSS & Vercel PostgreSQL. For deployment I used the Vercel platform. This App Performs features like:",
    features: ["View Todo", "Add New Todo", "Delete Todo"],
  },
  {
    img: expenseTrackerPreview,
    alt: "expense-tracker-app-project-preview",
    githubURL: "https://github.com/muhammadshahbaz08/expense-tracker-app/",
    liveURL: "http://expense-tracker-boot-camp-2020-project1.surge.sh/",
    title: "EXPENSE TRACKER APP",
    description:
      "In this project, I built an Expense Tracker app using JavaScript, React.js & React Hook's. For deployment I used the Surge platform & Github Actions. This App Performs features like:",
    features: [
      "Add Transaction & Remove Transaction",
      "Transaction History & Current Balance",
      "Income & Expense",
    ],
  },
];

export default projects;
