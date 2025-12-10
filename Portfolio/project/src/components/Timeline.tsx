import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'Bachelor of Computer Applications (BCA)',
      description: 'Pursuing BCA with a focus on software development, web technologies, and machine learning. Building a strong foundation in computer science fundamentals.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      year: '2024',
      title: 'Personal Healthcare Assistant Project',
      description: 'Developed a comprehensive healthcare tracking application using Python and machine learning algorithms to provide personalized health recommendations.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      year: '2024',
      title: 'Online Examination System',
      description: 'Built a secure online examination platform with features like timed assessments, automatic grading, and detailed performance analytics.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2024',
      title: 'Renewable Energy Management System',
      description: 'Created an energy management solution to monitor and optimize renewable energy usage, contributing to sustainable technology solutions.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right" style={{ opacity: index % 2 === 0 ? 1 : 0 }}>
                  <div className="hidden md:block"></div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className={`absolute w-16 h-16 rounded-full bg-gradient-to-r ${item.color} opacity-20 animate-pulse`}></div>
                  <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white z-10 shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
