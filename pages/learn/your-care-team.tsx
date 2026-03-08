import Link from "next/link";

export default function YourCareTeam() {
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

      <h1 className="text-3xl font-semibold mb-2">Who’s who on your care team</h1>

      <p className="text-sm text-gray-500 mb-8">About a 3-minute read</p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          In the first days after a diagnosis, it can feel like a lot of people
          come in and out of the room—sometimes asking similar questions. This is
          normal. Pediatric cancer care is team-based, which means different
          specialists focus on different parts of care.
        </p>

        <p>
          You don’t have to remember everyone’s name or role right away. This page
          is a simple guide to help you understand who people are and how they
          support your child (and you).
        </p>

        <h2 className="text-2xl font-semibold pt-4">Core medical team</h2>

        <p>
          <strong>Oncologist (Cancer doctor)</strong>
          <br />
          This is the doctor who oversees the big picture: diagnosis details,
          treatment plan, and major decisions. They help explain what the team
          knows, what comes next, and why.
        </p>

        <p>
          <strong>Advanced Practice Provider (APP)</strong> (Nurse Practitioner or
          Physician Assistant)
          <br />
          APPs often spend a lot of time with families. They can explain plans,
          check symptoms, review test results, and help coordinate daily care.
        </p>

        <p>
          <strong>Bedside nurse</strong>
          <br />
          Nurses are with your child the most. They give medications, monitor
          symptoms, and help you understand what’s happening day to day. They’re
          also a great first person to tell if something feels “off.”
        </p>

        <h2 className="text-2xl font-semibold pt-4">Support and whole-family care</h2>

        <p>
          <strong>Social worker</strong>
          <br />
          Social workers help with practical needs and emotional support—things
          like resources, paperwork, coping, school coordination, and helping your
          family navigate a very hard season.
        </p>

        <p>
          <strong>Child Life specialist</strong>
          <br />
          Child Life helps children cope with medical experiences using
          developmentally appropriate explanations, play, and preparation for
          procedures. They also support siblings and caregivers.
        </p>

        <p>
          <strong>Psychology / Behavioral health</strong>
          <br />
          These team members support mental health for patients and families,
          especially around anxiety, sleep, coping, trauma, and stress.
        </p>

        <h2 className="text-2xl font-semibold pt-4">
          Treatment and safety specialists (you may meet)
        </h2>

        <p>
          <strong>Pharmacist</strong>
          <br />
          Pharmacists help ensure medicines are correct and safe together. They
          can explain what medications are for, what side effects to watch for,
          and how schedules work.
        </p>

        <p>
          <strong>Dietitian / Nutrition</strong>
          <br />
          Nutrition can be a big part of treatment. Dietitians help with appetite
          changes, weight concerns, nausea, and finding foods that work during
          therapy.
        </p>

        <p>
          <strong>Physical / Occupational therapy</strong>
          <br />
          These therapists help with strength, movement, energy, and daily
          activities—especially if treatment affects stamina or mobility.
        </p>

        <h2 className="text-2xl font-semibold pt-4">
          A simple question you can always ask
        </h2>

        <p>
          If you’re not sure who someone is, it’s okay to ask:{" "}
          <em>“Can you tell me your role and what you’re helping with today?”</em>
        </p>

        <p>
          And if you’re getting mixed messages or feel overwhelmed, you can ask:{" "}
          <em>“Who is the best point person for questions today?”</em>
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

          <Link href="/learn/emotions-this-week" style={{ textDecoration: "underline" }}>
            Emotional reactions are normal
          </Link>
        </div>
      </nav>
    </main>
  );
}