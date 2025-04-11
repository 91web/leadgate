//group slide images for contructions estate page

import Slide1 from "../../../../assets/img/construction-slide1.png";

//group slide images for contructions estate page
import IconC1 from "../../../../assets/svg/construction1.svg";
import IconC2 from "../../../../assets/svg/construction2.svg";
import IconC3 from "../../../../assets/svg/construction3.svg";
import IconC4 from "../../../../assets/svg/construction4.svg";
import IconC5 from "../../../../assets/svg/construction5.svg";
import IconC6 from "../../../../assets/svg/construction6.svg";

//datatype images for contructions
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
    title:
      "Building Dreams with Precision, Crafting Constructions that Inspire and Endure",
    description:
      "We blend precision, innovation, and durability to create structures that inspire and stand the test of time. From residential and commercial projects to large-scale infrastructure, we prioritize quality, sustainability, and architectural excellence.",
    buttonText: "Get a Quotations",
  },
  {
    id: "2",
    src: Slide1.src,
    title:
      "Building Dreams with Precision, Crafting Constructions that Inspire and Endure",
    description:
      "We blend precision, innovation, and durability to create structures that inspire and stand the test of time. From residential and commercial projects to large-scale infrastructure, we prioritize quality, sustainability, and architectural excellence.",
    buttonText: "Get a Quotations",
  },
];

//Data material card Table
export interface MaterialType {
  id: string;
  src: string;
  title: string;
  description: string;
}

export const MaterialData: MaterialType[] = [
  {
    id: "1",
    src: IconC1.src,
    title: "Design and planning",
    description:
      "Leadgate home Ltd. Offer comprehensive design and planning services as part of our commitment to delivering exceptional construction solutions.",
  },
  {
    id: "2",
    src: IconC2.src,
    title: "Construction",
    description:
      "Leadgate Homes Ltd. Is your trusted partner for all your construction needs. With expertise in building construction, road construction, bridge construction, and more.",
  },
  {
    id: "3",
    src: IconC3.src,
    title: "Landscaping & Exterior Design",
    description:
      "Custom landscape designs; Our skilled team of landscape architects and designers collaborate closely with you to bring your vision to life.",
  },
  {
    id: "4",
    src: IconC4.src,
    title: "Property Management",
    description:
      "Leadgate Homes Ltd. Offers comprehensive property management services, providing property owners with professional and reliable solutions to maximize the value and potential of their real estate investments.",
  },
  {
    id: "5",
    src: IconC5.src,
    title: "Renovation and Remodeling",
    description:
      "Leadgate Homes Ltd. Is your trusted partner for renovation and remodeling projects, breathing new life into existing spaces and transforming them according to your vision.",
  },
  {
    id: "6",
    src: IconC6.src,
    title: "Tailored Transformation",
    description:
      "Whether you’re looking to revitalize a single room or renovate an entire property, our skilled team of designers and craftsmen will work closely with you to understand your goals and preferences.",
  },
];
