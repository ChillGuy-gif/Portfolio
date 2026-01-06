import { ArrowRight, MapPin, Award } from "lucide-react";

export function Hero() {
  const profileImage = new URL(
    "../assets/4edc6534445f524cffe7417621d0109eb59da713.png",
    import.meta.url
  ).href;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="snap-section flex items-center justify-center bg-[#0D0D0D] px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#A259FF] tracking-wider uppercase">
                Portfolio
              </p>
              <p className="text-2xl text-[#F1F1F1]/80">
                Hello I am,
              </p>
              <h1 className="text-6xl font-bold text-[#F1F1F1] leading-tight">
                Alihabib Hussein
              </h1>
            </div>

            <h2 className="text-3xl text-[#F1F1F1]">
              Cybersecurity & Tech Enthusiast
            </h2>

            <p className="text-xl text-[#F1F1F1]/80 max-w-xl">
              I specialize in building secure, scalable solutions for the modern web.
            </p>

            <img
              src="https://c.tenor.com/2g9P6f8mYJcAAAAC/chill-guy.gif"
              alt="ChillGuy"
              className="w-32 h-32 rounded-lg"
            />

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-[#F1F1F1]/10 rounded-full">
                <MapPin className="w-5 h-5 text-[#A259FF]" />
                <span className="text-[#F1F1F1]">
                  Alor Setar, Malaysia
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-[#F1F1F1]/10 rounded-full">
                <Award className="w-5 h-5 text-[#A259FF]" />
                <span className="text-[#F1F1F1]">
                  3× Dean's List
                </span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#00FF57] text-[#0D0D0D] px-8 py-4 hover:bg-[#00FF57]/90 transition-colors mt-4"
            >
              <span>Let's Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#00FF57] shadow-[0_0_60px_rgba(0,255,87,0.6),0_0_120px_rgba(0,255,87,0.3),0_0_180px_rgba(0,255,87,0.1)] hover:shadow-[0_0_80px_rgba(0,255,87,0.8),0_0_140px_rgba(0,255,87,0.5),0_0_200px_rgba(0,255,87,0.2)] transition-all duration-500">
                <img
                  src={profileImage}
                  alt="Alihabib Hussein"
                  className="w-full h-full object-cover scale-[1.1] object-center"
                />
              </div>

              {/* Decorative Glow Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#A259FF] opacity-30 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -top-4 -left-4 w-28 h-28 bg-[#FFD600] opacity-20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
