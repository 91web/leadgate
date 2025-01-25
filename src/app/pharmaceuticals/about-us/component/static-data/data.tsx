import Vector1 from "../../../../../assets/img/vector1.png";
import Vector2 from "../../../../../assets/img/vector2.png";
import Vector3 from "../../../../../assets/img/vector3.png";
import Vector4 from "../../../../../assets/img/vector4.png";
import Vector5 from "../../../../../assets/img/vector5.png";
import Vector6 from "../../../../../assets/img/vector6.png";
import Vector7 from "../../../../../assets/img/vector7.png";
import Vector11 from "../../../../../assets/img/num1.png";
import Vector22 from "../../../../../assets/img/num2.png";
import Vector33 from "../../../../../assets/img/num3.png";
import Vector44 from "../../../../../assets/img/num4.png";
import Vector55 from "../../../../../assets/img/num5.png";
import Vector66 from "../../../../../assets/img/num6.png";

// datatype for about
export interface DtaCardType {
  id: string;
  title: string;
  image1: string;
  image2: string;
  description: string;
}

export const DtaCard: DtaCardType[] = [
  {
    id: "1",
    title: "Excellence and Quality",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
         Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector1.src,
    image2: Vector11.src,
  },
  {
    id: "2",
    title: "Customer Focus",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
        Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector2.src,
    image2: Vector22.src,
  },
  {
    id: "3",
    title: "Innovation",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
         Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector3.src,
    image2: Vector33.src,
  },
  {
    id: "4",
    title: "Integrity",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
        Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector4.src,
    image2: Vector44.src,
  },
  {
    id: "5",
    title: "Teamwork",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
        Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector5.src,
    image2: Vector55.src,
  },
  {
    id: "6",
    title: "Sustainability",
    description: `Lorem ipsum dolor sit amet consectetur. Viverra magna habitant.
        Lorem ipsum dolor sit amet consectetur.`,
    image1: Vector6.src,
    image2: Vector66.src,
  },
];

// datatype for mission
export interface MissionType {
  id: string;
  mission: string;
  image: string;
}

export const MissionData: MissionType[] = [
  {
    id: "1",
    mission: "Exceptional Care",
    image: Vector2.src,
  },
  {
    id: "2",
    mission: "Accessible Health Solutions",
    image: Vector4.src,
  },

  {
    id: "3",
    mission: "Community Engagement",
    image: Vector7.src,
  },
];
