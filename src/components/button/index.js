import styles from "./style.module.scss";

export default function Button({ data }) {
  const buttonClasses = data.class.split(' ').map(className => styles[className] || '').join(' ');

  return (
    <a href={data.link} className={`${styles.button} ${buttonClasses}`}>
      {data.title}
    </a>
  )
}