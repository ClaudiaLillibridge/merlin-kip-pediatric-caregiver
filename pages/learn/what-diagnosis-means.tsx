import Link from "next/link";

export default function WhatDiagnosisMeans() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Return to Learn (top) */}
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

      <h1 className="text-3xl font-semibold mb-2">
        What the diagnosis means (in plain English)
      </h1>

      <p className="text-sm text-gray-500 mb-8">About a 2-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          A cancer diagnosis means that some cells in the body are growing in a
          way they shouldn’t — and doctors now focus on understanding exactly
          what kind of cancer it is so they can treat it safely and effectively.
        </p>

        <p>
          A diagnosis is not just a name — it’s a starting point. Doctors use the
          word diagnosis to describe what they believe is happening based on
          symptoms, imaging, blood work, and sometimes biopsy results.
        </p>

        <p>
          Early on, the diagnosis may feel incomplete or overly technical. That’s
          because the care team is still gathering important details to choose
          the best treatment.
        </p>

        <p>
          Even cancers with the same name can behave differently. That’s why your
          team may talk about sub-types, risk groups, or staging. This is not
          about making things complicated — it’s about being precise.
        </p>

        <p>
          Many caregivers worry they missed something or did something wrong.
          Childhood cancers are not caused by parenting choices, something you
          did, or something you missed.
        </p>

        <p>
          In the first days after diagnosis, it’s normal to feel overwhelmed.
          More tests and repeated questions don’t mean care is delayed — they
          mean the team is being careful.
        </p>

        <p>
          You don’t need to understand everything at once. Merlin is here to help
          you take this one step at a time.
        </p>
      </section>

      {/* ✅ Navigation (bottom) */}
      <nav className="mt-12 space-y-3">
        <p className="text-sm text-gray-600">Where you can go next:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link
            href="/learn"
            style={{ textDecoration: "underline", fontSize: 16 }}
          >
            Back to Learn home
          </Link>

          <Link
            href="/learn/tests-this-week"
            style={{ textDecoration: "underline", fontSize: 16 }}
          >
            Tests you may see this week
          </Link>

          <Link
            href="/learn/your-care-team"
            style={{ textDecoration: "underline", fontSize: 16 }}
          >
            Who’s who on your care team
          </Link>
        </div>
      </nav>
    </main>
  );
}