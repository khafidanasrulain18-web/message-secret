import { NextRequest, NextResponse } from "next/server";
import { getMessage } from "@/lib/messages";

export async function POST(req: NextRequest) {
  let body: { slug?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const { slug, password } = body;
  if (!slug || typeof password !== "string") {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const config = getMessage(slug);
  if (!config) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  // Verifikasi di server — password tidak pernah dikirim ke client.
  if (password.trim().toLowerCase() !== config.password.toLowerCase()) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
  }

  // Tidak ada cookie — status unlock disimpan di sessionStorage oleh client.
  return NextResponse.json({ ok: true });
}