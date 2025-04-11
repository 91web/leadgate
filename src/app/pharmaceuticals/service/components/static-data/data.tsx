//images for service
import Service1 from "../../../../../assets/img/service1.png";
import Service2 from "../../../../../assets/img/service2.png";
import Service3 from "../../../../../assets/img/service3.png";

//images for service Grid
import HeroGrid1 from "../../../../../assets/img/hero-grid1.png";
import HeroGrid2 from "../../../../../assets/img/hero-grid1.png";
import HeroGrid3 from "../../../../../assets/img/hero-grid1.png";

//datatype images for services  estate page
export interface ServiceType {
  id: string;
  title: string;
  image: string;
  description: string;
  buttonText: string;
  slug: string;
}

export const ServiceData: ServiceType[] = [
  {
    id: "1",
    title: "Retail Pharmacy and Supermarket Services Division",
    description: `At our retail outlets, we offer more than medications – 
      we provide everyday essentials 
      through our supermarket services, making us a one-stop shop for health and household needs. 
      each healthcare provider, ensuring availability.`,
    image: Service1.src,
    buttonText: "Explore our range of products",
    slug: "service-one",
  },
  {
    id: "2",
    title: "Hospital and Institutional Supply",
    description: `We collaborate with hospitals, clinics, 
      and healthcare institutions to provide customized pharmaceutical
       supply solutions. Our dedicated team ensures seamless logistics
      to meet the unique needs of each healthcare provider,
      ensuring availability and continuity of care.`,
    image: Service2.src,
    buttonText: "Hospital and Institutional Supply",
    slug: "service-two",
  },
  {
    id: "3",
    title: "Regulatory Compliance and Quality Assurance ",
    description: `At our retail outlets, we offer more than medications – 
      we provide everyday essentials through our supermarket services, 
      making us a one-stop shop for health and household needs.
       each healthcare provider, ensuring availability.`,
    image: Service3.src,
    buttonText: "Get Pharmaceutical Quote",
    slug: "service-three",
  },
];

//datatype images for services grid page
export interface GridType {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const GridData: GridType[] = [
  {
    id: "1",
    title: "Convenience",
    description: `Avoid the wait; access your medications with ease and pick them up at your convenience.`,
    image: HeroGrid1.src,
  },
  {
    id: "2",
    title: "Safety",
    description: `We source all medications exclusively from certified manufacturers
       and trusted pharmacies to ensure quality and peace of mind.`,
    image: HeroGrid2.src,
  },
  {
    id: "3",
    title: "Consultation",
    description: `Have questions? Our pharmacists are available 
      around the clock to provide expert guidance.`,
    image: HeroGrid3.src,
  },
];
