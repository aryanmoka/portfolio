// src/components/SectionKicker.tsx
import React from 'react';

interface SectionKickerProps {
  index: string; // e.g. '02'
  label: string;
  accent?: 'cyan' | 'purple' | 'emerald' | 'amber';
}

const accentMap = {
  cyan: 'text-cyan-500 bg-cyan-500/60',
  purple: 'text-purple-400 bg-purple-500/60',
  emerald: 'text-emerald-400 bg-emerald-500/60',
  amber: 'text-amber-400 bg-amber-500/60',
};

/**
 * A section "eyebrow" that reads like a document index rather than a
 * social-media pill badge — no rounded chip background, just a number,
 * a rule, and a label. Keeps the terminal/systems aesthetic without
 * repeating the same badge shape in every section.
 */
const SectionKicker: React.FC<SectionKickerProps> = ({ index, label, accent = 'cyan' }) => {
  const [textColor, lineColor] = accentMap[accent].split(' ');

  return (
    <div className="flex items-center gap-3 mb-5 select-none">
      <span className={`font-mono text-xs ${textColor}`}>{index}</span>
      <span className={`h-px w-10 ${lineColor}`}></span>
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {label}
      </span>
    </div>
  );
};

export default SectionKicker;
