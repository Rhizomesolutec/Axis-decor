export const site = {
  name: "Axis Decor & International L.L.C.",
  shortName: "Axis Decor",
  slogan: "Ultimate solution in decor",
  title: "Axis Decor & International L.L.C. | Architectural Décor Solutions",
  description:
    "Axis Decor & International L.L.C. produces GRC and GRP architectural decoration, including domes, cladding, columns, arches, and custom elements, for projects in Oman, the UAE, and India.",
  url: "https://axisdecor.co",
  email: "info@axisdecor.co",
  phone: "+968 7137 6640",
  phoneHref: "tel:+96871376640",
  whatsappHref: "https://wa.me/96871376640",
  emailHref: "mailto:info@axisdecor.co",
  cr: "1631879",
  headOffice: "Oman",
  address: "PC: 111, Ruwi, Muscat, Oman",
  regions: "Sultanate of Oman, United Arab Emirates, India",
  mobiles: [
    { label: "Oman", number: "+968 7137 6640", href: "tel:+96871376640" },
    { label: "UAE", number: "+971 56 1976062", href: "tel:+971561976062" },
    { label: "India", number: "+91 8891087556", href: "tel:+918891087556" },
  ],
} as const;

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

export const potApplications = [
  "Commercial and urban landscaping",
  "Luxury villas",
  "Hotel entrances",
  "Corporate spaces",
  "Public plazas",
  "Rooftops",
  "Outdoor dining",
  "Architectural space partitioning",
] as const;
