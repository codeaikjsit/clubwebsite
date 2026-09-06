/* Blue Violet Signal: LEVEL-UP is the event detail route — concrete repository facts first, with editable schedule data, registration modal, and an opt-in projector timer. */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { codeaiImages, siteContent } from "@/lib/codeai-content";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  complete: boolean;
};
const emptyCountdown: Countdown = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
  complete: false,
};

function getCountdown(target: string): Countdown {
  const difference = new Date(target).getTime() - Date.now();
  if (difference <= 0) return { ...emptyCountdown, complete: true };
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    complete: false,
  };
}

type ProjectorCountdown = {
  hours: string;
  minutes: string;
  seconds: string;
  complete: boolean;
};
function getProjectorCountdown(
  start: string,
  durationHours: number
): ProjectorCountdown {
  const durationMs = durationHours * 60 * 60 * 1000;
  const remaining = new Date(start).getTime() + durationMs - Date.now();
  if (remaining <= 0)
    return { hours: "00", minutes: "00", seconds: "00", complete: true };
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    hours: String(Math.floor(totalSeconds / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(totalSeconds % 60).padStart(2, "0"),
    complete: false,
  };
}

function ProjectorTimer() {
  useEffect(() => {
    document.body.classList.add("projector-mode");
    return () => document.body.classList.remove("projector-mode");
  }, []);
  const { projectorStart, projectorDurationHours } = siteContent.hackathon;
  const [remaining, setRemaining] = useState<ProjectorCountdown>(() =>
    getProjectorCountdown(projectorStart, projectorDurationHours)
  );
  useEffect(() => {
    const timer = window.setInterval(
      () =>
        setRemaining(
          getProjectorCountdown(projectorStart, projectorDurationHours)
        ),
      1000
    );
    return () => window.clearInterval(timer);
  }, [projectorStart, projectorDurationHours]);
  return (
    <section className="projector-timer" aria-live="polite">
      <div className="projector-timer-inner">
        <p className="projector-timer-kicker">CodeAI Club / Epoch 1.0</p>
        <h1 className="projector-timer-title">
          {remaining.complete ? "TIME" : "TIME REMAINING"}
        </h1>
        <div className="projector-timer-grid">
          <div>
            <strong>{remaining.hours}</strong>
            <small>hours</small>
          </div>
          <div>
            <strong>{remaining.minutes}</strong>
            <small>minutes</small>
          </div>
          <div>
            <strong>{remaining.seconds}</strong>
            <small>seconds</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hackathon() {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(siteContent.hackathon.countdownTarget)
  );
  const [showRegistration, setShowRegistration] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(
      () => setCountdown(getCountdown(siteContent.hackathon.countdownTarget)),
      1000
    );
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!showRegistration) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowRegistration(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showRegistration]);

  // HACKATHON DAY PROJECTOR MODE — uncomment this line and comment out the normal return below.
  // return <ProjectorTimer />;
  return (
    <div className="inner-page hackathon-page">
      <section className="hackathon-hero">
        <div className="inner-hero-index">03 / HACKATHON</div>
        <div className="hackathon-hero-copy">
          <p className="kicker">{siteContent.hackathon.eyebrow}</p>
          <h1>{siteContent.hackathon.title}</h1>
          <p className="inner-lede">{siteContent.hackathon.intro}</p>
          <button
            className="blue-button"
            type="button"
            onClick={() => setShowRegistration(true)}
          >
            Register for Epoch 1.0 <ArrowDownRight size={16} />
          </button>
        </div>
        <div className="hackathon-visual">
          <img
            src={codeaiImages.hero}
            alt="Students collaborating during an AI hackathon"
          />
          <div className="hackathon-visual-overlay" />
          <span>CODEAI CLUB</span>
        </div>
      </section>
      <section className="event-facts">
        <div>
          <CalendarDays size={17} />
          <span>
            <small>Date</small>
            <strong>{siteContent.hackathon.date}</strong>
          </span>
        </div>
        <div>
          <MapPin size={17} />
          <span>
            <small>Venue</small>
            <strong>{siteContent.hackathon.venue}</strong>
          </span>
        </div>
        <div>
          <Users size={17} />
          <span>
            <small>Participants</small>
            <strong>Selected teams</strong>
          </span>
        </div>
        <div>
          <Clock3 size={17} />
          <span>
            <small>Format</small>
            <strong>8-hour hackathon</strong>
          </span>
        </div>
      </section>
      <section className="countdown-section">
        <div>
          <p className="kicker">Hackathon starts in</p>
          <h2>
            Ready for{" "}
            <span className="hackathon-white-accent bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">Epoch 1.0?</span>
          </h2>
        </div>
        <div className="countdown-readout" aria-live="polite">
          {countdown.complete ? (
            <div className="countdown-complete">
              EVENT COMPLETE
              <span>Update countdownTarget for the next edition.</span>
            </div>
          ) : (
            <div className="countdown-grid">
              {(
                [
                  [countdown.days, "days"],
                  [countdown.hours, "hours"],
                  [countdown.minutes, "minutes"],
                  [countdown.seconds, "seconds"],
                ] as [string, string][]
              ).map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* PROJECTOR MODE — intentionally commented out. On Hackathon Day only, uncomment the next line to replace the event details with the live 8-hour projector countdown: <ProjectorTimer /> */}
      {/* Real-world challenges / Tracks Section */}
      <section className="max-w-[1188px] mx-auto py-12 border-t border-[rgba(239,244,255,0.12)]">
        <div className="mb-8">
          <p className="kicker font-mono text-xs text-[#80b6ff] tracking-wider uppercase mb-1">
            01 / REAL-WORLD CHALLENGES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Choose a{" "}
            <span className="bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">
              direction.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.hackathon.tracks.map((track) => (
            <article
              className="track-card border border-[rgba(239,244,255,0.14)] bg-[#101a25]/90 p-6 rounded-lg hover:border-[#80b6ff]/50 hover:bg-[#142235] transition-all flex flex-col justify-between"
              key={track.number}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#c8ff49] bg-[#c8ff49]/10 px-2.5 py-1 rounded border border-[#c8ff49]/20">
                    TRACK {track.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {track.title}
                </h3>
                <p className="text-xs text-[#8293a1] leading-relaxed mb-4">
                  {track.description}
                </p>
              </div>

              {"domains" in track && Array.isArray((track as any).domains) ? (
                <ul className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {(track as any).domains.slice(0, 4).map((domain: string) => (
                    <li
                      key={domain}
                      className="flex items-center gap-2.5 text-xs text-[#a0b0be]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff49] shrink-0" />
                      <span>{domain}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <section className="hackathon-content-section timeline-section">
        <div className="page-section-label">
          02 <span /> TIMELINE
        </div>
        <div>
          <p className="kicker">8 hours / 4h → Mentorship → 4h</p>
          <h2>
            From brief{" "}
            <span className="hackathon-white-accent bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">to build.</span>
          </h2>
          <div className="timeline-list">
            {siteContent.hackathon.timeline.map(item => (
              <div key={`${item.time}-${item.label}`}>
                <span>{item.time}</span>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="judging-panel">
        <div>
          <Trophy size={22} />
          <p className="kicker">How projects are judged</p>
          <h2>
            Innovation meets{" "}
            <span className="hackathon-white-accent bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">execution.</span>
          </h2>
        </div>
        <div className="judging-list">
          {siteContent.hackathon.judging.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <Check size={15} />
            </div>
          ))}
          <p className="rewards-note">{siteContent.hackathon.rewards}</p>
        </div>
      </section>
      <section className="sponsors-section">
        <div className="page-section-label">
          04 <span /> SPONSORS
        </div>
        <div>
          <p className="kicker">Partners who make Epoch 1.0 possible</p>
          <h2>
            Built with{" "}
            <span className="hackathon-white-accent bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">support.</span>
          </h2>
          <p className="sponsors-intro">
            Sponsor details will be added here as partnerships are confirmed.
            Each card is ready for an official logo, URL, and partner
            description.
          </p>
          <div className="sponsors-grid">
            {siteContent.hackathon.sponsors.map(sponsor => (
              <article className="sponsor-card" key={sponsor.name}>
                <div className="sponsor-logo-placeholder">
                  <span>{sponsor.shortName}</span>
                </div>
                <div>
                  <strong>{sponsor.name}</strong>
                  <small>{sponsor.detail}</small>
                </div>
                <ArrowRight size={15} />
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="hackathon-final-cta">
        <p className="kicker">CodeAI Club / Epoch 1.0</p>
        <h2>
          Bring the{" "}
          <span className="hackathon-white-accent bg-gradient-to-r from-[#c8ff49] to-[#8bc9d2] text-transparent bg-clip-text">next idea.</span>
        </h2>
        <p>
          Join us for Epoch 1.0, an 8-hour hands-on hackathon challenge where
          innovation meets execution.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <button
            className="blue-button"
            type="button"
            onClick={() => setShowRegistration(true)}
          >
            JOIN US <ArrowRight size={15} />
          </button>
          <Link className="blue-text-link" href="/">
            Back to home
          </Link>
        </div>
      </section>
      {showRegistration ? (
        <div
          className="registration-modal-backdrop"
          role="presentation"
          onMouseDown={event => {
            if (event.currentTarget === event.target)
              setShowRegistration(false);
          }}
        >
          <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <button
              className="registration-modal-close"
              type="button"
              aria-label="Close registration dialog"
              onClick={() => setShowRegistration(false)}
            >
              <X size={18} />
            </button>
            <p className="kicker">CodeAI Club / Epoch 1.0</p>
            <h2 id="registration-title">
              Register your
              <br />
              <span>team.</span>
            </h2>
            <p>
              Registration opens the official form in a new tab. Keep this page
              open for the event details, tracks, and timeline.
            </p>
            <a
              className="blue-button"
              href={siteContent.cta.formUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowRegistration(false)}
            >
              Open registration form <ArrowRight size={15} />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* Projector mode handoff: uncomment the `return <ProjectorTimer />;` line above on Hackathon Day only.
   It uses projectorStart and projectorDurationHours from client/src/lib/codeai-content.ts. */
void ProjectorTimer;
