import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import headerPic from "../../assets/1.webp";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
        setIsMenuOpen(false);
      },
      { threshold: 0 },
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

  return (
    <>
      <header ref={headerRef} className={styles.header} id="hero">
        <img src={headerPic} alt="Portrait of Donovan Delport" className={styles.photo} />

        <nav className={styles.nav}>
          <a href="#hero" className={styles.name}>
            Donovan Delport
          </a>

          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="mailto:donovandelport123@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </nav>

        <ul className={`${styles.heroDropdown} ${isMenuOpen ? styles.dropdownOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:donovandelport123@gmail.com" onClick={() => setIsMenuOpen(false)}>
              Email
            </a>
          </li>
        </ul>

        <div className={styles.intro}>
          <h1 className={styles.introHeading}>Crafting digital experiences with precision.</h1>
          <p className={styles.introText}>
            I build fast, accessible, and visually compelling web interfaces. Passionate about clean
            code and pixel-perfect design.
          </p>
        </div>
      </header>

      {/* Sticky pill nav */}
      <div className={`${styles.stickyWrap} ${isSticky ? styles.visible : ""}`}>
        <nav className={styles.stickyNav}>
          <a href="#hero" className={styles.name}>
            Donovan Delport
          </a>

          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={activeSection === link.href ? styles.active : ""}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </nav>

        <ul className={`${styles.dropdown} ${isMenuOpen ? styles.dropdownOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href ? styles.active : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
