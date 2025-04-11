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
    description: `At LeadGate, we uphold excellence and quality as the cornerstone of everything we do.`,
    image1: Vector1.src,
    image2: Vector11.src,
  },
  {
    id: "2",
    title: "Patient Centered Care",
    description: `Our patients are at the heart of our mission. We believe that personalized care is the key to better health outcomes.`,
    image1: Vector2.src,
    image2: Vector22.src,
  },
  {
    id: "3",
    title: "Love and Integrity",
    description: `At LeadGate, we operate with love and integrity as our guiding principles.`,
    image1: Vector3.src,
    image2: Vector33.src,
  },
  {
    id: "4",
    title: "Dedication and Service",
    description: `Our team is driven by a deep sense of purpose and an unwavering commitment to serve.`,
    image1: Vector4.src,
    image2: Vector44.src,
  },
  {
    id: "5",
    title: "Innovation & Leadership",
    description: `In a constantly evolving industry, Lead Gate leads the way with groundbreaking innovations and forward-thinking solutions.`,
    image1: Vector5.src,
    image2: Vector55.src,
  },
  {
    id: "6",
    title: "Loyalty & Dependability",
    description: ` Loyalty and dependability define who we are. Our customers and partners can rely on us to deliver consistent, high-quality care and solutions.`,
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
