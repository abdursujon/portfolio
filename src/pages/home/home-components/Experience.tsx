import "../../../style/home.css";
import SectionDivider from "./SectionDivider";

type Role = {
  title: string;
  company: string;
  dates: string;
  location: string;
  tags: string[];
  bullets: React.ReactNode[];
};

const roles: Role[] = [
  {
    title: "Srum Master And Software Developer",
    company: "University Of Salford HackCamp",
    dates: "Dec 2025 - Jan 2026",
    location: "Manchester, UK",
    tags: ["JavaScript", "PHP", "SQLite", "SCRUM", "JIRA"],
    bullets: [
      <>Lead a team of seven at <a href="#">University of Salford Hack Camp</a> and delivered a MVP project for <strong>BCS Manchester</strong>.</>,
      <>Designed and built admin, and career dashboard and intregated development with the rest of the team and deployed the project at university server.</>,
      <>Organised team work flow including assigned tasks, gathering feature requirements, traking progression and leading team collaboration utilising <strong>Jira</strong></>,
    ],
  },
  {
    title: "Team Leader",
    company: "Subway",
    dates: "Sep 2022 - Feb 2024",
    location: "Chelmsford, UK",
    tags: ["Leadership", "Communication", "Teamwork"],
    bullets: [
      <>Lead a team of 10</>,
      <>Trained new employees</>,
      <>Organised team meetings and birthday parties</>,
      <>Stock handling and rotation</>,
      <>Inventory tracking and cash management</>
    ],
  },

  {
    title: "Team Member",
    company: "Tortilla",
    dates: "Mar 2024 - Dec 2025",
    location: "Manchester, UK",
    tags: ["Leadership", "Communication", "Teamwork"],
    bullets: [
      <>Contributed to a team of 15 people to deliver excellent customer service</>,
      <>Trained new employees</>,
      <>Served over 500+ customer regularly as part of a team</>
    ],
  },
];

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="exp-head"><span className="exp-tab" />EXPERIENCE</div>

      {roles.map((role, i) => (
        <div className="exp-entry" key={i}>
          <div className="exp-top">
            <h3 className="exp-title">
              {role.title} <span className="exp-company"> - {role.company}</span>
            </h3>
            <span className="exp-dates">{role.dates}</span>
          </div>
          <div className="exp-loc">{role.location}</div>

          <div className="exp-tags">
            {role.tags.map((t) => (
              <span className="exp-tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="exp-bullets">
            {role.bullets.map((b, j) => (
              <div className="exp-bullet" key={j}>
                <span className="exp-dash">—</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      
            <SectionDivider/>
    </section>
  );
}