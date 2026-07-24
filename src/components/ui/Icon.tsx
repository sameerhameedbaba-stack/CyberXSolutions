import { cn } from '@/lib/utils';

/**
 * Hand-authored icon set. Stroke-based, 24×24, 1.75 stroke — one optical weight
 * across the whole site so nothing looks borrowed from a different library.
 */

const strokeIcons: Record<string, React.ReactNode> = {
  /* --- Navigation & chrome --- */
  'arrow-right': <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />,
  'arrow-left': <path d="M19.5 12h-15M11 18.5 4.5 12 11 5.5" />,
  'arrow-up-right': <path d="M7 17 17 7M8.2 7H17v8.8" />,
  'arrow-down': <path d="M12 4.5v15M5.5 13l6.5 6.5L18.5 13" />,
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  'chevron-right': <path d="m9.5 6 6 6-6 6" />,
  'chevron-up': <path d="m6 14.5 6-6 6 6" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  minus: <path d="M5.5 12h13" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m8.2 12.3 2.6 2.6 5-5.4" />
    </>
  ),
  'external-link': <path d="M13.5 5.5h5v5M18.5 5.5 11 13M17 14.2v3.3a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.3" />,
  link: <path d="M10.2 13.8a3.8 3.8 0 0 0 5.4 0l3-3a3.8 3.8 0 0 0-5.4-5.4l-1.5 1.5M13.8 10.2a3.8 3.8 0 0 0-5.4 0l-3 3a3.8 3.8 0 0 0 5.4 5.4l1.5-1.5" />,
  download: <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19h14" />,

  /* --- AI & autonomy --- */
  agent: (
    <>
      <rect x="4.5" y="7.5" width="15" height="12" rx="3.5" />
      <path d="M12 3v4.5" />
      <circle cx="12" cy="3" r="1.4" />
      <path d="M9.2 12.4v1.6M14.8 12.4v1.6M9.8 16.6h4.4" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5.2a3.2 3.2 0 0 0-6 1.3A3 3 0 0 0 4.4 12a3 3 0 0 0 1.3 4.9A3 3 0 0 0 12 18.8Z" />
      <path d="M12 5.2a3.2 3.2 0 0 1 6 1.3A3 3 0 0 1 19.6 12a3 3 0 0 1-1.3 4.9A3 3 0 0 1 12 18.8Z" />
      <path d="M12 5.2v13.6" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2.4" />
      <rect x="10.2" y="10.2" width="3.6" height="3.6" rx="1" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3.5 12.7 8l4.5 1.7-4.5 1.7L11 15.9 9.3 11.4 4.8 9.7l4.5-1.7L11 3.5Z" />
      <path d="M18 14.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z" />
    </>
  ),
  automation: (
    <>
      <rect x="3" y="4" width="7" height="6" rx="2" />
      <rect x="14" y="14" width="7" height="6" rx="2" />
      <path d="M10 7h4.5a3 3 0 0 1 3 3v4" />
      <path d="M15.6 12.2 17.5 14l1.9-1.8" />
    </>
  ),
  workflow: (
    <>
      <rect x="3.5" y="3.5" width="6" height="6" rx="2" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="2" />
      <rect x="9" y="14.5" width="6" height="6" rx="2" />
      <path d="M6.5 9.5v2a2 2 0 0 0 2 2h.5M17.5 9.5v2a2 2 0 0 1-2 2H15" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M10.4 6.9 6.4 15.9M13.6 6.9l4 9M7.4 18h9.2" />
    </>
  ),
  orbit: (
    <>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9.2" ry="4.4" transform="rotate(-28 12 12)" />
      <circle cx="19.4" cy="8.6" r="1.6" />
    </>
  ),
  infinity: <path d="M7.5 9a3 3 0 1 0 0 6c2.4 0 3.4-3 4.5-3s2.1 3 4.5 3a3 3 0 1 0 0-6c-2.4 0-3.4 3-4.5 3S9.9 9 7.5 9Z" />,

  /* --- Engineering --- */
  code: <path d="M9 7.5 4.5 12 9 16.5M15 7.5 19.5 12 15 16.5" />,
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="m7.5 10 2.5 2.5L7.5 15M13 15h4" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="3" />
      <path d="M10.8 18.6h2.4M10 5.2h4" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2.6" />
      <path d="M9 20.5h6M12 17v3.5" />
    </>
  ),
  cloud: <path d="M7.4 19.5a4.4 4.4 0 0 1-.6-8.76 6.1 6.1 0 0 1 11.65 1.6 3.6 3.6 0 0 1-.85 7.16Z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6.5" rx="2.2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2.2" />
      <path d="M7 7.3h.01M7 16.8h.01M10.5 7.3h.01M10.5 16.8h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.8" rx="7.6" ry="3.1" />
      <path d="M4.4 5.8v12.4c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1V5.8" />
      <path d="M4.4 12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.4L12 11.8 3.5 7.4 12 3Z" />
      <path d="m3.5 12 8.5 4.4 8.5-4.4M3.5 16.6 12 21l8.5-4.4" />
    </>
  ),
  'git-branch': (
    <>
      <circle cx="6.5" cy="5.5" r="2.3" />
      <circle cx="6.5" cy="18.5" r="2.3" />
      <circle cx="17.5" cy="8.5" r="2.3" />
      <path d="M6.5 7.8v8.4M17.5 10.8c0 3.4-2.6 4.6-5.5 5.1" />
    </>
  ),
  puzzle: <path d="M9.5 3.5h2.2a1.8 1.8 0 1 1 3.6 0h1.7a1.5 1.5 0 0 1 1.5 1.5v2.7a1.8 1.8 0 1 1 0 3.6V15a1.5 1.5 0 0 1-1.5 1.5h-2.6a1.8 1.8 0 1 0-3.6 0H8a1.5 1.5 0 0 1-1.5-1.5v-2.6a1.8 1.8 0 1 1 0-3.6V5A1.5 1.5 0 0 1 8 3.5Z" />,
  plug: <path d="M9 3.5V9M15 3.5V9M6.5 9h11v2.6a5.5 5.5 0 0 1-5.5 5.5 5.5 5.5 0 0 1-5.5-5.5Z M12 17.1v3.4" />,
  box: (
    <>
      <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" />
      <path d="M4 7.2 12 11.5l8-4.3M12 11.5V21" />
    </>
  ),

  /* --- Security --- */
  shield: <path d="M12 3.2 19 6v5.6c0 4.5-2.9 8.1-7 9.2-4.1-1.1-7-4.7-7-9.2V6l7-2.8Z" />,
  'shield-check': (
    <>
      <path d="M12 3.2 19 6v5.6c0 4.5-2.9 8.1-7 9.2-4.1-1.1-7-4.7-7-9.2V6l7-2.8Z" />
      <path d="m9 11.9 2.2 2.2 4-4.4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.8" />
      <path d="M8.4 10V7.6a3.6 3.6 0 0 1 7.2 0V10" />
    </>
  ),
  key: (
    <>
      <circle cx="7.8" cy="15.2" r="3.6" />
      <path d="m10.4 12.6 8.8-8.8M17 6l2.4 2.4M14.4 8.6 16.8 11" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <circle cx="12" cy="12" r="5.2" />
      <circle cx="12" cy="12" r="1.7" />
      <path d="m12 12 6.2-6.2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.6 12S6.4 5.6 12 5.6 21.4 12 21.4 12 17.6 18.4 12 18.4 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="3.1" />
    </>
  ),
  'alert-triangle': <path d="M12 4.4 21 19.6H3L12 4.4ZM12 10v4M12 17.2h.01" />,
  fingerprint: <path d="M6.2 10.4a6.2 6.2 0 0 1 11.6.2M4.6 14.6c.6-1.3.9-2.4.9-3.6M9 19.6c1-1.5 1.6-3.4 1.6-5.6a1.4 1.4 0 0 1 2.8 0c0 1.4-.2 2.7-.6 3.9M15.9 18.8a14 14 0 0 0 1-5M8.2 13a3.8 3.8 0 0 1 7.6 0c0 1 0 2-.2 2.9" />,
  'scan-face': <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M9.4 10.5h.01M14.6 10.5h.01M9.2 14.4a3.6 3.6 0 0 0 5.6 0" />,

  /* --- Growth & analytics --- */
  'chart-bar': <path d="M4 20V4M4 20h16M8.5 20v-6.5M13 20V9M17.5 20v-4" />,
  'chart-line': <path d="M4 20V4M4 20h16M7 15.5l3.6-3.8 3 2.6 4.9-6" />,
  'trending-up': <path d="m3.5 16.5 5.5-5.5 3.6 3.6L20.5 7M20.5 7h-4.8M20.5 7v4.8" />,
  gauge: (
    <>
      <path d="M4 17a8.6 8.6 0 1 1 16 0" />
      <path d="m12 13.4 3.6-3.4" />
      <circle cx="12" cy="14.4" r="1.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.8" />
      <path d="m16.2 16.2 4.3 4.3" />
    </>
  ),
  megaphone: <path d="M4 10.2v3.6a1.6 1.6 0 0 0 1.6 1.6h1.6l9.3 4.6V4L7.2 8.6H5.6A1.6 1.6 0 0 0 4 10.2ZM19.4 9.4a3.4 3.4 0 0 1 0 5.2M7.2 15.4v3.2a1.8 1.8 0 0 0 3.6 0v-1.4" />,
  growth: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-5.2M12 20V8.6M17 20v-8" />
      <path d="m6.4 10.4 4.4-4.6 3.2 2.4 4.2-4.6" />
    </>
  ),
  filter: <path d="M4 5.6h16l-6.2 7.2v5.6l-3.6 2v-7.6L4 5.6Z" />,
  sliders: <path d="M5 6.5h14M5 12h14M5 17.5h14M9.5 4.6v3.8M15 10.1v3.8M8 15.6v3.8" />,
  activity: <path d="M3 12.5h3.6l2.6-6.8 4.4 12L16.4 12.5H21" />,

  /* --- Business & people --- */
  users: (
    <>
      <circle cx="9" cy="8.2" r="3.4" />
      <path d="M3.5 19.4a5.7 5.7 0 0 1 11 0" />
      <path d="M16 5.2a3.4 3.4 0 0 1 0 6.6M17.4 14.4a5.7 5.7 0 0 1 3.1 5" />
    </>
  ),
  'user-check': (
    <>
      <circle cx="10" cy="8" r="3.6" />
      <path d="M3.8 19.6a6.4 6.4 0 0 1 12.4 0" />
      <path d="m16.4 11.6 1.8 1.8 3.4-3.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.4" width="18" height="12.2" rx="2.6" />
      <path d="M8.6 7.4V6a2 2 0 0 1 2-2h2.8a2 2 0 0 1 2 2v1.4M3 12.4h18" />
    </>
  ),
  building: (
    <>
      <path d="M4.5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 14.5 5v15.5" />
      <path d="M14.5 9.5h4a1.5 1.5 0 0 1 1.5 1.5v9.5M3 20.5h18M8 7.5h2.5M8 11.5h2.5M8 15.5h2.5" />
    </>
  ),
  enterprise: (
    <>
      <path d="M3 20.5h18M5.5 20.5V8.2l6.5-4.7 6.5 4.7v12.3" />
      <path d="M9.5 20.5v-5h5v5M10 11h.01M14 11h.01" />
    </>
  ),
  factory: <path d="M3 20.5V10.8l5.6 3.6V10.8l5.6 3.6V7l5.8 3.4v10.1ZM3 20.5h18M7.4 17.4h.01M12.6 17.4h.01M17.4 17.4h.01" />,
  handshake: <path d="m8 12.5 2.4 2.4a1.5 1.5 0 0 0 2.2 0l3.5-3.5 3.4 3.4M3.5 10.5 7 7a2 2 0 0 1 2.8 0l1.4 1.4a1.4 1.4 0 0 0 2 0L14.6 7a2 2 0 0 1 2.8 0l3.1 3.1M5.6 14.4l2.9 2.9M9 17.3l2 2" />,
  rocket: <path d="M12 3.2c3.4 2.4 5.2 6 5.2 9.6L14.8 16H9.2L6.8 12.8c0-3.6 1.8-7.2 5.2-9.6ZM9.2 16l-1.6 4 3.2-1.6M14.8 16l1.6 4-3.2-1.6M12 10.5h.01" />,
  award: (
    <>
      <circle cx="12" cy="9.2" r="5.6" />
      <path d="m8.6 14 -1.2 6.4L12 18.4l4.6 2-1.2-6.4" />
    </>
  ),
  trophy: <path d="M8 4h8v5.4a4 4 0 0 1-8 0ZM8 5.6H5.4v1.6A3 3 0 0 0 8 10.1M16 5.6h2.6v1.6a3 3 0 0 1-2.6 2.9M10 13.4v2.4h4v-2.4M8 20.4h8M12 15.8v4.6" />,
  star: <path d="m12 3.8 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17.2l-5.2 2.8 1-5.9L3.5 10l5.9-.8L12 3.8Z" />,
  quote: <path d="M9.6 6.5C6.9 7.8 5.2 10.4 5.2 13.6c0 2.4 1.4 3.9 3.3 3.9 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.2-3.9ZM19 6.5c-2.7 1.3-4.4 3.9-4.4 7.1 0 2.4 1.4 3.9 3.3 3.9 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.2-3.9Z" />,

  /* --- Industry --- */
  'heart-pulse': <path d="M12 20.2S3.8 15 3.8 9.4A4.6 4.6 0 0 1 12 6.6a4.6 4.6 0 0 1 8.2 2.8c0 1.2-.4 2.4-1 3.5M13 15h2.5l1.6-2.4 2 4 1.4-2.4h2" />,
  banknote: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.6" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M6 10v.01M18 14v.01" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4.5h2.2l2.4 10.4h9.6l2.3-7.6H6.6" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6.5h10.4v9.8H3ZM13.4 10h3.9l2.7 3.1v3.2h-6.6" />
      <circle cx="7.2" cy="18" r="1.8" />
      <circle cx="16.6" cy="18" r="1.8" />
    </>
  ),
  'graduation-cap': <path d="m12 4.5 9 4.2-9 4.2-9-4.2 9-4.2ZM6.6 10.6v4.6c0 1.6 2.4 2.9 5.4 2.9s5.4-1.3 5.4-2.9v-4.6M21 8.7v5.4" />,
  scale: <path d="M12 4.5v15M7 19.5h10M12 7 5 8.8M12 7l7 1.8M5 8.8 2.6 14.4a2.6 2.6 0 0 0 4.8 0ZM19 8.8l-2.4 5.6a2.6 2.6 0 0 0 4.8 0Z" />,
  bolt: <path d="M13.2 2.5 4.8 13.4h5.6L10.8 21.5l8.4-10.9h-5.6l-.4-8.1Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M3.3 12h17.4M12 3.3a13.5 13.5 0 0 1 0 17.4 13.5 13.5 0 0 1 0-17.4Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
    </>
  ),

  /* --- Process & content --- */
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.4V12l3.2 1.9" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.6" />
      <path d="M3.5 9.8h17M8.4 3.5v3M15.6 3.5v3" />
    </>
  ),
  refresh: <path d="M20.2 11.4a8.2 8.2 0 0 0-14-4.6L3.8 9.2M3.8 12.6a8.2 8.2 0 0 0 14 4.6l2.4-2.4M3.8 4.6v4.6h4.6M20.2 19.4v-4.6h-4.6" />,
  'list-checks': <path d="M10.5 6.5h9M10.5 12h9M10.5 17.5h9M3.5 6.5 5 8l2.4-2.6M3.5 12 5 13.5l2.4-2.6M3.5 17.5 5 19l2.4-2.6" />,
  book: <path d="M4 5.4A2 2 0 0 1 6 3.4h13.5v14H6a2 2 0 0 0-2 2ZM4 19.4a2 2 0 0 0 2 2h13.5v-4" />,
  'file-text': (
    <>
      <path d="M13.4 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.1Z" />
      <path d="M13.4 3.5V9h5.6M8.6 13h6.8M8.6 16.4h4.4" />
    </>
  ),
  lightbulb: <path d="M9.2 17.4a6 6 0 1 1 5.6 0v1.4a1.6 1.6 0 0 1-1.6 1.6h-2.4a1.6 1.6 0 0 1-1.6-1.6ZM9.4 17.4h5.2" />,
  flask: <path d="M9.6 3.5h4.8M10.6 3.5v6L5.4 18a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3l-5.2-8.5v-6M8 14.4h8" />,
  wand: <path d="m5 19 9.4-9.4M12.6 4.4l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9ZM18.6 11.4l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M4.2 7.5l2.1 1.2M17.7 15.3l2.1 1.2M4.2 16.5l2.1-1.2M17.7 8.7l2.1-1.2" />
    </>
  ),
  headset: <path d="M4.4 14.6v-2.4a7.6 7.6 0 0 1 15.2 0v2.4M4.4 13h1.4a1.6 1.6 0 0 1 1.6 1.6v2.2a1.6 1.6 0 0 1-1.6 1.6H4.4ZM19.6 13h-1.4a1.6 1.6 0 0 0-1.6 1.6v2.2a1.6 1.6 0 0 0 1.6 1.6h1.4ZM18.6 18.4v.6a2 2 0 0 1-2 2H13" />,
  play: <path d="M8.5 5.6 18 12l-9.5 6.4V5.6Z" />,
  timer: <path d="M10 2.8h4M12 8.4v4.4l2.8 2M12 21.2a8.4 8.4 0 1 0 0-16.8 8.4 8.4 0 0 0 0 16.8Z" />,

  /* --- Contact --- */
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.8" />
      <path d="m3.6 7.6 7.3 5.2a2 2 0 0 0 2.2 0l7.3-5.2" />
    </>
  ),
  phone: <path d="M6.6 3.5h3l1.5 3.8-2.2 1.5a11.4 11.4 0 0 0 5.3 5.3l1.5-2.2 3.8 1.5v3a2 2 0 0 1-2.2 2C10.2 17.8 6.2 13.8 4.6 5.7a2 2 0 0 1 2-2.2Z" />,
  'map-pin': (
    <>
      <path d="M12 21.2s7-6.4 7-11.2a7 7 0 1 0-14 0c0 4.8 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  send: <path d="M20.5 3.5 3.5 10.2l7 2.3 2.3 7 7.7-16Z M10.5 12.5 20.5 3.5" />,
};

const solidIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.2h4v11.3H3V9.2Zm6.5 0h3.83v1.55h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.71h-4v-5.06c0-1.21-.02-2.76-1.68-2.76-1.69 0-1.95 1.32-1.95 2.68v5.14h-4V9.2Z" />
  ),
  'x-social': (
    <path d="M17.53 3h3.24l-7.08 8.09L22 21h-6.53l-5.11-6.68L4.51 21H1.27l7.57-8.65L1.6 3h6.7l4.62 6.11L17.53 3Zm-1.14 16.06h1.8L7.7 4.84H5.77l10.62 14.22Z" />
  ),
  github: (
    <path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5.01 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z" />
  ),
  youtube: (
    <path d="M21.55 7.2a2.51 2.51 0 0 0-1.77-1.78C18.2 5 12 5 12 5s-6.2 0-7.78.42A2.51 2.51 0 0 0 2.45 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .45 4.8 2.51 2.51 0 0 0 1.77 1.78C5.8 19 12 19 12 19s6.2 0 7.78-.42a2.51 2.51 0 0 0 1.77-1.78A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.45-4.8ZM10 15.02V8.98L15.2 12 10 15.02Z" />
  ),
};

export type IconName = keyof typeof strokeIcons | keyof typeof solidIcons;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const solid = solidIcons[name];
  if (solid) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn('h-5 w-5', className)}>
        {solid}
      </svg>
    );
  }

  const stroke = strokeIcons[name] ?? strokeIcons.sparkles;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn('h-5 w-5', className)}
    >
      {stroke}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Gradient icon tile — the recurring "chip" used across service cards  */
/* ------------------------------------------------------------------ */

export type Accent = 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';

export const accentGradient: Record<Accent, string> = {
  blue: 'from-brand-500 to-indigo-500',
  violet: 'from-violet-500 to-blossom-500',
  cyan: 'from-cyan-400 to-brand-500',
  emerald: 'from-emerald-400 to-cyan-500',
  orange: 'from-sunset-400 to-blossom-500',
  pink: 'from-blossom-400 to-violet-500',
  indigo: 'from-indigo-500 to-violet-600',
};

export const accentSoft: Record<Accent, string> = {
  blue: 'bg-brand-50 text-brand-600',
  violet: 'bg-violet-50 text-violet-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-sunset-50 text-sunset-600',
  pink: 'bg-blossom-50 text-blossom-600',
  indigo: 'bg-indigo-50 text-indigo-600',
};

export function IconTile({
  name,
  accent = 'blue',
  className,
  size = 'md',
}: {
  name: string;
  accent?: Accent;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-12 w-12 rounded-2xl',
    lg: 'h-14 w-14 rounded-2xl',
  }[size];

  const iconDims = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' }[size];

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center bg-gradient-to-br text-white shadow-lift-sm',
        'after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/30 after:to-transparent',
        accentGradient[accent],
        dims,
        className,
      )}
    >
      <Icon name={name} className={cn('relative z-10', iconDims)} strokeWidth={1.9} />
    </span>
  );
}
