import { useRef } from "react";
import NavLinks from "./Components/navbutton";
import gridSvg from "./assets/grid.svg";
import componentsSvg from "./assets/components.svg";
import ResumeSection from "./Components/resumeSection";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current!.getBoundingClientRect();
    heroRef.current!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    heroRef.current!.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  // grid.svg / components.svg share the same 1600x900 viewBox (16x9 cells @ 100px).
  // backgroundSize 'auto 100%' locks height to the container so every cell stays
  // square, and repeat-x tiles the pattern seamlessly since 1600 is an exact
  // multiple of the 100px cell size. Both layers use identical size/position so
  // they land on the same cells.
  const tiledLayerStyle = {
    backgroundSize: "auto 100%",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "top left",
  } as const;

  return (
    <div className="flex w-full">
      <div className="flex-1">
        <div
          id="navbar"
          className="w-full flex justify-between items-center border-b border-white/20 sticky top-0 z-10 bg-bg px-4">
          <a
            href="#top"
            className="p-5 text-text-h hover:text-accent hover:cursor-pointer transition-colors">
            George Allman
          </a>
          <NavLinks></NavLinks>
        </div>

        <div
          id="top"
          ref={heroRef}
          onMouseMove={handleMouseMove}
          className="relative w-full h-[95vh] flex items-center justify-center bg-bg text-center px-4 overflow-hidden"
          style={{ ["--mx" as any]: "50%", ["--my" as any]: "50%" }}>
          {/* accent glow, anchored to the top of the hero */}
          <div
            className="pointer-events-none absolute top-0 inset-x-0 h-[420px]"
            style={{
              background:
                "radial-gradient(ellipse 1600px 500px at 50% -20%, var(--color-accent, theme(colors.accent)) 0%, transparent 70%)",
              opacity: 0.2,
            }}
          />

          {/* always-visible grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url(${gridSvg})`,
              ...tiledLayerStyle,
              opacity: "0.05",
            }}
          />

          {/* components, revealed only near the cursor */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url(${componentsSvg})`,
              ...tiledLayerStyle,
              opacity: "0.15",
              WebkitMaskImage:
                "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",
              maskImage:
                "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",
            }}
          />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold text-text tracking-wide uppercase mb-10">
              Electrical Engineering & Physics @ USYD
            </p>
            <div className="text-[5.5vw] font-weight-900 text-text-h mb-6 mt-14">
              George Allman
            </div>
            <div className="flex mt-20 items-center justify-center gap-4">
              <a
                href="#resume"
                className="px-6 py-3 rounded-lg border border-border bg-bg text-text-h font-semibold hover:bg-code-bg hover:-translate-y-0.5 transition-transform">
                Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-border bg-bg text-text-h font-semibold hover:bg-code-bg hover:-translate-y-0.5 transition-all">
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border bg-bg text-text-h font-semibold hover:bg-code-bg hover:-translate-y-0.5 transition-transform">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <ResumeSection />
        </div>

        <div id="projects" className="h-[100vh] bg-bg  scroll-mt-16"></div>
        <div id="contact" className="h-[100vh] bg-bg scroll-mt-16"></div>
      </div>
    </div>
  );
}

export default App;
