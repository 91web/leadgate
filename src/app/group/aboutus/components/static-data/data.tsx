
// About Us Page Data
// About Us Page Data
import AboutHero1 from '../../../../../assets/img/aboutus-slide1.png';
import AboutHero2 from '../../../../../assets/img/aboutus-slide2.png';
import AboutHero3 from '../../../../../assets/img/aboutus-slide3.png';
import AboutHero4 from '../../../../../assets/img/aboutus-slide4.png';
import AboutHero5 from '../../../../../assets/img/aboutus-slide5.png';
import AboutHero6 from '../../../../../assets/img/aboutus-slide6.png';
import AboutHero7 from '../../../../../assets/img/aboutus-slide6.png';
import AboutHero8 from '../../../../../assets/img/aboutus-slide6.png';
//Group Lead Gate 
export interface AboutHeroType {
    id:string,
    src:string, 
    alt: string,

  }
  
  export const AboutHero: AboutHeroType [] = [
    {  id:"1",
      src: AboutHero1.src,
      alt: "About Hero 1",

    },
    {  id:"2",
      src: AboutHero2.src,
      alt: "About Hero 2",

    },
    {  id:"3",
      src: AboutHero3.src,
      alt: "About Hero 3",
   
    },
    {  id:"4",
      src: AboutHero4.src,
      alt: "About Hero 4",

    },
    {  id:"5",
      src: AboutHero5.src,
      alt: "About Hero 5",

    },
    {  id:"6",
      src: AboutHero6.src,
      alt: "About Hero 6",
   
    },
    {  id:"7",
      src: AboutHero7.src,
      alt: "About Hero 7",  

    },
    {  id:"8",
      src: AboutHero8.src,
      alt: "About Hero 8",  

    },
  ]


  //About us Core Values Data 
  export interface ValueType {
    id:string,
    title: string,
    descriptions: string,

  }
  
  export const ValueData: ValueType [] = [
    {  id:"1",
        title: "01 Our Mission",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id. Odio vestibulum urna auctor cursus. Et semper pellentesque dui fermentum mauris varius. Sagittis cras urna amet pulvinar facilisis massa diam.",
    
    },
    {  id:"2",
        title: "02 Our Vision", 
        descriptions: "Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id. Odio vestibulum urna auctor cursus. Et semper pellentesque dui fermentum mauris varius. Sagittis cras urna amet pulvinar facilisis massa diam.",
    
     },
     {  id:"3",
        title: "03 Our Vision", 
        descriptions: "Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id. Odio vestibulum urna auctor cursus. Et semper pellentesque dui fermentum mauris varius. Sagittis cras urna amet pulvinar facilisis massa diam.",
    
     },
     {  id:"4",
        title: "04 Our Vision", 
        descriptions: "Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id. Odio vestibulum urna auctor cursus. Et semper pellentesque dui fermentum mauris varius. Sagittis cras urna amet pulvinar facilisis massa diam.",
    
     },
     {  id:"5",
        title: "05 Our Vision", 
        descriptions: "Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id. Odio vestibulum urna auctor cursus. Et semper pellentesque dui fermentum mauris varius. Sagittis cras urna amet pulvinar facilisis massa diam.",
    
     },
    
    ]