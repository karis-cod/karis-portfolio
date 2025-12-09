import { useState } from 'react';


function SkillsPage() {
  // interface for skills
  interface SkillProps {
    name: string;
    percentage: number;
  }

  // Component that displays ONE skill
  const SkillItem: React.FC<SkillProps> = ({ name, percentage }) => {
    return (
      <div className="skill-item">
        <h4>{name}</h4>

        <div className="skill-bar-bg">
          <div
            className="skill-bar-fill"
            style={{ width: `${percentage}%`, height:`${percentage/2}` }}
          ></div>
        </div>
        <p>{percentage}%</p>
      </div>
    );
  };

  // category lists (REAL SKILL DATA, not JSX)
  const categories = {
    All: [
      { name: 'HTML', percentage: 60 },
      { name: 'CSS', percentage: 80 },
      { name: 'Javascript', percentage: 50 },
      { name: 'Git/Github', percentage: 75 },
      { name: 'Vs code editor', percentage: 85 },
      { name: 'Typescript', percentage: 40 },
      { name: 'React', percentage: 35 }
    ],
    Frontend: [
      { name: 'HTML', percentage: 60 },
      { name: 'CSS', percentage: 80 },
      { name: 'Javascript', percentage: 50 },
      { name: 'Typescript', percentage: 40 },
      { name: 'React', percentage: 35 }
    ],
    Tools: [
      { name: 'Git/Github', percentage: 75 },
      { name: 'Vs code editor', percentage: 85 }
    ]
  };

  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Tools'>('All');

  return (
    <div className='skill-con'>
      <h2>My <span>Skills</span></h2>

      {/* buttons */}
      <div className='skill-btn'>
        <button onClick={() => setActiveTab('All')}>All</button>
        <button onClick={() => setActiveTab('Frontend')}>Frontend</button>
        <button onClick={() => setActiveTab('Tools')}>Tools</button>
      </div>

      {/* display skills */}
      <div className="skills-list">
        {categories[activeTab].map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
