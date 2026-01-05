export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-[#1A1A1A]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#F1F1F1] hover:text-[#00FF57] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
