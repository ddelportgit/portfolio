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
                  title="Source code"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live site"
                  title="Live demo"
                >
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
