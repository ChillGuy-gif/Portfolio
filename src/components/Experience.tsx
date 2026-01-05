import { Briefcase, Users } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="snap-section flex items-center justify-center bg-[#0D0D0D] px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F1F1F1] mb-4">Experience & Leadership</h2>
          <div className="h-1 w-20 bg-[#00FF57] mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Leader - Final Year Project */}
          <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#A259FF] hover:bg-[#1A1A1A]/80 transition-all duration-300 shadow-[0_0_20px_rgba(162,89,255,0.25)] hover:shadow-[0_0_40px_rgba(162,89,255,0.5)] cursor-pointer">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-[#A259FF]/10 rounded-lg">
                <Briefcase className="w-8 h-8 text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.6)]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F1F1F1]">Project Leader</h3>
                    <p className="text-[#A259FF]">Zero Trust Network Architecture (ZTNA)</p>
                  </div>
                  <span className="text-[#F1F1F1]/60 whitespace-nowrap ml-4">Oct 2025 – Jan 2026</span>
                </div>
                <p className="text-[#F1F1F1]/80 leading-relaxed">
                  Led a cross-functional team in designing and deploying a comprehensive Zero Trust 
                  Network Architecture solution. Coordinated research, implementation, and testing 
                  phases while ensuring adherence to security best practices and modern enterprise 
                  standards. Successfully delivered a fully functional network simulation with advanced 
                  segmentation and access controls.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A259FF]/20 text-[#A259FF] border border-[#A259FF]/40 text-sm">
                    Team Leadership
                  </span>
                  <span className="px-3 py-1 bg-[#A259FF]/20 text-[#A259FF] border border-[#A259FF]/40 text-sm">
                    Network Security
                  </span>
                  <span className="px-3 py-1 bg-[#A259FF]/20 text-[#A259FF] border border-[#A259FF]/40 text-sm">
                    Project Management
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer - Cybersecurity Outreach */}
          <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#00FF57] hover:bg-[#1A1A1A]/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,87,0.25)] hover:shadow-[0_0_40px_rgba(0,255,87,0.5)] cursor-pointer">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-[#00FF57]/10 rounded-lg">
                <Users className="w-8 h-8 text-[#00FF57] drop-shadow-[0_0_8px_rgba(0,255,87,0.6)]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F1F1F1]">Volunteer Coordinator</h3>
                    <p className="text-[#00FF57]">Cybersecurity Outreach Program</p>
                  </div>
                  <span className="text-[#F1F1F1]/60 whitespace-nowrap ml-4">Oct 2025</span>
                </div>
                <p className="text-[#F1F1F1]/80 leading-relaxed">
                  Organized and facilitated public education events focused on cybersecurity awareness 
                  for families and community members. Developed interactive workshops covering digital 
                  safety, password security, and recognizing common cyber threats. Successfully engaged 
                  diverse audiences and promoted safe online practices through hands-on demonstrations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#00FF57]/20 text-[#00FF57] border border-[#00FF57]/40 text-sm">
                    Community Engagement
                  </span>
                  <span className="px-3 py-1 bg-[#00FF57]/20 text-[#00FF57] border border-[#00FF57]/40 text-sm">
                    Public Speaking
                  </span>
                  <span className="px-3 py-1 bg-[#00FF57]/20 text-[#00FF57] border border-[#00FF57]/40 text-sm">
                    Security Education
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}