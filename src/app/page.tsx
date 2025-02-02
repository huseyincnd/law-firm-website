import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import SuccessStories from '@/components/home/success-stories';
import Testimonials from '@/components/home/testimonials';
import ContactForm from '@/components/home/contact-form';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SuccessStories />
      <Testimonials />
      <ContactForm />
    </>
  );
}
