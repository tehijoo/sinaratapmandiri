import type { CSSProperties } from "react";
import { Sun } from "lucide-react";

const uses = [
  "Carport",
  "Teras Rumah",
  "Masjid",
  "Sekolah",
  "Taman Kota",
  "Area Parkir",
  "Food Court",
  "Gedung Pemerintahan",
  "Rest Area",
  "Lapangan Olahraga",
  "Drop-off Gedung",
  "Kolam Renang",
];

export default function ApplicationStrip() {
  return (
    <section aria-label="Contoh penerapan kanopi membrane" className="border-y border-line/80 py-5">
      <div
        className="marquee"
        style={{ "--marquee-duration": "50s", "--marquee-gap": "2.75rem" } as CSSProperties}
      >
        <div className="marquee-track">
          {[0, 1].map((run) => (
            <ul key={run} className="marquee-run" aria-hidden={run === 1}>
              {uses.map((use) => (
                <li key={use} className="flex items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold text-ink-soft/70">
                  <Sun size={16} className="text-sun" aria-hidden />
                  {use}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
