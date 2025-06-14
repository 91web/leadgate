//images for service
import Service1 from "../../../../../assets/img/service1.png";
import Service2 from "../../../../../assets/img/service2.png";
import Service3 from "../../../../../assets/img/service3.png";
import Service4 from "../../../../../assets/img/service4.png";
import Service5 from "../../../../../assets/img/service5.png";

//images for service Grid
import HeroGrid1 from "../../../../../assets/img/hero-grid1.png";
import HeroGrid2 from "../../../../../assets/img/hero-grid2.png";
import HeroGrid3 from "../../../../../assets/img/hero-grid3.png";

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
    title: "Community Pharmacy",
    description: `Our Community Pharmacy lies at the heart of what we do—providing accessible, reliable, and compassionate pharmaceutical care to the communities we serve. We dispense prescription medications with precision and provide detailed counseling to ensure proper use and adherence. `,
    image: Service1.src,
    buttonText: "Visit Our Pharmacy",
    slug: "service-one",
  },
  {
    id: "2",
    title: "Skin Care Consultation",
    description: `Whether you’re dealing with acne, hyperpigmentation, sensitivity, or signs of aging, our trained consultants provide personalized assessments. We understand that skin health is a key part of overall wellness. Our Skin Care Consultation offer quality services to you.`,
    image: Service2.src,
    buttonText: "Book a Skin Consultation",
    slug: "service-two",
  },
  {
    id: "3",
    title: "Supermarket Services",
    description: `LeadGate’s Supermarket Services are designed to provide customers with a one-stop destination for both health and household essentials. We stock a carefully curated selection of groceries, baby care items, toiletries, cleaning supplies, beverages, and stationeries.`,
    image: Service3.src,
    buttonText: "Shop with Us Today",
    slug: "service-three",
  },
  {
    id: "4",
    title: "Health Checks",
    description: `We promote preventive healthcare through our in-store Health Check services. These include screenings for blood pressure, blood sugar levels, cholesterol, body mass index (BMI), and other vital health indicators. Our trained staff provides quick, accurate assessments and health advice based on your results.`,
    image: Service4.src,
    buttonText: "Schedule a Health Check",
    slug: "service-four",
  },
  {
    id: "5",
    title: "Hospital and Institutional Supply",
    description: `LeadGate is a trusted supplier of pharmaceutical products, medical consumables, and equipment to hospitals, clinics, schools, and corporate institutions. We ensure the timely and consistent delivery of high-quality, regulatory-compliant supplies that support smooth healthcare delivery.`,
    image: Service5.src,
    buttonText: "Request a Supply Quote",
    slug: "service-five",
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
