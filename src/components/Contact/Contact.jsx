import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:donovandelport123@gmail.com", icon: faEnvelope },
  { label: "GitHub", href: "https://github.com/ddelportgit", icon: faGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/donovan-delport/", icon: faLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.text}>
        Feel free to reach out. I'm open to new opportunities and collaborations.
      </p>
      <ul className={styles.linkList}>
        {CONTACT_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
