import { contact } from "@/data/site";

export function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechVerse Sanjita",
    founder: "Sanjita Maharjan",
    description: "AI Marketing Expert & Consultant",
    url: "https://sanjitamhrzn.com",
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
      streetAddress: "Kaldhara"
    },
    areaServed: ["Nepal", "Global"],
    slogan: "Where creativity meets Artificial Intelligence."
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
