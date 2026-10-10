import type { Metadata, Viewport } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "500"],
});

const socialTitle = "Axis Decor & International L.L.C. | Architectural Décor Solutions";
const socialDescription =
  "Axis Decor & International L.L.C. produces GRC and GRP architectural decoration, including domes, cladding, and custom architectural elements.";
const socialImage = {
  url: "/images/axis-decor-preview.jpg",
  width: 1200,
  height: 630,
  alt: "Mosque exterior with patterned domes, a minaret, and lattice screens",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: socialTitle,
    template: `%s | ${site.name}`,
  },
  description: socialDescription,
  applicationName: site.shortName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Axis Decor & International L.L.C.",
    url: "https://www.axisdecor.co/",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F1F8",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  slogan: site.slogan,
  email: site.email,
  telephone: site.mobiles.map((item) => item.number),
  identifier: {
    "@type": "PropertyValue",
    name: "CR",
    value: site.cr,
  },
  areaServed: ["OM", "AE", "IN"],
  url: site.url,
  address: {
    "@type": "PostalAddress",
    postalCode: "111",
    addressLocality: "Ruwi",
    addressRegion: "Muscat",
    addressCountry: "OM",
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
