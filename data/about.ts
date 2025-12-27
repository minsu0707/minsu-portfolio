import {
  tistoryImg,
  velogImg,
  emailImg,
  githubImg,
  linkedinImg,
} from "@/assets";

export const careerData = [
  {
    id: "1",
    company: "대덕소프트웨어마이스터고등학교",
    position: "학생",
    type: "FE",
    startDate: "2024.03",
    endDate: "2026.04",
    description: "프론트엔드 개발을 중심으로 학습하고 있습니다.",
  },
];

export const blogLinks = [
  {
    id: "1",
    name: "Velog",
    url: "https://velog.io/@minsu0707/posts",
    icon: velogImg,
  },
  {
    id: "2",
    name: "Tistory",
    url: "https://minsu08.tistory.com",
    icon: tistoryImg,
  },
];

export const contactLinks = [
  {
    id: "1",
    name: "Email",
    url: "/about/sendEmail",
    icon: emailImg,
  },
  {
    id: "2",
    name: "Github",
    url: "https://github.com/minsu0707",
    icon: githubImg,
  },
  {
    id: "3",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/minsiuuu",
    icon: linkedinImg,
  },
];
