//group slide images for partner page
import Slide1 from "../../../../../assets/img/partner-event1.png";
import Slide2 from "../../../../../assets/img/partner-event1.png";
import Slide3 from "../../../../../assets/img/partner-event1.png";
import Slide4 from "../../../../../assets/img/partner-event1.png";

//img for partner page hero
import PartnerHero1 from "../../../../../assets/img/partner-hero1.png";
import PartnerHero2 from "../../../../../assets/img/partner-hero2.png";
import PartnerHero3 from "../../../../../assets/img/partner-hero3.png";



//datatype images for real estate page
export interface SliderType {
    id:string,
    src:string, 
    title: string,
    description:string
    buttonText:string,
    bulletPoint:string[]
  
  }
  
  export const SliderData: SliderType [] = [
    {  id:"1",
      src: Slide1.src, 
      title: "Our Valued Partner",
       description: "lorem  pufdbdjvk dvndkjvdsv nbbsvb\j .",
        buttonText: "See Property",
        bulletPoint:["Lorem ipsum dolor sit amet consectetur.", "Pellentesque habitant morbi tristique senectus.", "Praesent commodo cursus magna, vel scelerisque nisl"]

    },
  
    { 
      id:"2",
      src: Slide2.src,
      title: "Our Valued Partner",
       description: "Lorem ipsum dolor sit amet consectetur.", 
       buttonText: "Discover More" ,
       bulletPoint:["Lorem ipsum dolor sit amet consectetur.", "Pellentesque habitant morbi"]
    },
    {  id:"3",
      src: Slide3.src,
      title: "Our Valued Partner",
      description: "Pellentesque habitant morbi tristique senectus.",
      buttonText: "Explore Now",
      bulletPoint:["Lorem ipsum dolor sit amet consectetur.", "Pellentesque habitant morbi tristique senectus.", "Praesent commodo cursus magna, vel scelerisque nisl"]
    }
      ,
    {  id:"4",
      src: Slide4.src, 
      title: "Our Valued Partner",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
       buttonText: "Join Us" ,
      bulletPoint:["Lorem ipsum dolor sit amet consectetur.", "Pellentesque habitant morbi tristique senectus."]
      },
  ];
  

  
//datatype images fo partner page
export interface PartnerType {
  id:string,
  name: string,
  image:string, 
  alt:string
}

export const PartnerData: PartnerType [] = [
  
  {
    id:"1",
    name: "Leslie Alexander",
    image: PartnerHero1.src,
    alt:"Partner Hero 1",
  },
  {
    id:"2",
    name: "Jenny Wilson",
    image: PartnerHero2.src,
    alt:"Partner Hero 2",
  },
  {
    id:"3",
    name: "Bessie Cooper",
    image: PartnerHero3.src,
    alt:"Partner Hero 3",
  },
];