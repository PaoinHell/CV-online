import avatar from "../../public/avatar.jpg";
import icon_github from "../../public/icons/icon_github.png";
import icon_email from "../../public/icons/icon_email.png";
import icon_phone from "../../public/icons/icon_phone.png";
import icon_fb from "../../public/icons/icon_fb.png";

export const avatarImg = avatar;

export const info = [
  { icon: icon_github, name: "Github", value: "https://github.com/PaoinHell" },
  { icon: icon_email, name: "Email", value: "paowork1410@outlook.com" },
  { icon: icon_phone, name: "Phone", value: "+84 939 092 594" },
  {
    icon: icon_fb,
    name: "Facebook",
    value: "fb.com/pao.multiverse.1410",
  },
];

export const skills = [
  { name: "JavaScript", group: "Tech Stacks" },
  { name: "NodeJS", group: "Tech Stacks" },
  { name: "ReactJS", group: "Tech Stacks" },
  { name: "MongoDB", group: "Tech Stacks" },
  { name: "C# basic", group: "Tech Stacks" },
  { name: "ASP.NET Core", group: "Tech Stacks" },
  { name: "Figma", group: "Tools" },
  { name: "Office Tools", group: "Tools" },
  { name: "Requirement Analysis", group: "Soft Skills" },
  { name: "Email Writing", group: "Soft Skills" },
  { name: "Teamwork", group: "Soft Skills" },
  { name: "Sociable, Friendly", group: "Soft Skills" },
  { name: "Basic English Communication", group: "Language" },
  { name: "TOEIC (Updating...)", group: "Cerfications" },
];

export const exps = [
  {
    time: "05/2025 - 10/2025",
    name: "FPT Information System Corp",
    position: "Business Analysis",
    description: [
      "Gathered and analyzed customer requirements to understand business needs; created clear documentation using UML, BPMN, SRS, BRD, and CMC.",
      "Designed user-friendly UI/UX with Figma; assisted users during system implementation and provided training to ensure smooth adoption.",
      "Prepared test case checklists and tested the product before delivery; collected user feedback and suggested improvements for future versions.",
    ],
  },
  {
    time: "10/2025",
    name: "CV Online | Teamsize: 1",
    position: "Frontend Developer",
    description: [
      "Tech Stack: Vite+React, Tailwind",
      "Make it beneficial for employers to look through the applicant's information",
    ],
  },
  {
    time: "09/2024 - 12/2024",
    name: "Website Room Management and Rental | Team size: 2",
    position: "Backend Developer - API Services",
    description: [
      "Tech Stack: MERN Stack, Cloudinary, VN Pay, JWT Authentication",
      "Developed backend services using the MERN stack to manage room rental operations, including room availability, tenant management, and booking schedules.",
      "Integrated VN Pay for secure online payment processing, allowing tenants to pay rent monthly through the website.",
      "Implemented JWT-based authentication for landlords and tenants to ensure secure access to system features.",
      "Handled image uploads and storage using Cloudinary for room photos and documentation.",
      "Designed APIs to support search, booking, and rental functionalities, providing smooth interaction between frontend and backend.",
    ],
  },
];

export const educations = [
  {
    time: "2022-2026",
    name: "HCMC University of Foreign Languages - Information Technology (HUFLIT)",
    details: ["GPA: 3.3 / 4.0", "Major: Software Engineer"],
  },
];
