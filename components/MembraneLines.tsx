type Point = readonly [number, number];

const lerp = (a: Point, b: Point, t: number): Point => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];

/*
 * Pola garis "string art" yang membentuk pelana (hyperbolic paraboloid),
 * bentuk yang dihasilkan membrane ketika ditarik dari empat titik. Dua sisi
 * lurus yang arahnya berlawanan dihubungkan titik demi titik; garis-garis
 * lurus itu dengan sendirinya membentuk lengkungan. Dipakai sebagai latar
 * hero, header halaman, dan kartu, sehingga motif visualnya berasal dari
 * produk itu sendiri.
 */
export default function MembraneLines({
  className = "",
  lines = 36,
  from = [
    [-80, 150],
    [1520, -40],
  ],
  to = [
    [1520, 600],
    [-80, 360],
  ],
  fit = "xMidYMid slice",
}: {
  className?: string;
  lines?: number;
  /** Sisi pertama, digambar dari titik awal ke titik akhir. */
  from?: readonly [Point, Point];
  /** Sisi kedua, dipasangkan berurutan dengan sisi pertama. */
  to?: readonly [Point, Point];
  /** preserveAspectRatio. Pola di pojok perlu menempel ke pojoknya di layar sempit. */
  fit?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 640"
      preserveAspectRatio={fit}
      fill="none"
      aria-hidden
      className={className}
    >
      {Array.from({ length: lines }, (_, i) => {
        const t = i / (lines - 1);
        const [x1, y1] = lerp(from[0], from[1], t);
        const [x2, y2] = lerp(to[0], to[1], t);
        // Memudar di kedua ujung supaya kumpulan garisnya tidak berawal dan
        // berakhir pada satu garis yang tegas.
        const opacity = 0.2 + 0.8 * Math.sin(Math.PI * t);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeOpacity={opacity}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}
