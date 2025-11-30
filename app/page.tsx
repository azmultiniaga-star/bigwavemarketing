import { Hero } from "@/components/home/Hero";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Services />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
