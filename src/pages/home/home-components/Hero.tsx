import "../../../style/home.css";
import SectionDivider from "./SectionDivider";

const contacts = [
  { label: "github.com/abdursujon", href: "https://github.com/abdursujon", icon: "github" },
  { label: "abdur.sujon.dev@gmail.com", href: "mailto:abdur.sujon.dev@gmail.com", icon: "mail" },
  { label: "07874083949", href: "tel:07874083949", icon: "phone" },
] as const;

const contactIcons = {
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#d9b15a">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b15a" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d9b15a" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-portrait">
          <img src="public/assets/home/profile.png" alt="Abdur Sujon" />
        </div>

        <div className="hero-body">
          <h1 className="hero-name">Abdur Sujon</h1>
          <p className="hero-role">Software Engineer &nbsp;&nbsp;·&nbsp;&nbsp; Manchester</p>
          <p className="hero-bio">
            I am a third year Computer Science student at "University of Salford", who has leadership experience 
            and passionate about building artistic and user friendly software. I am also on a track to get a first class degree, and achieved an average of 80% on both my first and second year.
          </p>

          <div className="hero-links">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="hero-link">
                {contactIcons[c.icon]}
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <SectionDivider/>
    </section>
  );
}