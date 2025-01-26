//images for  article
import Article1 from "../../../../../assets/img/service1.png";
import Article2 from "../../../../../assets/img/service2.png";
import Article3 from "../../../../../assets/img/service3.png";
import Article4 from "../../../../../assets/img/service1.png";
import Article5 from "../../../../../assets/img/service2.png";
import Article6 from "../../../../../assets/img/service3.png";

//datatype images for Article page
export interface ArticleType {
  id: string;
  author: string;
  time: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  buttonText: string;
}

export const ArticleData: ArticleType[] = [
  {
    id: "1",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer",
    image: Article1.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
  {
    id: "2",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Article2.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
  {
    id: "3",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Article3.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
  {
    id: "4",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Article4.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
  {
    id: "5",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Article5.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
  {
    id: "6",
    author: "Chimzara",
    time: "2h ago",
    title: "Client Centered Approach",
    description:
      "Lorem ipsum dolor sit amet. Viverra magna habitant blandit lectus integer.",
    image: Article6.src,
    alt: " Aricle News 1",
    buttonText: "Learn More",
  },
];
