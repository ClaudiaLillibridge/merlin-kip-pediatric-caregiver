"use client";

import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { useSpecialty } from "../context/SpecialtyContext";

export default function LearnPage() {
  const { specialty, setSpecialty } = useSpecialty();

  return (
    <PageLayout title="Learn">
      {/* Specialty Toggle */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <button
          onClick={() => setSpecialty("oncology")}
          style={{
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.3)",
            background: specialty === "oncology" ? "#1e40af" : "transparent",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Oncology
        </button>

        <button
          onClick={() => setSpecialty("neurology")}
          style={{
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.3)",
            background: specialty === "neurology" ? "#1e40af" : "transparent",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Neurology
        </button>
      </div>

      {/* Context Banner */}
      <div
        style={{
          padding: 16,
          borderRadius: 14,
          background: "rgba(255,255,255,0.05)",
          marginBottom: 20,
        }}
      >
        <strong>Current focus:</strong>{" "}
        {specialty === "oncology"
          ? "Pediatric Oncology"
          : "Pediatric Neurology"}
      </div>

      {/* Oncology Content */}
      {specialty === "oncology" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          <div className="card">
            <h3>Browse by Diagnosis (A–Z)</h3>
            <p>Explore pediatric cancer diagnoses.</p>
            <a href="/learn/diagnoses">Open library →</a>
          </div>

          <div className="card">
            <h3>What to expect this week</h3>
            <ul>
              <li>What to monitor at home</li>
              <li>Medication reminders</li>
              <li>When to call your care team</li>
            </ul>
            <a href="/learn/what-diagnosis-means">Learn more →</a>
          </div>

          <div className="card">
            <h3>Common terms</h3>
            <ul>
              <li>Port</li>
              <li>CBC</li>
              <li>ANC</li>
              <li>Neutropenia</li>
            </ul>
            <a href="/glossary">Open glossary →</a>
          </div>
        </div>
      )}

      {/* Neurology Content */}
      {specialty === "neurology" && (
        <div style={{ padding: 20 }}>
          <h3>Pediatric Neurology Learn Library</h3>
          <ul>
            <li>
              <a href="/learn/pediatric-neurology-basics">
                Pediatric Neurology Basics →
              </a>
            </li>
            <li>
              <a href="/learn/understanding-neurologic-conditions">
                Understanding neurologic conditions →
              </a>
            </li>
            <li>
              <a href="/learn/tests-and-monitoring">
                Tests and monitoring →
              </a>
            </li>
            <li>
              <a href="/learn/tracking-symptoms-and-seizures">
                Tracking symptoms and seizures →
              </a>
            </li>
            <li>
              <a href="/learn/when-to-call-neurology">
                When to call neurology →
              </a>
            </li>
          </ul>
        </div>
      )}
    </PageLayout>
  );
}