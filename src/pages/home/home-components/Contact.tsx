import "../../../style/home.css";

const contacts = [
  { label: "GITHUB", value: "github.com/abdursujon", href: "https://github.com/abdursujon", icon: "github" },
  { label: "LINKEDIN", value: "linkedin.com/in/abdursujon", href: "https://linkedin.com/in/abdursujon", icon: "linkedin" },
  { label: "EMAIL", value: "abdur.sujon.dev@gmail.com", href: "mailto:abdur.sujon.dev@gmail.com", icon: "mail" },
  { label: "PHONE", value: "07874083949", href: "tel:07874083949", icon: "phone" },
] as const;

const icons = {
  github: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#d9b15a">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  mail: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d9b15a" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  ),
  phone: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d9b15a" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  linkedin: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#d9b15a">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.94H5.56v8.4h2.78zM6.95 8.7a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.39 9.64v-4.6c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32v-1.13h-2.78v8.4h2.78v-4.69c0-.25.02-.5.09-.67.2-.49.65-1 1.4-1 .99 0 1.39.75 1.39 1.86v4.5h2.78z" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-head"><span className="contact-tab" />GET IN TOUCH</div>
      <div className="contact-cards">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} className="contact-card">
            {icons[c.icon]}
            <div className="contact-label">{c.label}</div>
            <div className="contact-value">{c.value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}