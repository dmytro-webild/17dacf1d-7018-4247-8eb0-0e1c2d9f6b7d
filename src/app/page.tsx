"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Dr Anshu Dental"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "plain" }}
      title="Restore Your Smile With Confidence & Care"
      description="Dr Anshu Family Dental Care brings 20 years of expertise to comprehensive dental solutions—from routine cleanings to advanced implants. Trusted by 232 families in Pune for genuine, compassionate treatment."
      imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-running-holding-bottle-with-water_23-2148138021.jpg"
      imageAlt="Happy patient smiling"
      mediaAnimation="opacity"
      buttons={[
        { text: "Book Your Consultation Today", href: "#contact" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Two Decades of Dental Excellence"
      description={[
        "With over 20 years of experience, Dr. Anshu specializes in providing comprehensive care that blends modern technology with traditional compassion.",        "Our clinic in Pune is equipped with the latest diagnostic and treatment tools to ensure precision, comfort, and safety for every family member."
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          tag: "Advanced",          title: "Dental Implants",          subtitle: "Lasting solutions",          description: "Precision implant dentistry for natural-looking, comfortable, and durable smile restoration.",          imageSrc: "http://img.b2bpic.net/free-photo/dental-model-premolar-tooth-3d-rendering_460848-7429.jpg",          imageAlt: "Dental Implants"
        },
        {
          tag: "Hygiene",          title: "Root Canal Therapy",          subtitle: "Expert care",          description: "Gentle and pain-free endodontic procedures to save your natural teeth.",          imageSrc: "http://img.b2bpic.net/free-photo/toothbrush-composition_23-2147817631.jpg",          imageAlt: "Root Canal"
        },
        {
          tag: "Family",          title: "Routine Care",          subtitle: "Prevention first",          description: "Regular checkups, cleanings, and oral health guidance for all ages.",          imageSrc: "http://img.b2bpic.net/free-photo/female-dentist-examining-teeth-patient-clinic_23-2147906011.jpg",          imageAlt: "Routine Dentistry"
        },
      ]}
      title="Our Specialized Dental Services"
      description="From routine family cleanings to complex implant reconstructions, we offer full-spectrum care."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "20+", title: "Years Experience", description: "Delivering care with proven expertise.", imageSrc: "http://img.b2bpic.net/free-vector/flat-21-anniversary-badge-collection_23-2148888398.jpg" },
        { id: "2", value: "232+", title: "Families Served", description: "Building lasting relationships.", imageSrc: "http://img.b2bpic.net/free-vector/speech-bubbles-with-smiley-faces_23-2147512509.jpg" },
        { id: "3", value: "1000+", title: "Successful Procedures", description: "Restoring smiles precisely.", imageSrc: "http://img.b2bpic.net/free-vector/tooth-with-check-mark_78370-8952.jpg" },
      ]}
      title="Commitment Through Numbers"
      description="Professional expertise backed by years of service to the community."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", handle: "@patient", testimonial: "Dr. Anshu is extremely professional and gentle. My dental anxiety is completely gone.", imageSrc: "http://img.b2bpic.net/free-photo/career-success-office-concert-senior_1262-2793.jpg" },
        { id: "2", name: "Michael K.", handle: "@patient", testimonial: "Best implant experience ever. The recovery was swift and the results are perfect.", imageSrc: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg" },
        { id: "3", name: "Radhika & Rajesh", handle: "@family", testimonial: "Great service for the whole family! Dr. Anshu is our dentist for life.", imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-beach-retirement-summer-vacation-concept_329181-14057.jpg" },
      ]}
      title="What Our Patients Say"
      description="Our focus is always on your comfort, and it shows in our patient feedback."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "How long do dental implants last?", content: "With proper care, dental implants are designed to be a permanent solution." },
        { id: "2", title: "Are root canal treatments painful?", content: "Modern root canal procedures are very comfortable and focus on eliminating existing pain." },
        { id: "3", title: "Do you treat children?", content: "Yes, we provide gentle, friendly dental care for patients of all ages." },
      ]}
      title="Common Dental Questions"
      description="Answers to help you make informed decisions about your oral health."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Booking"
      title="Ready to Restore Your Smile?"
      description="Schedule your consultation with Dr. Anshu today and start your journey towards healthy teeth."
      inputPlaceholder="Enter your email for appointment details"
      buttonText="Book Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Dr Anshu Family Dental Care"
      copyrightText="© 2025 Dr Anshu Family Dental Care & Implant Centre | Pune"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}