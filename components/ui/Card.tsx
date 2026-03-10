
import React from "react";

type CardTone = "neutral" | "info" | "warn" | "success";
type CardVariant = "default" | "elevated" | "outline";

type CardProps = {
  title?: string;
  subtitle?: string;
  tone?: CardTone;
  variant?: CardVariant;
  right?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Card({
  title,
  subtitle,
  tone = "neutral",
  variant = "default",
  right,
  footer,
  children,
  className = "",
}: CardProps) {
  const toneClass = tone === "neutral" ? "" : `mk-card--tone-${tone}`;
  const variantClass =
    variant === "default"
      ? ""
      : variant === "elevated"
      ? "mk-card--elevated"
      : "mk-card--outline";

  const hasHeader = Boolean(title || subtitle || right);

  return (
    <section className={`mk-card ${toneClass} ${variantClass} ${className}`.trim()}>
      <div className="mk-card__accent" />

      {hasHeader && (
        <header className="mk-card__header">
          <div style={{ minWidth: 0 }}>
            {title && <h2 className="mk-card__title">{title}</h2>}
            {subtitle && <div className="mk-card__subtitle">{subtitle}</div>}
          </div>
          {right && <div style={{ flexShrink: 0 }}>{right}</div>}
        </header>
      )}

      <div
        className="mk-card__body"
        style={{ paddingTop: hasHeader ? undefined : "var(--space-4)" }}
      >
        {children}
      </div>

      {footer && <footer className="mk-card__footer">{footer}</footer>}

      {/* ✅ Mobile readability improvements */}
      <style jsx global>{`
        @media (max-width: 768px) {
          /* Make cards feel less "narrow" by reducing side padding */
          .mk-card__header {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .mk-card__body {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .mk-card__footer {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          /* Improve text readability a bit on mobile */
          .mk-card__title {
            line-height: 1.2;
          }

          .mk-card__subtitle {
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}

export function CardGrid({
  cols = 1,
  children,
}: {
  cols?: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  const colClass =
    cols === 3
      ? "mk-card-grid--3"
      : cols === 2
      ? "mk-card-grid--2"
      : "mk-card-grid--1";

  return (
    <div className={`mk-card-grid ${colClass}`}>
      {children}

      {/* ✅ Force single-column grids on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mk-card-grid {
            display: grid;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export function CardBullets({ items }: { items: string[] }) {
  return (
    <ul className="mk-bullets">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
