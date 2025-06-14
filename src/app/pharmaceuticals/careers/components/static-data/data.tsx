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
//import JLogo4 from "../../../../../assets/img/icon-career4.png";
//import JLogo5 from "../../../../../assets/img/icon-career5.png";

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
      " At LeadGate Pharmaceutical, you’ll join a vibrant community of professionals who are passionate about making a difference in healthcare.",
  },
  {
    id: "2",
    src: WLogo2.src,
    title: "Collaboration & Personal Development",
    description: "We believe in the power of teamwork and continuous learning.",
  },
  {
    id: "3",
    src: WLogo3.src,
    title: "Global Opportunities",
    description:
      "As a part of a forward-thinking pharmaceutical company, you’ll have the chance to engage with a global network of professionals and projects.",
  },
  {
    id: "4",
    src: WLogo4.src,
    title: "Innovation and Technology",
    description:
      " Lead Gate Pharmaceutical is at the forefront of innovation, embracing cutting-edge technology to revolutionize healthcare solutions.",
  },
  {
    id: "5",
    src: WLogo5.src,
    title: "Competitive Compensation",
    description:
      "We recognize and reward the dedication and hard work of our team.",
  },
  {
    id: "6",
    src: WLogo6.src,
    title: "Market Demand & Stability",
    description:
      "The pharmaceutical industry is a cornerstone of global healthcare, with steady growth and demand.",
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
    title: "Dispatch Rider",
    description:
      "Join us as a Dispatch Rider and play a vital role in our operations. You’ll ensure the safe and timely delivery of goods, supplies, and personnel while maintaining the highest standards of professionalism on the road.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo1.src,
  },
  {
    id: "2",
    title: "Social Media Manager",
    description:
      "Are you a creative storyteller with a passion for digital engagement? As our Social Media Manager, you’ll lead our online presence, crafting compelling content, engaging with our audience, and driving brand awareness across platforms.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo2.src,
  },
  {
    id: "3",
    title: "Driver",
    description:
      "Are you a creative storyteller with a passion for digital engagement? As our Social Media Manager, you’ll lead our online presence, crafting compelling content, engaging with our audience, and driving brand awareness across platforms.",
    location: "Abuja",
    type: "Full Time",
    src: JLogo3.src,
  },
 
];
