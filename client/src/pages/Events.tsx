/* Blue Violet Signal: Events page showcasing workshops, bootcamps, and event gallery archive. */
import { siteContent } from "@/lib/codeai-content";

export default function Events() {
  return (
    <div className="inner-page events-page">
      {/* Inner Hero Section */}
      <section className="inner-hero inner-hero-simple">
        <div className="inner-hero-index">02 / EVENTS</div>
        <div>
          <p className="kicker">CodeAI Club / Events</p>
          <h1>
            Our{" "}
            <span className="bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">
              Events
            </span>
          </h1>
          <p className="inner-lede">
            Discover workshops, bootcamps, hands-on technical sessions, and community gatherings hosted by CodeAI Club.
          </p>
        </div>
      </section>

      {/* Events & Workshops Gallery Section */}
      <section className="home-archive-section my-12">
        <div className="section-mini-head mb-8">
          <div>
            <p className="kicker">Workshops, Bootcamps & Sessions</p>
            <h2 className="text-2xl font-bold text-white">
              Event <span className="archive-white-accent">GALLERY</span>
            </h2>
          </div>
        </div>

        <div className="home-archive-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteContent.archive.events.map((event) => (
            <article
              key={event.index}
              className="home-archive-card border border-[rgba(239,244,236,0.13)] bg-[#101820]/90 p-5 rounded-lg hover:border-[#80b6ff]/40 transition-all"
            >
              <div className="aspect-video bg-[#0d171c] mb-4 overflow-hidden rounded relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#080d12]/80 border border-[#c8ff49]/30 text-[#c8ff49] px-2.5 py-1 text-xs font-mono rounded font-bold">
                  {event.year}
                </span>
              </div>
              <p className="text-xs font-mono text-[#80b6ff] tracking-wider uppercase mb-1">
                {event.category}
              </p>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <small className="text-[#8e9da0] text-sm leading-relaxed block">
                {event.description}
              </small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
