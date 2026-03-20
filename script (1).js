// ------------ DATA ---------------

const skills = {
  programming: {
    title: "Languages",
    items: ["Python", "C"]
  },
  aiml: {
    title: "Data Tools & Libraries",
    items: ["Pandas", "NumPy", "Scikit-learn"]
  },
  visualization: {
    title: "Data Visualization",
    items: ["Tableau", "Power BI", "Excel"]
  },
  tools: {
    title: "Developer Tools",
    items: ["VS Code", "Google Collab", "GitHub"]
  },
  other: {
    title: "Other Skills",
    items: ["Data Analysis", "Business Analysis"]
  }
};

const projects = [
  {
    id: 1,
    title: "Race Car Strategy Optimization",
    category: "AI-ML",
    year: "2026",
    short: "Simulation-based optimization pipeline for race car performance analysis",
    long: `Built a comprehensive simulation pipeline to model race car performance under different configurations. Conducted data-driven analysis to evaluate parameter variations and determine optimal setups. Implemented simulation-based optimization techniques using Python to improve performance metrics.`,
    tech: ["Python", "Simulation", "Machine Learning"],
    bullets: [
      "Developed a simulation pipeline to model race car performance under different configurations",
      "Conducted data driven analysis to evaluate parameter variations and determine optimal setups",
      "Implemented simulation-based optimization techniques using Python"
    ]
  },
  {
    id: 2,
    title: "Heart Disease Prediction",
    category: "AI-ML",
    year: "2025",
    short: "ML model for predicting heart disease using healthcare data",
    long: `Built a machine learning model to predict heart disease using healthcare datasets. Performed preprocessing, feature engineering, and supervised model training on real medical data. Evaluated model performance using accuracy metrics and validated results.`,
    tech: ["Machine Learning", "Python"],
    bullets: [
      "Built a machine learning model to predict heart disease using healthcare datasets",
      "Performed preprocessing, feature engineering, and supervised model training",
      "Evaluated model performance using accuracy metrics"
    ]
  },
  {
    id: 3,
    title: "Sales Data Visualization Dashboard",
    category: "Data",
    year: "2025",
    short: "Interactive Excel dashboard with advanced data visualization and KPIs",
    long: `Analyzed a sales dataset from Kaggle and cleaned the data using Excel. Built an interactive dashboard with pivoted tables, charts, slicers, and conditional formatting. Generated KPIs to visualize sales trends and business performance metrics.`,
    tech: ["Excel", "Data Visualization", "Business Analytics"],
    bullets: [
      "Analyzed a sales dataset from Kaggle and cleaned the data using Excel",
      "Built an interactive dashboard with pivoted tables, charts, slicers, and conditional formatting",
      "Generated KPIs to visualize sales trends and business performance"
    ]
  }
];

const certifications = [
  {
    id: 1,
    title: "Microsoft Azure AI Fundamentals",
    org: "Microsoft",
    year: "2025",
    desc: "AI workloads, ML concepts, and responsible AI on Microsoft Azure.",
    certificateUrl: "certificates/microsoft_ai_-900.pdf"
  },
  {
    id: 2,
    title: "NPTEL – Introduction to Machine Learning",
    org: "NPTEL",
    year: "2025",
    desc: "Supervised/unsupervised learning, model evaluation, and core ML algorithms.",
    certificateUrl: "certificates/Introduction_to_Machine_Learning.pdf"
  },
  {
    id: 3,
    title: "NPTEL – Database Management Systems",
    org: "NPTEL",
    year: "2025",
    desc: "Relational models, SQL queries, normalization, and transaction concepts.",
    certificateUrl: "certificates/Introduction_to_Database_Systems.pdf"
  },
  {
    id: 4,
    title: "Deloitte – Data Analytics Job Simulation",
    org: "Deloitte",
    year: "2025",
    desc: "Data cleaning, exploratory analysis, and communicating business insights.",
    certificateUrl: "certificates/delloite.pdf"
  }
];

const hobbies = [
  {
    key: "classical",
    emoji: "🩰",
    title: "Classical Dancing",
    sub: "Classical dance has been a core part of my life for years.",
    softSkill: "Discipline, stage confidence, and expressing ideas without words."
  },
  {
    key: "badminton",
    emoji: "🏸",
    title: "Badminton",
    sub: "Most days you'll find me on a badminton court, not a chair.",
    softSkill: "Reflexes, focus, teamwork, and strategic thinking under pressure."
  },
  {
    key: "chess",
    emoji: "♟️",
    title: "Chess",
    sub: "I enjoy slow chess games with friends and online opponents.",
    softSkill: "Thinking ahead, patience, and breaking down complex problems."
  }
];

// ------------ RENDER FUNCTIONS ---------------

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const skillGroups = [
    skills.programming,
    skills.aiml,
    skills.visualization,
    skills.tools,
    skills.other
  ];

  skillGroups.forEach((group) => {
    const div = document.createElement("div");
    div.className = "skills-group";

    const h3 = document.createElement("h3");
    h3.textContent = group.title;
    div.appendChild(h3);

    const pills = document.createElement("div");
    pills.className = "pill-group";

    group.items.forEach((item) => {
      const span = document.createElement("span");
      span.className = "pill";
      span.textContent = item;
      pills.appendChild(span);
    });

    div.appendChild(pills);
    grid.appendChild(div);
  });
}

let activeFilter = "All";

function renderProjectFilters() {
  const container = document.getElementById("project-filters");
  if (!container) return;

  const categories = ["All", "AI-ML", "Data"];
  container.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeFilter ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeFilter = cat;
      renderProjectFilters();
      renderProjects();
    });
    container.appendChild(btn);
  });
}

function getFilteredProjects() {
  if (activeFilter === "All") return projects;
  return projects.filter((p) => p.category === activeFilter);
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const list = getFilteredProjects();

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const inner = document.createElement("div");
    inner.className = "project-inner";

    // FRONT side
    const front = document.createElement("div");
    front.className = "project-front";

    const h3 = document.createElement("h3");
    h3.textContent = project.title;

    const yearBadge = document.createElement("span");
    yearBadge.className = "badge badge-year";
    yearBadge.textContent = project.year;

    const catBadge = document.createElement("span");
    catBadge.className = "badge";
    catBadge.textContent = project.category;

    const badgeContainer = document.createElement("div");
    badgeContainer.className = "badge-container";
    badgeContainer.appendChild(catBadge);
    badgeContainer.appendChild(yearBadge);

    const shortP = document.createElement("p");
    shortP.className = "project-short";
    shortP.textContent = project.short;

    front.appendChild(h3);
    front.appendChild(badgeContainer);
    front.appendChild(shortP);

    // BACK side
    const back = document.createElement("div");
    back.className = "project-back";

    const h3Back = document.createElement("h3");
    h3Back.textContent = project.title;

    const longP = document.createElement("p");
    longP.className = "project-long";
    longP.textContent = project.long;

    const bulletList = document.createElement("ul");
    bulletList.className = "project-bullets";
    project.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      bulletList.appendChild(li);
    });

    const techDiv = document.createElement("div");
    techDiv.className = "tech-stack";
    project.tech.forEach((t) => {
      const span = document.createElement("span");
      span.className = "pill pill-small";
      span.textContent = t;
      techDiv.appendChild(span);
    });

    const hint = document.createElement("p");
    hint.style.fontSize = "0.8rem";
    hint.style.opacity = "0.8";
    hint.textContent = "← Click to flip back";

    back.appendChild(h3Back);
    back.appendChild(bulletList);
    back.appendChild(techDiv);
    back.appendChild(hint);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Flip interaction
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    grid.appendChild(card);
  });
}

function renderCertifications() {
  const grid = document.getElementById("certs-grid");
  if (!grid) return;

  grid.innerHTML = "";

  certifications.forEach((c) => {
    const card = document.createElement("article");
    card.className = "card cert-card clickable";

    const header = document.createElement("div");
    header.className = "cert-header";

    const title = document.createElement("h3");
    title.textContent = c.title;

    const year = document.createElement("span");
    year.className = "cert-year";
    year.textContent = c.year;

    header.appendChild(title);
    header.appendChild(year);

    const org = document.createElement("p");
    org.className = "cert-org";
    org.textContent = c.org;

    const desc = document.createElement("p");
    desc.className = "cert-desc";
    desc.textContent = c.desc;

    const viewBtn = document.createElement("a");
    viewBtn.className = "btn btn-small";
    viewBtn.textContent = "View Certificate →";
    viewBtn.href = c.certificateUrl;
    viewBtn.target = "_blank";
    viewBtn.rel = "noreferrer";

    card.appendChild(header);
    card.appendChild(org);
    card.appendChild(desc);
    card.appendChild(viewBtn);

    grid.appendChild(card);
  });
}

function renderHobbies() {
  const grid = document.getElementById("hobbies-grid");
  if (!grid) return;

  grid.innerHTML = "";

  hobbies.forEach((hobby) => {
    const card = document.createElement("article");
    card.className = `hobby-card hobby-${hobby.key}`;

    const emoji = document.createElement("div");
    emoji.className = "hobby-emoji";
    emoji.textContent = hobby.emoji;

    const title = document.createElement("div");
    title.className = "hobby-title";
    title.textContent = hobby.title;

    const sub = document.createElement("div");
    sub.className = "hobby-sub";
    sub.textContent = hobby.sub;

    const softSkill = document.createElement("div");
    softSkill.className = "hobby-soft-skill";
    softSkill.innerHTML = "<strong>Key skills:</strong> " + hobby.softSkill;

    card.appendChild(emoji);
    card.appendChild(title);
    card.appendChild(sub);
    card.appendChild(softSkill);

    grid.appendChild(card);
  });
}

// ------------ SCROLL + THEME + MISC ---------------

function setupSmoothScroll() {
  const clickable = document.querySelectorAll("[data-scroll]");

  clickable.forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetSelector = el.getAttribute("data-scroll");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupScrollAnimations() {
  const sections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const root = document.documentElement;

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
    btn.textContent = stored === "dark" ? "🌙" : "☀️";
  }

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.textContent = next === "dark" ? "🌙" : "☀️";
  });
}

function setYear() {
  const y = document.getElementById("year");
  if (y) {
    y.textContent = new Date().getFullYear();
  }
}

// ------------ INIT ---------------

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderCertifications();
  renderHobbies();
  setupSmoothScroll();
  setupScrollAnimations();
  setupThemeToggle();
  setYear();

  // ---- Contact form handler ----
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      statusEl.textContent = "Sending...";
      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          statusEl.textContent = "✅ Message sent! I'll get back to you soon.";
          form.reset();
        } else {
          statusEl.textContent =
            "❌ Something went wrong. Please try again or email me directly.";
        }
      } catch (err) {
        statusEl.textContent =
          "❌ Network error. Please check your connection or email me directly.";
      }
    });
  }
});
