import WLogo1 from "../../../../../assets/img/work-logo1.png";
import WLogo2 from "../../../../../assets/img/work-logo2.png";
import WLogo3 from "../../../../../assets/img/work-logo3.png";
import WLogo4 from "../../../../../assets/img/work-logo4.png";
import WLogo5 from "../../../../../assets/img/work-logo5.png";
import WLogo6 from "../../../../../assets/img/work-logo6.png";
// JOb Logo
import JLogo1 from "../../../../../assets/img/icon-career1.png";
import JLogo2 from "../../../../../assets/img/icon-career2.png";
import JLogo3 from "../../../../../assets/img/icon-career3.png";
import JLogo4 from "../../../../../assets/img/icon-career4.png";
import JLogo5 from "../../../../../assets/img/icon-career5.png";

// datatype for pharma
export interface WorkType {
  id: string;
  src: string;
  title: string;
  description: string;
}

export const WorkData: WorkType[] = [
  {
    id: "1",
    src: WLogo1.src,
    title: "Networking and Relationships",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
  {
    id: "2",
    src: WLogo2.src,
    title: "Collaboration & Personal Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
  {
    id: "3",
    src: WLogo3.src,
    title: "Global Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
  {
    id: "4",
    src: WLogo4.src,
    title: "Innovation and Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
  {
    id: "5",
    src: WLogo5.src,
    title: "Competitive Compensation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
  {
    id: "6",
    src: WLogo6.src,
    title: "Market Demand & Stability",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer.",
  },
];

// datatype for pharma
export interface JobType {
  id: string;
  src: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

export const JobData: JobType[] = [
  {
    id: "1",
    title: "Project Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo1.src,
  },
  {
    id: "2",
    title: "Front Desk Officer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo2.src,
  },
  {
    id: "3",
    title: "Driver",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo3.src,
  },
  {
    id: "4",
    title: "Social Media Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo4.src,
  },
  {
    id: "5",
    title: "Media Lead Consultant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo5.src,
  },
];
