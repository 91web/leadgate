// About Us Page Data
// About Us Page Data
import AboutHero1 from "../../../../../assets/img/aboutus-slide1.png";
import AboutHero2 from "../../../../../assets/img/aboutus-slide2.png";
import AboutHero3 from "../../../../../assets/img/aboutus-slide3.png";
import AboutHero4 from "../../../../../assets/img/aboutus-slide4.png";
import AboutHero5 from "../../../../../assets/img/aboutus-slide5.png";
import AboutHero6 from "../../../../../assets/img/aboutus-slide6.png";
import AboutHero7 from "../../../../../assets/img/aboutus-slide6.png";
import AboutHero8 from "../../../../../assets/img/aboutus-slide6.png";

// Journey Page Data image
import JourneyFeature1 from "../../../../../assets/img/division1.png";

//Group Lead Gate
export interface AboutHeroType {
  id: string;
  src: string;
  alt: string;
}

export const AboutHero: AboutHeroType[] = [
  { id: "1", src: AboutHero1.src, alt: "About Event 1" },
  { id: "2", src: AboutHero2.src, alt: "About  Event  2" },
  { id: "3", src: AboutHero3.src, alt: "About  Event  3" },
  { id: "4", src: AboutHero4.src, alt: "About  Event  4" },
  { id: "5", src: AboutHero5.src, alt: "About  Event  5" },
  { id: "6", src: AboutHero6.src, alt: "About  Event  6" },
  { id: "7", src: AboutHero7.src, alt: "About Event 7" },
  { id: "8", src: AboutHero8.src, alt: "About Event 8" },
];

//About us Core Values Data
export interface ValueType {
  id: string;
  title: string;
  descriptions: string;
}

export const ValueData: ValueType[] = [
  {
    id: "01",
    title: "Excellence",
    descriptions:
      "Excellence is the benchmark for everything we do. We uphold the highest standards of quality, innovation, and precision across all our divisions. From cutting-edge medical advancements to architectural masterpieces and robust infrastructure, we consistently push boundaries to deliver superior results.",
  },
  {
    id: "02",
    title: "Customer Satisfaction",
    descriptions:
      "At Leadgate Groups, our customers are at the heart of everything we do. We listen, innovate, and strive to exceed expectations by delivering tailored solutions that align with their needs. Whether it's delivering life-saving pharmaceuticals, constructing world-class infrastructure, or developing dream homes, we are dedicated to ensuring an unparalleled customer experience.",
  },


];

//Group Lead Gate
export interface JourneyType {
  id: string;
  date: string;
  image: string;
  alt: string;
  description: string;
}

export const JourneyData: JourneyType[] = [
  {
    id: "1",
    date: "2020 - 2021",
    image: JourneyFeature1.src,
    alt: "Journey Feature 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
  },
  {
    id: "2",
    date: "2021 - 2022",
    image: JourneyFeature1.src,
    alt: "Journey Feature 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
  },
  {
    id: "3",
    date: "2022 - 2023",
    image: JourneyFeature1.src,
    alt: "Journey Feature 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
  },
  {
    id: "4",
    date: "2022 - 2023",
    image: JourneyFeature1.src,
    alt: "Journey Feature 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui est.",
  },
];
