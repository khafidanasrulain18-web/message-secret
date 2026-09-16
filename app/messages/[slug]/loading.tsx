export default function Loading() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto h-40 w-full max-w-sm animate-pulse rounded-md bg-night-50/60" />
        <div className="mx-auto mt-8 h-5 w-52 skeleton" />
        <div className="mx-auto mt-4 h-8 w-64 skeleton rounded-2xl" />
        <div className="mx-auto mt-8 h-12 w-full skeleton" />
        <p className="mt-6 font-hand text-lg text-gold-500/80">
          sebentar ya…
        </p>
      </div>
    </main>
  );
}