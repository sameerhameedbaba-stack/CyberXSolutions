/**
 * Gradients shared by components that render many times on one page.
 *
 * Defining these inside each instance produced duplicate DOM ids — invalid
 * HTML, and fragile because `url(#id)` silently resolves to whichever copy
 * happens to be first. They live here once, rendered from the root layout.
 */
export function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <linearGradient id="cx-flow-h" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="cx-flow-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
