import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/sections/BookingModal";
import { NoticeToast } from "@/components/sections/NoticeToast";
import { BackToTop } from "@/components/sections/BackToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Pricing />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
      <NoticeToast />
      <BackToTop />
    </>
  );
}
