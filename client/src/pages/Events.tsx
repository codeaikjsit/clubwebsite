/* Blue Violet Signal: Events page showcasing workshops, bootcamps, and event gallery archive. */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { codeaiImages, siteContent } from "@/lib/codeai-content";

const CAROUSEL_IMAGES = [
  {
    url: codeaiImages.levelUp4,
    caption: "LEVEL-UP Hackathon — Stage Inauguration",
    tag: "CodeAI x IETE",
  },
  {
    url: codeaiImages.levelUp2,
    caption: "LEVEL-UP Hackathon — Team & Participants",
    tag: "CodeAI x IETE",
  },
  {
    url: codeaiImages.levelUp5,
    caption: "LEVEL-UP Organizing Committee & Faculty",
    tag: "CodeAI x IETE",
  },
  {
    url: codeaiImages.levelUp1,
    caption: "LEVEL-UP Audience & Auditorium Overview",
    tag: "CodeAI x IETE",
  },
  {
    url: codeaiImages.levelUp3,
    caption: "AI Skills Lab Mentorship & Build Sessions",
    tag: "CodeAI x IETE",
  },
  {
    url: codeaiImages.reportWriting2,
    caption: "Mastering Report Writing Workshop — Speaker Dr. Pradnya Patil & Organizers",
    tag: "Report Writing",
  },
  {
    url: codeaiImages.reportWriting1,
    caption: "Mastering Report Writing — Interactive Classroom Session",
    tag: "Report Writing",
  },
  {
    url: codeaiImages.appDev1,
    caption: "App Development Lab Sessions",
    tag: "Hands-on Coding",
  },
  {
    url: codeaiImages.appDev2,
    caption: "Technical Presentation & Code Review",
    tag: "CodeAI Workshops",
  },
  {
    url: codeaiImages.appDev3,
    caption: "Interactive Instructor Sessions",
    tag: "Student Workshops",
  },
  {
    url: codeaiImages.appDev4,
    caption: "Collaborative Problem Solving",
    tag: "Peer Collaboration",
  },
];

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="inner-page events-page">
      {/* Inner Hero Section with Event Gallery Carousel */}
      <section className="inner-hero inner-hero-simple">
        <div className="inner-hero-index">02 / EVENTS</div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7">
            <p className="kicker">CodeAI Club / Events</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">
                Events
              </span>
            </h1>
            <p className="inner-lede text-base md:text-lg leading-relaxed text-[#a0b0be]">
              Discover workshops, bootcamps, hands-on technical sessions, and community gatherings hosted by CodeAI Club.
            </p>
          </div>

          {/* Right Column: Event Gallery Carousel */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-[rgba(239,244,255,0.15)] bg-[#101820]/90 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080d12]">
                {CAROUSEL_IMAGES.map((image, index) => (
                  <div
                    key={image.url}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                      }`}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d12] via-transparent to-transparent opacity-80" />
                  </div>
                ))}

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-[#080d12]/80 backdrop-blur-md text-[10px] font-mono font-semibold text-[#c8ff49] tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff49] animate-ping" />
                  <span>Event Gallery</span>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#080d12]/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c8ff49] hover:text-[#080d12]"
                  aria-label="Previous Event"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#080d12]/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c8ff49] hover:text-[#080d12]"
                  aria-label="Next Event"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Bottom Overlay & Indicators */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8bc9d2] font-semibold block">
                      {CAROUSEL_IMAGES[currentSlide].tag}
                    </span>
                    <p className="text-xs font-bold text-white m-0 tracking-wide drop-shadow-md">
                      {CAROUSEL_IMAGES[currentSlide].caption}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {CAROUSEL_IMAGES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all ${index === currentSlide
                            ? "w-5 bg-[#c8ff49]"
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
