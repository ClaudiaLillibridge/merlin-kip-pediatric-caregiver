
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
  maxWidth?: number;
};

export default function PageLayout({
  title,
  children,
  maxWidth = 980,
}: PageLayoutProps) {
  const pathname = usePathname();

  const navButton = (href: string, label: string) => {
    const isActive =
      href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);

    return (
      <Link
        href={href}
        style={{
          padding: "8px 14px",
          borderRadius: "999px",
          background: isActive
            ? "rgba(255,255,255,0.25)"
            : "rgba(0,0,0,0.25)",
          textDecoration: "none",
          color: "white",
          fontSize: "0.95rem",
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth,
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          margin: "0 0 16px 0",
          fontSize: "1.75rem",
          fontWeight: 700,
        }}
      >
        {title}
      </h1>
<div
  style={{
    display: "inline-block",
    marginBottom: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    background: "rgba(255,255,255,0.15)",
    opacity: 0.8,
  }}
>
  Draft • Demo
</div>
      {/* Navigation */}
      <div
        style={{
          marginBottom: "20px",
          padding: "12px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.08)",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        
{navButton("/onboarding", "Welcome")}
{navButton("/today", "Today")}
{navButton("/learn", "Learn")}
{navButton("/journal", "Journal")}

      </div>

      {children}
    </main>
  );
}
