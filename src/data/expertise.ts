import {
  Server,
  Blocks,
  Search,
  Cpu,
  LayoutTemplate,
  Shield,
} from "lucide-react"

export const EXPERTISE = [
  {
    title: "Backend Systems & APIs",
    description:
      "Building scalable backend services, APIs, and infrastructure designed for reliability, maintainability, and real-world production use.",
    icon: Server,
  },
  {
    title: "AI Systems & Model Orchestration",
    description:
      "Designing AI-enabled systems, agent workflows, and orchestration patterns where models interact to solve complex tasks.",
    icon: Blocks,
  },
  {
    title: "Search, Retrieval & RAG Pipelines",
    description:
      "Building retrieval pipelines, hybrid search systems, and context-aware applications that improve the quality and grounding of AI systems.",
    icon: Search,
  },
  {
    title: "Applied Machine Learning",
    description:
      "Working on practical machine learning problems, including computer vision, segmentation, and intelligent software workflows.",
    icon: Cpu,
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "Developing end-to-end web products with thoughtful user experience, clean architecture, and strong integration across the stack.",
    icon: LayoutTemplate,
  },
  {
    title: "Security-Conscious Engineering",
    description:
      "Interested in application security, software vulnerabilities, and building systems with stronger safety, trust, and long-term robustness.",
    icon: Shield,
  },
]