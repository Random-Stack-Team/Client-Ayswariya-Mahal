import { Helmet } from 'react-helmet-async';
import siteConfig from '../../config/site';

export default function SEO({ title, description, path = '', keywords }) {
  const pageTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const metaKeywords = keywords || 'wedding venue Chennai, marriage hall Arumbakkam, Ayswariya Mahal, reception hall Chennai, Sowbhagya Mahal';

  const jsonLdVenue = {
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
    geo: { '@type': 'GeoCoordinates', latitude: 13.0625433, longitude: 80.2115214 },
    priceRange: '$$',
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ayswariya Mahal',
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    sameAs: Object.values(siteConfig.socials),
    contactPoint: { '@type': 'ContactPoint', telephone: `+91-${siteConfig.contact.phoneMobile}`, contactType: 'customer service', areaServed: 'IN', availableLanguage: ['en', 'ta'] },
  };

  const jsonLdLocal = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ayswariya Mahal',
    image: siteConfig.ogImage,
    address: jsonLdVenue.address,
    telephone: jsonLdVenue.telephone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: '$$',
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:30', closes: '19:30' }],
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-IN" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Ayswariya Mahal" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0625433;80.2115214" />
      <meta name="ICBM" content="13.0625433, 80.2115214" />

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
      <script type="application/ld+json">{JSON.stringify(jsonLdVenue)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdOrg)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdLocal)}</script>
    </Helmet>
  );
}
