# Presenter Script — Why Enterprises Need an Indexed Knowledge Graph

**Presentation goal:** Convince enterprise decision-makers that federated/MCP-only search is insufficient for serious AI use cases, and that a deep, permission-aware index (Glean) is the required foundation for enterprise AI quality, governance, and speed.

**Core narrative question:**
> "Provide a Customer 360 for Acme: recent deals, support issues, key contacts, risks, and next best actions."

Two paths. Same question. Radically different outcomes.

---

## Scene 0 — Title / Cold Open
**Duration:** ~45–60 seconds

**On screen:**
- Centered pill-shaped search bar with blinking cursor; query types itself letter by letter
- Two large cards slide in from left and right:
  - Left: "MCP / Federated-only path" (hub icon) — "Multiple real-time API calls, no shared index, app-level ranking only"
  - Right: "Glean Indexed Enterprise Graph" (Glean logo, soft green glow) — "100+ connectors, deep index of content + permissions + people + activity"

**Script:**

[As the search bar types out the query: "Provide a Customer 360 for Acme: recent deals, support issues, key contacts, risks, and next best actions."]

Imagine you're an enterprise leader, and this is the question on everyone's mind: "What's really happening with our top customer?" On screen, you see two paths — two fundamentally different approaches to answering that question.

On the left: MCP and federated search. It's the new standard for wiring up tools — queries are fired off to every system in real time, and results trickle back, each in their own silo. Fast to set up, but every answer is only as good as the weakest API, the slowest system, the shallowest connection. You get a pile of fragments — some relevant, some not. No unified context, no deep understanding of how your people, projects, and customers actually connect.

On the right: Glean's Indexed Enterprise Graph. This isn't just search — it's a living, permission-aware map of your entire business. Glean continuously indexes content, relationships, and signals from over a hundred systems, building a graph that understands not just what's in your data, but how it all fits together. Every answer is grounded in context, governed by enterprise-grade permissions, and personalized to each user.

So, as you watch these two cards slide in, ask yourself: When the stakes are high, which path would you trust to deliver the real story? The fragmented view, or the connected, context-rich graph? This is the choice that defines the future of AI in your enterprise.

---

## Scene 1 — How Federated / MCP Works
**Duration:** ~60–90 seconds

**On screen:**
- Central hub node labeled "MCP / Federated Router" with red-tinted border
- 7 lines animate sequentially to app blocks: Google Drive, Jira, Salesforce, Teams, Confluence (700ms, pulsing red), ServiceNow, Gong — each with real logos and latency labels
- Small result cards tumble back into a messy "Federated Results" column, slightly rotated and unranked
- Three callouts fade in at the bottom

**Script:**

Let's start by focusing on the left path: federated search, or what's often called MCP-based search in modern enterprise environments.

On screen, you see a central hub labeled "MCP / Federated Router," outlined in red. This hub represents the federated search engine, which acts as a traffic director for your query.

As the animation begins, thin lines shoot out from the hub to seven different applications — Google Drive, Jira, Salesforce, Teams, Confluence, ServiceNow, and Gong. Each line represents a real-time API call sent out to that app's search endpoint. Notice how the lines animate one after another, and above each, a latency label appears: 70 milliseconds, 120, 250, 180, and then — look at Confluence — 700 milliseconds, pulsing red to show it's especially slow. The rest range from 190 to 340 milliseconds.

This is the first major challenge: federated search has to wait for every single app to respond before it can show you results. The total latency is dominated by the slowest system. If even one app is lagging, the whole experience feels sluggish and unpredictable.

Now, as the responses come back, you see small "result cards" tumbling in from each app. But instead of a neat, ranked list, they pile up into a messy, unorganized column labeled "Federated Results." The cards are slightly rotated, unranked, and chaotic — because each app returns its own slice of data, with its own relevance logic and format.

Three key callouts fade in at the bottom:

- First: "Multiple real-time API calls; end-to-end latency dominated by the slowest system." This means every search is only as fast as the slowest app, and in large enterprises, that can mean seconds of waiting — sometimes much longer if an endpoint is overloaded or rate-limited.

- Second: "Each app returns its own slice; no unified view or cross-source ranking." There's no shared context or understanding of how results from Salesforce relate to those from Jira or Confluence. The federated system just stacks the cards together, without any way to correlate, deduplicate, or prioritize across sources.

- Third: "Ranking is simple, rule-based heuristics over heterogeneous APIs." Because there's no central index, the system can't apply advanced ranking or personalization. It's forced to use basic rules — like "show Salesforce first, then Jira" — which often means the most relevant results are buried or missed entirely.

The fundamental limitation here is that federated search has no memory, no enterprise-wide context, and no way to reason across all your data. Every query starts from scratch, pinging dozens of APIs, and hoping the slowest one doesn't hold everything up. For serious AI use cases — like building a true Customer 360, surfacing risks, or recommending next best actions — this approach simply isn't enough. It's fragmented, slow, and blind to the relationships that matter most in your business.

This is why enterprises that want reliable, permission-aware, and context-rich AI need something deeper than federated search. They need a unified, indexed foundation that understands the full fabric of their organization.

---

## Scene 2 — How Glean Indexing Works
**Duration:** ~60–90 seconds

**On screen:**
- 11 real app logos (Drive, Jira, Salesforce, Teams, Confluence, ServiceNow, Gmail, Gong, SharePoint, Outlook, Tableau) plus a "+90" badge in a grid
- Green particle streams animate from apps into a central "Enterprise Index" block with the Glean logo
- Four layer pills: "Content & metadata", "Permissions (ACLs)", "People & org graph", "Activity: views, edits, comments"
- Index morphs into a network graph with nodes (Acme Corp, Sales Team, Q4 Pipeline, Support, Engineering, Onboarding) and orbiting badges ("Owner: J. Smith", "Viewed 124×", "Recent", "Team: Sales")
- Three callouts fade in

**Script:**

[As the focus shifts to the RIGHT path — Glean:]

Let's look at how Glean transforms enterprise knowledge from a fragmented set of disconnected apps into a unified, intelligent graph.

On screen, you see 11 real app logos in a grid, with a "+90" badge. Glean connects to over 100 enterprise systems out of the box — covering everything from Drive, Jira, Salesforce, and Teams, to Confluence, ServiceNow, Gmail, Gong, SharePoint, Outlook, Tableau, and so many more. This deep connector library means Glean doesn't just skim the surface or rely on basic API calls. Instead, it crawls each system in depth, extracting not just content, but also rich metadata, permissions, people, and activity signals.

All of this data flows into Glean's permission-aware Enterprise Index. Here, Glean mirrors the exact access controls from every source system — so every document, ticket, or message is only visible to the right people, at both index and query time. This is a critical difference from federated or MCP-only search, which often struggles to enforce consistent permissions and can miss key context.

Glean's index isn't just a pile of documents. It's a multi-layered knowledge graph — capturing content and metadata, permissions, your people and org structure, and real activity signals like views, edits, and comments. This depth enables Glean to understand not just what information exists, but how it's used and who it matters to.

Watch as the index morphs into a network graph visualization — nodes labeled "Acme Corp", "Sales Team", "Q4 Pipeline" — with orbiting badges like "Owner: J. Smith", "Viewed 124×", and "Team: Sales". This is the Glean Enterprise Graph in action. It connects people, teams, projects, and knowledge — so you can instantly see relationships, ownership, and activity across your entire organization.

Three callouts:
- Glean crawls content, permissions, people, and activity into one enterprise graph.
- Strict permission mirroring from each system; enforced at index and query time.
- Hybrid lexical + semantic search tuned on your enterprise data.

With this foundation, Glean delivers hybrid search — combining traditional keyword and advanced semantic models, tuned on your unique enterprise data and powered by over 60 ranking signals. The result: faster, more relevant, and more secure answers than federated or MCP-only approaches can provide.

This is what sets Glean apart: a deep, permission-aware index and enterprise knowledge graph that powers truly intelligent search and agents — grounded in your real work, for every team.

---

## Scene 3 — Federated vs Indexed Results
**Duration:** ~60–90 seconds

**On screen:**
- Split-screen comparison for "Customer 360 for Acme"
- LEFT (red header: "MCP / Federated Results"):
  - 7 result cards grouped by app, messy — includes an old closed-lost opportunity, archived feature request, outdated runbook
  - Critical Slack thread "#acme-escalation: Customer threatening churn" buried at position #6 with pulsing red warning badge
  - Callout: "Per-app ranking; no global enterprise signals."
- RIGHT (green header: "Glean Indexed Results"):
  - 5 clean ranked cards — top result "Customer 360 — Acme Corp" highlighted with green "Best answer" pill
  - Slack escalation thread surfaced at #2, followed by active Salesforce opportunity ($1.2M), Jira P1 bug, QBR deck
  - Callout: "60+ signals (ownership, views, org graph, recency, account context) drive the ranking."

**Script:**

Let's look at what happens when you search for "Customer 360 for Acme" in two different systems.

On the left, you see the results from a typical federated or MCP-only search. Notice how the results are grouped by app — Salesforce, Jira, Drive, Slack, Confluence — but there's no unified ranking. The list is a bit messy, and crucially, the most urgent insight — the critical Slack escalation thread about Acme threatening to churn — is buried all the way down at position six, flagged with a warning badge. Your team could easily miss it. At the bottom, you'll see a callout: "Per-app ranking; no global enterprise signals." That means each app decides what's relevant, but there's no intelligence connecting the dots across your organization.

Now, look at the right side — this is Glean's indexed search. Here, results are clean, unified, and ranked by what matters most to your business. The top result is clearly labeled as the "Best answer" — a Customer 360 PowerPoint deck for Acme Corp. Right after that, the Slack escalation thread is surfaced at #2, exactly where you need it. You also see the active Salesforce opportunity, a P1 Jira bug, and the QBR deck — all prioritized based on 60+ enterprise signals: who owns the content, who's viewed it, how recent it is, and how it connects to the Acme account.

Why does Glean's ranking work so much better? Because Glean doesn't just match keywords. It builds a deep, permission-aware index and an enterprise knowledge graph, understanding relationships between people, documents, and business entities. Glean's ranking engine learns from every query, click, and outcome, so it gets smarter over time — delivering the most relevant, actionable results, not just a pile of links.

With federated search, your most important insight can be lost in the noise — buried at position six, or even lower. With Glean, you get the right answer, right away, every time. That's the difference between searching for information and actually finding what matters.

---

## Scene 4 — LLM / Agent on Federated Data
**Duration:** ~60–90 seconds

**On screen:**
- Left-side box (red tones): "Generic MCP Agent" with robot icon
- Context Window panel filling with 10 federated snippets — mix of ok/bad quality, bad ones flagged with orange warning triangles
- "Context window filling up..." indicator with red progress bar
- Pulsing amber "Reasoning… more steps required" with hourglass icon, looping
- Three callouts fade in

**Script:**

Let's take a closer look at what happens when a generic MCP agent tries to answer questions using only federated search. On the left, you see our "Generic MCP Agent" — it's pulling in snippets from a variety of enterprise systems: Salesforce, Jira, meeting notes, runbooks, and more.

Watch as the context window fills up. At first glance, it looks like the agent is getting a lot of information. But look closer: some snippets are relevant and up-to-date, like a Salesforce account record or a recent churn escalation thread. But many others are outdated, irrelevant, or even misleading — an old closed-lost opportunity, a resolved Jira bug from last year, an 18-month-old runbook, archived feature requests, and duplicate records. Notice the orange warning triangles flagging these as problematic.

This is the core challenge: the agent's context window is filling up, but it's mostly noise. The LLM is forced to reason over a messy pile of snippets, many of which are stale, duplicative, or simply not useful. The "context window filling up" indicator turns red, and the agent gets stuck in a loop: "Reasoning… more steps required." The hourglass keeps spinning, but the quality of the answer isn't improving.

Here's the "aha" moment: bigger context windows or more powerful models can't fix bad retrieval. If you feed garbage in, you get garbage out — no matter how smart your LLM is. The agent is drowning in noise, not insight.

Three key callouts fade in:

- First: "Bigger context windows don't fix noisy retrieval." More data isn't better if it's the wrong data.
- Second: "Federated + deep reasoning = more calls, more cost, more latency." The agent has to keep asking for more context, which slows everything down and drives up compute costs.
- Third: "Each MCP host must reinvent retrieval; no shared enterprise memory." Every system is working in isolation, with no unified understanding of what matters to your business.

This is why retrieval quality matters more than model capability. Without a deep, permission-aware index — like Glean's — even the best LLMs can't deliver trustworthy, actionable answers. Enterprises need a platform that understands their data, permissions, and context, not just a federated search that floods the LLM with noise.

---

## Scene 5 — LLM / Agent on Glean Index
**Duration:** ~60–90 seconds

**On screen:**
- Right-side box (Glean-branded, blue/green): "Glean-powered Agent" with Glean logo
- Blue→green gradient beam animates from query into "Search + Context" badge
- "Curated Context" panel (green-tinted) with exactly 4 permission-checked snippets, each with green verified checkmark:
  1. "Acme Corp — Active Opportunity ($1.2M, closing Q2)"
  2. "#acme-escalation: churn risk identified"
  3. "Customer 360 deck — latest QBR summary"
  4. "Key contact: Jane Smith (VP Sales, Acme)"
- Composed answer card: "Customer 360 — Acme Corp" with four sections animating in: Summary, Health Score (62/100), Risks, Next Best Actions
- Three callouts

**Script:**

[Scene opens: The screen is calm, organized, and Glean-branded.]

Let's pause and contrast what you're seeing now with the chaos of the previous scene. Before, we saw a federated or MCP-only search approach — ten noisy, redundant, and sometimes irrelevant snippets, with no guarantee of accuracy or permission checks. It was overwhelming, and the agent struggled to reason through the clutter.

Now, watch as the Glean-powered Agent springs into action. The query flows through a clean, animated blue-to-green beam — this isn't just visual polish. It represents Glean's unique "system of context": a single, unified index that powers every agent, every search, and every workflow across the enterprise.

Notice the "Curated Context" panel. Instead of a flood of unfiltered data, Glean delivers exactly four high-quality, permission-checked snippets — each with a green verified checkmark. These aren't just random facts; they're the most relevant, up-to-date, and trusted pieces of context for this user and this question:
1. The active Acme Corp opportunity, with real-time deal value and close date.
2. An escalation thread flagging churn risk.
3. The latest QBR summary from the Customer 360 deck.
4. The key contact — Jane Smith, VP Sales at Acme.

This is the power of Glean's retrieval-augmented generation, or RAG: the agent draws from a small, permission-aware subset of the index, not the entire corpus. That means better retrieval, fewer reasoning steps, and answers that are faster, cheaper, and more accurate.

Watch as the answer card animates in — "Customer 360 — Acme Corp" — with four clear, actionable sections: a summary, health score, risks, and next best actions. Every insight is grounded in the curated context above, so you can trust both the answer and the process that produced it.

Here's what sets Glean apart:
- Index once; agents reuse the same trusted context everywhere. No more duplicating work or risking inconsistent answers.
- RAG uses only what's relevant and allowed for each user, every time.
- Better retrieval → fewer reasoning steps → faster, cheaper, more accurate agents.

This is Glean's "system of context" in action: one unified index, powering every agent and every AI initiative across your enterprise. That's how you move from AI hype to real, enterprise-grade results.

---

## Scene 6 — MCP as Access Layer on Top of Glean
**Duration:** ~60–90 seconds

**On screen:**
- Architecture diagram, zoomed out:
  - TOP: 5 client nodes — Cursor IDE, Desktop Agent, Internal Tools, Slack Bot, Custom App
  - MIDDLE: Dashed horizontal band labeled "MCP / Actions Layer"
  - BOTTOM: Central "Enterprise Knowledge Graph" block with Glean logo, green border, blue/green glow — subtitle: "Content · Permissions · People · Activity"
  - Dashed lines connect each client through the MCP band down to Glean
  - Blue request packets animate DOWN; green response packets animate BACK UP
  - All packets converge into the same central index before fanning out
- Two callouts

**Script:**

[Begin with the zoomed-out architecture diagram on screen.]

Let's step back and look at how Glean and the Model Context Protocol, or MCP, work together to power enterprise AI.

At the top, you see a range of client tools — whether it's the Cursor IDE, a desktop agent, internal dashboards, Slack bots, or custom apps. Each of these clients needs a way to securely access enterprise knowledge and take action.

That's where the MCP and Actions Layer comes in. MCP is an open protocol that standardizes how tools and agents connect to enterprise systems. It's a fantastic access layer: it lets any compliant client — whether built by Glean, a partner, or your own team — plug in and interact with enterprise data and actions in a consistent way.

But here's the key: MCP is not a replacement for a true enterprise index. It's a port, not the engine. Underneath, all those requests — whether search queries, actions, or agent tasks — flow down through the MCP layer into Glean's core: the Enterprise Knowledge Graph.

This is where Glean's deep, permission-aware intelligence comes in. Every request, from every client, is evaluated against a single, governed graph that understands your content, permissions, people, and activity. That means every tool, every agent, every surface — no matter how it connects — gets the same up-to-date, permission-respecting answers.

As you watch the blue request packets flow down and green responses come back up, notice how everything converges into Glean's central index before fanning back out. This ensures that all access is consistent, secure, and governed — no matter which tool or agent is making the call.

So, the takeaway: MCP and Glean aren't competitors — they're complementary. MCP is the universal access protocol; Glean is the intelligence and governance layer underneath. With Glean, all MCP hosts — whether internal or third-party — share a single, permission-aware knowledge graph. That's how you get both openness and control, flexibility and security, across your entire enterprise AI stack.

---

## Scene 7 — Final Comparison & Takeaway
**Duration:** ~60–90 seconds

**On screen:**
- Comparison grid with 5 metrics, animated horizontal bars:
  - Latency: Federated 25% vs Glean 90%
  - Relevance: Federated 30% vs Glean 95%
  - Coverage: Federated 35% vs Glean 92%
  - Governance: Federated 20% vs Glean 95%
  - Agent Reliability: Federated 30% vs Glean 88%
  - Red gradient bars for federated; blue-to-green gradient bars for Glean
- Center text overlay: "Federated search sprinkles data into your agents. An indexed enterprise graph gives them a **brain**." ("brain" highlighted in Glean green)
- Pill-shaped tagline with Glean logo: "Index once with Glean. Reuse everywhere."

**Script:**

[As the comparison grid animates in, with bars filling for each metric:]

Let's bring it all together. Here, you see a side-by-side comparison of federated search versus Glean's deep, permission-aware index — measured across the five metrics that matter most for enterprise AI.

First, Latency. Federated search is slow — waiting on live API calls from every system, every time. Glean's index is built for speed, delivering answers in real time, even at enterprise scale.

Next, Relevance. Federated search can only return what each tool provides, with no unified learning or ranking. Glean's hybrid search and ranking engine learns from every query, click, and outcome — delivering Google-like relevance at work.

Coverage is critical. Federated connectors only see the surface, missing context and relationships. Glean deeply crawls your systems, indexing full content, metadata, permissions, and over 60 relevance signals — building a true enterprise knowledge graph.

Governance and security? With federated search, every connector must re-implement permissions, and there's no single control plane. Glean mirrors your source-system ACLs and enforces them everywhere — across web, chat, IDEs, and agents — so you always know who can see what, with full audit and compliance.

Finally, Agent Reliability. Federated search leaves agents guessing, with partial, inconsistent data. Glean's indexed enterprise graph gives agents a foundation they can trust — so they deliver consistent, high-quality results, every time.

[As the center text overlay fades in:]

Here's the bottom line: Federated search sprinkles data into your agents. An indexed enterprise graph gives them a **brain**.

[Pause for emphasis as "brain" is highlighted.]

This is the difference between agents that simply fetch information, and agents that truly understand your business — empowered to reason, personalize, and act with confidence.

[As the pill-shaped tagline animates in:]

**Index once with Glean. Reuse everywhere.**

If you want enterprise AI that's fast, relevant, secure, and ready for the future — build on a deep, permission-aware index. Make Glean your work AI platform, and give your agents the brain they need to drive real business impact.
