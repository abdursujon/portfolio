import { useEffect, useState } from "react";
import "../../../style/home.css";
import SectionDivider from "./SectionDivider";

type Day = { date: string; count: number; level: number };
type Week = { days: Day[] };

const AMBER = ["#000000", "#6b5320", "#a8842f", "#d4a93f", "#f5d878"];

export default function Git() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState(false);
  console.log("token:", import.meta.env.VITE_GITHUB_TOKEN);

  const username = import.meta.env.VITE_GITHUB_USERNAME;

  useEffect(() => {
    const query = `
      query($user: String!) {
        user(login: $user) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  contributionLevel
                }
              }
            }
          }
        }
      }`;

    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { user: username } }),
    })
      .then((r) => r.json())
      .then((res) => {
        const cal = res?.data?.user?.contributionsCollection?.contributionCalendar;
        if (!cal) { setError(true); return; }
        const levelMap: Record<string, number> = {
          NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4,
        };
        setTotal(cal.totalContributions);
        setWeeks(
          cal.weeks.map((w: any) => ({
            days: w.contributionDays.map((d: any) => ({
              date: d.date,
              count: d.contributionCount,
              level: levelMap[d.contributionLevel] ?? 0,
            })),
          }))
        );
      })
      .catch(() => setError(true));
  }, [username]);

  const months = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];

  return (
    <section className="git" id="github">
      <div className="git-head"><span className="git-tab" />GITHUB</div>

      <div className="git-row">
        <div className="git-card">
          {error ? (
            <p className="git-error">Couldn't load contributions.</p>
          ) : (
            <>
              <div className="git-months">
                {months.map((m) => <span key={m}>{m}</span>)}
              </div>
              <div className="git-grid">
                {weeks.map((week, i) => (
                  <div className="git-week" key={i}>
                    {week.days.map((day) => (
                      <div
                        key={day.date}
                        className="git-cell"
                        style={{ background: AMBER[day.level] }}
                        title={`${day.count} on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="git-stats">
          <div className="git-stats-title">AWS CDK <strong>Open Source</strong> Contributor</div>
          <div className="git-stats-row"><strong>{total}</strong> Contributions</div>
          <div className="git-stats-row"><strong>Core</strong> Contributor</div>
        </div>
      </div>

      <a className="git-link" href={`https://github.com/${username}`}>
        github.com/{username} · updated daily
      </a>
      <SectionDivider/>
    </section>
  );
}