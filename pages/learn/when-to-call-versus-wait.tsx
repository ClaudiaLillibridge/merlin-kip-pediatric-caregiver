import Link from "next/link";

export default function WhenToCallVersusWait() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div style={{ marginBottom: 16 }}>
        <Link href="/learn" style={{ color: "#E5F0FF", textDecoration: "underline", fontSize: 14 }}>
          ← Back to Learn
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-2">
        When to call versus when to wait
      </h1>

      <p className="text-sm text-gray-500 mb-8">About a 2-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Many caregivers worry about calling too often—or not soon enough. Your
          care team would rather hear from you early than miss something
          important.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Call your care team if you notice:</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Fever or chills</li>
          <li>Breathing changes</li>
          <li>Uncontrolled pain or vomiting</li>
          <li>Bleeding or unusual bruising</li>
          <li>Something that just feels “not right”</li>
        </ul>

        <p>
          If a symptom is mild, improving, and expected, it may be okay to watch
          it—but trust your instincts.
        </p>
      </section>

      <nav className="mt-12 space-y-3">
        <Link href="/learn/in-active-treatment" style={{ textDecoration: "underline" }}>
          Back to In Active Treatment
        </Link>
      </nav>
    </main>
  );
}