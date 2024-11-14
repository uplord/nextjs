import Buttons from "../buttons";
import styles from "./style.module.scss";

export default function Banner() {
  const buttons = [
    { title: "Button 1", link: "/", class: "primary large" },
    { title: "Button 2", link: "/", class: "link large" },
  ];

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={`${styles.text} text-center items-center`}>
          <h1>
            <span className="primary block">Hi, I&apos;m Michael</span>
            A Senior Front End Developer
          </h1>
          <h2>With 9 years in the industry creating websites</h2>
          <Buttons data={buttons} align="center" />
        </div>
      </div>
    </section>
  );
}
