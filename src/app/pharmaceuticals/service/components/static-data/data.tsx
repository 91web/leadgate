
//images for service 
import Service1 from "../../../../../assets/img/service1.png";
import Service2 from "../../../../../assets/img/service2.png";
import Service3 from "../../../../../assets/img/service3.png";



//datatype images for services  estate page
export interface ServiceType {
    id:string,
    title:string, 
    image: string,
    description:string,
    buttonText:string,
  
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
    },
  ];


