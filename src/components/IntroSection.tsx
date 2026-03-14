import { stats } from '../data/site';

export function IntroSection() {
  return (
    <section className="section section-soft">
      <div className="container intro-grid">
        <div>
          <span className="eyebrow">About Jackfin Craftsman</span>
          <h2>Reliable renovation work with a steady hand for the details.</h2>
          <p className="lead">
            Jackfin Craftsman is built around the kind of work homeowners remember for the
            right reasons: careful preparation, clean finishes, respectful communication,
            and spaces that feel noticeably better once the job is complete.
          </p>
          <p>
            Whether the project calls for finish carpentry, interior improvements, or a
            focused renovation update, the goal stays the same: deliver workmanship that
            looks sharp, functions well, and adds long-term value to the home.
          </p>
        </div>

        <div className="stat-stack">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
