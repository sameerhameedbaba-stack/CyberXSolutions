type ClassValue = string | number | false | null | undefined;

/** Minimal class joiner — no runtime dependency, tree-shakes to nothing meaningful. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}

/** Stable slugifier used for anchor ids generated from headings. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Formats an ISO date for display without pulling in a date library. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}
