import Image from "next/image";
import { images } from "@/content/images";
import { Container } from "@/components/ui";

export default function PhotoBand() {
  const img = images["services-hero"];
  return (
    <section aria-labelledby="band-title" className="relative isolate flex min-h-[32rem] items-end overflow-hidden bg-ink sm:min-h-[40rem]">
      <Image src={img.src} alt="" fill sizes="100vw" placeholder="blur" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(11_15_14/0.1)_0%,rgb(11_15_14/0.5)_40%,rgb(11_15_14/0.85)_68%,rgb(11_15_14/0.94)_100%)]" />
      <Container className="pt-40 pb-14 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="band-title" className="text-h1 font-semibold text-balance text-white lg:col-span-8">
            Strategy, design, engineering and support. One accountable team.
          </h2>
          <p className="text-lead text-on-dark lg:col-span-4">
            No handovers between agencies and contractors. The people who plan your product are the people who build
            and support it.
          </p>
        </div>
      </Container>
    </section>
  );
}
