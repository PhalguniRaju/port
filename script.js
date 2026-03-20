// SKILLS UPDATED
const skills = {
  programming: ["Python", "C"],

  aiMl: [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Tableau",
    "Power BI",
    "Excel"
  ],

  tools: [
    "VS Code",
    "Google Colab",
    "GitHub",
    "Data Analysis",
    "Business Analysis"
  ]
};

// PROJECTS UPDATED
const projects = [
  {
    id: 1,
    title: "Race Car Strategy Optimization | Python, Simulation, Machine Learning | 2026",
    category: "AI-ML",
    short: "Simulation-based optimization of race car performance.",
    long: `• Developed a simulation pipeline to model race car performance under different configurations.

• Conducted data driven analysis to evaluate parameter variations and determine optimal setups.

• Implemented simulation-based optimization techniques using Python.`,
    tech: ["Python", "Simulation", "Machine Learning"]
  },
  {
    id: 2,
    title: "Heart Disease Prediction | Machine Learning, Python | 2025",
    category: "AI-ML",
    short: "Machine learning model using healthcare data.",
    long: `• Built a machine learning model to predict heart disease.

• Performed preprocessing, feature engineering, and training.

• Evaluated model performance using accuracy.`,
    tech: ["Machine Learning", "Python"]
  },
  {
    id: 3,
    title: "Sales Dashboard | Excel, Data Visualization | 2025",
    category: "Data",
    short: "Interactive dashboard for business insights.",
    long: `• Cleaned dataset using Excel.

• Built pivot tables, charts, and KPIs.

• Visualized business performance trends.`,
    tech: ["Excel"]
  }
];

// CERTIFICATIONS CLICKABLE
const certifications = [
  {
    title: "Microsoft Azure AI-900 Fundamentals",
    org: "Microsoft",
    year: "2025",
    desc: "AI workloads and ML concepts",
    link: "microsoft ai -900.pdf"
  },
  {
    title: "Introduction to Machine Learning",
    org: "NPTEL",
    year: "2025",
    desc: "ML fundamentals",
    link: "Introduction to Machine Learning.pdf"
  },
  {
    title: "Introduction to Database Systems",
    org: "NPTEL",
    year: "2025",
    desc: "SQL and DB design",
    link: "Introduction to Database Systems.pdf"
  },
  {
    title: "Deloitte Data Analytics Simulation",
    org: "Deloitte",
    year: "2025",
    desc: "Data insights",
    link: "delloite.pdf"
  }
];

// RENDER SKILLS
function renderSkills() {
  const grid = document.getElementById("skills-grid");

  grid.innerHTML = `
    <div class="skills-group">
      <h3>Programming</h3>
      <p>Languages: Python, C</p>
    </div>

    <div class="skills-group">
      <h3>AI / ML & Data</h3>
      <p>Data Tools: Pandas, NumPy, Scikit-learn</p>
      <p>Visualization: Tableau, Power BI, Excel</p>
    </div>

    <div class="skills-group">
      <h3>Tools & Platforms</h3>
      <p>VS Code, Google Colab, GitHub</p>
      <p>Other: Data Analysis, Business Analysis</p>
    </div>
  `;
}

// PROJECTS
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-inner">
        <div class="project-front">
          <h3>${p.title}</h3>
          <p>${p.short}</p>
        </div>
        <div class="project-back">
          <p style="white-space: pre-line;">${p.long}</p>
        </div>
      </div>
    `;

    card.onclick = () => card.classList.toggle("flipped");

    grid.appendChild(card);
  });
}

// CERTIFICATIONS
function renderCertifications() {
  const grid = document.getElementById("certs-grid");

  certifications.forEach(c => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `<h3>${c.title}</h3><p>${c.org}</p>`;

    card.onclick = () => window.open(c.link, "_blank");

    grid.appendChild(card);
  });
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertifications();
});
