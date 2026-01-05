import { Award, GraduationCap, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="snap-section flex items-center justify-center bg-[#0D0D0D] px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Block - About Me */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[#F1F1F1]">About Me</h2>
            <div className="h-1 w-20 bg-[#00FF57]"></div>
            <p className="text-lg text-[#F1F1F1]/80 leading-relaxed">
              Final-year Computer Science student at Albukhary International University 
              focused on cybersecurity, cloud systems, and secure architecture. Passionate 
              about building innovative solutions that protect digital infrastructure while 
              delivering exceptional user experiences.
            </p>
            <p className="text-lg text-[#F1F1F1]/80 leading-relaxed">
              With hands-on experience in penetration testing, full-stack development, and 
              cloud technologies, I bring a comprehensive approach to modern cybersecurity 
              challenges.
            </p>
          </div>

          {/* Right Block - Highlights */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#00FF57] shadow-[0_0_20px_rgba(0,255,87,0.3)] hover:shadow-[0_0_40px_rgba(0,255,87,0.6)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-[#00FF57] drop-shadow-[0_0_8px_rgba(0,255,87,0.6)]" />
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F1F1] mb-2">Academic Excellence</h3>
                  <p className="text-[#F1F1F1]/80">CGPA: 3.41</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#A259FF] shadow-[0_0_20px_rgba(162,89,255,0.3)] hover:shadow-[0_0_40px_rgba(162,89,255,0.6)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.6)]" />
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F1F1] mb-2">Recognition</h3>
                  <p className="text-[#F1F1F1]/80">3× Dean's List Awardee</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#FFD600] shadow-[0_0_20px_rgba(255,214,0,0.3)] hover:shadow-[0_0_40px_rgba(255,214,0,0.6)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-[#FFD600] drop-shadow-[0_0_8px_rgba(255,214,0,0.6)]" />
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F1F1] mb-2">Core Interests</h3>
                  <p className="text-[#F1F1F1]/80">
                    Network Security • Cloud Development • Full-Stack Web Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}