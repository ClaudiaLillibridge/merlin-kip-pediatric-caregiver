import DiagnosisTemplateComponent from "../../components/learn/DiagnosisTemplate";
export type { DiagnosisTemplateProps } from "../../components/learn/DiagnosisTemplate";

/**
 * Named export used by all diagnosis pages:
 *   import { DiagnosisTemplate } from "./_diagnosis-template";
 */
export const DiagnosisTemplate = DiagnosisTemplateComponent;

/**
 * Default export required because this file lives under /pages.
 * We return null so this route doesn't try to render any data during build.
 */
export default function DiagnosisTemplateRoute() {
  return null;
}