import Button from '../button';
import "./style.scss";

export default function Buttons({ data, align }) {
  return (
    <div className={`buttons justify-${align}`}>
      {data.map((button, index) => (
        <Button key={index} data={button} />
      ))}
    </div>
  )
}