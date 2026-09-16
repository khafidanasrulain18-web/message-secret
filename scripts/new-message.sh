#!/usr/bin/env bash
# scripts/new-message.sh <slug>
#
# Membuat kerangka pesan baru:
#   - lib/messages/<slug>.ts         (dari template)
#   - public/messages/<slug>/{photos,videos,music}/
#   - menambah entry di .env.local.example
#
# Setelah dijalankan, buka lib/messages/index.ts dan ikuti komentar
# "TODO" untuk mengaktifkan pesan baru (2 baris perubahan).

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Pemakaian: bash scripts/new-message.sh <slug>"
  echo "Contoh   : bash scripts/new-message.sh ulang-tahun-ibu"
  exit 1
fi

SLUG="$1"

# Validasi slug: huruf kecil, angka, dan tanda hubung saja
if ! [[ "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "❌ Slug harus huruf kecil, angka, atau tanda hubung."
  echo "   Contoh valid: ulang-tahun-ibu, untuk-sayang, anniv-2026"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

CONFIG_FILE="lib/messages/${SLUG}.ts"
PUBLIC_DIR="public/messages/${SLUG}"
ENV_FILE=".env.local.example"

# Cek tabrakan nama
if [ -f "$CONFIG_FILE" ]; then
  echo "❌ File config sudah ada: $CONFIG_FILE"
  exit 1
fi

if [ -d "$PUBLIC_DIR" ]; then
  echo "❌ Folder aset sudah ada: $PUBLIC_DIR"
  exit 1
fi

echo "🌸 Membuat pesan baru: $SLUG"

# 1. Folder aset
mkdir -p "${PUBLIC_DIR}/photos" "${PUBLIC_DIR}/videos" "${PUBLIC_DIR}/music"
touch "${PUBLIC_DIR}/photos/.gitkeep" "${PUBLIC_DIR}/videos/.gitkeep" "${PUBLIC_DIR}/music/.gitkeep"
echo "  ✓ $PUBLIC_DIR/{photos,videos,music}/"

# 2. Config dari template — ganti placeholder
#    ENV_PART = slug dengan tanda hubung jadi underscore & uppercase
ENV_PART="$(echo "$SLUG" | tr '[:lower:]-' '[:upper:]_')"

sed \
  -e "s/__SLUG__/${SLUG}/g" \
  -e "s/__ENV___/${ENV_PART}/g" \
  "scripts/template.config.ts" > "$CONFIG_FILE"

echo "  ✓ $CONFIG_FILE"

# 3. Tambah variabel password ke .env.local.example (kalau belum ada)
ENV_KEY="MESSAGE_${ENV_PART}_PASSWORD"
if [ -f "$ENV_FILE" ]; then
  if ! grep -q "^${ENV_KEY}=" "$ENV_FILE"; then
    {
      echo ""
      echo "# Password untuk pesan: $SLUG"
      echo "${ENV_KEY}=ganti-password-disini"
    } >> "$ENV_FILE"
    echo "  ✓ $ENV_KEY ditambahkan ke $ENV_FILE"
  else
    echo "  • $ENV_KEY sudah ada di $ENV_FILE"
  fi
else
  echo "  ⚠ $ENV_FILE tidak ditemukan — lewati (buat manual nanti)."
fi

# 4. Petunjuk selanjutnya
cat <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Selesai. Dua langkah terakhir:

  1. Buka lib/messages/index.ts — tambahkan 2 baris:

     import ${SLUG//-/_} from "./${SLUG}";
     // ...
     [${SLUG//-/_}.slug]: ${SLUG//-/_},

  2. Buka .env.local (bukan .env.local.example) dan tambahkan:

     ${ENV_KEY}=password-pilihanmu

  Lalu edit ${CONFIG_FILE} — isi recipientName,
  paragraf surat, dan daftar foto/video/musik.

  Taruh aset di:
    ${PUBLIC_DIR}/photos/
    ${PUBLIC_DIR}/videos/
    ${PUBLIC_DIR}/music/

  Akses di: http://localhost:3000/messages/${SLUG}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EOF