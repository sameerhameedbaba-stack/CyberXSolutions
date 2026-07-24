/**
 * One shared IntersectionObserver for every reveal on the page.
 * A page can hold 60+ animated elements; a single observer keeps that free.
 */

type Callback = () => void;

let observer: IntersectionObserver | null = null;
const registry = new Map<Element, Callback>();

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = registry.get(entry.target);
          if (callback) callback();
          observer?.unobserve(entry.target);
          registry.delete(entry.target);
        }
      },
      // Fire slightly before the element is fully in view so motion feels anticipatory.
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
  }
  return observer;
}

export function observeOnce(element: Element, callback: Callback): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    callback();
    return () => {};
  }
  registry.set(element, callback);
  getObserver().observe(element);
  return () => {
    observer?.unobserve(element);
    registry.delete(element);
  };
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
