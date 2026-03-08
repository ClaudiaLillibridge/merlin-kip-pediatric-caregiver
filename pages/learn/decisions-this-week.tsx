import Link from "next/link";

export default function DecisionsThisWeek() {
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
        Decisions you may hear about
      </h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          In the first week after a diagnosis, it can feel like decisions are
          happening quickly. You may hear new options, new terms, and new steps
          all in the same day. If you feel pressure or worry you’ll “choose the
          wrong thing,” you are not alone.
        </p>

        <p>
          A helpful way to think about this week is: many early “decisions” are
          really about gathering information and keeping your child safe while
          the team builds the clearest plan.
        </p>

        <h2 className="text-2xl font-semibold pt-4">
          Decisions that often come up early
        </h2>

        <p>
          Depending on your child’s situation, you may hear about:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>More testing</strong> (what tests are needed, and when)
          </li>
          <li>
            <strong>Where care happens</strong> (inpatient vs. outpatient, and why)
          </li>
          <li>
            <strong>Procedures</strong> (for example, a biopsy or placing a line/port)
          </li>
          <li>
            <strong>Supportive care</strong> (pain, nausea, sleep, nutrition support)
          </li>
          <li>
            <strong>Fertility preservation discussions</strong> (when applicable)
          </li>
          <li>
            <strong>Starting treatment</strong> (timing and “what comes first”)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">
          What is usually <em>not</em> decided immediately
        </h2>

        <p>
          Some questions understandably feel urgent (like long-term outcomes or
          exact timelines). Often, the team cannot answer those with confidence
          until test results return and the diagnosis details are confirmed.
        </p>

        <p>
          It’s okay to say: <em>“We can’t take in everything today. What are the
          decisions that must happen now, and what can wait?”</em>
        </p>

        <h2 className="text-2xl font-semibold pt-4">
          Two questions that reduce overwhelm
        </h2>

        <p>
          When you’re unsure why a decision is being discussed, these questions
          can help:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <em>“What is this decision trying to accomplish?”</em>
          </li>
          <li>
            <em>“What happens if we wait until tomorrow?”</em>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">
          Consent should feel like understanding
        </h2>

        <p>
          You may be asked to sign consent forms. Consent does not mean you have
          to understand every medical detail. It means you understand:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>What the team recommends (in plain language)</li>
          <li>Why they recommend it</li>
          <li>What risks they are watching for</li>
          <li>What questions you still have</li>
        </ul>

        <p>
          If you feel rushed, it is okay to ask for a pause. You can say:
          <em> “Can you explain that one more time in simpler words?”</em>
        </p>

        <h2 className="text-2xl font-semibold pt-4">
          A gentle reminder
        </h2>

        <p>
          You don’t have to hold all the information in your head. Many caregivers
          use a short running list of questions. If you want, Merlin can help you
          track questions so you don’t have to rely on memory alone.
        </p>
      </section>

      {/* ✅ Navigation (bottom) */}
      <nav className="mt-12 space-y-3">
        <p className="text-sm text-gray-600">Where you can go next:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link
            href="/learn"
            style={{ textDecoration: "underline", color: "#7dd3fc" }}
          >
            Back to Learn home
          </Link>

          <Link
            href="/learn/tests-this-week"
            style={{ textDecoration: "underline", color: "#7dd3fc" }}
          >
            Tests you may see this week
          </Link>

          <Link
            href="/learn/your-care-team"
            style={{ textDecoration: "underline", color: "#7dd3fc" }}
          >
            Who’s who on your care team
          </Link>

          <Link
            href="/learn/emotions-this-week"
            style={{ textDecoration: "underline", color: "#7dd3fc" }}
          >
            Emotional reactions are normal
          </Link>
        </div>
      </nav>
    </main>
  );
}