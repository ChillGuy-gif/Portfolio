import { Shield, Code, Cloud } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="snap-section flex items-center justify-center bg-[#0D0D0D] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F1F1F1] mb-4">Skills & Competencies</h2>
          <div className="h-1 w-20 bg-[#00FF57] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Penetration Testing & Cybersecurity */}
          <div className="bg-[#1A1A1A] p-8 space-y-4 hover:border-[#00FF57] border-2 border-transparent transition-all shadow-[0_0_25px_rgba(0,255,87,0.2)] hover:shadow-[0_0_45px_rgba(0,255,87,0.5)] duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-[#00FF57] drop-shadow-[0_0_10px_rgba(0,255,87,0.7)]" />
              <h3 className="text-2xl font-bold text-[#F1F1F1]">Penetration Testing & Cybersecurity</h3>
            </div>
            <ul className="space-y-3 text-[#F1F1F1]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>OWASP Top 10 Vulnerabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>Network Security Fundamentals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>Burp Suite & Metasploit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>Vulnerability Assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>Wireshark Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00FF57] mt-1">•</span>
                <span>pfSense Firewall Configuration</span>
              </li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="bg-[#1A1A1A] p-8 space-y-4 hover:border-[#A259FF] border-2 border-transparent transition-all shadow-[0_0_25px_rgba(162,89,255,0.2)] hover:shadow-[0_0_45px_rgba(162,89,255,0.5)] duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-10 h-10 text-[#A259FF] drop-shadow-[0_0_10px_rgba(162,89,255,0.7)]" />
              <h3 className="text-2xl font-bold text-[#F1F1F1]">Web Development</h3>
            </div>
            <ul className="space-y-3 text-[#F1F1F1]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>React.js & JavaScript</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>Django Backend Framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>HTML5, CSS3, Tailwind</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>RESTful API Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>MySQL & PHP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A259FF] mt-1">•</span>
                <span>Streamlit (Python Web Apps)</span>
              </li>
            </ul>
          </div>

          {/* Cloud & IT Support */}
          <div className="bg-[#1A1A1A] p-8 space-y-4 hover:border-[#FFD600] border-2 border-transparent transition-all shadow-[0_0_25px_rgba(255,214,0,0.2)] hover:shadow-[0_0_45px_rgba(255,214,0,0.5)] duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-10 h-10 text-[#FFD600] drop-shadow-[0_0_10px_rgba(255,214,0,0.7)]" />
              <h3 className="text-2xl font-bold text-[#F1F1F1]">Cloud & IT Support</h3>
            </div>
            <ul className="space-y-3 text-[#F1F1F1]/80">
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>Virtual Machines (Linux & Windows)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>Cloud Basics & Security Principles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>Operating System Installation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>IT Troubleshooting & Helpdesk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>Git & GitHub Version Control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFD600] mt-1">•</span>
                <span>Network Connectivity Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Python', 'Java', 'JavaScript', 'SQL', 'MongoDB', 'Git', 'Linux', 'React', 'Node.js', 'TypeScript', 'pfSense', 'ESP32'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-[#1A1A1A] border border-[#00FF57]/30 text-[#F1F1F1] hover:border-[#00FF57] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}