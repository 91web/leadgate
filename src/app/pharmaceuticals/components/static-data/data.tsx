// data for image
import PharmaHero1 from "../../../../assets/img/pharmaceuticals-hero3.png";
import PharmaHero2 from "../../../../assets/img/pharmaceuticals-hero4.png";
import PharmaHero3 from "../../../../assets/img/pharmaceuticals-hero10.png";
//data for Pharma Data Division

import PharmaCommunity1 from "../../../../assets/img/pharma-community1.png";
import PharmaCommunity2 from "../../../../assets/img/pharma-community2.png";
import PharmaCommunity3 from "../../../../assets/img/pharma-community3.png";
import PharmaCommunity4 from "../../../../assets/img/pharma-community4.png";
import PharmaCommunity5 from "../../../../assets/img/pharma-community5.png";
import PharmaCommunity6 from "../../../../assets/img/pharma-community6.png";


// servive slide Pharmaceutical
import PharmaSlide1 from "../../../../assets/img/p-service-slide1.png";
import PharmaSlide2 from "../../../../assets/img/p-service-slide2.png";
import PharmaSlide3 from "../../../../assets/img/p-service-slide3.png";
import PharmaSlide4 from "../../../../assets/img/p-service-slide4.png";



//Instagram Hero D=Image
import InstagramHero1 from "../../../../assets/img/instagram-hero1.png";
import InstagramHero2 from "../../../../assets/img/instagram-hero2.png";
import InstagramHero3 from "../../../../assets/img/instagram-hero3.png";
import InstagramHero4 from "../../../../assets/img/instagram-hero4.png";
import InstagramHero5 from "../../../../assets/img/instagram-hero5.png";
import InstagramHero6 from "../../../../assets/img/instagram-hero6.png";
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";






import PharmLogoWhite from "@/assets/img/Leadgate Pharmaceutical White.png";
import { LFooterType } from "@/app/group/components/static-data/data";

export type NavDataType = {
  id: string;
  name: string;
  icon: unknown;
  active: boolean;
  url: string;
  subNav?: NavDataType[];
  openSub?: boolean;
};

export const LPharmNavData: NavDataType[] = [
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
    id: "services",
    name: "Our Services",
    icon: null,
    active: false,
    url: "/service",
  },
  {
    id: "careers",
    name: "Careers",
    icon: null,
    active: false,
    url: "/careers",
  },
  {
    id: "contact-us",
    name: "Contact Us",
    icon: null,
    active: false,
    url: "/contact-us",
  },
];

export const LPharmFooter: LFooterType[] = [
  {
    id: "logoSection",
    logo: PharmLogoWhite,
    logoUrl: "/pharmaceuticals",
    description:
      "Leadgate Pharmaceuticals, we are committed to improving health outcomes by ensuring access to high-quality pharmaceutical products.",
  },
  {
    id: "quickLinks",
    title: "Quick Navigation Links",
    navs: [
      {
        id: "find-store",
        name: "Find a Store",
        icon: null,
        active: false,
        url: "#",
      },
      {
        id: "contact-us",
        name: "Contact Us",
        icon: null,
        active: false,
        url: "/pharmaceuticals/contact-us",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    navs: [
      {
        id: "home",
        name: "Home",
        icon: null,
        active: false,
        url: "/pharmaceuticals/home",
      },
      {
        id: "about-us",
        name: "About Us",
        icon: null,
        active: false,
        url: "/pharmaceuticals/about-us",
      },
      {
        id: "service",
        name: "Our services",
        icon: null,
        active: false,
        url: "/pharmaceuticals/service",
      },
      {
        id: "career",
        name: "Career",
        icon: null,
        active: false,
        url: "/pharmaceuticals/career",
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
        url: "/pharmaceuticals/terms",
      },
      {
        id: "privacyPolicy",
        name: "Privacy Policy",
        icon: null,
        active: false,
        url: "/pharmaceuticals/privacy-policy",
      },
      {
        id: "copyrite",
        name: "Copyrite Notice",
        icon: null,
        active: false,
        url: "/pharmaceuticals/copyrite",
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
    email: "leadgatepharmaceuticals@gmail.com",
    address:
      "Suite M206/ M207, Second Floor, Middle Block, Millemenium Builders' Plaza, Plot 251 Herbert Macaulay Way, Central Business District, Abuja, FCT, Nigeria",
  },
];

// datatype for pharma
export interface PharmaType {
  id: string;
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

export const PharmaData: PharmaType[] = [
  {
    id: "1",
    image: PharmaHero1.src,
    title: "Retail Pharmacy and Supermarket Services",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
  {
    id: "2",
    image: PharmaHero2.src,
    title: "Hospital and Institutional Supply",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
  {
    id: "3",
    image: PharmaHero3.src,
    title: "Regulatory Compliance and Quality Assurance",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
];

// datatype for pharma
export interface PharmaDivisionType {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const PharmaDivision: PharmaDivisionType[] = [
  {
    id: "1",
    title: "Over-the-counter (OTC) Medications ",
    image: PharmaCommunity1.src,
    description: `Access a variety of non-prescription medications for common ailments like pain relief, cold, allergies, and more.`,
  },

  {
    id: "2",
    title: "Prescription Drugs",
    image: PharmaCommunity2.src,
    description: `We provide a wide range of prescription medications, dispensed accurately and efficiently to support your treatment plans.`,
  },
  {
    id: "3",
    title: "Cosmetics",
    image: PharmaCommunity3.src,
    description: `Shop from our curated selection of trusted cosmetic products to enhance your skincare and beauty routines.s`,
  },
  {
    id: "4",
    title: "Groceries",
    image: PharmaCommunity4.src,
    description: `Our supermarket section offers a convenient variety of food items and household groceries for daily living.`,
  },

  {
    id: "5",
    title: "Child Care Products",
    image: PharmaCommunity5.src,
    description: `We stock a wide array of medical supplies and equipment, including mobility aids, wound care products, and monitoring devices.`,
  },
  {
    id: "6",
    title: "Health Screening and Immunization",
    image: PharmaCommunity6.src,
    description: `We offer basic health checks, diagnostic services, and routine immunizations to help you stay healthy and informed`,
  },
];

// datatype for pharma
export interface InstagHeroType {
  id: string;
  image: string;
  alt: string;
}

export const InstagHero: InstagHeroType[] = [
  {
    id: "1",
    image: InstagramHero1.src,
    alt: "Instagram Hero 1",
  },
  {
    id: "2",
    image: InstagramHero2.src,
    alt: "Instagram Hero 2",
  },
  {
    id: "3",
    image: InstagramHero3.src,
    alt: "Instagram Hero 3",
  },
  {
    id: "4",
    image: InstagramHero4.src,
    alt: "Instagram Hero 4",
  },
];











// datatype for pharma slide service
export interface PharmaSlideType {
  id: string;
  title: string;
  src: string;
  description: string;

}

export const PharmaSlide: PharmaSlideType[] = [
  {
    id: "1",
    src: PharmaSlide1.src,
    title: "Supermarket Services",
    description: "At our retain outlet we offer more than medications ",
  },
  {
    id: "2",
    src: PharmaSlide2.src,
    title: "Health Check",
    description: "At our retain outlet we offer more than medications ",
  }, 
  {
    id: "3",
    src: PharmaSlide3.src,
    title: "Hospital and Institutional Supply",
    description: "At our retain outlet we offer more than medications ",
  },
  {
    id: "4",
    src: PharmaSlide4.src,
    title: "Regulatory Compliance and Quality Assurance",
    description: "At our retain outlet we offer more than medications ",
  },
];