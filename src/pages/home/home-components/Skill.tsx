import "../../../style/home.css";

const groups = [
  { label: "Proficient", featured: true, items: ["Python", "Rust", "TypeScript"] },
  { label: "Experienced", items: ["Java", "JavaScript", "C/C++", "Swift"] },
  { label: "Cloud", items: ["Lambda", "SQS", "SNS", "DynamoDB", "Step Functions", "Kinesis", "CDK"] },
  { label: "Tools", items: ["CDK / Terraform", "Node.js", "GraphQL", "REST", "Git", "Docker", "Claude"] },
];

export default function Skill() {
  return (
    <section className="skill" id="skill">
      <div className="skill-head"><span className="skill-tab" />LANGUAGES &amp; TOOLS</div>
      <div className="skill-rows">
        {groups.map((g) => (
          <div className="skill-row" key={g.label}>
            <div className="skill-label">{g.label}</div>
            <div className="skill-tags">
              {g.items.map((i) => (
                <span key={i} className={g.featured ? "skill-tag skill-tag-hot" : "skill-tag"}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
}