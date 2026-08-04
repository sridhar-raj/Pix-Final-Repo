const CARDS = [
  {
    heading: "You can Email Me Here",
    paragraph: "contact@pix.com",
    buttonText: "Email Now",
    link: "mailto:contact@pix.com",
    gradient: "from-[#d85040]/20 to-transparent",
  },
  {
    heading: "Book a Call",
    paragraph: "Available only on Mon - Fri",
    buttonText: "Book a Call",
    link: "https://cal.com",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    heading: "Location",
    paragraph: "Somewhere Living Peacefully",
    buttonText: "Get Direction",
    link: "https://maps.google.com/",
    gradient: "from-emerald-500/20 to-transparent",
  },
];

export function ContactInfoCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
      {CARDS.map((card) => (
        <div
          key={card.heading}
          className={`relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-dark-15 bg-gradient-to-b ${card.gradient} bg-dark-06 p-8`}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white">{card.heading}</h3>
            <p className="text-base text-grey-50">{card.paragraph}</p>
          </div>
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border border-dark-15 bg-dark-08 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-dark-15"
          >
            {card.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
}
