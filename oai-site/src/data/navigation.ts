export interface NavLink {
  text: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { text: "Home", href: "/" },
  { text: "Workshops", href: "/workshops" },
  { text: "Speakers", href: "/speakers" },
  { text: "Program", href: "/program" },
  { text: "Call for Speakers", href: "/call-for-speakers" },
  { text: "Contact", href: "/contact" },
];

export const footerContent = {
  columns: [
    {
      title: "Content",
      links: [
        { text: "Home", href: "/" },
        { text: "Program", href: "/program" },
        { text: "Speakers", href: "/speakers" },
        { text: "Workshops", href: "/workshops" },
        { text: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Workshops",
      links: [
        { text: "Mastering Agentic Coding", href: "/workshops/master-agentic-coding" },
        { text: "Multi Agent Architecture", href: "/workshops/multi-agent" },
        { text: "Optimizing Retrieval", href: "/workshops/agent-retrieval" },
        { text: "Context Engineering", href: "/workshops/context-engineering" },
        { text: "LLM Training & Inference", href: "/workshops/optimize-llm-performance" },
      ],
    },
    {
      title: "More Workshops",
      links: [
        { text: "Mastering AI Agents", href: "/workshops/master-agents" },
        { text: "Trustworthy Agentic AI", href: "/workshops/trustworthy-agents" },
        { text: "AI-Native Career", href: "/workshops/ai-career" },
        { text: "Production Agents", href: "/workshops/production-agents" },
        { text: "OpenClaw", href: "/workshops/openclaw" },
        { text: "Enterprise RAG", href: "/workshops/ragsystems" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Code of Conduct", href: "/code-of-conduct" },
        { text: "Call for Speakers", href: "/call-for-speakers" },
      ],
    },
  ],
  address: "23 Lilac Dr, Warren, NJ 07059",
  phone: "+1 (641) 455-6100",
  email: "team@oaiconference.com",
  socials: [
    { text: "YouTube", href: "https://www.youtube.com/@oaiconference" },
    { text: "LinkedIn", href: "https://www.linkedin.com/company/oaico" },
  ],
  copyright: "Optimized AI Conference 2026",
};
