import { CareerItem, BlogItem } from "@/components";
import { careerData, blogLinks, contactLinks } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 커리어 */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 border-b border-gray-200 pb-4 text-2xl font-bold">
          Career
        </h2>

        <ul className="flex flex-col gap-6">
          {careerData.map((item) => (
            <CareerItem
              key={item.id}
              company={item.company}
              position={item.position}
              type={item.type}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
            />
          ))}
        </ul>
      </section>

      {/* 블로그 */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 border-b border-gray-200 pb-4 text-2xl font-bold">
          Blog
        </h2>

        <nav aria-label="블로그 링크">
          <ul className="flex flex-wrap gap-4">
            {blogLinks.map((blog) => (
              <BlogItem
                key={blog.id}
                name={blog.name}
                url={blog.url}
                icon={blog.icon}
              />
            ))}
          </ul>
        </nav>
      </section>

      {/* 연락처 */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 border-b border-gray-200 pb-4 text-2xl font-bold">
          Contact
        </h2>

        <nav aria-label="연락처 링크">
          <ul className="flex flex-wrap gap-4">
            {contactLinks.map((contact) => (
              <BlogItem
                key={contact.id}
                name={contact.name}
                url={contact.url}
                icon={contact.icon}
              />
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
