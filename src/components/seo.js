import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, author } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    author,
  };

  const richResult = {
    "@context": "http://www.schema.org",
    "@type": "TravelAgency",
    name: title || "Rural Holidays",
    url: siteUrl || "https://ruralholidays.co.nz/",
    email: "hosting@ruralholidays.co.nz",
    sameAs: ["https://www.ruralholidays.co.nz/"],
    logo: "https://ruralholidays.co.nz/logo_rural_holidays.png",
    image: "https://ruralholidays.co.nz/logo_rural_holidays.png",
    description:
      "Established in 1983, Rural Holidays is a leading original owner-operated provider of pre-booked quality hosted farm and country home stays, plus other hospitality options with an extensive network of carefully selected properties throughout New Zealand.",
    foundingDate: "1983",
    founders: [
      {
        "@type": "Person",
        name: "Mark Pearce",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hosting@ruralholidays.co.nz",
        telephone: "+64 27 435 3884",
        contactType: ["customer service", "booking"],
        areaServed: "NZ",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+64 21 042 7652",
        email: "contact@codos.co.nz",
        contactType: "IT Support",
        areaServed: "NZ",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Rehua Lane",
      addressLocality: "Christchurch",
      addressRegion: "Canterbury",
      postalCode: "8014",
      addressCountry: "New Zealand",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-43.5169157",
      longitude: "172.6294038",
    },
    hasMap: "https://goo.gl/maps/A31AHQCgo2vKDAou7",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    acceptsReservations: "True",
    priceRange: "NZD $65 to NZD $225+",
  };

  return (
    <>
      <html lang="en-NZ" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content={"website"} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.author} />
      <script type="application/ld+json">{JSON.stringify(richResult)}</script>
      {children}
    </>
  );
};

export default SEO;
