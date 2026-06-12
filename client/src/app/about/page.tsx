import { MainLayout } from "@/components/layout/main-layout";

export default function AboutPage() {
    return (
    <MainLayout>
      <section className="max-w-4xl mx-auto px-4 py-24">
        <p className="text-violet-400 uppercase tracking-[0.3em]">
          About
        </p>

        <h1 className="text-6xl font-bold text-white mt-4">
          About Nova
        </h1>

        <p className="text-white/60 mt-8 text-lg leading-relaxed">
          Nova is a modern marketplace built
          with Next.js, TypeScript, TailwindCSS,
          Zustand and Shadcn UI.
        </p>
      </section>
    </MainLayout>
  );
}