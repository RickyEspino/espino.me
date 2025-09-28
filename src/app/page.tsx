export default function Page() {
  return (
    <main className="relative min-h-dvh w-full bg-[url('https://images.unsplash.com/photo-1542228262-3d663b306e1a?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Card */}
      <section className="relative z-10 w-full max-w-[420px] shadow-2xl rounded-[2.25rem] overflow-hidden bg-white/90 backdrop-blur">
        {/* Top block */}
        <div className="relative pt-10 pb-24 px-8" style={{ backgroundColor: '#19007bff' }}>
          <h1 className="text-4xl leading-none font-[900] tracking-wide text-white text-center">
            Ricardo Espino
          </h1>

          {/* Portrait */}
          <div className="absolute left-1/2 -bottom-20 -translate-x-1/2">
            <div className="size-40 rounded-full ring-8 ring-white overflow-hidden shadow-xl">
              {/* Replace src with your photo */}
              <img
                src="/images/me.jpg"
                alt="Portrait"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-8 pt-24 pb-10" style={{ backgroundColor: '#FFF8F6' }}>
          {/* Phone */}
          <a href="tel:+19064587998" className="group flex items-center gap-3 py-3">
            <PhoneIcon className="size-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="font-semibold text-lg tracking-wide">906.458.7998</span>
          </a>

          {/* Website */}
          <a
            href="https://espino.me"
            className="group flex items-center gap-3 py-3"
            target="_blank"
            rel="noreferrer"
          >
            <LaptopIcon className="size-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-base">espino.me</span>
          </a>

          {/* Email */}
          <a href="mailto:ricky@espino.me" className="group flex items-center gap-3 py-3">
            <MailIcon className="size-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-base">ricky@espino.me</span>
          </a>

          {/* Socials */}
          <div className="mt-4 flex items-center gap-3">
            <SocialButton href="#" label="Facebook">
              <FacebookIcon className="size-4" />
            </SocialButton>
            <SocialButton href="#" label="Twitter">
              <TwitterIcon className="size-4" />
            </SocialButton>
            <SocialButton href="#" label="LinkedIn">
              <LinkedInIcon className="size-4" />
            </SocialButton>
            <SocialButton href="#" label="Instagram">
              <InstagramIcon className="size-4" />
            </SocialButton>
            <span className="ml-2 text-sm text-neutral-600">@espino</span>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href="mailto:ricky@espino.me"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-3 font-medium shadow hover:shadow-md transition bg-black text-white"
            >
              Email Me
            </a>
            <a
              href="tel:+19064587998"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-3 font-medium shadow hover:shadow-md transition bg-white text-black border"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========================= Icons ========================= */
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function LaptopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 5h18v10H3z" />
      <path d="M2 19h20" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 5.92a8.13 8.13 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.09 4.09 0 0 0-7 3.73A11.6 11.6 0 0 1 3 4.9a4.08 4.08 0 0 0 1.27 5.45 4.05 4.05 0 0 1-1.85-.51v.05a4.09 4.09 0 0 0 3.28 4 4.1 4.1 0 0 1-1.84.07 4.1 4.1 0 0 0 3.82 2.84A8.22 8.22 0 0 1 2 19.55a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22 5.92z" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

/* ========================= Small helpers ========================= */
function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full border size-9 bg-white hover:bg-black hover:text-white transition shadow"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
