import { Code, Database, Brain, Server, FileCode } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: <Code className="w-8 h-8" />, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, icon: <FileCode className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 80, icon: <Code className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { name: 'Python', level: 85, icon: <Code className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
    { name: 'PHP', level: 75, icon: <Server className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { name: 'SQL', level: 80, icon: <Database className="w-8 h-8" />, color: 'from-blue-500 to-indigo-500' },
    { name: 'Machine Learning', level: 70, icon: <Brain className="w-8 h-8" />, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`text-cyan-400 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-3">{skill.name}</h3>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-800">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                  {skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
