import { ExternalLink, Github, Heart, FileText, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Healthcare Assistant',
      description: 'A health-focused app to track symptoms and give basic suggestions. Helps users monitor their health and provides personalized recommendations.',
      icon: <Heart className="w-8 h-8" />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'ML'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Online Examination System',
      description: 'A platform to conduct and manage online exams securely. Features include timed tests, automatic grading, and detailed analytics.',
      icon: <FileText className="w-8 h-8" />,
      technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Renewable Energy Management System',
      description: 'A system for monitoring and optimizing renewable energy usage. Tracks energy production, consumption, and provides efficiency insights.',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2 font-semibold">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-cyan-400 text-xs font-semibold rounded-full hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
