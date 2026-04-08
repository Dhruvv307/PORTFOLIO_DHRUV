import "./styles/MobileTechStack.css";
import { FaCode, FaChartLine, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    category: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
    ],
  },
  {
    category: "AI & Data",
    icon: <FaChartLine />,
    skills: [
      { name: "Gemini API", level: 90 },
      { name: "LLM Integration", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "ETL Pipelines", level: 75 },
      { name: "Data Modeling", level: 75 },
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: <FaTools />,
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "PostgreSQL / Supabase", level: 80 },
      { name: "Git / Docker", level: 88 },
      { name: "AWS", level: 65 },
    ],
  },
];

const ProgressBar = ({ level }: { level: number }) => (
  <div className="skill-progress-bg">
    <div className="skill-progress-fill" style={{ width: `${level}%` }}></div>
  </div>
);

const MobileTechStack = () => {
  return (
    <div className="mobile-tech-section">
      <h2>
        My <span>Techstack</span>
      </h2>
      <div className="skill-groups-container">
        {skillGroups.map((group, idx) => (
          <div className="skill-group-card" key={idx}>
            <div className="skill-group-header">
              <div className="skill-group-icon">{group.icon}</div>
              <h3>{group.category}</h3>
            </div>
            <div className="skills-list">
              {group.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTechStack;
