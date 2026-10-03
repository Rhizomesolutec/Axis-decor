export const images = {
  hero1: "/images/hero 1.jpeg",
  hero2: "/images/hero 2.jpeg",
  hero3: "/images/hero 3.jpeg",
  hero4: "/images/hero 4.jpeg",
  mosqueDome: "/images/project/interior-dome.jpg",
  mosqueInterior: "/images/hero/arches.jpg",
  domePlate: "/images/image 3.jpeg",
  domePlateAlt: "/images/GRP and GRC dome.jpeg",
  habtoor: "/images/hero/columns.jpg",
  mosqueExterior: "/images/project/mosque-exterior.jpg",
  courtyard: "/images/project/arched-courtyard.jpg",
  interiorDome: "/images/project/interior-dome.jpg",
  nadAlSheba: "/images/project/nad-al-sheba.jpg",
  gypsumCeiling: "/images/project/gypsum-ceiling.jpg",
  columns: "/images/GRC & GRG columns.jpeg",
  logo: "/images/logo/axis-decor-mark.png",
  logoLight: "/images/logo/axis-decor-mark-light.png",
} as const;

export const filters = [
  "All",
  "GRC",
  "GRP",
  "Domes",
  "Cladding",
  "Mosques",
  "Commercial",
] as const;

export type ProjectFilter = (typeof filters)[number];
export type ProjectCategory = Exclude<ProjectFilter, "All">;

export type Project = {
  id: string;
  title: string;
  location: string;
  scope: string;
  image: string;
  alt: string;
  categories: ProjectCategory[];
  objectPosition: string;
  fit: "cover" | "contain";
  frame: "landscape" | "portrait" | "plate";
  client?: string;
};

export const projects: Project[] = [
  {
    id: "reem-elevation",
    title: "Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    scope: "GRC decorative wall cladding",
    image: images.hero1,
    alt: "Reem Central Park at Al Reem Island, Abu Dhabi, with pale GRC cladding and palms",
    categories: ["GRC", "Cladding", "Commercial"],
    objectPosition: "68% 55%",
    fit: "cover",
    frame: "landscape",
    client: "Aldar Properties",
  },
  {
    id: "reem-texture",
    title: "Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    scope: "GRC decorative wall cladding",
    image: images.hero2,
    alt: "Textured white GRC wall cladding at Reem Central Park, Al Reem Island, Abu Dhabi",
    categories: ["GRC", "Cladding", "Commercial"],
    objectPosition: "32% center",
    fit: "cover",
    frame: "portrait",
    client: "Aldar Properties",
  },
  {
    id: "reem-geometry",
    title: "Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    scope: "GRC decorative wall cladding panel",
    image: images.hero3,
    alt: "Geometric GRC facade panels at Reem Central Park, Al Reem Island, Abu Dhabi",
    categories: ["GRC", "Cladding", "Commercial"],
    objectPosition: "62% center",
    fit: "cover",
    frame: "landscape",
    client: "Aldar Properties",
  },
  {
    id: "reem-wave",
    title: "Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    scope: "GRC decorative wall cladding",
    image: images.hero4,
    alt: "Wave-pattern GRC cladding at Reem Central Park, Al Reem Island, Abu Dhabi",
    categories: ["GRC", "Cladding", "Commercial"],
    objectPosition: "58% 40%",
    fit: "cover",
    frame: "landscape",
    client: "Aldar Properties",
  },
  {
    id: "falcon-dome",
    title: "Mosque",
    location: "Falcon City, Dubai",
    scope: "Decorative dome",
    image: images.mosqueDome,
    alt: "GRC interior dome at the mosque in Falcon City, Dubai",
    categories: ["Domes", "Mosques"],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "silicon-oasis",
    title: "Masjid",
    location: "Silicon Oasis, Dubai",
    scope: "GRC decorative dome and wall cladding",
    image: images.mosqueInterior,
    alt: "Ornamental arches and geometric decorative panels at the masjid in Silicon Oasis, Dubai",
    categories: ["GRC", "Domes", "Cladding", "Mosques"],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "habtoor",
    title: "Al Habtoor City",
    location: "Dubai",
    scope: "GRG column cladding and GRP A/C grill",
    image: images.habtoor,
    alt: "Bright interior with fluted white columns, cornices, and a curved stair at Al Habtoor City, Dubai",
    categories: ["GRP", "Commercial"],
    objectPosition: "center center",
    fit: "cover",
    frame: "landscape",
    client: "Al Habtoor Group",
  },
  {
    id: "gypsum-ceiling",
    title: "Gypsum false ceiling",
    location: "",
    scope: "Gypsum false ceiling",
    image: images.gypsumCeiling,
    alt: "White gypsum false ceiling with a circular recessed light",
    categories: [],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "grc-interior-dome",
    title: "GRC interior dome",
    location: "",
    scope: "GRC interior dome",
    image: images.interiorDome,
    alt: "GRC interior dome with a geometric pattern",
    categories: ["GRC", "Domes"],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "nad-al-sheba",
    title: "Nad Al Sheba",
    location: "Dubai",
    scope: "GRC grey colour wall cladding panel",
    image: images.nadAlSheba,
    alt: "Grey GRC wall cladding panels at Nad Al Sheba, Dubai",
    categories: ["GRC", "Cladding", "Commercial"],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "mosque-exterior",
    title: "Mosque",
    location: "",
    scope: "Decorative domes, minaret, and lattice screens",
    image: images.mosqueExterior,
    alt: "Mosque exterior with patterned domes, a minaret, and lattice screens",
    categories: ["Domes", "Mosques"],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "arched-courtyard",
    title: "Arched courtyard",
    location: "",
    scope: "Arches, carved columns, and a geometric screen",
    image: images.courtyard,
    alt: "White arched courtyard with carved columns and a geometric screen",
    categories: [],
    objectPosition: "center",
    fit: "cover",
    frame: "landscape",
  },
  {
    id: "dome-ribbed",
    title: "GRP & GRC decorative domes",
    location: "Dome systems",
    scope: "Ribbed and patterned domes",
    image: images.domePlate,
    alt: "Brochure plate of ribbed and patterned GRP and GRC decorative domes",
    categories: ["GRC", "GRP", "Domes"],
    objectPosition: "center",
    fit: "contain",
    frame: "plate",
  },
  {
    id: "dome-gold",
    title: "GRP & GRC decorative domes",
    location: "Dome systems",
    scope: "Decorative domes, including a gold finish",
    image: images.domePlateAlt,
    alt: "Brochure plate of GRP and GRC decorative domes, one with a gold finish",
    categories: ["GRC", "GRP", "Domes"],
    objectPosition: "center",
    fit: "contain",
    frame: "plate",
  },
];

export const commissions = [
  {
    title: "Al Habtoor City",
    location: "Dubai",
    scope: "GRG column cladding and GRP A/C grill",
    client: "Al Habtoor Group",
  },
  {
    title: "Zabeel Palace",
    location: "Dubai",
    scope: "GRC with gold paint finish",
  },
  {
    title: "Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    scope: "GRC decorative wall cladding panel",
    client: "Aldar Properties",
  },
  {
    title: "Mosque",
    location: "Falcon City, Dubai",
    scope: "Decorative dome",
  },
  {
    title: "Masjid",
    location: "Silicon Oasis, Dubai",
    scope: "GRC decorative dome and wall cladding",
  },
  {
    title: "Nad Al Sheba",
    location: "Dubai",
    scope: "GRC grey colour wall cladding panel",
  },
  {
    title: "GRC interior dome",
    location: "",
    scope: "GRC interior dome",
  },
  {
    title: "Gypsum false ceiling",
    location: "",
    scope: "Gypsum false ceiling",
  },
] as const;

export function getProject(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) {
    throw new Error(`Unknown project: ${id}`);
  }
  return project;
}

export const expertise = [
  {
    id: "grc",
    index: "01",
    title: "GRC",
    summary: "Architectural concrete solutions",
    detail:
      "Glassfibre reinforced concrete for cladding, columns, arches, cornices, mashrabiya, decorative panels, and exterior pots.",
    image: images.hero2,
    alt: "Textured white GRC wall cladding at Reem Central Park, Al Reem Island, Abu Dhabi",
    objectPosition: "30% center",
    fit: "cover" as const,
  },
  {
    id: "grp",
    index: "02",
    title: "GRP",
    summary: "Lightweight architectural elements",
    detail:
      "Glass reinforced plastic for domes, AC ventilation components, and other lightweight architectural elements.",
    image: images.domePlateAlt,
    alt: "Brochure plate of GRP and GRC decorative domes, one with a gold finish",
    objectPosition: "center",
    fit: "contain" as const,
  },
  {
    id: "domes",
    index: "03",
    title: "Domes",
    summary: "Architectural dome systems",
    detail:
      "GRP and GRC decorative domes, including systems that can reduce structural load compared with heavier construction.",
    image: images.mosqueDome,
    alt: "GRC interior dome at the mosque in Falcon City, Dubai",
    objectPosition: "center",
    fit: "cover" as const,
  },
  {
    id: "cladding",
    index: "04",
    title: "Cladding",
    summary: "Decorative architectural surfaces",
    detail:
      "GRC decorative wall cladding, including the panels at Reem Central Park, Al Reem Island, Abu Dhabi.",
    image: images.hero3,
    alt: "Geometric GRC facade panels at Reem Central Park, Al Reem Island, Abu Dhabi",
    objectPosition: "60% center",
    fit: "cover" as const,
  },
  {
    id: "custom",
    index: "05",
    title: "Custom elements",
    summary: "Bespoke architectural solutions",
    detail:
      "Project-specific decoration, from ornamental interiors and arches to finishes such as GRC with gold paint at Zabeel Palace, Dubai.",
    image: images.mosqueInterior,
    alt: "Ornamental arches and geometric decorative panels at the masjid in Silicon Oasis, Dubai",
    objectPosition: "center",
    fit: "cover" as const,
  },
];

export const advantages = [
  {
    index: "01",
    title: "Lightweight",
    body: "GRC and GRP dome systems can reduce structural load compared with traditional heavier construction.",
  },
  {
    index: "02",
    title: "High structural strength",
    body: "Documented considerations include resistance to wind pressure, thermal expansion, structural vibration, and impact.",
  },
  {
    index: "03",
    title: "Weather resistance",
    body: "Suitable for demanding Middle Eastern conditions, including heat, UV exposure, and humidity.",
  },
  {
    index: "04",
    title: "Low maintenance",
    body: "Resistant to rot, mold, fungi, and chemical exposure.",
  },
  {
    index: "05",
    title: "Fire performance",
    body: "Fire performance depends on the assembly specified for each project. No single company-wide fire classification is stated.",
  },
] as const;

export const grcApplications = [
  { name: "Domes", note: "GRP and GRC decorative dome systems." },
  {
    name: "Wall panels",
    note: "Decorative wall cladding, including the panels at Reem Central Park, Abu Dhabi.",
  },
  {
    name: "Columns",
    note: "Column cladding, including GRG column cladding at Al Habtoor City, Dubai.",
  },
  { name: "Arches", note: "GRC arches and decorative arched interiors." },
  { name: "Mashrabiya", note: "GRC mashrabiya and geometric screenwork." },
  { name: "Cornices", note: "Profiled GRC cornices." },
  { name: "Handrails", note: "Decorative handrails." },
  { name: "Decorative elements", note: "Ornamental pieces made for the project." },
  { name: "Exterior pots", note: "GRC pots for landscaping and outdoor space." },
] as const;

export const grpApplications = [
  { name: "Domes", note: "Lightweight GRP dome systems." },
  {
    name: "AC ventilation components",
    note: "GRP A/C grill, including work at Al Habtoor City, Dubai.",
  },
  {
    name: "Lightweight architectural elements",
    note: "Elements specified where weight on the structure matters.",
  },
] as const;

export const productPhotos = [
  {
    src: "/images/products/product 1.jpeg",
    kind: "Planter",
    title: "White planters",
    alt: "Two glossy white planters",
  },
  {
    src: "/images/products/product 2.jpeg",
    kind: "Planter",
    title: "Textured rim",
    alt: "Cream planter with a brown textured rim",
  },
  {
    src: "/images/products/product 3.jpeg",
    kind: "Planter",
    title: "Speckled grey",
    alt: "Grey speckled planter with a rounded green plant",
  },
  {
    src: "/images/products/product 4.jpeg",
    kind: "Planter",
    title: "Mixed finishes",
    alt: "Black, speckled grey, and marble-effect planters",
  },
  {
    src: "/images/products/product 5.jpeg",
    kind: "Planter",
    title: "Circular planter",
    alt: "Large circular white planter in a seated courtyard",
  },
  {
    src: "/images/products/product 6.jpeg",
    kind: "Screen",
    title: "Geometric screens",
    alt: "White geometric screen panels standing in a yard",
  },
] as const;

export const exteriorDecor = [
  "Exterior pots",
  "Decorative features",
  "Landscape applications",
  "Space partitioning elements",
] as const;

export const projectTypes = [
  "GRC",
  "GRP",
  "Domes",
  "Cladding",
  "Columns",
  "Arches",
  "Exterior pots",
  "Other",
] as const;

export function frameClass(frame: Project["frame"]) {
  if (frame === "portrait") return "aspect-[3/4]";
  if (frame === "plate") return "aspect-[3/4]";
  return "aspect-[4/3]";
}
