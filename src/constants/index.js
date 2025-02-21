import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [];
// yourlogo, yourlogo, yourlogo, yourlogo, yourlogo

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: " Try AI RecruiterX for FREE!",
    text: "",
    date: "2025",
    status: "",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "No Credit Card Required",
    text: "",
    date: "2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Start Hiring Smarter in Minutes!",
    text: "",
    date: "2025",
    status: "",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: " Get 20% OFF on Early access!",
    text: "",
    date: "2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Automate and optimize hiring";
  export const Text2 =
  " Manage multiple job openings efficiently";
  export const Text3 =
  "Scale hiring effortlessly";
  export const Text4 =
  "Find the right talent without the hassle";

export const collabContent = [
  {
    id: "0",
    title: "HR Teams & Recruiters",
    text: collabText,
  },
  {
    id: "1",
    title: "Staffing Agencies",
    text:Text2,
  },
  {
    id: "2",
    title: "Enterprises & Startups",
    text:Text3,
  },
  {
    id: "3",
    title: "SMBs & Growing Businesses",
    text:Text4,
  },
  
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 46,
    height: 46,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 44,
    height: 44,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 46,
    height: 46,
  },
  {
    id: "3",
    title: "Photoshop",
    icon: photoshop,
    width: 52,
    height: 52,
  },
  {
    id: "4",
    title: "Protopie",
    icon: protopie,
    width: 52,
    height: 52,
  },
  {
    id: "5",
    title: "Framer",
    icon: framer,
    width: 42,
    height: 42,
  }
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "",
    price: "0",
    features: [
  "All Starter features + Advanced AI ranking, email automation, interview scheduling",
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "",
    price: "49",
    features: [
      "All Starter features + Advanced AI ranking, email automation, interview scheduling",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "",
    price: "Custom ",
    features: [
      "All Pro features + Custom integrations, premium support, API access",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "AI-Powered Resume Screening",
    text: "Let AI analyze PDFs, Word files, and even image-based resumes to extract and rank candidate profiles.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: " Job Posting & Candidate Management",
    text: "Easily create job posts and fetch resumes from platforms like Naukri, Indeed, and LinkedIn.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Advanced Candidate Filtering",
    text: "Filter candidates by skills, experience, location, education, CGPA, and more to find the best fit.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Automated Email & Interview Scheduling",
    text: "Send bulk emails, schedule interviews, and manage multiple hiring stages effortlessly.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Integrated Video Interviews",
    text: "Conduct interviews via Zoom & Google Meet – directly from AI RecruiterX.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Collaboration & Hiring Team Management",
    text: "Tag recruiters, add comments, and track interview feedback in real time.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Offer Letter Generation",
    text: "Seamlessly send offer letters from the platform with custom templates.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "AI-Driven Candidate Ranking",
    text: "Automatically rank the top 5 best-matching candidates based on the job description.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
