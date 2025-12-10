import { Code2, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-700">
                <div className="text-8xl text-gray-600">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Bharat, a passionate BCA student and developer with a keen interest in creating innovative digital solutions.
              My journey in technology has been driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in web development, working with modern technologies to build responsive and user-friendly applications.
              Beyond web development, I'm fascinated by data science and artificial intelligence, constantly exploring how machine
              learning can transform the way we interact with technology.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I'm learning new technologies, contributing to open-source projects, and staying updated with
              the latest trends in software development and AI.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors group">
                <Code2 className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 font-semibold">Web Dev</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors group">
                <Database className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 font-semibold">Data</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors group">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 font-semibold">AI/ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
