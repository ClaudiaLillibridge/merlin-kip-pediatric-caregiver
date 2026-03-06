import { useCareContext } from "../../context/CareContext";
import type { CareStage } from "../../context/CareContext";

export default function CareStageSelector() {
  const { stage, setStage } = useCareContext();

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>
        What best describes your situation right now?
      </div>

      <select
        value={stage ?? ""}
        onChange={(e) => setStage((e.target.value || null) as CareStage)}
        style={{
          width: "100%",
          maxWidth: 520,
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.25)",

          // ✅ Important fixes
          backgroundColor: "#ffffff",
          color: "#111111",
        }}
      >
        <option value="" style={{ color: "#111111", backgroundColor: "#ffffff" }}>
          Select one (optional)
        </option>

        <option value="newly-diagnosed" style={{ color: "#111111", backgroundColor: "#ffffff" }}>
          Newly diagnosed
        </option>

        <option value="active-treatment" style={{ color: "#111111", backgroundColor: "#ffffff" }}>
          In active treatment
        </option>

        <option value="side-effects" style={{ color: "#111111", backgroundColor: "#ffffff" }}>
          Managing side effects
        </option>

        <option value="discharge" style={{ color: "#111111", backgroundColor: "#ffffff" }}>
          Preparing for discharge
        </option>
      </select>
    </div>
  );
}