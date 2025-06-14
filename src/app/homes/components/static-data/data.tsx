//group slide images for home page
import Slide1 from "../../../../assets/img/ghome-slide1.png";
//import Slide2 from "../../../../assets/img/home-slide1.png";

import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";


//images for  Property
import Property1 from "../../../../assets/img/property1.png";
import Property2 from "../../../../assets/img/property1.png";
import Property3 from "../../../../assets/img/property1.png";
import { StaticImageData } from "next/image";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import GroupLogoWhite from "../../../../assets/img/LeadgateHomewhite.png";
import ConstructionLogoWhite from "../../../../assets/img/constructionLogoWhite.png";

//datatype images for home page
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
    title: "Transforming Real Estates into Meaningful Investments",
    description:
      "At Leadgate Real Estate, we go beyond property development—we create valuable, long-term investments that enhance lifestyles and generate lasting returns.",
    buttonText: "See Property",
  },

  {
    id: "2",
    src: Slide1.src,
    title: "Transforming Real Estates into Meaningful Investments",
    description:
      "At Leadgate Real Estate, we go beyond property development—we create valuable, long-term investments that enhance lifestyles and generate lasting returns.",
    buttonText: "See Property",
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
export type NavDataType = {
  id: string;
  name: string;
  icon: unknown;
  active: boolean;
  url: string;
  subNav?: NavDataType[];
  openSub?: boolean;
};

//datatype images for Article page
export interface PropertyType {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const PropertyData: PropertyType[] = [
  {
    id: "1",
    title: "Real Estate Division",
    description:
      "We provide expert consultation to guide you in making informed decisions about your home and property needs. Whether you're planning a new project, renovation, or investment, our team offers professional advice tailored to your vision.",
    image: Property1.src,
  },
  {
    id: "2",
    title: "Construction Division",
    description:
      "Our architectural design services bring your vision to life with innovative and functional designs. We create aesthetically pleasing, structurally sound, and sustainable spaces that align with modern trends and your personal or business needs.",
    image: Property2.src,
  },
  {
    id: "3",
    title: "Pharmaceuticals Division",
    description:
      "Leadgate Home specializes in high-quality construction services, from residential to commercial buildings. We manage projects from start to finish, ensuring durability, precision, and adherence to the highest industry standards.",
    image: Property3.src,
  },
];

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
export const LGroupNavData: NavDataType[] = [
  {
    id: "home",
    name: "Home",
    icon: null,
    active: true,
    url: "/",
  },
  {
    id: "projects",
    name: "Projects",
    icon: null,
    active: false,
    url: "/project",
  },
  {
    id: "partners",
    name: "Partners",
    icon: null,
    active: false,
    url: "/partners",
  },
 
];
export const ConstructionNavData: NavDataType[] = [
  {
    id: "home",
    name: "Home",
    icon: null,
    active: true,
    url: "/",
  },
  {
    id: "About Us",
    name: "About Us",
    icon: null,
    active: false,
    url: "#about",
  },
  {
    id: "Our Services",
    name: "Our Services",
    icon: null,
    active: false,
    url: "/#services",
  },
  
];
export const LConstructionFooter: LFooterType[] = [
  {
    id: "logoSection",
    logo: ConstructionLogoWhite,
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




//data for project Home Pages 
