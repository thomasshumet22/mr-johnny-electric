export default function TopBar() {
  return (
    <div
      className="w-full text-white text-[13px]"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        {/* Left: star rating */}
        <a
          href="https://www.google.com/maps/place/Mr.+Johnny+Electric"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          aria-label="4.9 stars — 47 Google Reviews"
        >
          <Stars />
          <span className="font-medium">4.9</span>
          <span className="text-white/60 hidden sm:inline">· 47 Google Reviews</span>
        </a>

        {/* Right: phone + hours */}
        <a
          href="tel:4258948444"
          className="flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
          aria-label="Call (425) 894-8444"
        >
          <PhoneIcon />
          <span>(425) 894-8444</span>
          <span className="text-white/60 hidden sm:inline">· Mon–Fri 7am–6pm</span>
        </a>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-3 h-3 fill-current text-[#F5A623]"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.678c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
      />
    </svg>
  );
}
