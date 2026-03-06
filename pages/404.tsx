import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>

      <p style={{ marginTop: 12 }}>
        <Link href="/learn" style={{ textDecoration: "underline" }}>
          Go to Learn
        </Link>
      </p>
    </div>
  );
}