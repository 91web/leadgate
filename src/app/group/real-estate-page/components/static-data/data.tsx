//group slide images for real estate page
import Slide1 from "../../../../../assets/img/hero-slide1.png";
import Slide2 from "../../../../../assets/img/hero-slide1.png";
import Slide3 from "../../../../../assets/img/hero-slide1.png";
import Slide4 from "../../../../../assets/img/hero-slide1.png";

//datatype images for real estate page
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
    title: "Transforming Real Estates into Meaningful Investments",
    description: "lorem  pufdbdjvk dvndkjvdsv nbbsvbj .",
    buttonText: "See Property",
  },

  {
    id: "2",
    src: Slide2.src,
    title: "Building dreams, elevating health",
    description: "Lorem ipsum dolor sit amet consectetur.",
    buttonText: "Discover More",
  },
  {
    id: "3",
    src: Slide3.src,
    title: "Innovating for a better future",
    description: "Pellentesque habitant morbi tristique senectus.",
    buttonText: "Explore Now",
  },
  {
    id: "4",
    src: Slide4.src,
    title: "Empowering communities worldwide",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    buttonText: "Join Us",
  },
];
