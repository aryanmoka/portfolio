// src/lib/meta.ts

interface MetaOptions {
  title: string;
  description: string;
  path: string; // e.g. '/projects/d-waffle-story'
  image?: string;
}

const SITE_URL = 'https://aryanmokashi.netlify.app';

const setTag = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const setOrCreateMeta = (property: string, value: string, isProperty = true) => {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

/**
 * Updates document title + meta description + OG/Twitter tags + canonical
 * for the current route. Call this in a useEffect on each route component.
 * Returns a cleanup function that restores the site-wide defaults.
 */
export const updateMeta = ({ title, description, path, image }: MetaOptions) => {
  const fullTitle = `${title} | Aryan Mokashi`;
  const url = `${SITE_URL}${path}`;
  const img = image || `${SITE_URL}/images/profile.png`;

  const prevTitle = document.title;
  document.title = fullTitle;

  setOrCreateMeta('description', description, false);
  setOrCreateMeta('og:title', fullTitle);
  setOrCreateMeta('og:description', description);
  setOrCreateMeta('og:url', url);
  setOrCreateMeta('og:image', img);
  setOrCreateMeta('twitter:title', fullTitle, false);
  setOrCreateMeta('twitter:description', description, false);
  setOrCreateMeta('twitter:image', img, false);
  setTag('link[rel="canonical"]', 'href', url);

  return () => {
    document.title = prevTitle;
  };
};

export const DEFAULT_META = {
  title: 'Aryan Mahendra Mokashi - Data Science & AI Portfolio',
  description:
    'Aryan Mahendra Mokashi — MSc Data Science & AI student, full-stack developer, and published NLP researcher. EDA, dashboards, ML, and scalable web apps in Python, React, Flask, and FastAPI.',
  path: '/',
};
