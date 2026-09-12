import { Helmet } from 'react-helmet-async';
import siteConfig from '../../config/site';

export default function SEO({ title, description, path = '' }) {
  const pageTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'Ayswariya Mahal',
    url: siteConfig.url,
    image: siteConfig.ogImage,
    description: pageDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '151, Jawaharlal Nehru Road, (100 Feet Road) MMDA Signal, Arumbakkam',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600106',
      addressCountry: 'IN',
    },
    telephone: `+91-${siteConfig.contact.phoneMobile}`,
    email: siteConfig.contact.email,
    openingHours: '08:30-19:30',
    sameAs: Object.values(siteConfig.socials),
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={siteConfig.ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
