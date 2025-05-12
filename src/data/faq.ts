
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'faq1',
    question: "What IT services does Karan Techno offer?",
    answer: "Karan Techno provides a comprehensive range of IT services including custom website development, SEO optimization, mobile app development for Android and iOS platforms, and intuitive UI/UX design. We tailor our solutions to meet your specific business needs.",
  },
  {
    id: 'faq2',
    question: "How long does a typical project take to complete?",
    answer: "The timeline for a project varies significantly based on its scope, complexity, and the specific requirements. After an initial consultation and detailed discussion of your needs, we will provide a project proposal with an estimated timeline.",
  },
  {
    id: 'faq3',
    question: "What is your process for developing a new website or app?",
    answer: "Our process is collaborative and iterative. It typically involves: 1. Discovery & Planning (understanding your goals), 2. Design (UI/UX wireframes and mockups), 3. Development (coding and implementation), 4. Testing (quality assurance), 5. Deployment (launch), and 6. Ongoing Support & Maintenance.",
  },
  {
    id: 'faq4',
    question: "How can SEO help my business?",
    answer: "Search Engine Optimization (SEO) helps improve your website's visibility on search engines like Google. By ranking higher for relevant keywords, you can attract more organic (non-paid) traffic, leading to increased brand awareness, more leads, and potentially higher sales.",
  },
  {
    id: 'faq5',
    question: "Do you offer support after the project is launched?",
    answer: "Yes, we offer post-launch support and maintenance packages to ensure your website or application continues to run smoothly, remains secure, and stays up-to-date with the latest technologies and trends. We believe in building long-term partnerships.",
  },
  {
    id: 'faq6',
    question: "How much will my project cost?",
    answer: "Project costs depend on various factors, including the complexity of the design and development, the number of features, and the timeline. We provide a detailed and transparent quote after understanding your project requirements. Contact us for a free consultation and estimate.",
  },
];
