import ResumeEntry from "./resumeEntry";

const education = [
  {
    title: "University of Sydney",
    period: "2025 — 2027",
    company: "University of Sydney",
    location: "Sydney, NSW",
    points: ["WAM: 91 (High Distinction average)", "Dean's List 2025"],
  },
  {
    title: "Newcastle High School",
    period: "Jan 2024",
    company: "Australian Mathematics Trust",
    location: "Canberra, ACT",
    points: [
      "Selected among Australia's top high school mathematicians for a 2-week residential program in proof-based mathematics",
    ],
  },
];

const experience = [
  {
    title: "Trading Intern",
    period: "Jun — Sep 2026",
    company: "Jane Street",
    location: "Hong Kong",
    points: [
      "Built a pricing model for exotic derivatives",
      "Automated overnight risk reporting pipeline",
    ],
  },
  {
    title: "Software Developer Intern",
    period: "May — Aug 2027",
    company: "Hudson River Trading",
    location: "Singapore",
    points: ["Shipped internal tooling used by the trading desk"],
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="bg-bg-secondary">
      <div className="px-[15vw]">
        <div className="text-6xl text-text-h py-25">Resume</div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="pb-10">
              <div className="pl-2 pb-3 border-b text-text">Education</div>
            </div>
            <div className="flex flex-col gap-8">
              {education.map((entry, i) => (
                <ResumeEntry key={i} {...entry} />
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="pb-10">
              <div className="pl-2 pb-3 border-b">Experience</div>
            </div>

            <div className="flex flex-col gap-8">
              {experience.map((entry, i) => (
                <ResumeEntry key={i} {...entry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
