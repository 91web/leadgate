//group slide images for contructions estate page
import { JSX } from "react";
import Slide1 from "../../../../assets/img/construction-slide1.png";
import Slide2 from "../../../../assets/img/construction-slide1.png";
import Slide3 from "../../../../assets/img/construction-slide1.png";
import Slide4 from "../../../../assets/img/construction-slide1.png";

//Card material Icon
import HomeIcon from "@mui/icons-material/Home";

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
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. Eget consectetur habitant felis egestas molestie amet cras dignissim.",
    buttonText: "Get a Quotations",
  },

  {
    id: "2",
    src: Slide2.src,
    title: "Building dreams, elevating health",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est.
        Eget consectetur habitant felis egestas molestie amet cras dignissim.`,
    buttonText: "Get a Quatation",
  },
  {
    id: "3",
    src: Slide3.src,
    title:
      "Building Dreams with Precision, Crafting Constructions that Inspire and Endure",
    description: "Pellentesque habitant morbi tristique senectus.",
    buttonText: "Get a Quotations",
  },
  {
    id: "4",
    src: Slide4.src,
    title:
      "Building Dreams with Precision, Crafting Constructions that Inspire and Endure",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est.
      Eget consectetur habitant felis egestas molestie amet cras dignissim.`,
    buttonText: "Get a Quatation",
  },
];

//Data material card Table
export interface MaterialType {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const MaterialData: MaterialType[] = [
  {
    id: "1",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo volutpat nulla at.",
  },
  {
    id: "2",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: "4",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    id: "5",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "6",
    icon: <HomeIcon />,
    title: "Consultancy Services",
    description:
      "Mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];
