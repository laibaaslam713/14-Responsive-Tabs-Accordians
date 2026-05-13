import { useState, useRef, useEffect } from "react";
import "./App.css"

const services = [
  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    tagline: "Pixel-perfect, blazing fast",
    color: "#2563eb",
    accent: "#dbeafe",
    description:
      "We craft modern, scalable web applications tailored to your business goals. From landing pages to complex SaaS platforms, our solutions are built for performance, accessibility, and growth.",
    features: [
      "Custom React / Next.js frontends",
      "RESTful & GraphQL API integration",
      "Progressive Web Apps (PWA)",
      "SEO-optimized architecture",
      "CI/CD pipeline setup",
      "Performance audits & optimization",
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    tagline: "Native feel, cross-platform reach",
    color: "#7c3aed",
    accent: "#ede9fe",
    description:
      "Launch polished iOS and Android apps without doubling your budget. We build with React Native and Flutter to deliver native-quality experiences on every device.",
    features: [
      "React Native & Flutter development",
      "iOS & Android publishing",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store optimization (ASO)",
      "Crash analytics & monitoring",
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Solutions",
    tagline: "Intelligent systems, real results",
    color: "#059669",
    accent: "#d1fae5",
    description:
      "Integrate cutting-edge AI into your products and workflows. We design, train, and deploy machine learning models that solve real business problems — not just demos.",
    features: [
      "Custom LLM integrations (GPT, Claude)",
      "Computer vision pipelines",
      "Recommendation engines",
      "Sentiment & NLP analysis",
      "Model fine-tuning & evaluation",
      "AI-powered chatbots & assistants",
    ],
  },
  {
    id: "python",
    icon: "⚙️",
    title: "Python Automation",
    tagline: "Save hours, every single day",
    color: "#d97706",
    accent: "#fef3c7",
    description:
      "Eliminate repetitive work with smart Python scripts and automation pipelines. From data scraping to scheduled reporting, we automate the tasks that drain your team's time.",
    features: [
      "Web scraping & data extraction",
      "Scheduled task automation (cron jobs)",
      "Excel / Google Sheets automation",
      "Email & Slack workflow bots",
      "ETL pipelines & data processing",
      "API automation & integrations",
    ],
  },
];

/* ─── Accordion Item ─── */
function AccordionItem({ service, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        border: `1.5px solid ${isOpen ? service.color : "#e5e7eb"}`,
        borderRadius: 14,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.3s",
        background: "#fff",
        boxShadow: isOpen ? `0 4px 24px ${service.color}18` : "none",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontSize: 22,
            width: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            background: isOpen ? service.color : service.accent,
            flexShrink: 0,
            transition: "background 0.3s",
          }}
        >
          {service.icon}
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#111827",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {service.title}
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>
            {service.tagline}
          </div>
        </div>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? service.color : "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
            flexShrink: 0,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <path
              d="M2 4l4 4 4-4"
              stroke={isOpen ? "#fff" : "#6b7280"}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={bodyRef} style={{ padding: "0 20px 20px 78px" }}>
          <p
            style={{
              fontSize: 13.5,
              color: "#374151",
              lineHeight: 1.7,
              margin: "0 0 14px",
            }}
          >
            {service.description}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {service.features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 13,
                  color: "#4b5563",
                  marginBottom: 7,
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: service.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.5 4l2 2 3-3"
                      stroke={service.color}
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("web");
  const [openAccordion, setOpenAccordion] = useState("web");
  const [contentVisible, setContentVisible] = useState(true);

  const active = services.find((s) => s.id === activeTab);

  const switchTab = (id) => {
    if (id === activeTab) return;
    setContentVisible(false);
    setTimeout(() => {
      setActiveTab(id);
      setContentVisible(true);
    }, 180);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <>

      <div className="services-root">
        
        <div className="section-header">
          <div className="badge">✦ What We Offer</div>
          <h2 className="section-title">
            Services Built for <span>Modern Businesses</span>
          </h2>
          <p className="section-sub">
            From sleek web apps to intelligent automation — explore everything we
            do to help your business move faster.
          </p>
        </div>

        <div className="desktop-tabs">
          <div className="tabs-shell">
            
            <nav className="tab-sidebar" role="tablist">
              {services.map((s) => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    className={`tab-btn${isActive ? " active" : ""}`}
                    onClick={() => switchTab(s.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${s.id}`}
                  >
                    <span
                      className="tab-icon"
                      style={{
                        background: isActive ? s.color : s.accent,
                        fontSize: 19,
                      }}
                    >
                      {s.icon}
                    </span>
                    <span className="tab-label">
                      <div
                        className="tab-label-title"
                        style={{ color: isActive ? s.color : undefined }}
                      >
                        {s.title}
                      </div>
                      <div className="tab-label-sub">{s.tagline}</div>
                    </span>
                    <span
                      className="tab-indicator"
                      style={{ background: s.color }}
                    />
                  </button>
                );
              })}
            </nav>

            <div
              id={`panel-${active.id}`}
              role="tabpanel"
              className={`tab-panel ${contentVisible ? "visible" : "hidden"}`}
            >
              <div className="panel-eyebrow">
                <span
                  className="panel-icon-wrap"
                  style={{ background: active.accent }}
                >
                  {active.icon}
                </span>
                <span
                  className="panel-tag"
                  style={{
                    color: active.color,
                    borderColor: active.color + "44",
                    background: active.accent,
                  }}
                >
                  {active.tagline}
                </span>
              </div>
              <h3 className="panel-title">{active.title}</h3>
              <p className="panel-desc">{active.description}</p>
              <div className="panel-features-title">Key Capabilities</div>
              <div className="features-grid">
                {active.features.map((f, i) => (
                  <div key={i} className="feature-pill">
                    <span
                      className="check-dot"
                      style={{ background: active.accent }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9">
                        <path
                          d="M1.5 4.5l2 2 4-4"
                          stroke={active.color}
                          strokeWidth="1.6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-accordion">
          <div className="accordion-shell">
            {services.map((s) => (
              <AccordionItem
                key={s.id}
                service={s}
                isOpen={openAccordion === s.id}
                onToggle={() => toggleAccordion(s.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}