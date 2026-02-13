import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Restaurant Video Production Bahrain | Food Cinematography & Promos',
  description: 'Professional restaurant video production in Bahrain. Mouthwatering food cinematography, restaurant promos, menu videos, and social media content that drive bookings.',
  keywords: ['restaurant video bahrain', 'food video production bahrain', 'food cinematography bahrain', 'restaurant promo video bahrain', 'menu video bahrain'],
  openGraph: {
    title: 'Restaurant Video Production Bahrain | Film Production Bahrain',
    description: 'Professional restaurant video production in Bahrain. Food cinematography and promo videos that drive bookings.',
    url: 'https://www.filmproductionbahrain.com/food-and-restaurant-video',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/food-and-restaurant-video',
  },
}

const faqs = [
  {
    question: 'How much does restaurant video production cost?',
    answer: 'Restaurant video packages start from BD 300 for social media content packages and scale to BD 2,000+ for comprehensive promotional videos. We offer packages designed for different marketing needs and budgets.',
  },
  {
    question: 'Do you shoot during operating hours?',
    answer: 'We prefer to film during closed hours for controlled lighting and uninterrupted setups. However, we can capture ambiance and guest experience shots during service. We work with your schedule to minimize disruption.',
  },
  {
    question: 'How do you make food look so appetizing on camera?',
    answer: 'We use specialized food cinematography techniques including careful lighting, steam effects, close-up macro shots, and color grading designed for food. Our team knows how to make every dish look as delicious as it tastes.',
  },
  {
    question: 'Can you create content for social media platforms?',
    answer: 'Yes, we create platform-specific content optimized for Instagram, TikTok, Facebook, and YouTube. This includes vertical formats, short clips, and trending-style content that performs well on social algorithms.',
  },
  {
    question: 'Do you work with the kitchen team?',
    answer: 'Yes, we coordinate closely with your chefs to capture dishes at their peak. We discuss plating, timing, and any special preparation needed for filming. Our goal is to authentically represent your culinary quality.',
  },
]

const crossLinks = [
  {
    text: 'List your venue on Bahrain\'s dining guide',
    url: 'https://bahrainnights.com',
    label: 'BahrainNights.com',
  },
  {
    text: 'Need a restaurant website with video?',
    url: 'https://cinematicwebworks.com',
    label: 'CinematicWebWorks.com',
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
  name: 'Restaurant Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional restaurant video production and food cinematography services in Bahrain.',
}

export default function FoodAndRestaurantVideo() {
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
        title="Restaurant Video Production Bahrain"
        subtitle="Food Cinematography"
        heroDescription="Make your guests hungry before they even arrive. Professional food and restaurant videos that showcase your culinary excellence and drive reservations."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Video Content That Drives Bookings</h2>
        <p>
          In Bahrain's thriving dining scene, standing out requires more than great food—you 
          need visual content that makes people crave your dishes. At Film Production Bahrain, 
          we specialize in food cinematography and restaurant video production that captures 
          the sensory experience of dining at your establishment.
        </p>
        <p>
          From fine dining restaurants to casual cafes, from hotel restaurants to cloud 
          kitchens, we create video content that showcases your culinary artistry, unique 
          ambiance, and dining experience in the most appetizing way possible.
        </p>

        <h2>Our Restaurant Video Services</h2>
        
        <h3>Restaurant Promotional Videos</h3>
        <p>
          A well-crafted promo video introduces your restaurant to potential guests in the 
          most compelling way. We capture the ambiance, the dining experience, the kitchen 
          action, and of course, the star—your food. These videos work beautifully on your 
          website, social media, and advertising campaigns.
        </p>

        <h3>Food Cinematography</h3>
        <p>
          Our food cinematography goes beyond simple documentation. We use specialized 
          techniques to make every dish look irresistible: careful lighting that brings 
          out textures and colors, close-up shots that reveal details, and motion that 
          adds life—steam rising, sauces dripping, fresh ingredients falling. Every frame 
          is designed to trigger appetite.
        </p>

        <h3>Menu Video Content</h3>
        <p>
          Showcase your signature dishes with individual menu item videos. These short clips 
          are perfect for social media, digital menu boards, and delivery app listings. 
          Video menu content increases order values and helps guests choose dishes they'll love.
        </p>

        <h3>Chef and Kitchen Content</h3>
        <p>
          Take viewers behind the scenes with content featuring your chefs at work. Kitchen 
          action footage, chef interviews, and technique demonstrations add authenticity to 
          your brand and build connection with food-passionate guests. This content performs 
          exceptionally well on social media.
        </p>

        <h3>Social Media Content Packages</h3>
        <p>
          Maintain an active social presence with a library of video content. We create 
          packages of short-form videos optimized for Instagram, TikTok, and Facebook—
          including Reels-style content, stories, and feed posts. Regular posting keeps 
          your restaurant top-of-mind with followers.
        </p>

        <h2>What Makes Food Video Different</h2>
        <p>
          Food video is a specialized discipline that requires specific skills and equipment:
        </p>
        <ul>
          <li><strong>Lighting:</strong> We use soft, controlled lighting that enhances food 
          appearance without creating harsh shadows or blown-out highlights.</li>
          <li><strong>Macro Lenses:</strong> Close-up shots reveal textures, garnishes, and 
          details that make food look extraordinary.</li>
          <li><strong>Motion:</strong> Slow-motion pours, slides, and action shots add 
          cinematic quality that static photography cannot achieve.</li>
          <li><strong>Color Grading:</strong> Our food-specific color grades enhance appetite 
          appeal while maintaining natural, authentic appearance.</li>
          <li><strong>Timing:</strong> Food looks best immediately after preparation. We work 
          efficiently to capture dishes at their peak.</li>
        </ul>

        <h2>Content for Every Platform</h2>
        <p>
          Different platforms require different approaches:
        </p>
        <ul>
          <li><strong>Instagram Feed:</strong> Square and vertical videos with high production 
          value and eye-catching openings.</li>
          <li><strong>Instagram/Facebook Stories:</strong> Quick, authentic content that feels 
          spontaneous and engaging.</li>
          <li><strong>TikTok:</strong> Trending formats, behind-the-scenes content, and 
          satisfying food videos that encourage shares.</li>
          <li><strong>YouTube:</strong> Longer-form content including restaurant tours, chef 
          features, and recipe content.</li>
          <li><strong>Google Business:</strong> Professional overview videos that appear in 
          search results and Maps listings.</li>
        </ul>

        <h2>Working with Your Team</h2>
        <p>
          We coordinate closely with your kitchen and front-of-house teams to ensure smooth 
          production. We understand restaurant operations and work to minimize disruption. 
          Our team arrives prepared, works efficiently, and respects your space and staff.
        </p>
        <p>
          For best results, we recommend filming during closed hours when we can control 
          lighting and set up shots without time pressure. We coordinate with your chef to 
          prepare dishes specifically for filming, ensuring every plate looks perfect.
        </p>

        <h2>Venues We've Worked With</h2>
        <p>
          We've produced content for restaurants across Bahrain, from Michelin-starred fine 
          dining to beloved local spots. Our portfolio includes:
        </p>
        <ul>
          <li>Fine dining restaurants</li>
          <li>Hotel restaurants and bars</li>
          <li>Casual dining and cafes</li>
          <li>Fast casual and QSR chains</li>
          <li>Cloud kitchens and delivery brands</li>
          <li>Catering companies</li>
        </ul>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Food video is where technical skill meets culinary appreciation. Our team includes 
          food lovers who understand what makes dishes visually appealing. We bring the same 
          passion for visual storytelling that we apply to all our work, with specialized 
          techniques for the unique demands of food content. Contact us to discuss your 
          restaurant's video needs.
        </p>
      </ServicePageLayout>
    </>
  )
}
