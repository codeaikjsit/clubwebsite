/* Blue Violet Signal: Events page showcasing workshops, bootcamps, and event gallery archive. */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
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
  const [modalEvent, setModalEvent] = useState<any | null>(null);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!modalEvent) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalEvent(null);
      } else if (e.key === "ArrowLeft") {
        const gallery = modalEvent.gallery || [];
        if (gallery.length > 0) {
          setModalSlideIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
        }
      } else if (e.key === "ArrowRight") {
        const gallery = modalEvent.gallery || [];
        if (gallery.length > 0) {
          setModalSlideIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalEvent]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Event Gallery Section */}
      <section className="mb-12">
        <div className="bg-[#101820]/90 border border-white/10 rounded-2xl overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8ff49]/10 border border-[#c8ff49]/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#c8ff49] animate-pulse" />
                <span className="text-xs font-mono text-[#c8ff49] tracking-wider uppercase font-semibold">
                  Photo Archive
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight m-0">
                Event <span className="text-[#80b6ff]">GALLERY</span>
              </h1>

              <p className="text-[#8e9da0] text-sm md:text-base leading-relaxed m-0">
                Moments from our hands-on workshops, hackathons, and interactive technical sessions. Explore our community building and learning experiences in action.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#8bc9d2]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8bc9d2]" />
                  <span>KJSIT Labs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff49]" />
                  <span>CodeAI Community</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Carousel Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#080d12] border border-white/15 shadow-2xl group">
                {/* Images Stack */}
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
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/90 via-transparent to-black/20" />
                  </div>
                ))}

                {/* Left / Right Carousel Controls */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev > 0 ? prev - 1 : CAROUSEL_IMAGES.length - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#80b6ff] hover:text-black"
                  aria-label="Previous Event"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#80b6ff] hover:text-black"
                  aria-label="Next Event"
                >
                  <ChevronRight size={16} />
                </button>
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
              onClick={() => {
                if (event.gallery && event.gallery.length > 0) {
                  setModalEvent(event);
                  setModalSlideIndex(0);
                }
              }}
              className="home-archive-card border border-[rgba(239,244,236,0.13)] bg-[#101820]/90 p-5 rounded-lg hover:border-[#80b6ff]/60 hover:shadow-lg cursor-pointer group transition-all"
            >
              <div className="aspect-video bg-[#0d171c] mb-4 overflow-hidden rounded relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#080d12]/80 border border-[#c8ff49]/30 text-[#c8ff49] px-2.5 py-1 text-xs font-mono rounded font-bold">
                  {event.year}
                </span>

                <span className="absolute bottom-3 left-3 bg-[#080d12]/90 border border-white/20 text-white px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:border-[#c8ff49]/60 transition-all">
                  <Images size={13} className="text-[#c8ff49]" /> View Gallery ({event.gallery?.length || 0})
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#80b6ff] transition-colors">
                {event.title}
              </h3>
              <small className="text-[#8e9da0] text-sm leading-relaxed block">
                {event.description}
              </small>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Popup Gallery Modal */}
      {modalEvent && modalEvent.gallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setModalEvent(null)}
            aria-label="Close modal backdrop"
          />
          <div className="relative z-10 w-full max-w-4xl bg-[#101820] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 md:p-5 border-b border-white/10 flex items-center justify-between bg-[#080d12]/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#c8ff49]/10 text-[#c8ff49] border border-[#c8ff49]/30 text-xs font-mono px-2 py-0.5 rounded font-bold uppercase">
                    {modalEvent.year}
                  </span>
                  <span className="text-xs font-mono text-[#80b6ff] uppercase tracking-wider">
                    {modalEvent.tag || modalEvent.category}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white m-0">
                  {modalEvent.title}
                </h2>
              </div>
              <button
                onClick={() => setModalEvent(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close gallery modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Carousel Container */}
            <div className="relative flex-1 bg-black/90 flex flex-col justify-center items-center overflow-hidden min-h-[300px] md:min-h-[420px] p-2">
              <img
                src={modalEvent.gallery[modalSlideIndex].url}
                alt={modalEvent.gallery[modalSlideIndex].caption}
                className="max-h-[60vh] max-w-full object-contain rounded transition-all duration-300"
              />

              {/* Left / Right Arrow Controls */}
              {modalEvent.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalSlideIndex((prev) =>
                        prev > 0 ? prev - 1 : modalEvent.gallery.length - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#80b6ff] hover:text-black transition-all"
                    aria-label="Previous Photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setModalSlideIndex((prev) =>
                        prev < modalEvent.gallery.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-[#80b6ff] hover:text-black transition-all"
                    aria-label="Next Photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Caption & Indicators Footer */}
            <div className="p-4 md:p-5 bg-[#080d12] border-t border-white/10 flex flex-col items-center gap-3">
              <p className="text-sm md:text-base font-medium text-white text-center m-0 max-w-2xl leading-relaxed">
                {modalEvent.gallery[modalSlideIndex].caption}
              </p>

              {/* Dot / Slide Navigation */}
              {modalEvent.gallery.length > 1 && (
                <div className="flex items-center gap-2">
                  {modalEvent.gallery.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setModalSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all ${idx === modalSlideIndex
                          ? "w-6 bg-[#c8ff49]"
                          : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-mono text-[#8e9da0]">
                    {modalSlideIndex + 1} / {modalEvent.gallery.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
