import Buttons from "../buttons";
import styles from "./style.module.scss";

export default function Section() {

  const buttons = [
    { title: "Button 1", link: "/", class: "primary" },
  ];

  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.image}`}>
            <img
              src="/images/me.png"
              alt="Front End Development"
            />
          </div>
          <div className={`${styles.text}`}>
            <h2>About Michael Allen</h2>
            <h3>Front End Development</h3>
            <p>I&apos;m an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 8 years, I&apos;ve worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </section>
  );
}
