import Link from "next/link";

export default function Custom500() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Something went wrong</h1>
      <p>We hit an unexpected error. Please try again.</p>

      <p style={{ marginTop: 12 }}>
        <Link href="/learn" style={{ textDecoration: "underline" }}>
          Go to Learn
        </Link>
      </p>
    </div>
  );
}