
import type { LucideIcon } from 'lucide-react';
import { Globe, TrendingUp, Smartphone, Palette, Layers, Users, Briefcase } from 'lucide-react';

// This type is compatible with the AI flow input
export type ServiceId = 'Website' | 'SEO' | 'Android/iOS App' | 'UI/UX';

export interface Service {
  id: ServiceId;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  details: string[];
  imagePlaceholder: string;
  imageHint: string;
}

export const services: Service[] = [
  {
    id: 'Website',
    name: 'Website Development',
    shortDescription: 'Crafting responsive, high-performing websites tailored to your business needs.',
    longDescription: 'We specialize in building custom websites, from engaging landing pages to complex web applications. Our focus is on exceptional user experience, robust performance, and scalable solutions designed to drive engagement and achieve your business objectives.',
    icon: Globe,
    details: [
      "Custom Web Design & Development",
      "E-commerce & Online Store Solutions",
      "Content Management Systems (CMS) like WordPress",
      "Responsive Design for All Devices (Desktops, Tablets, Mobiles)",
      "Website Performance Optimization & SEO-Friendly Architecture",
      "Ongoing Maintenance & Support"
    ],
    imagePlaceholder: "https://picsum.photos/600/400?random=1",
    imageHint: "web design"
  },
  {
    id: 'SEO',
    name: 'SEO Optimization',
    shortDescription: 'Boosting your online visibility and search engine rankings to attract more customers.',
    longDescription: 'Our SEO strategies are designed to increase your website\'s visibility on search engines like Google. We conduct in-depth analysis, keyword research, on-page and off-page optimization, and content strategies to improve your rankings and drive organic traffic.',
    icon: TrendingUp,
    details: [
      "Comprehensive SEO Audits & Strategy",
      "Keyword Research & Analysis",
      "On-Page SEO (Meta Tags, Content, Structure)",
      "Off-Page SEO (Link Building, Outreach)",
      "Local SEO for Geo-Targeted Businesses",
      "Technical SEO & Performance Monitoring"
    ],
    imagePlaceholder: "https://picsum.photos/600/400?random=2",
    imageHint: "analytics chart"
  },
  {
    id: 'Android/iOS App',
    name: 'Mobile App Development',
    shortDescription: 'Developing intuitive and powerful mobile applications for Android and iOS platforms.',
    longDescription: 'We create native and cross-platform mobile apps that offer seamless user experiences. From concept to launch, our team handles design, development, testing, and deployment, ensuring your app meets market demands and user expectations.',
    icon: Smartphone,
    details: [
      "Native iOS (Swift, Objective-C) & Android (Kotlin, Java) Development",
      "Cross-Platform Development (React Native, Flutter)",
      "App UI/UX Design & Prototyping",
      "API Integration & Backend Development for Apps",
      "App Store Submission & Optimization",
      "Post-Launch Support & Updates"
    ],
    imagePlaceholder: "https://picsum.photos/600/400?random=3",
    imageHint: "mobile app"
  },
  {
    id: 'UI/UX',
    name: 'UI/UX Design',
    shortDescription: 'Designing user-centric and aesthetically pleasing interfaces for web and mobile.',
    longDescription: 'Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital products. We follow a user-centered design process, including research, wireframing, prototyping, and user testing to deliver designs that are both beautiful and functional.',
    icon: Palette,
    details: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "User Interface (UI) Design for Web & Mobile",
      "User Experience (UX) Strategy & Optimization",
      "Usability Testing & Feedback Analysis",
      "Design System Creation & Branding"
    ],
    imagePlaceholder: "https://picsum.photos/600/400?random=4",
    imageHint: "design tools"
  },
];

export const serviceOptionsForSelect: { value: ServiceId; label: string }[] = services.map(s => ({ value: s.id, label: s.name }));

// For the About Us page, some generic "Our Values" or "Why Choose Us" items
export const coreValues = [
  {
    icon: Layers,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Centricity",
    description: "Our clients are at the heart of everything we do. We build partnerships based on trust and transparency.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description: "We are committed to the highest standards of quality and professionalism in all our projects.",
  },
];

