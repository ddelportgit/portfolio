import styles from "./Approach.module.css";

const APPROACH_STEPS = [
  {
    title: "Understand the problem",
    description:
      "I get clear on who the app is for and what it needs to do before writing any code.",
  },
  {
    title: "Build with structure",
    description:
      "I work in small, testable pieces, keeping the codebase clean and predictable as it grows.",
  },
  {
    title: "Refine the details",
    description:
      "Once it works, I revisit it, tightening edge cases and polishing the interface.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className={styles.approach}>
      <h2 className={styles.heading}>Approach</h2>
      <p className={styles.intro}>
        Clean structure, thoughtful interfaces, and steady progress guide how I
        work.
      </p>
      <div className={styles.grid}>
        {APPROACH_STEPS.map((step) => (
          <div key={step.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
