import { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Product Video Production Bahrain | Professional Product Videos',
  description: 'Professional product video production in Bahrain. Product demos, unboxing videos, lifestyle shots, 360° videos, and e-commerce content. Showcase your products beautifully.',
  keywords: ['product video production bahrain', 'product demo video bahrain', 'e-commerce video bahrain', 'product photography bahrain', 'amazon video bahrain'],
  openGraph: {
    title: 'Product Video Production Bahrain | Film Production Bahrain',
    description: 'Professional product video production in Bahrain. Product demos, lifestyle videos, and e-commerce content.',
    url: 'https://www.filmproductionbahrain.com/product-video-production',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.filmproductionbahrain.com/product-video-production',
  },
}

const faqs = [
  {
    question: 'What types of product videos do you create?',
    answer: 'We produce product demonstrations, unboxing videos, lifestyle product videos, 360-degree rotating videos, comparison videos, how-to tutorials, and e-commerce listing videos for platforms like Amazon, Noon, and social media.',
  },
  {
    question: 'How much does product video production cost?',
    answer: 'Simple product videos start at BD 200-400. Premium product videos with lifestyle settings, models, and complex shots range from BD 500-1,500. E-commerce video packages for multiple products are available at discounted rates.',
  },
  {
    question: 'Can you produce videos for Amazon and Noon listings?',
    answer: 'Yes, we create product videos optimized for e-commerce platforms including Amazon, Noon, and social media marketplaces. We follow platform-specific requirements for dimensions, duration, and format.',
  },
  {
    question: 'Do you provide product photography as well?',
    answer: 'Yes, we offer combined product photography and video packages. Getting both at once is more cost-effective and ensures consistent visual branding across all your product content.',
  },
  {
    question: 'How long does product video production take?',
    answer: 'Simple product videos can be delivered within 3-5 business days. Complex lifestyle shoots with location and models typically take 1-2 weeks. We offer rush delivery for urgent projects.',
  },
]

const crossLinks = [
  {
    text: 'Need an e-commerce website for your products?',
    url: 'https://cinematicwebworks.com/ecommerce-website-bahrain',
    label: 'E-commerce Web Development',
  },
  {
    text: 'Planning a product launch event?',
    url: 'https://eventsbahrain.com',
    label: 'EventsBahrain.com',
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
  name: 'Product Video Production Bahrain',
  provider: {
    '@type': 'VideoProductionCompany',
    name: 'Film Production Bahrain',
    url: 'https://www.filmproductionbahrain.com',
  },
  areaServed: { '@type': 'Country', name: 'Bahrain' },
  description: 'Professional product video production services in Bahrain for e-commerce, social media, and marketing.',
}

export default function ProductVideoProduction() {
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
        title="Product Video Production Bahrain"
        subtitle="Showcase Your Products"
        heroDescription="Professional product videos that highlight features, demonstrate value, and drive sales across e-commerce platforms and social media."
        faqs={faqs}
        crossLinks={crossLinks}
      >
        <h2>Why Product Video Matters</h2>
        <p>
          In the age of e-commerce, product video has become essential for driving sales. Studies show that 
          product pages with video have up to 80% higher conversion rates. Customers want to see products 
          in action before they buy, and video delivers that experience better than photos alone.
        </p>
        <p>
          At Film Production Bahrain, we specialize in creating professional product videos that showcase 
          your products at their best. Whether you're selling on Amazon, Noon, your own e-commerce site, 
          or social media, we produce content that converts browsers into buyers.
        </p>

        <h2>Our Product Video Services</h2>
        
        <h3>Product Demonstration Videos</h3>
        <p>
          Show your product in action with clear, professional demonstration videos. We highlight key 
          features, show proper usage, and communicate value propositions visually. Demo videos are 
          particularly effective for electronics, tools, appliances, and complex products that benefit 
          from visual explanation.
        </p>

        <h3>Lifestyle Product Videos</h3>
        <p>
          Place your product in real-world contexts that resonate with your target audience. Lifestyle 
          videos show products being used in aspirational settings, creating emotional connections and 
          helping customers envision the product in their own lives. Perfect for fashion, beauty, home 
          goods, and lifestyle brands.
        </p>

        <h3>360° Rotating Videos</h3>
        <p>
          Give customers a complete view of your product with smooth 360-degree rotating videos. These 
          are particularly effective for showcasing design details, craftsmanship, and build quality. 
          Popular for jewelry, watches, shoes, bags, and premium products where aesthetics matter.
        </p>

        <h3>Unboxing Videos</h3>
        <p>
          Capture the excitement of opening your product for the first time. Unboxing videos showcase 
          your packaging, included accessories, and first impressions. They're highly effective for 
          building anticipation and demonstrating the premium experience your brand delivers.
        </p>

        <h3>How-To and Tutorial Videos</h3>
        <p>
          Help customers get the most from their purchase with instructional videos. Tutorial content 
          reduces support inquiries, increases customer satisfaction, and can be repurposed across 
          multiple channels including your website, YouTube, and social media.
        </p>

        <h3>E-Commerce Platform Videos</h3>
        <p>
          We create videos optimized specifically for e-commerce platforms like Amazon and Noon. These 
          videos follow platform guidelines for dimensions, duration, and content while maximizing impact 
          within the constraints. Boost your listing visibility and conversion rates.
        </p>

        <h2>Our Production Process</h2>
        <p>
          Product video production at Film Production Bahrain begins with understanding your product, 
          brand, and target audience. We plan shots that highlight your product's key selling points 
          and differentiate it from competitors.
        </p>
        <p>
          Our studio is equipped with professional lighting, backdrops, and turntables for product shoots. 
          For lifestyle content, we scout locations and coordinate models and styling to create authentic 
          scenes that resonate with your audience.
        </p>
        <p>
          In post-production, we edit footage, add graphics and text overlays, color grade for consistency, 
          and deliver in multiple formats optimized for each platform where you'll use the content.
        </p>

        <h2>Industries We Serve</h2>
        <ul>
          <li>Consumer Electronics</li>
          <li>Fashion and Apparel</li>
          <li>Beauty and Cosmetics</li>
          <li>Jewelry and Watches</li>
          <li>Home and Kitchen</li>
          <li>Health and Fitness</li>
          <li>Food and Beverage</li>
          <li>Automotive Accessories</li>
          <li>Toys and Games</li>
          <li>Industrial and B2B Products</li>
        </ul>

        <h2>Package Options</h2>
        <p>
          We offer flexible packages to suit different needs and budgets. Single product videos, 
          multi-product packages for catalog shoots, and ongoing content creation partnerships for 
          brands with regular new product launches. Contact us for a customized quote based on your 
          specific requirements.
        </p>

        <h2>Why Choose Film Production Bahrain?</h2>
        <p>
          Our team combines technical expertise with marketing knowledge to create product videos that 
          don't just look good—they sell. We understand what makes customers click "buy" and craft 
          content accordingly. As part of the Cinematic Group, we can also help with product photography, 
          e-commerce websites, and comprehensive digital marketing for your products.
        </p>
      </ServicePageLayout>
    </>
  )
}
