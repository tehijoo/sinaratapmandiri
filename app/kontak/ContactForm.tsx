"use client";

import { Send } from "lucide-react";
import { services } from "@/lib/services";
import { site, waLink } from "@/lib/site";

const field =
  "w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:bg-paper";

export default function ContactForm() {
  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    // Baris untuk isian opsional hanya ditulis kalau diisi.
    const optional = (label: string, name: string) => (value(name) ? [`${label}: ${value(name)}`] : []);

    const lines = [
      `Halo ${site.name}, saya ingin konsultasi kanopi membrane.`,
      "",
      `Nama: ${value("nama")}`,
      `No. HP: ${value("telepon")}`,
      ...optional("Lokasi proyek", "lokasi"),
      `Kebutuhan: ${value("kebutuhan")}`,
      ...optional("Pesan", "pesan"),
    ];

    // waLink meng-encode teksnya, jadi isian seperti "&" atau "#" tidak
    // memotong pesan.
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Nama *</span>
          <input name="nama" required autoComplete="name" placeholder="Nama Anda" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">No. HP / WhatsApp *</span>
          <input
            name="telepon"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="0812xxxxxxxx"
            className={field}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Lokasi proyek</span>
          <input name="lokasi" autoComplete="address-level2" placeholder="Contoh: Bekasi" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Kebutuhan *</span>
          <select name="kebutuhan" required defaultValue="" className={field}>
            <option value="" disabled>
              Pilih jenis kebutuhan
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Lainnya">Lainnya</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-ink">Pesan</span>
        <textarea
          name="pesan"
          rows={5}
          placeholder="Ceritakan perkiraan ukuran, fungsi area, atau pertanyaan Anda."
          className={`${field} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Pesan akan dibuka di WhatsApp. Anda bisa melampirkan foto lokasi di sana.</p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
        >
          <Send size={16} />
          Kirim via WhatsApp
        </button>
      </div>
    </form>
  );
}
