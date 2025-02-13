import React from 'react';
import { Github, Linkedin, Mail, Calendar, MapPin, GraduationCap, Globe, Users, Zap, Database, Building2 } from 'lucide-react';

function App() {
  const skills = [
    { name: 'Salesforce Administration', level: 90 },
    { name: 'CRM Management', level: 95 },
    { name: 'Process Automation', level: 85 },
    { name: 'Data Analytics', level: 80 }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '500+', label: 'Users Managed' },
    { icon: <Zap className="w-8 h-8" />, value: '100+', label: 'Automations Built' },
    { icon: <Database className="w-8 h-8" />, value: '50+', label: 'CRM Projects' },
    { icon: <Building2 className="w-8 h-8" />, value: '25+', label: 'Clients Served' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100"
              alt="Elizabeth Lartey"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">Elizabeth Lartey</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
            alt="Elizabeth Lartey"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <h1 className="text-6xl font-bold mb-4">
            I'M A SALESFORCE<br />
            <span className="text-red-500">SOLUTIONS ARCHITECT</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Bridging technology and strategy to create impactful CRM solutions that drive business growth and enhance customer experiences.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">ABOUT ME</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Elizabeth Lartey"
              className="rounded-lg shadow-2xl"
            />
            <div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I have a strong background in customer relationship management (CRM), business development, and digital transformation, with a focus on tourism, education, and job creation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Experience</div>
                    <div>8+ Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div>Remote</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Certifications</div>
                    <div>Salesforce Admin</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="text-sm text-gray-400">Languages</div>
                    <div>English</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">SKILL AREA</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-12">
                {['SALESFORCE', 'CRM', 'AUTOMATION', 'DATA ANALYTICS', 'BUSINESS DEVELOPMENT', 
                  'PROCESS OPTIMIZATION', 'CUSTOMER EXPERIENCE', 'DIGITAL TRANSFORMATION'].map((skill) => (
                  <span key={skill} className="bg-red-500 text-sm px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-300">
                Expertise in implementing and optimizing Salesforce solutions, automating business processes, 
                and driving digital transformation initiatives.
              </p>
            </div>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 rounded-full bg-red-500/10 text-red-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">PORTFOLIO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" className="block group">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
                  Phase 2 Project Video
                </h3>
                <p className="text-gray-400 mb-4">
                  Watch our team's project presentation and demo
                </p>
                <span className="text-red-500 text-sm">Watch Video →</span>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-red-500 transition-colors">
                  Project Slide Deck
                </h3>
                <p className="text-gray-400 mb-4">
                  Download our comprehensive project presentation
                </p>
                <span className="text-red-500 text-sm">View PDF →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Elevator Pitch Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">ELEVATOR PITCH</h2>
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <p className="text-gray-400 italic">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 text-center text-gray-400">
        <p>© 2024 Elizabeth Lartey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;