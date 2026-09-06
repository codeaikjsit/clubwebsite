/* Blue Violet Signal: Home is the concise entry point — introduce CodeAI, surface LEVEL-UP, and route clearly to About Us and Team. */
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Code2,
  Layers3,
  MoveUpRight,
  Radio,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { codeaiImages, siteContent } from "@/lib/codeai-content";

export default function Home() {
  return (
    <>
      <section className="page-hero home-hero" id="top">
        <div className="page-hero-copy flex flex-col justify-center gap-6">
          <h1>
            <span className="inline-block">CodeAI</span>
          </h1>
          <div className="border border-white/10 bg-[#101820]/80 text-[#8e9da0] px-3.5 py-1.5 text-sm tracking-normal rounded font-mono font-medium w-fit flex items-center gap-2 -mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff49]" />
            {siteContent.brand.coordinates}
          </div>
          <p className="text-lg leading-relaxed text-[#8e9da0] max-w-md">{siteContent.hero.lede}</p>
          <div className="hero-actions">
            <Link className="blue-button" href="/about">
              About CodeAI <MoveUpRight size={14} />
            </Link>
            <Link className="blue-text-link" href="/hackathon">
              Explore Epoch 1.0 <ArrowDownRight size={16} />
            </Link>
          </div>
        </div>
        <div className="home-visual flex flex-col justify-center">
          <div className="hero-image-shell">
            <img src={codeaiImages.hero} alt={siteContent.hero.imageAlt} />
            <div className="hero-image-tint" />
            <div className="hero-image-label">
              <span>{siteContent.hero.captionLeft}</span>
            </div>
            <div className="hero-signal-chip">
              <Radio size={13} /> Club signal <b>ON</b>
            </div>
          </div>
          <div className="hero-visual-note">
            <span>CREATIVITY</span>
            <strong>→</strong>
            <span>TECHNOLOGY</span>
          </div>
          <div className="hero-crosshair" />
        </div>
      </section>

      <section className="activity-band">
        <div>
          <span className="band-icon">
            <Code2 size={16} />
          </span>
          <span>AI & machine learning</span>
        </div>
        <div>
          <span className="band-icon">
            <Zap size={16} />
          </span>
          <span>Resources & guidance</span>
        </div>
        <div>
          <span className="band-icon">
            <Users size={16} />
          </span>
          <span>Creativity & collaboration</span>
        </div>
        <div className="activity-status">
          <span className="live-dot" /> KJSIT / CODEAI
        </div>
      </section>

      <section className="home-feature-section">
        <div className="home-feature-copy">
          <p className="kicker">{siteContent.upcoming.kicker}</p>
          <h2>
            {siteContent.upcoming.title[0]}
            <br />
            <span>{siteContent.upcoming.title[1]}</span>
          </h2>
          <p>{siteContent.upcoming.description}</p>
          <Link className="blue-button" href="/events">
            View all events <ArrowRight size={15} />
          </Link>
        </div>
        <Link className="level-up-card" href="/hackathon">
          <div className="level-up-card-image">
            <img src={codeaiImages.epochPoster} alt="Epoch 1.0 hackathon" />
            <span>{siteContent.hackathon.date}</span>
            <div className="level-up-overlay" />
          </div>
          <div className="level-up-card-body">
            <span>
              <CalendarDays size={15} /> KJSIT Campus
            </span>
            <strong>8-hour hands-on hackathon</strong>
            <small>
              Open the event page <ArrowUpRightIcon />
            </small>
          </div>
        </Link>
      </section>

      <section className="home-archive-section">
        <div className="section-mini-head">
          <div>
            <p className="kicker">Previously conducted / event gallery</p>
            <h2>
              Our <span className="archive-white-accent">EVENTS</span>
            </h2>
          </div>
          <Link className="blue-text-link" href="/events">
            See all events <ArrowRight size={14} />
          </Link>
        </div>
        <div className="home-archive-grid">
          {siteContent.archive.events.map(event => (
            <article key={event.index} className="home-archive-card">
              <div>
                <img src={event.image} alt={event.title} />
                <span>{event.year}</span>
              </div>
              <h3>{event.title}</h3>
              <small>{event.description}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="home-route-band">
        <div>
          <span className="band-icon">
            <Sparkles size={17} />
          </span>
          <p className="kicker">Keep exploring</p>
          <h2>
            Be greater,
            <br />
            <span className="route-band-white-accent">
              be greater together.
            </span>
          </h2>
        </div>
        <div className="route-links">
          <Link href="/events">
            <span>EVENTS</span>
            <strong>Workshops, bootcamps, and gallery</strong>
            <ArrowRight size={16} />
          </Link>
          <Link href="/hackathon">
            <span>HACKATHON</span>
            <strong>Tracks, timeline, and details</strong>
            <ArrowRight size={16} />
          </Link>
          <Link href="/about">
            <span>ABOUT US</span>
            <strong>Mission, vision, team, and story</strong>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ArrowUpRightIcon() {
  return <MoveUpRight size={14} />;
}
