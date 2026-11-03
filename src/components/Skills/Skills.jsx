import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    category: "Frontend technologies",
    items: [
      "HTML5",
      "JavaScript (ES6+)",
      "Responsive design, Flexbox/Grid",
      "Accessibility basics, semantic HTML",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Router, state management (Context)",
      "Tailwind CSS / CSS Modules",
      "Vite",
    ],
  },
  {
    category: "Development Tools",
    items: [
      "Git & Github",
      "VS Code, Browser DevTools",
      "Figma",
      "Vercel / GitHub Pages",
    ],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "REST APIs, JSON, fetch", "Supabase"],
  },
  {
    category: "Currently Learning",
    items: ["TypeScript", "Testing (Vitest)", "Next.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Skills & Tools</h2>
      <div className={styles.grid}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.category}</h3>
            <ul className={styles.itemList}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
