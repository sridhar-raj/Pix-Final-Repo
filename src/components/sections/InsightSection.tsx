import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POSTS = [
  {
    slug: "the-role-of-visual-hierarchy-in-ui-design",
    heading: "The Role of Visual Hierarchy in UI Design",
    category: "UI Design",
    date: "Oct 9, 2024",
    cover: "/images/IZQqmS1r2bCidu2b7m80sRy4Q.2fa88.png",
  },
  {
    slug: "creating-user-centered-ui-with-persona-development",
    heading: "Creating User-Centered UI with Persona Development",
    category: "UX Research",
    date: "Aug 16, 2024",
    cover: "/images/EsudiiE9AYozGYjzX09pGZMIIU.2fa88.png",
  },
  {
    slug: "designing-for-accessibility-in-ui-essential-guidelines",
    heading: "Designing for Accessibility in UI: Essential Guidelines",
    category: "UX Research",
    date: "Jul 13, 2024",
    cover: "/images/67wGjzfdtc4czvjrQpuppHCPMI.2fa88.png",
  },
];

export function InsightSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-5 sm:px-10">
      <SectionHeading
        heading="News, insights and more"
        paragraph="Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey."
      />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal key={post.slug} y={40} scale={1} delay={i * 0.1}>
            <a href={`/blog/${post.slug}`} className="group flex flex-col gap-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.cover}
                  alt={post.heading}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-grey-50">
                  <span className="rounded-full border border-dark-15 px-3 py-1 text-grey-70">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{post.heading}</h3>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <a
        href="/blog"
        className="rounded-[10px] border border-dark-15 bg-dark-15 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-dark-08"
      >
        View all Blogs
      </a>
    </section>
  );
}
