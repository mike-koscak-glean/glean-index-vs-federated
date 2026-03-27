import { motion } from 'framer-motion';
import { LOGOS } from '../logos';

const CONNECTOR_APPS = [
  { logo: LOGOS.gdrive, name: 'Drive' },
  { logo: LOGOS.jira, name: 'Jira' },
  { logo: LOGOS.salesforce, name: 'Salesforce' },
  { logo: LOGOS.teams, name: 'Teams' },
  { logo: LOGOS.confluence, name: 'Confluence' },
  { logo: LOGOS.servicenow, name: 'ServiceNow' },
  { logo: LOGOS.gmail, name: 'Gmail' },
  { logo: LOGOS.gong, name: 'Gong' },
  { logo: LOGOS.sharepoint, name: 'SharePoint' },
  { logo: LOGOS.outlook, name: 'Outlook' },
  { logo: LOGOS.tableau, name: 'Tableau' },
];

const LAYERS = [
  { icon: 'description', label: 'Content & metadata' },
  { icon: 'lock', label: 'Permissions (ACLs)' },
  { icon: 'group', label: 'People & org graph' },
  { icon: 'monitoring', label: 'Activity: views, edits, comments' },
];

const GRAPH_NODES = [
  { label: 'Acme Corp', x: 50, y: 30, size: 52 },
  { label: 'Sales Team', x: 20, y: 55, size: 40 },
  { label: 'Q4 Pipeline', x: 75, y: 20, size: 38 },
  { label: 'Support', x: 80, y: 60, size: 36 },
  { label: 'Engineering', x: 35, y: 75, size: 34 },
  { label: 'Onboarding', x: 65, y: 72, size: 32 },
];

const BADGES = [
  { nodeIdx: 0, text: 'Owner: J. Smith', delay: 2.8 },
  { nodeIdx: 1, text: 'Viewed 124×', delay: 3.0 },
  { nodeIdx: 2, text: 'Recent', delay: 3.2 },
  { nodeIdx: 3, text: 'Team: Sales', delay: 3.4 },
];

export function Scene2() {
  return (
    <div className="scene">
      <motion.div
        className="scene-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Step 2 — How Glean Indexing Works
      </motion.div>

      <div className="idx-layout">
        {/* Connectors feeding into index */}
        <div className="idx-connectors">
          <div className="idx-apps-grid">
            {CONNECTOR_APPS.map((app, i) => (
              <motion.div
                key={app.name}
                className="idx-app"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}
              >
                <img src={app.logo} alt={app.name} className="app-icon-sm" />
              </motion.div>
            ))}
            <motion.div
              className="idx-app idx-app-more"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              +90
            </motion.div>
          </div>

          {/* Particle stream */}
          <div className="idx-stream">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="idx-particle"
                initial={{ x: -10, opacity: 0 }}
                animate={{
                  x: [0, 80, 160],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: 1.0 + i * 0.15,
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            ))}
          </div>

          {/* Central index block */}
          <motion.div
            className="idx-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <img src={LOGOS.glean} alt="Glean" style={{ width: 28, height: 28 }} />
            <span>Enterprise Index</span>
          </motion.div>
        </div>

        {/* Index layers */}
        <motion.div
          className="idx-layers"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.label}
              className="idx-layer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + i * 0.12 }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: 18 }}>{layer.icon}</span>
              {layer.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise graph visualization */}
        <motion.div
          className="idx-graph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <svg className="idx-graph-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Edges between nodes */}
            {[[0,1],[0,2],[0,3],[1,4],[2,3],[3,5],[4,5]].map(([a, b], i) => (
              <motion.line
                key={i}
                x1={GRAPH_NODES[a].x}
                y1={GRAPH_NODES[a].y}
                x2={GRAPH_NODES[b].x}
                y2={GRAPH_NODES[b].y}
                stroke="rgba(216,253,73,0.3)"
                strokeWidth={0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
              />
            ))}
            {/* Nodes */}
            {GRAPH_NODES.map((node, i) => (
              <motion.g key={i}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 10}
                  fill="rgba(52,60,237,0.6)"
                  stroke="rgba(216,253,73,0.5)"
                  strokeWidth={0.4}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.1 + i * 0.08 }}
                />
                <text
                  x={node.x}
                  y={node.y + 0.5}
                  textAnchor="middle"
                  fill="white"
                  fontSize={2.8}
                  fontWeight={600}
                  fontFamily="Inter, sans-serif"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}
          </svg>

          {/* Orbiting badges */}
          {BADGES.map((badge, i) => {
            const node = GRAPH_NODES[badge.nodeIdx];
            return (
              <motion.div
                key={i}
                className="idx-badge"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y - 10}%`,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay, type: 'spring' }}
              >
                {badge.text}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callouts */}
        <motion.div
          className="callout-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
          style={{ alignSelf: 'center' }}
        >
          <div className="callout">
            Glean crawls content, permissions, people, and activity into one enterprise graph.
          </div>
          <div className="callout">
            Strict permission mirroring from each system; enforced at index and query time.
          </div>
          <div className="callout">
            Hybrid lexical + semantic search tuned on your enterprise data.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
