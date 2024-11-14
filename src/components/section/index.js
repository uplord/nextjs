import Buttons from "../buttons";
import "./style.scss";

export default function Section() {

  const buttons = [
    { title: "Button 1", link: "/", class: "primary" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="text text-left items-start">
            <h2>About Michael Allen</h2>
            <h3>Front End Development</h3>
            <p>I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 8 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
            <Buttons data={buttons} align="start" />
          </div>
          <div className="text text-left items-start">
            <h2>About Michael Allen</h2>
            <h3>Front End Development</h3>
            <p>I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 8 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
            <Buttons data={buttons} align="start" />
          </div>
        </div>
      </div>
    </section>
  )
}