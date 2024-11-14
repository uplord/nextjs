import Image from 'next/image';
import Buttons from "../buttons";
import styles from "./style.module.scss";

export default function Banner() {
  const buttons = [
    { title: "Get in touch", link: "mailto:michael@uplord.co.uk", class: "primary large" },
    { title: "Download CV", link: "/Michael_Allen_CV.pdf", class: "link large", target: "_blank" },
  ];

  return (
    <section className={styles.banner}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.image}`}>
            <Image
              src="/images/me.jpeg"
              alt="Michael Allen"
              width="748"
              height="747"
              priority={true}
            />
          </div>
          <div className={`${styles.text}`}>
            <h1>
              <span className="primary block">Hi, I&apos;m Michael</span>
              A Senior Front End Developer
            </h1>
            <h2>With 9 years in the industry creating websites</h2>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </section>
  );
}
