/**
 * Semua tipe untuk sistem multi-pesan.
 *
 * Dipisah dari `example.ts` supaya:
 *  1. Komponen bisa import type tanpa harus menyentuh config
 *     spesifik (yang berisi password).
 *  2. Saat bikin pesan baru, cukup copy file config dari template —
 *     tipe-nya sudah tersedia lewat import ini.
 */

export type GateConfig = {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  buttonLabel: string;
  hint?: string;
  successMessage?: string;
};

export type MessageParagraph =
  | { type: "text"; text: string }
  | { type: "highlight"; text: string }
  | { type: "divider" };

export type PhotoItem = {
  src: string;
  caption?: string;
  /** Rotasi polaroid dalam derajat (-4 s/d 4). Opsional. */
  rotate?: number;
};

export type VideoSectionConfig = {
  title: string;
  subtitle?: string;
  src: string;
  poster?: string;
  caption?: string;
};

export type MusicSectionConfig = {
  src: string;
  label?: string;
  /** Volume target setelah fade-in (0–1). Default 0.5. */
  volume?: number;
};

export type MessageContent = {
  greeting: string;
  paragraphs: MessageParagraph[];
  signature: { line: string; name: string };
};

export type MessageConfig = {
  slug: string;
  /** Password diverifikasi 100% di server. Tidak pernah dikirim ke client. */
  password: string;
  recipientName: string;
  gate: GateConfig;
  content: MessageContent;
  photoSection: {
    title: string;
    subtitle: string;
    items: PhotoItem[];
  };
  /** Opsional — kalau tidak diisi, section video tidak dirender. */
  video?: VideoSectionConfig;
  /** Opsional — kalau tidak diisi, tombol musik tidak dirender. */
  music?: MusicSectionConfig;
};