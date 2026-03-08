import Link from "next/link";

export default function TestsThisWeek() {
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

      <h1 className="text-3xl font-semibold mb-2">Tests you may see this week</h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          In the first week after a diagnosis, it can feel like there are a lot
          of tests—sometimes more than you expected. Most of these tests are done
          for one reason: to help the team understand exactly what’s going on so
          they can choose the safest and most effective treatment.
        </p>

        <p>
          You might hear your team call this “workup,” “staging,” or “risk
          stratification.” Those words simply mean: gathering details so the plan
          is personalized for your child.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Common tests you may see</h2>

        <p>
          <strong>Blood tests</strong> are very common early on. They can help the
          team check how the body is functioning and look for clues about what is
          happening. You may see blood drawn more than once—even in the same
          day—because the team is tracking changes and confirming results.
        </p>

        <p>
          <strong>Imaging</strong> helps doctors look inside the body. Depending
          on the situation, this may include X-rays, ultrasound, CT scans, MRI,
          or PET scans. Imaging helps the team understand where the illness is,
          how big it is, and how it might be affecting other parts of the body.
        </p>

        <p>
          <strong>Tissue tests (biopsy)</strong> may be needed to confirm the exact
          type of cancer. A biopsy means a small sample is taken and looked at
          closely in the lab. This can sound scary, but it is one of the most
          important steps for making sure the diagnosis is accurate.
        </p>

        <p>
          <strong>Bone marrow tests</strong> are sometimes done for certain cancers
          to see how the bone marrow is working and whether cancer cells are
          present there. If this is recommended for your child, your team will
          explain what to expect and how they keep your child comfortable.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Why some tests repeat</h2>

        <p>
          It’s normal for families to wonder, “Didn’t we already do this?” Repeat
          tests usually mean one of three things:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The team is confirming an earlier result.</li>
          <li>The team is watching how values change over time.</li>
          <li>A result helps guide a decision about treatment or safety.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">A gentle reminder</h2>

        <p>
          You don’t have to memorize every test name. If you feel overwhelmed,
          it’s okay to ask: <em>“What is this test for?”</em> and{" "}
          <em>“How will this result change the plan?”</em>
        </p>

        <p>
          If you’d like, Merlin can also help you keep a running list of questions
          to ask your care team.
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

          <Link href="/learn/your-care-team" style={{ textDecoration: "underline" }}>
            Who’s who on your care team
          </Link>

          <Link href="/learn/emotions-this-week" style={{ textDecoration: "underline" }}>
            Emotional reactions are normal
          </Link>
        </div>
      </nav>
    </main>
  );
}