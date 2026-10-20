import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon digambar dari ikon logo yang sama dengan LogoMark.
// TODO: ganti dengan logo resmi bila sudah ada.
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 40 40">
        <rect width="40" height="40" rx="11" fill="#0f5c53" />
        <circle cx="28.5" cy="11.5" r="4.2" fill="#f5b43a" />
        <path d="M6 25.5C13 15.5 24 14.5 34 21" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M6 31C13 22.5 24 21.5 34 27" stroke="#fff" strokeOpacity="0.5" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    { ...size },
  );
}
