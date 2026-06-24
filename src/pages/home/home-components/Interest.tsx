import "../../../style/home.css";
import SectionDivider from "./SectionDivider";

const leadership = "Scum Master at University of Salford Hack Camp· Team Leader for two years at Subway";
const interests = ["Cricket", "Football", "Hiking", "Chess", "Film", "Cooking"];

export default function Interest() {
  return (
    <section className="lead" id="leadership">
      <div className="lead-head"><span className="lead-tab" />LEADERSHIP &amp; INTERESTS</div>

      <div className="lead-text">
        <span className="lead-label">Leadership:</span> {leadership}
      </div>

      <div className="lead-tags">
        {interests.map((i) => (
          <span className="lead-tag" key={i}>{i}</span>
        ))}
      </div>
      <SectionDivider/>
    </section>
  );
}