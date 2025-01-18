//group slide images for real portifolio estate page
import Slide1 from "../../../../../assets/img/porfolio-page1.png";
import Slide2 from "../../../../../assets/img/porfolio-page1.png";
import Slide3 from "../../../../../assets/img/porfolio-page1.png";
import Slide4 from "../../../../../assets/img/porfolio-page1.png";

//images for service 
import Service1 from "../../../../../assets/img/service1.png";
import Service2 from "../../../../../assets/img/service2.png";
import Service3 from "../../../../../assets/img/service3.png";

//images for  project
import Project1 from "../../../../../assets/img/service1.png";
import Project2 from "../../../../../assets/img/service2.png";
import Project3 from "../../../../../assets/img/service3.png";
import Project4 from "../../../../../assets/img/service1.png";
import Project5 from "../../../../../assets/img/service2.png";
import Project6 from "../../../../../assets/img/service3.png";


//datatype images for real estate page
export interface SliderType {
    id:string,
    src:string, 
    title: string,
    description:string,
  
  }
  
  export const SliderData: SliderType [] = [
    {  id:"1",
      src: Slide1.src, 
      title: "Projects",
       description: "lorem  pufdbdjvk dvndkjvdsv nbbsvb\j lorem  pufdbdjvk dvndkjvdsv nbbsvb\j.",

    },
  
    { 
      id:"2",
      src: Slide2.src,
      title: "Projects",
       description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.", 
    },
    {  id:"3",
      src: Slide3.src,
      title: "Projects",
      description: "Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
     }
      ,
    {  id:"4",
      src: Slide4.src, 
      title: "Projects",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet consectetur. ",
      },
  ];
  
  

//datatype images for services  estate page
export interface ServiceType {
    id:string,
    title:string, 
    image: string,
    description:string,
    buttonText:string,
  
  }
  
  export const ServiceData: ServiceType [] = [
    {
        id:"1",
        title: "Construction",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Service1.src, 
        buttonText: "Get Construction Quote",
      },
      {
        id:"2",
        title: "Real Estate",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Service2.src, 
        buttonText: "Get Real Estate Quote",
      },
      {
        id:"3",
        title: "Pharmaceuticals",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
        image: Service3.src, 
        buttonText: "Get Pharmaceutical Quote",
      },
  ]


  
//datatype images for Project  estate page
export interface ProjectType {
    id:string,
    title:string, 
    subtitle:string,
    image: string,
    description:string,
    buttonText:string,
  
  }
  
  export const ProjectData: ProjectType [] = [
    {
        id:"1",
        title: "Construction",
        subtitle: "Construction",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Project1.src, 
          buttonText: "Learn More",
      },
      {
        id:"2",
        title: "Real Estate",
        subtitle: "Real Estate",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Project2.src, 
          buttonText: "Learn More",
      },
      {
        id:"3",
        title: "Pharmaceuticals",
        subtitle: "Pharmaceuticals",
        description: "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est.",
        image: Project3.src, 
        buttonText: "Learn More",
      },
      {
        id:"4",
        title: "Pharmaceuticals",
        subtitle: "Pharmaceuticals",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Project4.src, 
        buttonText: "Learn More",
      },
      {
        id:"5",
        title: "Pharmaceuticals",
        subtitle: "Pharmaceuticals",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Project5.src, 
        buttonText: "Learn More",
      },
      {
        id:"6",
        title: "Pharmaceuticals",
        subtitle: "Pharmaceuticals",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Project6.src, 
        buttonText: "Learn More",
      },
  ]