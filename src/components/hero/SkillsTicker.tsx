const SKILLS = [
  "UI Design",
  "UX Design",
  "Webflow Development",
  "Social Media Design",
  "Visual Interaction",
  "Product Design",
  "Custom Development",
  "Graphic Design",
];

export function SkillsTicker() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="w-full overflow-hidden rounded-full border border-dark-15 bg-dark-08 p-2 sm:p-4">
      <div className="flex w-max animate-marquee-right gap-2.5">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap rounded-full border border-dark-15 px-4 py-2.5 text-sm text-grey-70 sm:px-5 sm:py-3 sm:text-base"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
