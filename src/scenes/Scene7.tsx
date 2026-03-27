import { motion } from 'framer-motion';

const METRICS = [
  { label: 'Latency', fed: 25, glean: 90 },
  { label: 'Relevance', fed: 30, glean: 95 },
  { label: 'Coverage', fed: 35, glean: 92 },
  { label: 'Governance', fed: 20, glean: 95 },
  { label: 'Agent Reliability', fed: 30, glean: 88 },
];

export function Scene7() {
  return (
    <div className="scene">
      <motion.div
        className="scene-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Step 7 — Final Comparison
      </motion.div>

      <div className="compare-grid">
        {/* Header */}
        <div className="compare-header-row">
          <div className="compare-metric-label" />
          <div className="compare-col-header panel-header-red">MCP / Federated-only</div>
          <div className="compare-col-header panel-header-green">Glean Indexed + MCP</div>
        </div>

        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            className="compare-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            <div className="compare-metric-label">{m.label}</div>
            <div className="compare-bar-cell">
              <motion.div
                className="compare-bar compare-bar-fed"
                initial={{ width: 0 }}
                animate={{ width: `${m.fed}%` }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="compare-bar-value">{m.fed}%</span>
            </div>
            <div className="compare-bar-cell">
              <motion.div
                className="compare-bar compare-bar-glean"
                initial={{ width: 0 }}
                animate={{ width: `${m.glean}%` }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="compare-bar-value">{m.glean}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="final-quote"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <p className="final-quote-main">
          Federated search sprinkles data into your agents.<br />
          An indexed enterprise graph gives them a <span className="final-highlight">brain</span>.
        </p>
      </motion.div>

      <motion.div
        className="final-tagline"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.0, type: 'spring' }}
      >
        <img src="https://app.glean.com/images/glean-logo2.svg" alt="Glean" style={{ width: 28, height: 28 }} />
        Index once with Glean. Reuse everywhere.
      </motion.div>
    </div>
  );
}
