import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="snap-section flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#A259FF]/20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-6xl font-bold text-[#F1F1F1] leading-tight">
              Your Partner in Building Trusted, Secure, and Modern Solutions
            </h2>
            <div className="h-1 w-32 bg-[#A259FF] mx-auto"></div>
          </div>

          <p className="text-2xl text-[#F1F1F1]/80 max-w-2xl mx-auto">
            I'm available for internship opportunities. Let's build something impactful.
          </p>

          <div className="pt-8 space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center gap-4 group">
              <div className="p-4 bg-[#00FF57]/10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,255,87,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,87,0.6)] group-hover:bg-[#00FF57]/20">
                <Mail className="w-8 h-8 text-[#00FF57] drop-shadow-[0_0_8px_rgba(0,255,87,0.6)]" />
              </div>
              <a
                href="mailto:alihabibhussein3@gmail.com"
                className="text-xl text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
              >
                alihabibhussein3@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-4 group">
              <div className="p-4 bg-[#A259FF]/10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(162,89,255,0.3)] group-hover:shadow-[0_0_30px_rgba(162,89,255,0.6)] group-hover:bg-[#A259FF]/20">
                <Phone className="w-8 h-8 text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.6)]" />
              </div>
              <a
                href="tel:+60116403015"
                className="text-xl text-[#F1F1F1] hover:text-[#A259FF] transition-colors"
              >
                +60 11 6140 3015
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-center gap-4 group">
              <div className="p-4 bg-[#FFD600]/10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,214,0,0.3)] group-hover:shadow-[0_0_30px_rgba(255,214,0,0.6)] group-hover:bg-[#FFD600]/20">
                <Linkedin className="w-8 h-8 text-[#FFD600] drop-shadow-[0_0_8px_rgba(255,214,0,0.6)]" />
              </div>
              <a
                href="https://linkedin.com/in/alihabibhussein"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#F1F1F1] hover:text-[#FFD600] transition-colors"
              >
                linkedin.com/in/alihabibhussein
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="mailto:alihabibhussein3@gmail.com"
              className="inline-block bg-[#00FF57] text-[#0D0D0D] px-12 py-4 text-xl hover:bg-[#00FF57]/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Footer */}
          <div className="pt-16 pb-8">
            <p className="text-[#F1F1F1]/50">
              © 2026 Alihabib Hussein. Built with security in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}