import Button from "../button";
import styles from "./style.module.scss";

export default function Buttons({ data, align }) {
  return (
    <div className={`${styles.buttons} justify-${align}`}>
      {data.map((button, index) => (
        <Button key={index} data={button} />
      ))}
    </div>
  )
}