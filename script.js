// SKILLS
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

// PROJECTS
const projects = [
  {
    title: "Race Car Strategy Optimization (2026)",
    short: "Simulation-based optimization of race car performance.",
    long: `• Developed a simulation pipeline to model race car performance.
• Conducted data-driven analysis to evaluate parameter variations.
• Implemented optimization techniques using Python.`
  },
  {
    title: "Heart Disease Prediction (2025)",
    short: "Machine learning model using healthcare datasets.",
    long: `• Built ML model for heart disease prediction.
• Performed preprocessing and feature engineering.
• Evaluated model accuracy.`
  },
  {
    title: "Sales Data Dashboard (2025)",
    short: "Interactive Excel dashboard for business insights.",
    long: `• Cleaned Kaggle dataset.
• Built pivot tables, charts, slicers.
• Generated KPIs for business insights.`
  }
];

// CERTIFICATIONS (YOUR REAL FILES)
const certifications = [
  {
    title: "Microsoft Azure AI-900 Fundamentals",
    link: "certificates/microsoft ai -900.pdf"
  },
  {
    title: "Introduction to Machine Learning",
    link: "certificates/Introduction to Machine Learning.pdf"
  },
  {
    title: "Introduction to Database Systems",
    link: "certificates/Introduction to Database Systems.pdf"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    link: "certificates/delloite.pdf"
  }
];

// RENDER SKILLS
function renderSkills() {
  const grid = document.getElementById("skills-grid");

  grid.innerHTML = `
    <div>
      <h3>Programming</h3>
      <p>Languages: Python, C</p>
    </div>

    <div>
      <h3>AI / ML & Data</h3>
      <p>Data Tools & Libraries: Pandas, NumPy, Scikit-learn</p>
      <p>Data Visualization: Tableau, Power BI, Excel</p>
    </div>

    <div>
      <h3>Tools & Platforms</h3>
      <p>VS Code, Google Colab, GitHub</p>
      <p>Other Skills: Data Analysis, Business Analysis</p>
    </div>
  `;
}

// PROJECTS
function renderProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach(p => {
    const card = document.createElement("div");
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
function renderCerts() {
  const grid = document.getElementById("certs-grid");

  certifications.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = c.title;

    card.onclick = () => {
      window.open(c.link, "_blank");
    };

    grid.appendChild(card);
  });
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCerts();
});
