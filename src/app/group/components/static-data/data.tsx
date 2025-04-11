//Homepage Group Data
import Line1 from "../../../../assets/svg/line-image1.svg";
import Line2 from "../../../../assets/svg/line-image2.svg";
import Line3 from "../../../../assets/svg/line-image3.svg";
import Division1 from "../../../../assets/img/division1.png";
import Division2 from "../../../../assets/img/division2.png";
import Division3 from "../../../../assets/img/division3.png";

//group slide images for central home page
import Slide1 from "../../../../assets/img/hero-home1.png";
import Slide2 from "../../../../assets/img/hero-home2.png";
import Slide3 from "../../../../assets/img/hero-home3.png";
import Slide4 from "../../../../assets/img/hero-home4.png";

//feature Project Data
import Feature1 from "../../../../assets/img/feature-project1.png";
import Feature2 from "../../../../assets/img/feature-project2.png";
import Feature3 from "../../../../assets/img/feature-project3.png";
import Feature4 from "../../../../assets/img/feature-project4.png";
import Feature5 from "../../../../assets/img/feature-project5.png";
import Feature6 from "../../../../assets/img/feature-project6.png";

//testimonial Data
import TestAvatar1 from "../../../../assets/img/test-avatar1.png";
import TestAvatar2 from "../../../../assets/img/test-avatar2.png";

import GroupLogoWhite from "../../../../assets/img/group-logo2.png";
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { StaticImageData } from "next/image";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type NavDataType = {
  id: string;
  name: string;
  icon: unknown;
  active: boolean;
  url: string;
  subNav?: NavDataType[];
  openSub?: boolean;
};
export const LGroupNavData: NavDataType[] = [
  {
    id: "home",
    name: "Home",
    icon: null,
    active: true,
    url: "/",
  },
  {
    id: "about-us",
    name: "About Us",
    icon: null,
    active: false,
    url: "/about-us",
  },
  {
    id: "divisions",
    name: "Our Core Divisions",
    icon: null,
    active: false,
    url: "/divisions",
    openSub: false,
    subNav: [
      {
        id: "Homes",
        name: "Homes",
        icon: null,
        active: false,
        url: "/homes",
      },
      {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        icon: null,
        active: false,
        url: "/pharmaceuticals",
      },
      {
        id: "construction",
        name: "Construction",
        icon: null,
        active: false,
        url: "/construction",
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    icon: null,
    active: false,
    url: "/projects",
  },
  {
    id: "news",
    name: "News",
    icon: null,
    active: false,
    url: "/news",
  },
  {
    id: "partners",
    name: "Partners",
    icon: null,
    active: false,
    url: "/partners",
  },
  {
    id: "contact-us",
    name: "Contact Us",
    icon: null,
    active: false,
    url: "/contact-us",
  },
];

//Group Lead Gate
export interface SliderType {
  id: string;
  src: string;
  title: string;
  description: string;
  buttonText: string;
}

export const SliderData: SliderType[] = [
  {
    id: "1",
    src: Slide1.src,
    title: "Building Dreams, Elevating Health, and Creating Lasting Value",
    description:
      "At LeadGate, we are building dreams through innovative construction, elevating health with groundbreaking pharmaceuticals, and creating lasting value by shaping sustainable solutions that inspire, heal, and endure for generations.",
    buttonText: "Learn More",
  },

  {
    id: "2",
    src: Slide2.src,
    title:
      "Creating Lasting Value by Transforming Real Estates into Meaningful Investments",
    description:
      "At LeadGate, we are committed to creating lasting value by transforming real estates into meaningful investments that empower communities and enhance lives.",
    buttonText: "Get a Quatations",
  },
  {
    id: "3",
    src: Slide3.src,
    title:
      "Building Dreams with Precision, Crafting Constructions that Inspire and Endure",
    description:
      "At LeadGate, we are building dreams with precision, crafting constructions that inspire and endure, and shaping a future where every structure tells a story of excellence and innovation.",
    buttonText: "Explore Now",
  },
  {
    id: "4",
    src: Slide4.src,
    title:
      "Elevating Health through Pioneering Innovation and Compassionate Care",
    description:
      "At LeadGate, we are elevating health through pioneering innovation and compassionate care, and shaping a future where every life is enriched by our commitment to excellence and well-being.",
    buttonText: "Get a Consultation",
  },
];

//Group Lead Gate
export interface HomePageType {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  lineSvg: string;
}

export const HomePageData: HomePageType[] = [
  {
    id: "1",
    title: "Real Estate Division",
    description:
      "Leadgates Homes Ltd. Is a highly esteemed construction company based in Nigeria. With a strong reputation for excellence, integrity and quality, we have established ourselves as a prominent player in the construction industry. Our comprehensive range of services encompasses building construction, road construction, bridge construction, renovation, and remodeling all real estate investment.",
    image: Division1.src,
    link: "Get more information",
    lineSvg: Line1,
  },
  {
    id: "2",
    title: "Construction Division",
    description:
      "Leadgate construction is a prominent construction company based in Nigeria, specializing in a wide range of construction projects. With a strong commitment to excellence and proven track record, we have earned a reputation as a trusted and reliable partner in the construction industry.",
    image: Division2.src,
    link: "Get more information",
    lineSvg: Line2,
  },
  {
    id: "3",
    title: "Pharmaceuticals Division",
    description:
      "At Leadgate Pharmaceuticals, we are committed to improving health outcomes by ensuring access to high-quality pharmaceutical products. We partner with reputable manufacturers and distributors to bring safe, effective, and affordable medicines to individuals, healthcare providers, and institutions. Our focus spans across importation, distribution, and retail, enabling us to bridge the gap between global pharmaceutical innovations and local healthcare needs",
    image: Division3.src,
    link: "Get more information",
    lineSvg: Line3,
  },
];

// Group Lead Gate Feature Project Data
export interface ProjectType {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  linkText: string;
}

// Group Lead Gate Feature Project Data
export const ProjectData: ProjectType[] = [
  {
    id: "1",
    image: Feature1.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "2",
    image: Feature2.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "3",
    image: Feature3.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "4",
    image: Feature4.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "5",
    image: Feature5.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "6",
    image: Feature6.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
];

// Testimonial data interface
export interface TestimonialType {
  id: string;
  name: string;
  title: string;
  feedback: string;
  avatar: string;
}

// Group Lead Gate Feature Project Data
export const TestimonialData: TestimonialType[] = [
  {
    id: "1",
    name: "David A",
    title: "Real Estate Investor",
    feedback:
      "Leadgate Group exceeded my expectations! Their real estate division helped me secure a prime investment property with ease, and the entire process was seamless. Their professionalism and commitment to quality are unmatched. Highly recommended!",
    avatar: TestAvatar1.src,
  },
  {
    id: "2", // Added an 'id' field to the second object for consistency
    name: "Olivia M",
    title: "Pharmacist",
    feedback:
      "As a pharmacist, I rely on quality medications for my customers. Leadgate Pharmaceuticals provides highly effective and affordable drugs, ensuring my customers receive the best healthcare solutions",
    avatar: TestAvatar2.src,
  },
  {
    id: "3", // Added an 'id' field to the second object for consistency
    name: "Angela K",
    title: "Home owner",
    feedback:
      "I bought my first home through Leadgate Real Estate, and the experience was fantastic. Their team guided me every step of the way, ensuring I got a beautiful home within my budget. I couldn't be happier",
    avatar: TestAvatar2.src,
  },
];

export interface LSocials {
  id: string;
  name: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  url: string;
}
export interface LFooterType {
  id: string;
  logo?: StaticImageData;
  logoUrl?: string;
  description?: string;
  title?: string;
  navs?: NavDataType[];
  socials?: LSocials[];
  phone?: string;
  email?: string;
  address?: string;
}

export const LGroupFooter: LFooterType[] = [
  {
    id: "logoSection",
    logo: GroupLogoWhite,
    logoUrl: "/group",
    description:
      "Leadgate Group is a prominent group of companies centered around construction, real estate and pharmaceuticals.",
  },
  {
    id: "quickLinks",
    title: "Quick Navigation Links",
    navs: [
      {
        id: "home",
        name: "Leadgate Group",
        icon: null,
        active: false,
        url: "/group",
      },
      {
        id: "contact-us",
        name: "Contact Us",
        icon: null,
        active: false,
        url: "/group/contact-us",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    navs: [
      {
        id: "about-us",
        name: "About Us",
        icon: null,
        active: false,
        url: "/group/about-us",
      },
      {
        id: "projects",
        name: "Projects",
        icon: null,
        active: false,
        url: "/group/projects",
      },
      {
        id: "news",
        name: "News",
        icon: null,
        active: false,
        url: "/group/news",
      },
      {
        id: "partners",
        name: "Partners",
        icon: null,
        active: false,
        url: "/group/partners",
      },
      {
        id: "career",
        name: "Career",
        icon: null,
        active: false,
        url: "/group/career",
      },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    navs: [
      {
        id: "terms",
        name: "Terms",
        icon: null,
        active: false,
        url: "/group/terms",
      },
      {
        id: "privacyPolicy",
        name: "Privacy Policy",
        icon: null,
        active: false,
        url: "/group/privacy-policy",
      },
      {
        id: "copyrite",
        name: "Copyrite Notice",
        icon: null,
        active: false,
        url: "/group/copyrite",
      },
    ],
  },
  {
    id: "socials",
    title: "",
    socials: [
      {
        id: "fb",
        name: "Facebook",
        icon: Facebook,
        url: "",
      },
      {
        id: "insta",
        name: "Instagram",
        icon: Instagram,
        url: "",
      },
      {
        id: "youtube",
        name: "Youtube",
        icon: YouTube,
        url: "",
      },
      {
        id: "x",
        name: "X",
        icon: X,
        url: "",
      },
    ],
    phone: "+234 909 935 2438",
    email: "leadgateconstructions@gmail.com",
    address:
      "Suite M206/ M207, Second Floor, Middle Block, Millemenium Builders' Plaza, Plot 251 Herbert Macaulay Way, Central Business District, Abuja, FCT, Nigeria",
  },
];
