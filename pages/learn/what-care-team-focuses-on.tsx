import Link from "next/link";

export default function WhatCareTeamFocusesOn() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div style={{ marginBottom: 16 }}>
        <Link href="/learn" style={{ color: "#E5F0FF", textDecoration: "underline", fontSize: 14 }}>
          ← Back to Learn
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-2">
        What the care team may focus on this week
      </h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          During active treatment, your care team is constantly balancing
          effectiveness and safety. Even when things feel routine, the team is
          watching closely.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Blood counts and lab trends</li>
          <li>How treatment is being tolerated</li>
          <li>Signs of infection or dehydration</li>
          <li>Pain, nausea, sleep, and energy levels</li>
          <li>How your child is functioning day to day</li>
        </ul>

        <p>
          You may notice the team asking similar questions each visit. This
          repetition helps them spot small changes early.
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