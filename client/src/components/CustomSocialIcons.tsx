/* Custom Social Icons matching exact user-provided specifications for LinkedIn ("in" branding) and Instagram. */

export function LinkedInCustomIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Dot above i */}
      <circle cx="4.1" cy="4.1" r="2.1" />
      {/* i stem */}
      <rect x="2.1" y="8.2" width="4.0" height="12.6" rx="1.0" />
      {/* n stem & arch */}
      <path d="M 8.8 8.2 L 12.5 8.2 C 12.9 8.2 13.2 8.5 13.2 8.9 L 13.2 10.3 C 14.2 8.9 16.0 8.0 18.1 8.0 C 21.6 8.0 23.2 10.2 23.2 14.5 L 23.2 20.8 C 23.2 21.3 22.8 21.8 22.2 21.8 L 18.7 21.8 C 18.2 21.8 17.7 21.3 17.7 20.8 L 17.7 14.8 C 17.7 13.1 17.0 11.9 15.4 11.9 C 14.0 11.9 13.2 13.0 13.2 14.6 L 13.2 20.8 C 13.2 21.3 12.8 21.8 12.2 21.8 L 8.8 21.8 C 8.2 21.8 7.8 21.3 7.8 20.8 L 7.8 9.2 C 7.8 8.6 8.2 8.2 8.8 8.2 Z" />
    </svg>
  );
}

export function InstagramCustomIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
