import Button from '../button';
import "./style.scss";

export default function Buttons(data) {
  return (
    <div className="buttons">
      {data.data.map((button, index) => (
        <Button key={index} data={button} />
      ))}
    </div>
  )
}