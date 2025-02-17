import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Calendar, Link as LinkIcon, Code2, Rocket, Users, Award, Briefcase, GraduationCap, Star, Coffee, Globe, Book } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isHovered, setIsHovered] = useState('');

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'PostgreSQL', level: 88 }
  ];

  const renderSkillBar = (skill: { name: string; level: number }) => (
    <div key={skill.name} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header/Cover Image */}
          <div 
            className="h-48 w-full bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2000")'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          {/* Profile Section */}
          <div className="px-8 py-6 relative">
            <div className="absolute -top-16 left-8">
              <div 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer"
                onMouseEnter={() => setIsHovered('profile')}
                onMouseLeave={() => setIsHovered('')}
              >
                <span className="text-4xl font-bold text-white relative">
                  NS
                  {isHovered === 'profile' && (
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-gray-700 whitespace-nowrap">
                      Click to view full profile
                    </div>
                  )}
                </span>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">NAHİD SALİMOV</h1>
                  <p className="text-lg text-gray-600 mt-1">Senior Software Developer & Tech Lead</p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Connect
                </button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  className="bg-blue-50 p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group relative"
                  onMouseEnter={() => setIsHovered('fullstack')}
                  onMouseLeave={() => setIsHovered('')}
                >
                  <Code2 className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">Full Stack Development</h3>
                  <p className="text-gray-600 text-sm mt-1">React, Node.js, TypeScript Expert</p>
                  {isHovered === 'fullstack' && (
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-90 rounded-xl p-4 text-white transform transition-all">
                      <h4 className="font-semibold mb-2">Expertise includes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Modern Frontend Frameworks</li>
                        <li>• Backend Architecture</li>
                        <li>• API Development</li>
                        <li>• Database Design</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div 
                  className="bg-indigo-50 p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group relative"
                  onMouseEnter={() => setIsHovered('innovation')}
                  onMouseLeave={() => setIsHovered('')}
                >
                  <Rocket className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-gray-600 text-sm mt-1">Cloud Architecture & DevOps</p>
                  {isHovered === 'innovation' && (
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 rounded-xl p-4 text-white transform transition-all">
                      <h4 className="font-semibold mb-2">Focus areas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Cloud Solutions</li>
                        <li>• CI/CD Pipelines</li>
                        <li>• Microservices</li>
                        <li>• Containerization</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div 
                  className="bg-purple-50 p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group relative"
                  onMouseEnter={() => setIsHovered('leadership')}
                  onMouseLeave={() => setIsHovered('')}
                >
                  <Users className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">Leadership</h3>
                  <p className="text-gray-600 text-sm mt-1">Team Management & Mentoring</p>
                  {isHovered === 'leadership' && (
                    <div className="absolute inset-0 bg-purple-600 bg-opacity-90 rounded-xl p-4 text-white transform transition-all">
                      <h4 className="font-semibold mb-2">Leadership skills:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Team Building</li>
                        <li>• Technical Mentoring</li>
                        <li>• Project Management</li>
                        <li>• Agile Methodologies</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Istanbul, Turkey</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
                  <Calendar className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Software Developer since 2020</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 group">
                  <LinkIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <a href="#" className="text-blue-600 hover:underline">nahidsalimov.dev</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="px-8 border-b border-gray-100">
            <div className="flex space-x-8">
              {['about', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content Sections */}
          <div className="px-8 py-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-blue-600" />
                    About Me
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Passionate senior software developer with expertise in building innovative web applications 
                    and digital solutions. Specializing in full-stack development with a focus on creating 
                    scalable, user-centric applications. Leading teams to deliver high-impact projects while 
                    mentoring junior developers and fostering a culture of technical excellence.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-blue-600" />
                      Technical Skills
                    </h3>
                    <div className="space-y-4">
                      {skills.map(renderSkillBar)}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-blue-600" />
                        Languages
                      </h3>
                      <div className="space-y-3">
                        {[
                          { lang: 'Turkish', level: 'Native', percentage: '100%' },
                          { lang: 'English', level: 'Professional', percentage: '90%' },
                        ].map((lang) => (
                          <div key={lang.lang} className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium text-gray-700">{lang.lang}</span>
                              <span className="text-sm text-gray-500">{lang.level}</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                style={{ width: lang.percentage }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Coffee className="w-5 h-5 mr-2 text-blue-600" />
                        Interests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Open Source', 'AI/ML', 'Tech Writing', 'UI/UX Design',
                          'Cloud Computing', 'System Architecture'
                        ].map((interest) => (
                          <span 
                            key={interest}
                            className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  <div className="border-l-2 border-blue-200 pl-4 ml-2 relative group">
                    <div className="absolute -left-[1.35rem] top-1 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900">Senior Software Developer</h3>
                      <p className="text-gray-600">Tech Innovation Ltd • 2022 - Present</p>
                      <div className="mt-3 text-gray-600">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Code2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Led development of enterprise web applications using React and Node.js</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Mentored junior developers and conducted code reviews</span>
                          </li>
                          <li className="flex items-start">
                            <Rocket className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Implemented CI/CD pipelines and improved deployment processes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-blue-200 pl-4 ml-2 relative group">
                    <div className="absolute -left-[1.35rem] top-1 w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900">Software Developer</h3>
                      <p className="text-gray-600">Digital Solutions Co • 2020 - 2022</p>
                      <div className="mt-3 text-gray-600">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Code2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Developed full-stack web applications using modern technologies</span>
                          </li>
                          <li className="flex items-start">
                            <Book className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Contributed to technical documentation and API specifications</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                            <span>Collaborated with cross-functional teams to deliver projects</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'education' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education
                </h2>
                <div className="border-l-2 border-blue-200 pl-4 ml-2 relative group">
                  <div className="absolute -left-[1.35rem] top-1 w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900">Bachelor of Computer Science</h3>
                    <p className="text-gray-600">Istanbul Technical University • 2016 - 2020</p>
                    <div className="mt-3 text-gray-600">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Book className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span>Focus on Software Engineering and Web Technologies</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span>Graduated with High Honors</span>
                        </li>
                        <li className="flex items-start">
                          <Code2 className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                          <span>Advanced coursework in Algorithms and Data Structures</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Social Links */}
          <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;