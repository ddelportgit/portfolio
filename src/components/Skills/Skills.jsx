import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Vite"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
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
