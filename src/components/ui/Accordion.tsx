'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from './Icon';

export type FaqItem = { question: string; answer: string };

function AccordionRow({
  item,
  index,
  isOpen,
  onToggle,
  baseId,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  baseId: string;
}) {
  const buttonId = `${baseId}-q-${index}`;
  const panelId = `${baseId}-a-${index}`;

  return (
    <div
      className={cn(
        'group rounded-2xl border transition-all duration-500 ease-smooth',
        isOpen ? 'border-brand-200 bg-white shadow-lift' : 'border-ink-100 bg-white/70 hover:border-ink-200',
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 rounded-2xl px-5 py-5 text-left sm:px-7 sm:py-6"
        >
          <span className={cn('text-base font-semibold sm:text-lg', isOpen ? 'text-ink-950' : 'text-ink-800')}>
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-smooth',
              isOpen
                ? 'rotate-45 border-transparent bg-brand-gradient text-white'
                : 'border-ink-200 text-ink-500 group-hover:border-brand-300 group-hover:text-brand-600',
            )}
          >
            <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
        </button>
      </h3>
      {/* 0fr → 1fr gives a height animation without measuring the DOM. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-all duration-500 ease-smooth',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 text-[0.9375rem] leading-relaxed text-ink-500 sm:px-7 sm:pb-7 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  className,
  allowMultiple = false,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  allowMultiple?: boolean;
  /** Index open on mount, or -1 for all closed. */
  defaultOpen?: number;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(defaultOpen >= 0 ? [defaultOpen] : []);

  const toggle = (index: number) => {
    setOpen((current) => {
      const isOpen = current.includes(index);
      if (allowMultiple) {
        return isOpen ? current.filter((i) => i !== index) : [...current, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <AccordionRow
          key={item.question}
          item={item}
          index={index}
          baseId={baseId}
          isOpen={open.includes(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
