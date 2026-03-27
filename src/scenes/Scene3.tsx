import { motion } from 'framer-motion';
import { LOGOS } from '../logos';

const FED_RESULTS = [
  { app: 'Salesforce', logo: LOGOS.salesforce, title: 'Acme Corp — Account Record', relevant: false, order: 1 },
  { app: 'Salesforce', logo: LOGOS.salesforce, title: 'Acme Corp — Old Opportunity (Closed Lost)', relevant: false, order: 2 },
  { app: 'Jira', logo: LOGOS.jira, title: 'ACME-1234: Onboarding bug', relevant: false, order: 3 },
  { app: 'Jira', logo: LOGOS.jira, title: 'ACME-999: Feature request (archived)', relevant: false, order: 4 },
  { app: 'Drive', logo: LOGOS.gdrive, title: 'Acme — Meeting Notes Feb 2024', relevant: false, order: 5 },
  { app: 'Slack', logo: null, title: '🔥 #acme-escalation: "Customer threatening churn"', relevant: true, order: 6 },
  { app: 'Confluence', logo: LOGOS.confluence, title: 'Acme runbook (outdated)', relevant: false, order: 7 },
];

const GLEAN_RESULTS = [
  { title: 'Customer 360 — Acme Corp', type: 'Best answer', logo: LOGOS.pptx, highlight: true },
  { title: '#acme-escalation: churn risk thread', type: 'Slack', logo: null },
  { title: 'Acme Corp — Active Opportunity ($1.2M)', type: 'Salesforce', logo: LOGOS.salesforce },
  { title: 'ACME-1234: Onboarding bug (P1)', type: 'Jira', logo: LOGOS.jira },
  { title: 'Acme QBR Deck — Q1 2025', type: 'Drive', logo: LOGOS.gdrive },
];

export function Scene3() {
  return (
    <div className="scene">
      <motion.div
        className="scene-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Step 3 — Federated vs Indexed Results
      </motion.div>

      <div className="split-layout">
        {/* Left: Federated */}
        <div className="split-panel">
          <div className="panel-header panel-header-red">MCP / Federated Results</div>
          <div className="results-stack">
            {FED_RESULTS.map((r, i) => (
              <motion.div
                key={i}
                className={`result-card ${r.relevant ? 'result-buried' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="result-card-header">
                  {r.logo ? (
                    <img src={r.logo} alt={r.app} className="app-icon-sm" />
                  ) : (
                    <span className="material-symbols-rounded" style={{ fontSize: 20 }}>chat</span>
                  )}
                  <span className="result-app-label">{r.app}</span>
                </div>
                <div className="result-title">{r.title}</div>
                {r.relevant && (
                  <motion.div
                    className="pill pill-red"
                    style={{ fontSize: 11, padding: '3px 10px', marginTop: 4 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⚠ Buried — most relevant result at position #{r.order}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="callout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{ color: '#ff8080', marginTop: 'auto' }}
          >
            Per-app ranking; no global enterprise signals.
          </motion.div>
        </div>

        {/* Right: Glean */}
        <div className="split-panel">
          <div className="panel-header panel-header-green">Glean Indexed Results</div>
          <div className="results-stack">
            {GLEAN_RESULTS.map((r, i) => (
              <motion.div
                key={i}
                className={`result-card ${r.highlight ? 'result-highlight' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="result-card-header">
                  {r.logo ? (
                    <img src={r.logo} alt={r.type} className="app-icon-sm" />
                  ) : (
                    <span className="material-symbols-rounded" style={{ fontSize: 20 }}>chat</span>
                  )}
                  <span className="result-app-label">{r.type}</span>
                  {r.highlight && (
                    <span className="pill pill-green" style={{ fontSize: 10, padding: '2px 8px', marginLeft: 'auto' }}>
                      Best answer
                    </span>
                  )}
                </div>
                <div className="result-title">{r.title}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="callout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ color: 'var(--glean-green)', marginTop: 'auto' }}
          >
            60+ signals (ownership, views, org graph, recency, account context) drive the ranking.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
