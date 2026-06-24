export default function SectionDivider() {
  return (
    <div className="section-divider">
      <span className="divider-line" />
      <svg className="divider-mark" viewBox="430 10 140 140" aria-hidden="true">
        <g stroke="rgba(240,215,150,0.85)" fill="none" strokeWidth="1.4" strokeLinejoin="round">
          <circle cx="500" cy="80" r="60" strokeOpacity="0.5" />
          <circle cx="500" cy="80" r="44" strokeOpacity="0.35" strokeWidth="1" />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15 * Math.PI) / 180;
            const r1 = 60, r2 = i % 2 === 0 ? 66 : 63;
            return (
              <line key={i}
                x1={500 + r1 * Math.cos(a)} y1={80 + r1 * Math.sin(a)}
                x2={500 + r2 * Math.cos(a)} y2={80 + r2 * Math.sin(a)}
                strokeWidth="1" strokeOpacity="0.45" />
            );
          })}
          <path d="M500 28 L506.1 65.2 L536.8 43.2 L514.8 73.9 L552 80 L514.8 86.1
                   L536.8 116.8 L506.1 94.8 L500 132 L493.9 94.8 L463.2 116.8 L485.2 86.1
                   L448 80 L485.2 73.9 L463.2 43.2 L493.9 65.2 Z" strokeOpacity="0.8" />
          <circle cx="500" cy="80" r="4" fill="rgba(240,215,150,0.9)" stroke="none" />
        </g>
      </svg>
      <span className="divider-line" />
    </div>
  );
}
