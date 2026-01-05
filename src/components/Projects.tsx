import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'SafeZone – Real-Time Security Assistance App',
      description: 'Full-stack emergency response platform aligned with UN SDG 16 for public safety. Features real-time geolocation tracking and distress signal capabilities to enhance community safety and emergency response times.',
      tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
      color: '#00FF57'
    },
    {
      title: 'IoT Obstacle Avoidance Robot',
      description: 'Scalable autonomous robot using ESP32 microcontroller with real-time sensor integration for intelligent movement and obstacle detection. Demonstrates practical IoT implementation with cloud connectivity.',
      tags: ['ESP32', 'Python', 'IoT', 'Cloud'],
      color: '#A259FF'
    },
    {
      title: 'Zero Trust Network Architecture (ZTNA)',
      description: 'Comprehensive simulated enterprise network implementing Zero Trust principles with virtualization, advanced firewall segmentation, and granular policy-based access control for enhanced security posture.',
      tags: ['pfSense', 'VMs', 'Network Security', 'Virtualization'],
      color: '#FFD600'
    }
  ];

  return (
    <section id="projects" className="snap-section flex items-center justify-center bg-[#0D0D0D] px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#F1F1F1] mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[#00FF57] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 space-y-4 hover:transform hover:scale-105 transition-all duration-300 border-t-4 cursor-pointer"
              style={{ 
                borderTopColor: project.color,
                boxShadow: `0 0 25px ${project.color}40`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 50px ${project.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px ${project.color}40`;
              }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-[#F1F1F1] leading-tight">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-[#F1F1F1]/50 flex-shrink-0 ml-2" />
              </div>

              <p className="text-[#F1F1F1]/80 leading-relaxed min-h-[120px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#0D0D0D] text-[#F1F1F1] border border-[#F1F1F1]/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}