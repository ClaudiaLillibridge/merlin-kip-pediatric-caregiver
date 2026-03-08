import Link from "next/link";

export default function CommonSideEffects() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div style={{ marginBottom: 16 }}>
        <Link href="/learn" style={{ color: "#E5F0FF", textDecoration: "underline", fontSize: 14 }}>
          ← Back to Learn
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-2">
        Common side effects you may notice
      </h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Side effects can change over time. Some are expected and manageable.
          Others may need a call to your team.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Fatigue or low energy</li>
          <li>Nausea, vomiting, or appetite changes</li>
          <li>Changes in mood or sleep</li>
          <li>Constipation or diarrhea</li>
          <li>Skin or mouth changes</li>
        </ul>

        <p>
          Not every side effect means something is wrong—but patterns matter.
          Merlin can help you notice trends over time.
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