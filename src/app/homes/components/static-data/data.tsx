//group slide images for home page
import Slide1 from "../../../../assets/img/home-slide1.png";
import Slide2 from "../../../../assets/img/home-slide1.png";
import Slide3 from "../../../../assets/img/home-slide1.png";
import Slide4 from "../../../../assets/img/home-slide1.png";




//images for  Property
import Property1 from "../../../../assets/img/property1.png";
import Property2 from "../../../../assets/img/property1.png";
import Property3 from "../../../../assets/img/property1.png";


//datatype images for home page
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












//datatype images for Article page
export interface PropertyType {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const PropertyData: PropertyType[] = [
  {
    id: "1",
    title: "Real Estate Division",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer",
    image: Property1.src,
  
  },
  {
    id: "2",
    title: "Construction Division",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Property2.src,
  },
  {
    id: "3",
    title: "Pharmaceuticals Division",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Property3.src,
  },

];
