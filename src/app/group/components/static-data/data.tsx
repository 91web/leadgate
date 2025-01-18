//Homepage Group Data
import Line1 from "../../../../assets/svg/line-image1.svg";
import Line2 from "../../../../assets/svg/line-image2.svg";
import Line3 from "../../../../assets/svg/line-image3.svg";
import Division1 from "../../../../assets/img/division1.png";
import Division2 from "../../../../assets/img/division2.png";
import Division3 from "../../../../assets/img/division3.png";

//group slide images for central home page
import Slide1 from "../../../../assets/img/hero-slide1.png";
import Slide2 from "../../../../assets/img/hero-slide1.png";
import Slide3 from "../../../../assets/img/hero-slide1.png";
import Slide4 from "../../../../assets/img/hero-slide1.png";

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

import GroupLogoWhite from "../../../../assets/img/Leadgate Group White.png";
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
    title: "Innovating for a better future",
    description: "Pellentesque habitant morbi tristique senectus.",
    buttonText: "Explore Now",
  },

  {
    id: "2",
    src: Slide2.src,
    title: "Building dreams, elevating health",
    description: "Lorem ipsum dolor sit amet consectetur.",
    buttonText: "Discover More",
  },
  {
    id: "3",
    src: Slide3.src,
    title: "Innovating for a better future",
    description: "Pellentesque habitant morbi tristique senectus.",
    buttonText: "Explore Now",
  },
  {
    id: "4",
    src: Slide4.src,
    title: "Empowering communities worldwide",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    buttonText: "Join Us",
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
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
    image: Division1.src,
    link: "Get more information",
    lineSvg: Line1,
  },
  {
    id: "2",
    title: "Construction Division",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
    image: Division2.src,
    link: "Get more information",
    lineSvg: Line2,
  },
  {
    id: "3",
    title: "Pharmaceuticals Division",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
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
    name: "Esther Hills",
    title: "Lead Intranet Technician",
    feedback:
      "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum.",
    avatar: TestAvatar1.src,
  },
  {
    id: "2", // Added an 'id' field to the second object for consistency
    name: "Ethel Johnston",
    title: "Human Directives Director",
    feedback:
      "Fuga et debitis numquam omnis sed explicabo rerum harum sint enim quia est. Odit blanditiis iusto adipisci corrupti explicabo. Qui non omnis cum eo aut aut dolor aut.",
    avatar: TestAvatar2.src,
  },
  {
    id: "3", // Added an 'id' field to the second object for consistency
    name: "Ethel Johnston",
    title: "Human Directives Director",
    feedback:
      "Fuga et debitis numquam omnis sed explicabo rerum harum sint enim quia est. Odit blanditiis iusto adipisci corrupti explicabo. Qui non omnis cum eo aut aut dolor aut.",
    avatar: TestAvatar2.src,
  },
  {
    id: "4", // Added an 'id' field to the second object for consistency
    name: "Ethel Johnston",
    title: "Human Directives Director",
    feedback:
      "Fuga et debitis numquam omnis sed explicabo rerum harum sint enim quia est. Odit blanditiis iusto adipisci corrupti explicabo. Qui non omnis cum eo aut aut dolor aut.",
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
