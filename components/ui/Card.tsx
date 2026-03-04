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

      <div className="mk-card__body" style={{ paddingTop: hasHeader ? undefined : "var(--space-4)" }}>
        {children}
      </div>

      {footer && <footer className="mk-card__footer">{footer}</footer>}
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
    cols === 3 ? "mk-card-grid--3" : cols === 2 ? "mk-card-grid--2" : "mk-card-grid--1";

  return <div className={`mk-card-grid ${colClass}`}>{children}</div>;
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