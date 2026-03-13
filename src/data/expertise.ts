import {
  CreditCard,
  Bot,
  Search,
  LayoutTemplate,
  Smartphone,
  ScanLine
} from "lucide-react"

export const EXPERTISE = [
  {
    title: "Payment Infrastructure & Orchestration",
    description: "Architecting and maintaining secure payment APIs. Building robust orchestration layers for complex workflows like crowdfunding, focusing on reliability and rate-limit handling.",
    icon: CreditCard,
  },
  {
    title: "Agentic AI Workflows",
    description: "Designing self-directed, multi-agent AI systems using LangGraph and LangChain. Building sophisticated decision-making backends that can decompose and solve complex tasks autonomously.",
    icon: Bot,
  },
  {
    title: "RAG & Hybrid Search",
    description: "Implementing advanced Retrieval-Augmented Generation pipelines using exact and semantic search via ChromaDB to improve contextual accuracy in LLM interactions.",
    icon: Search,
  },
  {
    title: "Full-Stack Web Architecture",
    description: "Developing responsive frontend platforms with Next.js/React and building scalable, RESTful or GraphQL-based backend systems with NestJS and Node.js.",
    icon: LayoutTemplate,
  },
  {
    title: "Computer Vision & ML",
    description: "Working on semantic segmentation pipelines, automated data workflows, and applied machine learning logic for product-focused computer vision applications.",
    icon: ScanLine,
  },
  {
    title: "Mobile Application Development",
    description: "Developing mobile applications with React Native and Swift, focusing on usability, performance, and polished user experience.",
    icon: Smartphone,
  },
];
