import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessage } from "@/lib/messages";
import MessageGateClient from "@/components/MessageGateClient";
import MessageExperience from "@/components/MessageExperience";
import MessagePage from "@/components/MessagePage";

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const config = getMessage(params.slug);
  if (!config) return { title: "Pesan tidak ditemukan" };
  return {
    title: `Pesan untuk ${config.recipientName} 💌`,
    description: config.gate.subtitle,
    robots: { index: false, follow: false },
    openGraph: {
      title: `Pesan untuk ${config.recipientName} 💌`,
      description: "Ada sesuatu yang ingin disampaikan. Buka tautannya untuk melihat.",
      type: "website",
    },
  };
}

export default function MessagePageRoute({ params }: PageProps) {
  const config = getMessage(params.slug);
  if (!config) notFound();

  // Buang password sebelum config menyentuh komponen client.
  const { password: _pw, ...publicConfig } = config;

  return (
    <MessageGateClient
      slug={config.slug}
      gate={publicConfig.gate}
      unlockedContent={
        <MessageExperience
          slug={config.slug}
          music={
            config.music
              ? {
                  src: config.music.src,
                  label: config.music.label,
                  volume: config.music.volume,
                }
              : undefined
          }
        >
          <MessagePage config={config} />
        </MessageExperience>
      }
    />
  );
}