import PartHome1 from "../../../../../assets/img/partner-home1.png";
import PartHome2 from "../../../../../assets/img/partner-home2.png";
import PartHome3 from "../../../../../assets/img/partner-home3.png";


export interface PartnerHomeType {
  id: string;
  title: string;
  image: string;
}

export const PartnerHomeData: PartnerHomeType[] = [
  {
    id: "1",
    title: "IGHALO PARK",
    image: PartHome1.src,
  },
  {
    id: "2",
    title: "MIKEL HEIGHTS",
    image: PartHome2.src,
  },
  {
    id: "2",
    title: "OKOCHA RESIDENCES",
    image: PartHome3.src,
  },
];