import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Heart,
  Sparkles,
  Zap,
} from "lucide-react";
import { codeaiImages, siteContent } from "@/lib/codeai-content";
import { InstagramCustomIcon, LinkedInCustomIcon } from "@/components/CustomSocialIcons";

type RosterTab = "core" | "subcore" | "members";
type DomainTab = "marketing" | "organising" | "pr" | "creative" | "technical";

const DOMAIN_TABS: { id: DomainTab; label: string }[] = [
  { id: "marketing", label: "MARKETING" },
  { id: "organising", label: "ORGANISING" },
  { id: "pr", label: "PUBLIC RELATIONS" },
  { id: "creative", label: "CREATIVE" },
  { id: "technical", label: "TECHNICAL" },
];

const CAROUSEL_IMAGES = [
  {
    url: codeaiImages.hero,
    caption: "CodeAI Team & Student Members",
    tag: "Team Group Photos",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    caption: "CodeAI Core & Subcore Team Gatherings",
    tag: "Team Moments",
  },
  {
    url: codeaiImages.community,
    caption: "KJSIT Campus & Engineering Labs",
    tag: "College Life",
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    caption: "K J Somaiya Institute of Technology Campus",
    tag: "KJSIT Mumbai",
  },
];

const getInstagramUrl = (handle?: string) => {
  if (!handle) return "";
  return handle.startsWith("http")
    ? handle
    : `https://instagram.com/${handle.replace(/^@/, "")}`;
};

const getLinkedinUrl = (handle?: string) => {
  if (!handle) return "";
  return handle.startsWith("http")
    ? handle
    : `https://linkedin.com/in/${handle.replace(/^@/, "")}`;
};

export default function About() {
  const [subcoreDomain, setSubcoreDomain] = useState<DomainTab>("marketing");
  const [membersDomain, setMembersDomain] = useState<DomainTab>("organising");
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

  const filteredSubcore = siteContent.people.subcore.filter(
    (m) => m.domain === subcoreDomain
  );

  const filteredMembers = siteContent.people.members.filter(
    (m) => m.domain === membersDomain
  );

  return (
    <div className="inner-page about-page">
      {/* Inner Hero Section with Photo Carousel */}
      <section className="inner-hero inner-hero-simple">
        <div className="inner-hero-index">04 / ABOUT US</div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Column: Title & Introduction */}
          <div className="lg:col-span-7">
            <p className="kicker">{siteContent.about.kicker}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {siteContent.about.title[0]}{" "}
              <span className="bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">
                {siteContent.about.title[1]}
              </span>
            </h1>
            <p className="inner-lede text-base md:text-lg leading-relaxed text-[#a0b0be]">
              {siteContent.about.intro}
            </p>
          </div>

          {/* Right Column: Photo Carousel (No Text) */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-[rgba(239,244,255,0.15)] bg-[#101820]/90 shadow-2xl">
              {/* Carousel Image Display */}
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
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/40 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Manual Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#080d12]/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c8ff49] hover:text-[#080d12]"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#080d12]/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c8ff49] hover:text-[#080d12]"
                  aria-label="Next Photo"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Bottom Dots Indicator */}
                <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
                  {CAROUSEL_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${index === currentSlide
                        ? "w-5 bg-[#c8ff49]"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Experiences Section */}
      <section className="mission-section about-unified-section border-t border-[rgba(239,244,255,0.12)] pt-6 pb-8">
        <div className="page-section-label">
          01 <span /> OUR PURPOSE
        </div>
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-[#c8ff49]/30 bg-[#c8ff49]/10 text-[#c8ff49] text-[11px] font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} className="animate-pulse" />
            <span>Our Heart & Spark</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            {/* Card 1: Experiences */}
            <div className="border border-[rgba(155,123,255,0.35)] bg-gradient-to-br from-[#101820]/95 to-[#0d171c]/95 p-4 md:p-5 rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-[#c8ff49]/50 transition-all duration-300">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#c8ff49]/15 to-[#8bc9d2]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="bg-[#080d12] p-1.5 rounded-full border border-[#7f9cff]/40 text-[#c8ff49]">
                    <Compass size={16} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c8ff49] font-bold">
                    The Experience
                  </span>
                </div>
                <h2 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight">
                  Turning interest into action & ideas into impact.
                </h2>
                <p className="text-[#a0b0be] text-xs md:text-sm leading-relaxed m-0">
                  {siteContent.about.experiences}
                </p>
              </div>
            </div>

            {/* Card 2: Core Belief */}
            <div className="border border-[rgba(127,156,255,0.35)] bg-gradient-to-br from-[#101820]/95 to-[#0e1924]/95 p-4 md:p-5 rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-[#8bc9d2]/50 transition-all duration-300">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#8bc9d2]/15 to-[#7f9cff]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="bg-[#080d12] p-1.5 rounded-full border border-[#8bc9d2]/40 text-[#8bc9d2]">
                    <Heart size={16} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8bc9d2] font-bold">
                    At Our Core
                  </span>
                </div>
                <h2 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight">
                  Technology is best understood by experiencing it.
                </h2>
                <p className="text-[#a0b0be] text-xs md:text-sm leading-relaxed m-0">
                  {siteContent.about.coreBelief}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Team Roster Section */}
      <section className="team-roster-section border-t border-[rgba(239,244,255,0.12)] pt-12 pb-16">
        <div className="page-section-label">
          02 <span /> CODEAI TEAM
        </div>

        <div>
          {/* Top Centered Section Header */}
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.25em] text-[#8bc9d2] uppercase font-bold mb-1">
              — CODEAI —
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase m-0">
              TEAM
            </h2>
          </div>

          <div className="space-y-12">
            {/* 1. CORE SECTION */}
            <div className="team-roster-main">
              <div className="team-roster-heading mb-4">
                <div>
                  <p className="kicker text-xs font-mono uppercase tracking-widest text-[#8bc9d2] font-bold m-0">
                    LEADERSHIP — CORE
                  </p>
                </div>
              </div>
              <div className="full-roster-list">
                {siteContent.people.core.map((member, index) => (
                  <div className="full-member-row" key={member.name}>
                    <span className="member-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`member-badge member-badge-${member.tone}`}>
                      {member.initials}
                    </span>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                    <div
                      className="member-socials"
                      aria-label={`${member.name} social links`}
                    >
                      {member.instagram ? (
                        <a
                          href={getInstagramUrl(member.instagram)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on Instagram`}
                        >
                          <InstagramCustomIcon size={14} />
                        </a>
                      ) : null}
                      {member.linkedin ? (
                        <a
                          href={getLinkedinUrl(member.linkedin)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <LinkedInCustomIcon size={14} />
                        </a>
                      ) : null}
                    </div>
                    <ChevronRight size={17} />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. SUBCORE SECTION */}
            <div className="team-roster-main pt-6 border-t border-[rgba(239,244,255,0.08)]">
              <div className="team-roster-heading mb-4">
                <div>
                  <p className="kicker text-xs font-mono uppercase tracking-widest text-[#8bc9d2] font-bold m-0">
                    DOMAIN ADMINS — SUBCORE
                  </p>
                </div>
              </div>

              {/* Subcore Domain Tabs */}
              <div className="domain-tabs flex items-center gap-6 mb-6 border-b border-[rgba(239,244,255,0.12)] pb-3 overflow-x-auto">
                {DOMAIN_TABS.map((dTab) => (
                  <button
                    key={dTab.id}
                    onClick={() => setSubcoreDomain(dTab.id)}
                    className={`text-xs font-mono tracking-widest uppercase transition-all relative pb-1.5 whitespace-nowrap ${subcoreDomain === dTab.id
                      ? "text-[#c8ff49] font-bold after:absolute after:bottom-[-13px] after:left-0 after:right-0 after:h-[2px] after:bg-[#c8ff49]"
                      : "text-[#65767f] font-semibold hover:text-[#eff4ec]"
                      }`}
                  >
                    {dTab.label}
                  </button>
                ))}
              </div>

              {/* Subcore Members List */}
              <div className="full-roster-list">
                {filteredSubcore.length === 0 ? (
                  <div className="py-10 text-center text-[#65767f] text-sm font-mono">
                    No subcore members in this department yet.
                  </div>
                ) : (
                  filteredSubcore.map((member, index) => (
                    <div className="full-member-row" key={member.name}>
                      <span className="member-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`member-badge member-badge-${member.tone}`}>
                        {member.initials}
                      </span>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                      <div
                        className="member-socials"
                        aria-label={`${member.name} social links`}
                      >
                        {member.instagram ? (
                          <a
                            href={getInstagramUrl(member.instagram)}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on Instagram`}
                          >
                            <InstagramCustomIcon size={14} />
                          </a>
                        ) : null}
                        {member.linkedin ? (
                          <a
                            href={getLinkedinUrl(member.linkedin)}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <LinkedInCustomIcon size={14} />
                          </a>
                        ) : null}
                      </div>
                      <ChevronRight size={17} />
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 3. MEMBERS SECTION */}
            <div className="team-roster-main pt-6 border-t border-[rgba(239,244,255,0.08)]">
              <div className="team-roster-heading mb-4">
                <div>
                  <p className="kicker text-xs font-mono uppercase tracking-widest text-[#8bc9d2] font-bold m-0">
                    MEMBERS
                  </p>
                </div>
              </div>

              {/* Members Domain Tabs */}
              <div className="domain-tabs flex items-center gap-6 mb-6 border-b border-[rgba(239,244,255,0.12)] pb-3 overflow-x-auto">
                {DOMAIN_TABS.map((dTab) => (
                  <button
                    key={dTab.id}
                    onClick={() => setMembersDomain(dTab.id)}
                    className={`text-xs font-mono tracking-widest uppercase transition-all relative pb-1.5 whitespace-nowrap ${membersDomain === dTab.id
                      ? "text-[#c8ff49] font-bold after:absolute after:bottom-[-13px] after:left-0 after:right-0 after:h-[2px] after:bg-[#c8ff49]"
                      : "text-[#65767f] font-semibold hover:text-[#eff4ec]"
                      }`}
                  >
                    {dTab.label}
                  </button>
                ))}
              </div>

              {/* Members List */}
              <div className="full-roster-list">
                {filteredMembers.length === 0 ? (
                  <div className="py-10 text-center text-[#65767f] text-sm font-mono">
                    No members in this department yet.
                  </div>
                ) : (
                  filteredMembers.map((member, index) => (
                    <div className="full-member-row" key={member.name}>
                      <span className="member-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`member-badge member-badge-${member.tone}`}>
                        {member.initials}
                      </span>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                      <div
                        className="member-socials"
                        aria-label={`${member.name} social links`}
                      >
                        {member.instagram ? (
                          <a
                            href={getInstagramUrl(member.instagram)}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on Instagram`}
                          >
                            <InstagramCustomIcon size={14} />
                          </a>
                        ) : null}
                        {member.linkedin ? (
                          <a
                            href={getLinkedinUrl(member.linkedin)}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <LinkedInCustomIcon size={14} />
                          </a>
                        ) : null}
                      </div>
                      <ChevronRight size={17} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


