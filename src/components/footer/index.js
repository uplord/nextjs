
import Svg from '../svg';
import styles from "./style.module.scss";

export default function Footer({ data }) {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ul className={styles.social}>
          <li>
            <a href="https://www.instagram.com/michael.adam.allen/" target="_blank">
              <Svg name="instagram" width={24} height={24} color="#d62976" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/themichael/" target="_blank">
              <Svg name="linkedin-in" width={24} height={24} color="#0077b5" />
            </a>
          </li>
          <li>
            <a href="mailto:michael@uplord.co.uk">
              <Svg name="envelope-solid" width={24} height={24} color="#dd2121" />
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Michael Allen</p>
      </div>
    </div>
  )
}
