import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
    return (
    <MainLayout>
      <section className="max-w-3xl mx-auto px-4 py-24">
        <p className="text-violet-400 uppercase tracking-[0.3em]">
          Contact
        </p>

        <h1 className="text-6xl font-bold text-white mt-4">
          Get in touch
        </h1>

        <div className="mt-10 space-y-6 text-white">
          <Input placeholder="Your name" />

          <Input placeholder="Your email" />

          <textarea
            placeholder="Your message"
            className="
              w-full
              min-h-[180px]
              rounded-xl
              border
              border-white/10
              bg-black/30
              p-4
              text-white
            "
          />

          <Button>
            Send Message
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}