import "./style.scss";

export default function Button({ data }) {
  return (
    <a href={data.link} className={`button ${data.class}`}>
      {data.title}
    </a>
  )
}