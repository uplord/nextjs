import Buttons from '../buttons';
import "./style.scss";

export default function Section() {

  const buttons = [
    { title: "Button 1", link: "/" },
    { title: "Button 2", link: "/" },
    { title: "Button 3", link: "/" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text">
          <h2>Section</h2>
          <Buttons data={buttons} />
        </div>
      </div>
    </section>
  )
}