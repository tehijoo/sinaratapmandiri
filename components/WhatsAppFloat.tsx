import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Halo PT Sinar Atap Mandiri, saya ingin konsultasi tentang kanopi membrane.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
