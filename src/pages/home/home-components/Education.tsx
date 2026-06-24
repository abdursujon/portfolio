import "../../../style/home.css";
import SectionDivider from "./SectionDivider";

type Edu = {
  university: string;
  dates: string;
  detail: string;
  highlight?: string;
  lines: { label?: string; text: string }[];
};

const schools: Edu[] = [
  {
    university: "University Of Salford",
    dates: "Sep 2024 - Present",
    detail: "BSc Computer Science",
    highlight: "Year 1: First Class (80.17%) | Year 2: First Class (80.73%) ",
    lines: [
      { label: "CS:", text: "Programming Languages (Java, JavaScript, PHP, C#), Data Structure And Algorithm (Java), Design Patterns (Java), Client Server System(JavaScript, PHP)"}
    ],
  }
];

export default function Education() {
  return (
    <section className="edu" id="education">
      <div className="edu-head"><span className="edu-tab" />EDUCATION</div>

      {schools.map((s, i) => (
        <div className="edu-entry" key={i}>
          <div className="edu-top">
            <h3 className="edu-school">{s.university}</h3>
            <span className="edu-dates">{s.dates}</span>
          </div>
          <div className="edu-detail">{s.detail}</div>
          {s.highlight && <div className="edu-highlight">{s.highlight}</div>}
          {s.lines.map((l, j) => (
            <div className="edu-line" key={j}>
              {l.label && <span className="edu-label">{l.label} </span>}
              {l.text}
            </div>
          ))}
        </div>
      ))}
      <SectionDivider/>
    </section>
  );
}