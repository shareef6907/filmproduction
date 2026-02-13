import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Healthcare & Medical Video Production Bahrain | Hospital Videos',
  description: 'Professional healthcare and medical video production in Bahrain. Hospital promotional videos, patient education, doctor profiles, medical procedure videos, and healthcare marketing content.',
  keywords: ['healthcare video production bahrain', 'medical video bahrain', 'hospital video bahrain', 'doctor video bahrain', 'patient education video bahrain'],
  openGraph: {
    title: 'Healthcare & Medical Video Production Bahrain | Film Production Bahrain',
    description: 'Professional healthcare and medical video production in Bahrain. Hospital and clinic videos.',
    url: 'https://www.filmproductionbahrain.com/healthcare-medical-video',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/healthcare-medical-video',
  },
}

const faqs = [
  {
    question: 'What types of healthcare videos do you produce?',
    answer: 'We produce hospital and clinic promotional videos, patient education content, doctor and specialist profile videos, medical procedure explanations, facility tours, testimonial videos, and healthcare marketing content for hospitals, clinics, and medical practices.',
  },
  {
    question: 'Do you understand medical privacy requirements?',
    answer: 'Yes, we are experienced in healthcare video production and understand patient privacy requirements. We obtain proper consents, avoid filming identifiable patients without permission, and follow healthcare facility protocols.',
  },
  {
    question: 'How much does healthcare video production cost?',
    answer: 'Doctor profile videos start at BD 300-500. Patient education videos range from BD 500-1,500. Hospital promotional videos cost BD 2,000-8,000 depending on scope. We provide detailed quotes based on your specific requirements.',
  },
  {
    question: 'Can you film in operating rooms and clinical areas?',
    answer: 'Yes, with proper authorization. Our crew follows all infection control and access protocols. We\'ve filmed in operating rooms, ICUs, labor and delivery, and other sensitive clinical environments.',
  },
  {
    question: 'Do you provide Arabic and English versions?',
    answer: 'Yes, we produce healthcare videos in Arabic, English, or both. We can provide subtitles or separate audio tracks for multilingual content. Our team includes Arabic-speaking members who ensure culturally appropriate content.',
  },
]

const crossLinks = [
  {
    text: 'Need a website for your medical practice?',
    url: 'https://cinematicwebworks.com/healthcare-website-design',
    label: 'Healthcare Website Design',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare & Medical Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional healthcare and medical video production services in Bahrain for hospitals, clinics, and medical practices.',
}

export default function HealthcareMedicalVideo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        title="Healthcare & Medical Video Production Bahrain"
        subtitle="Communicate Care"
        heroDescription="Professional healthcare videos that build patient trust, explain medical services, and showcase your commitment to quality care."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Video Marketing for Healthcare</h2>
        <p>
          Healthcare decisions are personal and trust-driven. Patients choose providers they feel 
          confident in. Video is the most effective way to build that confidence—introducing your 
          doctors, showcasing your facilities, and explaining your services in a way that reduces 
          anxiety and builds trust.
        </p>
        <p>
          At Film Production Bahrain, we specialize in healthcare video production that meets the 
          unique needs of hospitals, clinics, and medical practices. We understand medical environments, 
          privacy requirements, and the sensitivity needed when communicating about health.
        </p>

        <h2>Our Healthcare Video Services</h2>
        
        <h3>Hospital and Clinic Promotional Videos</h3>
        <p>
          Showcase your healthcare facility with professional promotional videos that highlight your 
          services, technology, and patient care philosophy. These videos work on your website, social 
          media, and in waiting areas to reinforce your brand and reassure patients.
        </p>

        <h3>Doctor and Specialist Profiles</h3>
        <p>
          Introduce your physicians with professional profile videos. Patients want to know their 
          doctors before their appointment. Profile videos humanize your medical team, build rapport, 
          and help patients feel comfortable choosing your practice.
        </p>

        <h3>Patient Education Videos</h3>
        <p>
          Help patients understand conditions, treatments, and procedures with clear educational videos. 
          Patient education videos improve treatment compliance, reduce anxiety, and demonstrate your 
          commitment to informed patient care. They're also valuable content for your website.
        </p>

        <h3>Medical Procedure Explanations</h3>
        <p>
          Explain what patients can expect from procedures and treatments. These videos reduce fear of 
          the unknown, answer common questions, and free up clinical staff time. We use animation and 
          graphics when appropriate for clarity.
        </p>

        <h3>Facility Virtual Tours</h3>
        <p>
          Let patients explore your facility before their visit. Virtual tours reduce new-patient anxiety 
          by showing them exactly what to expect. They're also valuable for international medical tourism 
          marketing.
        </p>

        <h3>Patient Testimonials</h3>
        <p>
          Nothing builds trust like hearing from satisfied patients. We produce professional testimonial 
          videos that share patient stories while maintaining privacy and dignity. Patient testimonials 
          are powerful marketing tools for elective and specialty services.
        </p>

        <h2>Healthcare Sectors We Serve</h2>
        <ul>
          <li>Hospitals and medical centers</li>
          <li>Private clinics and practices</li>
          <li>Dental clinics</li>
          <li>Dermatology and cosmetic clinics</li>
          <li>IVF and fertility centers</li>
          <li>Orthopedic and sports medicine</li>
          <li>Mental health and wellness</li>
          <li>Pharmaceutical companies</li>
          <li>Medical device companies</li>
          <li>Health insurance providers</li>
        </ul>

        <h2>Our Healthcare Production Approach</h2>
        
        <h3>Understanding Your Environment</h3>
        <p>
          We're experienced in healthcare settings and understand the protocols, sensitivities, and 
          logistics involved. We work around clinical schedules, respect sterile environments, and 
          maintain professionalism expected in medical facilities.
        </p>

        <h3>Patient Privacy First</h3>
        <p>
          We follow strict protocols regarding patient privacy. We obtain proper consents, avoid 
          capturing identifiable patients without permission, and ensure all content complies with 
          privacy regulations.
        </p>

        <h3>Medical Accuracy</h3>
        <p>
          We work closely with your medical team to ensure accuracy in educational and procedural 
          content. Scripts are reviewed by appropriate clinical staff before production.
        </p>

        <h3>Sensitive Communication</h3>
        <p>
          Healthcare content requires empathy and sensitivity. Our approach balances professionalism 
          with warmth, ensuring videos feel caring rather than clinical.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          We combine professional video production with healthcare industry experience. Our team 
          knows how to navigate medical environments while creating compelling content that builds 
          patient trust. As part of the Cinematic Group, we can also help with healthcare websites 
          to host your video content effectively.
        </p>
      </ServicePageLayout>
    </>
  )
}
