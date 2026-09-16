import "server-only";
import lutfiyatul from "./lutfiyatul";
import type { MessageConfig } from "./types";
import untukIbu from "./untuk-ibu";
import untukSahabat from "./untuk-sahabat";
import untukBapa from "./untuk-bapa";
import aji from "./aji";
import ikmal from "./ikmal";
import dinda from "./dinda";
import afnan from "./afnan";


/**
 * ─────────────────────────────────────────────────────────────
 * REGISTRY PESAN
 * ─────────────────────────────────────────────────────────────
 * Setiap pesan baru cukup ditambahkan di sini.
 *
 * Cara cepat: jalankan `bash scripts/new-message.sh <slug>`
 * — script itu akan:
 *   1. Membuat file config `lib/messages/<slug>.ts`
 *   2. Membuat folder aset `public/messages/<slug>/{photos,videos,music}`
 *   3. Menambahkan import + entry di file ini (baris yang perlu kamu
 *      tambahkan akan ditandai komentar TODO).
 *   4. Menambahkan variabel password ke `.env.local.example`.
 *
 * Kalau lebih suka manual: import config-nya di atas, lalu tambahkan
 * ke objek `registry` di bawah.
 */

// TODO: import config baru di sini
// import ulangTahunIbu from "./ulang-tahun-ibu";

const registry: Record<string, MessageConfig> = {
  [lutfiyatul.slug]: lutfiyatul,
  [untukIbu.slug]: untukIbu,
  [untukSahabat.slug]: untukSahabat,
  [untukBapa.slug]: untukBapa,
  [aji.slug]: aji,
  [ikmal.slug]: ikmal,
  [dinda.slug]: dinda,
  [afnan.slug]: afnan,
  // TODO: tambahkan pesan baru di sini
  // [ulangTahunIbu.slug]: ulangTahunIbu,
};

export function getMessage(slug: string): MessageConfig | null {
  const config = registry[slug];
  if (!config) return null;
  // Validasi ringan supaya kesalahan config cepat ketahuan saat dev.
  if (process.env.NODE_ENV !== "production") {
    validateConfig(config);
  }
  return config;
}

export function listMessages(): MessageConfig[] {
  return Object.values(registry);
}

/** Cek konsistensi slug ↔ folder publik & field wajib. */
function validateConfig(config: MessageConfig) {
  const warn = (msg: string) =>
    // eslint-disable-next-line no-console
    console.warn(`[messages] ${config.slug}: ${msg}`);

  if (!config.password) warn("password kosong — pesan ini tidak bisa dibuka.");
  if (!config.recipientName) warn("recipientName kosong.");

  const expectedPrefix = `/messages/${config.slug}/`;
  for (const p of config.photoSection.items) {
    if (!p.src.startsWith(expectedPrefix)) {
      warn(`foto "${p.src}" tidak berada di folder ${expectedPrefix}`);
    }
  }
  if (config.video && !config.video.src.startsWith(expectedPrefix)) {
    warn(`video "${config.video.src}" tidak berada di folder ${expectedPrefix}`);
  }
  if (config.music && !config.music.src.startsWith(expectedPrefix)) {
    warn(`musik "${config.music.src}" tidak berada di folder ${expectedPrefix}`);
  }
}

export type { MessageConfig } from "./types";