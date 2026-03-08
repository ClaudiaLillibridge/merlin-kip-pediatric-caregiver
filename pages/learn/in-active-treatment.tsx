import Link from "next/link";

export default function InActiveTreatment() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Return to Learn */}
      <div style={{ marginBottom: 16 }}>
        <Link
          href="/learn"
          style={{
            color: "#E5F0FF",
            textDecoration: "underline",
            fontSize: 14,
            opacity: 0.9,
          }}
        >
          ← Back to Learn
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-2">In active treatment</h1>
      <p className="text-sm text-gray-500 mb-8">About a 2-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Once treatment has started, many families notice a shift. The initial
          shock may ease, but new routines, new side effects, and new questions
          take its place.
        </p>

        <p>
          Active treatment is often a mix of predictability and surprises. Some
          days feel routine. Others don’t. This section of Learn is here to help
          you understand what your care team is watching, what you might notice
          at home, and how to decide when to reach out.
        </p>

        <p>
          You don’t need to manage this perfectly. The goal is to feel more
          confident over time—not to memorize everything.
        </p>
      </section>

      <nav className="mt-12 space-y-3">
        <p className="text-sm text-gray-600">Explore active treatment topics:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/learn/what-care-team-focuses-on" style={{ textDecoration: "underline" }}>
            What the care team may focus on this week
          </Link>

          <Link href="/learn/common-side-effects" style={{ textDecoration: "underline" }}>
            Common side effects you may notice
          </Link>

          <Link href="/learn/when-to-call-versus-wait" style={{ textDecoration: "underline" }}>
            When to call versus when to wait
          </Link>
        </div>
      </nav>
    </main>
  );
}