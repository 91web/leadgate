// data for image
import PharmaHero1 from "../../../../assets/img/pharmaceuticals-hero3.png";
import PharmaHero2 from "../../../../assets/img/pharmaceuticals-hero4.png";
import PharmaHero3 from "../../../../assets/img/pharmaceuticals-hero10.png";
//data for Pharma Data Division

import PharmaHero4 from "../../../../assets/img/pharmaceuticals-hero6.png";
import PharmaHero5 from "../../../../assets/img/pharmaceuticals-hero7.png";
import PharmaHero6 from "../../../../assets/img/pharmaceuticals-hero8.png";
//Instagram Hero D=Image
import InstagramHero1 from "../../../../assets/img/instagram-hero1.png";
import InstagramHero2 from "../../../../assets/img/instagram-hero2.png";
import InstagramHero3 from "../../../../assets/img/instagram-hero3.png";
import InstagramHero4 from "../../../../assets/img/instagram-hero4.png";
import InstagramHero5 from "../../../../assets/img/instagram-hero5.png";
import InstagramHero6 from "../../../../assets/img/instagram-hero6.png";

// datatype for pharma
export interface PharmaType {
  id: string;
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

export const PharmaData: PharmaType[] = [
  {
    id: "1",
    image: PharmaHero1.src,
    title: "Retail Pharmacy and Supermarket Services",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
  {
    id: "2",
    image: PharmaHero2.src,
    title: "Hospital and Institutional Supply",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
  {
    id: "3",
    image: PharmaHero3.src,
    title: "Regulatory Compliance and Quality Assurance",
    description: "At our retain outlet we offer more than medications ",
    buttonText: "Explore More",
  },
];

// datatype for pharma
export interface PharmaDivisionType {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const PharmaDivision: PharmaDivisionType[] = [
  {
    id: "1",
    title: "Retail Pharmacy and Supermarket Services",
    image: PharmaHero4.src,
    description: `Lorem ipsum dolor sit amet consectetur.
         Viverra magna habitant blandit lectus integer pulvinar dui est.  
        blandit lectus integer pulvinar dui est.`,
  },

  {
    id: "2",
    title: "Over-the-counter (OTC) Medications ",
    image: PharmaHero5.src,
    description: `Lorem ipsum dolor sit amet consectetur.
            Viverra magna habitant blandit lectus integer pulvinar dui est.  
           blandit lectus integer pulvinar dui est.`,
  },
  {
    id: "3",
    title: "Nutritional supplements",
    image: PharmaHero6.src,
    description: `Lorem ipsum dolor sit amet consectetur.
                Viverra magna habitant blandit lectus integer pulvinar dui est.  
               blandit lectus integer pulvinar dui est.`,
  },
  {
    id: "4",
    title: "Health Screening and immunization",
    image: PharmaHero4.src,
    description: `Lorem ipsum dolor sit amet consectetur.
                    Viverra magna habitant blandit lectus integer pulvinar dui est.  
                   blandit lectus integer pulvinar dui est.`,
  },

  {
    id: "5",
    title: " Medical Supplies and Equipment",
    image: PharmaHero6.src,
    description: `Lorem ipsum dolor sit amet consectetur.
                    Viverra magna habitant blandit lectus integer pulvinar dui est.  
                   blandit lectus integer pulvinar dui est.`,
  },
  {
    id: "6",
    title: "Personalized Diet / Meal Planning",
    image: PharmaHero5.src,
    description: `Lorem ipsum dolor sit amet consectetur.
                        Viverra magna habitant blandit lectus integer pulvinar dui est.  
                       blandit lectus integer pulvinar dui est.`,
  },
];

// datatype for pharma
export interface InstagHeroType {
  id: string;
  image: string;
  alt: string;
}

export const InstagHero: InstagHeroType[] = [
  {
    id: "1",
    image: InstagramHero1.src,
    alt: "Instagram Hero 1",
  },
  {
    id: "2",
    image: InstagramHero2.src,
    alt: "Instagram Hero 2",
  },
  {
    id: "3",
    image: InstagramHero3.src,
    alt: "Instagram Hero 3",
  },
  {
    id: "4",
    image: InstagramHero4.src,
    alt: "Instagram Hero 4",
  },
  {
    id: "5",
    image: InstagramHero5.src,
    alt: "Instagram Hero 5",
  },
  {
    id: "6",
    image: InstagramHero6.src,
    alt: "Instagram Hero 6",
  },
];
