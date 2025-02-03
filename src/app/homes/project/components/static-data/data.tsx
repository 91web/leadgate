//group slide images for home page
import Slide1 from "../../../../../assets/img/project-home.png";
import Slide2 from "../../../../../assets/img/project-home.png";
import Slide3 from "../../../../../assets/img/project-home.png";
import Slide4 from "../../../../../assets/img/project-home.png";

/// Home Image

import HomeImage1 from "../../../../../assets/img/home-image1.png";
import HomeImage2 from "../../../../../assets/img/home-image2.png";
import HomeImage3 from "../../../../../assets/img/home-image3.png";
import HomeImage4 from "../../../../../assets/img/home-image4.png";

//images for  Property
import Property1 from "../../../../../assets/img/property1.png";
import Property2 from "../../../../../assets/img/property1.png";
import Property3 from "../../../../../assets/img/property1.png";

//Homepage Group Data

import Division1 from "../../../../../assets/img/home-division1.png";
import Division2 from "../../../../../assets/img/home-division2.png";
import Division3 from "../../../../../assets/img/home-division3.png";

//feature Project Data
import Feature1 from "../../../../../assets/img/project-gallery2.png";
import Feature2 from "../../../../../assets/img/project-gallery3.png";
import Feature3 from "../../../../../assets/img/project-gallery4.png";
import Feature4 from "../../../../../assets/img/project-gallery5.png";
import Feature5 from "../../../../../assets/img/project-gallery6.png";
import Feature6 from "../../../../../assets/img/project-gallery7.png";
import Feature7 from "../../../../../assets/img/project-gallery8.png";
import Feature8 from "../../../../../assets/img/project-gallery9.png";

//testimonial Data
//import TestAvatar1 from "../../../../../assets/img/test-avatar1.png";
///import TestAvatar2 from "../../../../../assets/img/test-avatar2.png";

//datatype images for home page
export interface SliderType {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export const SliderData: SliderType[] = [
  {
    id: "1",
    src: Slide1.src,
    title: "Transforming Real",
    subtitle: "AVAILABLE FOR PURCHASE",
    description: "lorem  pufdbdjvk dvndkjvdsv nbbsvbj .",
    buttonText: "See Property",
  },

  {
    id: "2",
    src: Slide2.src,
    title: "Ornate Homes",
    subtitle: "AVAILABLE FOR PURCHASE",
    description: "Lorem ipsum dolor sit amet consectetur.",
    buttonText: "View Project",
  },
  {
    id: "3",
    src: Slide3.src,
    title: "Ornate Homes",
    subtitle: "AVAILABLE FOR PURCHASE",
    description: "Community and success, the Ighalo way.",
    buttonText: "View Project",
  },
  {
    id: "4",
    src: Slide4.src,
    title: "Ornate Homes",
    subtitle: "AVAILABLE FOR PURCHASE",
    description: "Community and success, the Ighalo way.",
    buttonText: "View Project",
  },
];

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
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer",
    image: Property1.src,
  },
  {
    id: "2",
    title: "Construction Division",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Property2.src,
  },
  {
    id: "3",
    title: "Pharmaceuticals Division",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Property3.src,
  },
];

//Group Lead Gate
export interface HomePageType {
  id: string;
  description: string;
  image: string;
}

export const HomePageData: HomePageType[] = [
  {
    id: "1",
    description: "Ornate Homes",
    image: Division1.src,
  },
  {
    id: "2",
    description: "Campari Homes",
    image: Division2.src,
  },
  {
    id: "3",
    description: "Florida Homes",
    image: Division3.src,
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
  {
    id: "7",
    image: Feature7.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
  {
    id: "8",
    image: Feature8.src,
    title: "Real Estate",
    subtitle: "5 Room Duplex in Condomonium",
    linkText: "Get more information →",
  },
];

// data home
export interface HomeType {
  id: string;
  image: string;
  title: string;
}

// Group Lead Gate home Project Data
export const HomeData: HomeType[] = [
  {
    id: "1",
    image: HomeImage1.src,
    title: "Home page 3",
  },
  {
    id: "2",
    image: HomeImage2.src,
    title: "Home page 4",
  },

  {
    id: "3",
    image: HomeImage3.src,
    title: "Home page 5",
  },
  {
    id: "4",
    image: HomeImage4.src,
    title: "Home page 5",
  },
];
