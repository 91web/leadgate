//group slide images for News slide
import Slide1 from "../../../../../assets/img/news-page1.png";
import Slide2 from "../../../../../assets/img/news-page1.png";
import Slide3 from "../../../../../assets/img/news-page1.png";
import Slide4 from "../../../../../assets/img/news-page1.png";

//images for  article
import Article1 from "../../../../../assets/img/service1.png";
import Article2 from "../../../../../assets/img/service2.png";
import Article3 from "../../../../../assets/img/service3.png";
import Article4 from "../../../../../assets/img/service1.png";
import Article5 from "../../../../../assets/img/service2.png";
import Article6 from "../../../../../assets/img/service3.png";


//datatype images for News slide
export interface SliderType {
    id:string,
    src:string, 
    title: string,
    description:string,
  
  }
  
  export const SliderData: SliderType [] = [
    {  id:"1",
      src: Slide1.src, 
      title: "Latest News",
       description: "lorem  pufdbdjvk dvndkjvdsv nbbsvb\j lorem  pufdbdjvk dvndkjvdsv nbbsvb\j.",

    },
  
    { 
      id:"2",
      src: Slide2.src,
      title: "Latest News",
       description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.", 
    },
    {  id:"3",
      src: Slide3.src,
      title: "Latest News",
      description: "Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
     }
      ,
    {  id:"4",
      src: Slide4.src, 
      title: "Latest News",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet consectetur. ",
      },
  ];
  
  


  
  
//datatype images for Article page
export interface ArticleType {
    id:string,
    author:string, 
    time:string
    title:string,
    image: string,
    alt:string,
    description:string,
    buttonText:string,
  
  }
  
  export const ArticleData: ArticleType [] = [
    {
        id:"1",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Article1.src, 
          alt:" Aricle News 1",
          buttonText: "Learn More",
      },
      {
        id:"2",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Article2.src, 
          alt:" Aricle News 1",
          buttonText: "Learn More",
      },
      {
        id:"3",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description: "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est.",
        image: Article3.src, 
        alt:" Aricle News 1",
        buttonText: "Learn More",
      },
      {
        id:"4",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Article4.src, 
          alt:" Aricle News 1",
        buttonText: "Learn More",
      },
      {
        id:"5",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Article5.src, 
          alt:" Aricle News 1",
        buttonText: "Learn More",
      },
      {
        id:"6",
        author: "Chimzara",
        time:"2h ago",
        title: "Client Centered Approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit lectus integer pulvinar dui est. blandit lectus integer pulvinar dui est.",
          image: Article6.src, 
          alt:" Aricle News 1",
        buttonText: "Learn More",
      },
  ]