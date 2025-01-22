//group slide images for partner page


//img for partner page hero
import PartnerHero1 from "../../../../../assets/img/partner-hero1.png";
import PartnerHero2 from "../../../../../assets/img/partner-hero2.png";
import PartnerHero3 from "../../../../../assets/img/partner-hero3.png";


  
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