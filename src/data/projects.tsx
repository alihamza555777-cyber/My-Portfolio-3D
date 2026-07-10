import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live }: { live?: string }) => {
  if (!live || live === "#") return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  aws: brand("AWS", "cloudflare-mono.svg"),
  pineScript: brand("Pine Script", "javascript-mono.svg"),
  tradingView: brand("TradingView", "vercel-mono.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  java: brand("Java", "javascript-mono.svg"),
  db: brand("Database", "postgresql-mono.svg"),
  flutter: brand("Flutter", "react-mono.svg"),
  dart: brand("Dart", "typescript-mono.svg"),
  gemini: brand("Gemini API", "anthropic-mono.svg"),
  vite: brand("Vite", "nextdotjs-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Framer Motion", "motion.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "proj-1",
    category: "Algo Trading",
    title: "SMC Trading Strategy",
    src: `${BASE_PATH}/trading-strategy.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.pineScript],
      backend: [PROJECT_SKILLS.tradingView],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A TradingView strategy script built with Pine Script v5, implementing Smart Money Concepts including Order Blocks, FVGs, and Liquidity Sweeps.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
    github: "https://github.com/alihamza555777-cyber",
    live: "#",
  },
  {
    id: "proj-2",
    category: "Fintech",
    title: "Risk Management Tool",
    src: `${BASE_PATH}/risk-management.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A full-stack risk calculator for prop firm traders. Features real-time market data, preset profiles for firms like FTMO & Maven, and dynamic position sizing.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
    github: "https://github.com/alihamza555777-cyber",
    live: "#",
  },
  {
    id: "proj-3",
    category: "Web Dev",
    title: "3D Design Portfolio",
    src: `${BASE_PATH}/portfolio-3d.png`,
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.motion,
      ],
      backend: [PROJECT_SKILLS.sockerio, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A premium 3D design portfolio built with Next.js, TypeScript, and React. Features immersive Spline 3D interactions, high-performance GSAP and Framer Motion transitions, Socket.io real-time connection counters, and full-screen overlay navigation.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
    github: "https://github.com/alihamza555777-cyber",
    live: "#",
  },
  {
    id: "proj-4",
    category: "Desktop App",
    title: "Hotel Management System",
    src: `${BASE_PATH}/hotel-management.jpg`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.java],
      backend: [PROJECT_SKILLS.db],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A comprehensive desktop application developed in Java for hotel employees. It streamlines operations by managing room bookings, guest check-ins, and daily administrative tasks efficiently on PC.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
    github: "https://github.com/alihamza555777-cyber",
    live: "",
  },
  {
    id: "proj-5",
    category: "AI App Dev",
    title: "Halal AI Lens",
    src: `${BASE_PATH}/halal-ai-lens.jpg`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.gemini],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Flutter mobile application that scans product ingredient lists and E-numbers to instantly identify Halal, Haram, or Mushbooh status with detailed Gemini-powered analysis.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
    github: "https://github.com/ali-hamza/halal-ai-lens",
    live: "",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  image?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Software Engineer Intern Certification",
    issuer: "HackerRank",
    date: "April 25, 2026",
    url: "https://www.hackerrank.com/certificates/a24b0e89e608",
    image: "/images/certifications/hackerrank-intern-thumb.png",
  },
  {
    id: "cert-2",
    title: "Google AI Essentials Specialization",
    issuer: "Google",
    date: "July 1, 2026",
    url: "https://coursera.org/share/c6e7e20f9f1af410ad097749e1564b62",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
  {
    id: "cert-3",
    title: "Stay Ahead of the AI Curve",
    issuer: "Google",
    date: "July 1, 2026",
    url: "https://coursera.org/share/cce848292a61becc749052a84df6e1a5",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
  {
    id: "cert-4",
    title: "Discover the Art of Prompting",
    issuer: "Google",
    date: "June 30, 2026",
    url: "https://coursera.org/share/f8943422ea3b1335b85e53ba058312d1",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
  {
    id: "cert-5",
    title: "Use AI Responsibly",
    issuer: "Google",
    date: "June 30, 2026",
    url: "https://coursera.org/share/aaaad9d2a33cea75f90593b815603a37",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
  {
    id: "cert-6",
    title: "Maximize Productivity with AI Tools",
    issuer: "Google",
    date: "June 26, 2026",
    url: "https://coursera.org/share/2bd0ea5b4995848694f4c81e97976e28",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
  {
    id: "cert-7",
    title: "Introduction to AI",
    issuer: "Google",
    date: "June 5, 2026",
    url: "https://coursera.org/share/3d53f5f2a06e084a7dae707a21f3169f",
    image: "/images/certifications/ai-essentials-thumb.png",
  },
];

export default projects;
