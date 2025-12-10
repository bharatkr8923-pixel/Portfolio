import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', href: '#', color: 'hover:text-cyan-400' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', href: '#', color: 'hover:text-red-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's build something awesome together. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    {social.icon}
                    <span className="mt-2 text-sm font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Let's Collaborate</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail size={20} />
                <span className="font-semibold">bharat@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
