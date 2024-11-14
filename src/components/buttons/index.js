import Button from "../button";
import styles from "./style.module.scss";

export default function Buttons({ data, align, className }) {
  return (
    <div className={`${styles.buttons} ${className} justify-${align}`}>
      {data.map((button, index) => (
        <Button key={index} data={button} />
      ))}
    </div>
  )
}