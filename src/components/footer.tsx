const COLS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Guides", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[linear-gradient(135deg,#8B5CF6,#22D3EE)]">
                <span className="font-bold" style={{ color: "#070713" }}>
                  A
                </span>
              </span>
              <span className="font-semibold">Argentum</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Your data, finally talkative. The AI agent that turns rows into
              answers and answers into action.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <span>© 2026 Argentum by Smartsoft, Inc. All rights reserved.</span>
          <span className="font-mono">
            Built with care · Made for the data-curious.
          </span>
        </div>
      </div>
    </footer>
  );
}
