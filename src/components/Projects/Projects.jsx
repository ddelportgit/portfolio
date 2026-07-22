import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PROJECTS = [
  {
    title: "Habit Tracking App",
    description:
      "A full-stack CRUD habit tracking app with account registration/ authentication, login, daily check-ins, streak tracking, a 12-week completion heatmap, and a clean dark mode.",
    tech: ["React", "Supabase", "CSS", "Vercel"],
    link: "#",
    github: "https://github.com/ddelportgit/habit-tracker",
    live: "https://habit-tracker-ddgit.vercel.app/",
  },
  {
    title: "Bible Memorization App",
    description:
      "A full-stack Bible memorization app with first-letter memory grid, flash cards, a study dashboard with streaks and coverage heatmaps, guest mode, and account authentication with per-user progress tracking.",
    tech: ["React", "Supabase", "CSS Modules", "Vercel"],
    link: "#",
    github: "https://github.com/ddelportgit/bible-memory-project",
    live: "https://bible-memory-project-chi.vercel.app/",
  },
  {
    title: "AI Content Repurposing Tool",
    description:
      "A React app that takes long-form content and uses the Gemini AI API to repurpose it into platform-specific formats.",
    tech: ["React", "Tailwind CSS", "Gemini API", "Vercel"],
    link: "#",
    github: "https://github.com/ddelportgit/ai-repurposing-tool",
    live: "https://ai-repurposing-tool.vercel.app/",
  },
  // {
  //   title: "Browser Notes App",
  //   description:
  //     "Experience effortless note-taking, featuring word and character counts, a stylish dark mode, organized tabs, and robust import/export capabilities.",
  //   tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  //   link: "#",
  //   github: "https://github.com/ddelportgit/notes-app-1",
  //   live: "https://ddelportgit.github.io/notes-app-1/",
  // },
  // {
  //   title: "Holy Bible App",
  //   description:
  //     "Explore the Bible with our API-driven app, where you can choose a version, navigate through books and chapters, and copy verses with a single click.",
  //   tech: ["HTML", "CSS", "JavaScript", "Async/Await"],
  //   link: "#",
  //   github: "https://github.com/ddelportgit/bible-app-1",
  //   live: "https://ddelportgit.github.io/bible-app-1/",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "The weather app shows daily conditions, a 7-day forecast, and an 8-day hourly breakdown, all powered by a reliable API and featuring a sleek dark mode.",
  //   tech: ["HTML", "CSS", "JavaScript", "REST API"],
  //   link: "#",
  //   github: "https://github.com/ddelportgit/weather-app-4",
  //   live: "https://ddelportgit.github.io/weather-app-4/",
  // },
];

export default function Projects() {
  return (
    <section id="work" className={styles.projects}>
      <h2 className={styles.heading}>Selected Work</h2>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
            <p className={styles.cardDescription}>{project.description}</p>
            <ul className={styles.techList}>
              {project.tech.map((tech) => (
                <li key={tech} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
