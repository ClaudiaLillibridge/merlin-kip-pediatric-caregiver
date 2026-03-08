import Link from "next/link";

export default function EmotionsThisWeek() {
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

      <h1 className="text-3xl font-semibold mb-2">Emotional reactions are normal</h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          The first week after a diagnosis can feel like too much—too many new
          words, too many decisions, too many “unknowns.” If your emotions feel
          intense or change quickly, you are not alone. Many caregivers describe
          this week as one of the hardest parts of the journey.
        </p>

        <p>
          There is no “right” way to feel. Some people cry. Some people feel numb.
          Some feel calm one moment and terrified the next. All of those reactions
          can be normal responses to stress.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Common feelings this week</h2>

        <p>You may notice feelings like:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Shock</strong> — “Is this really happening?”
          </li>
          <li>
            <strong>Numbness</strong> — feeling detached or “on autopilot”
          </li>
          <li>
            <strong>Fear</strong> — about the future or the next phone call
          </li>
          <li>
            <strong>Guilt</strong> — wondering if you missed something
          </li>
          <li>
            <strong>Anger</strong> — at the situation, the timing, or the unfairness
          </li>
          <li>
            <strong>Overwhelm</strong> — difficulty thinking clearly or remembering details
          </li>
        </ul>

        <p>
          These emotions don’t mean you are doing something wrong. They often mean
          your brain is trying to protect you while you take in new information.
        </p>

        <h2 className="text-2xl font-semibold pt-4">When your brain feels “foggy”</h2>

        <p>
          Under stress, it’s common to have trouble concentrating, remembering
          names, or processing explanations—even if you normally handle complex
          information well.
        </p>

        <p>If you notice that “foggy” feeling, a gentle approach can help:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Ask for information in smaller pieces.</li>
          <li>Write down questions as they come up.</li>
          <li>Repeat back what you heard: “So the next step is…”</li>
          <li>Bring one trusted person into conversations if you can.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">A simple grounding moment</h2>

        <p>If everything feels like it is spinning, try this quick reset:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Put one hand on your chest or stomach.</li>
          <li>Take one slow breath in… and a longer breath out.</li>
          <li>
            Say (silently or out loud): <em>“Right now, we are safe enough.”</em>
          </li>
          <li>
            Then ask: <em>“What is the next small step?”</em>
          </li>
        </ul>

        <p>
          You don’t have to solve everything today. This is about getting through
          one step at a time.
        </p>

        <h2 className="text-2xl font-semibold pt-4">When to reach out for extra support</h2>

        <p>
          It can help to tell your team if you’re not sleeping, not eating, or
          feeling like you can’t cope. Support is part of care, not an “extra.”
          Social work, psychology, and child life are there for a reason.
        </p>

        <p>
          If you ever feel like you might harm yourself or you are in crisis, seek
          urgent help immediately (call 988 in the U.S. or your local emergency
          number).
        </p>
      </section>

      {/* ✅ Navigation (bottom) */}
      <nav className="mt-12 space-y-3">
        <p className="text-sm text-gray-600">Where you can go next:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/learn" style={{ textDecoration: "underline" }}>
            Back to Learn home
          </Link>

          <Link href="/learn/what-diagnosis-means" style={{ textDecoration: "underline" }}>
            What the diagnosis means (in plain English)
          </Link>

          <Link href="/learn/tests-this-week" style={{ textDecoration: "underline" }}>
            Tests you may see this week
          </Link>

          <Link href="/learn/your-care-team" style={{ textDecoration: "underline" }}>
            Who’s who on your care team
          </Link>
        </div>
      </nav>
    </main>
  );
}