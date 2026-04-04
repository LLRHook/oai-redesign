export interface Workshop {
  slug: string;
  title: string;
  speakerName: string;
  speakerTitle: string;
  speakerBio: string;
  description: string;
  overview: string;
  duration: string;
  date: string;
  time: string;
  location: string;
  whoShouldAttend: string[];
}

export const workshops: Workshop[] = [
  {
    slug: "master-agentic-coding",
    title: "Mastering Agentic Coding & GPUs",
    speakerName: "Anton Alexander",
    speakerTitle: "Sr. GenAI Specialist for NVIDIA - AWS",
    speakerBio: "Anton Alexander is a Senior Specialist in Generative AI at AWS, focusing on scaling large training and inference workloads with AWS HyperPod. As a veteran CUDA programmer and Kubernetes expert, he helps enterprises integrate NVIDIA technologies for distributed training, specializing in EKS and Slurm implementations. Anton works closely with MENA Region and Government sector clients to optimize GenAI solutions. He holds a patent pending for machine learning edge computing systems. Outside work, Anton is a Brazilian jiu-jitsu and collegiate boxing champion who enjoys flying planes.",
    description: "Mastering Agentic Coding and GPUs is a hands-on, 2-hour workshop focused on building, deploying, and scaling production-ready agentic systems. Learn how to structure agentic coding workflows, ensure reliability and safety, and effectively use GPUs and Kubernetes to run agent-driven workloads from experimentation through production.",
    overview: "Part 1 -- Building Effective Agentic Coding Systems: This section focuses on how to design and operate a production-ready agentic coding environment. We'll cover how to plan projects for agent collaboration, develop unit tests that guide and constrain agent behavior, and set up CI/CD pipelines with best practices for safety and reliability.\n\nPart 2 -- Compute Foundations for Agentic Systems: This section demystifies how modern compute especially GPUs power agentic systems at scale. We'll explain how GPUs work, best practices for using them effectively, and practical paths for learning CUDA without getting lost in theory.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "1:15pm - 3:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "AI practitioners and researchers.",
      "Developers seeking to transition into advanced agent-building roles.",
      "Organizations looking to implement custom AI solutions."
    ]
  },
  {
    slug: "multi-agent",
    title: "Multi Agent Architecture using ADK (Google)",
    speakerName: "Hamza Farooq",
    speakerTitle: "Founder & CEO, Traversaal.ai | Ex-Google & Walmart Labs | Adjunct Professor at UCLA",
    speakerBio: "Hamza Farooq is an AI Startup founder, educator, researcher, and practitioner with years of experience in cutting-edge AI development. He has worked with global organizations, governments, and top universities, including Stanford and UCLA, to design and deploy state-of-the-art AI solutions. Hamza is the author of Building LLM Applications from Scratch and the founder of Traversaal.ai, a company specializing in Enterprise Knowledge Management and AI guardrails.",
    description: "In this workshop, learn how to build collaborative multi-agent systems using Google's Agent-to-Agent (A2A) protocol, MCP, and the Google Agent Development Kit (ADK). This session shows how agents communicate, share context and tools, and coordinate tasks -- bringing everything together to design multi-agent systems that work together on complex problems.",
    overview: "AI systems are moving from single-agent chat experiences to Level 4 architectures, where agents coordinate with other agents and external tools to complete real workflows. This workshop provides a practical blueprint for building multi-agent ecosystems using Agent-to-Agent (A2A) communication, the Model Context Protocol (MCP) for standardized tool connectivity, and Google's Agent Development Kit (ADK) as a system design framework.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "3:15pm - 5:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "AI practitioners and researchers.",
      "Developers seeking to transition into advanced agent-building roles.",
      "Organizations looking to implement custom AI solutions."
    ]
  },
  {
    slug: "agent-retrieval",
    title: "Optimizing Retrieval for Agentic Systems",
    speakerName: "Trey Grainger",
    speakerTitle: "Founder & CEO, Searchkernel | Author, AI-Powered Search",
    speakerBio: "Trey Grainger is lead author of the book AI-Powered Search (Manning 2025) and instructor of Maven's AI-Powered Search: Modern Retrieval for Humans & Agents course. He is the Founder & CEO of Searchkernel, a software consultancy building the next generation of AI-powered search. He previously served as CTO of Presearch, a decentralized web search engine, and as Chief Algorithms Officer and SVP of Engineering at Lucidworks.",
    description: "Learn the core techniques and design patterns behind modern AI-powered retrieval. Since the quality of RAG systems is driven largely by retrieval, we'll focus on how to design and optimize retrieval for AI and agentic systems, and introduce agentic search, where agents coordinate retrieval through tool calls and relevance feedback loops.",
    overview: "Part 1: Modern Retrieval Techniques -- The first hour covers core mental models and techniques of modern AI Search including contextual relevance & ranking, sparse vector keyword search with BM25, dense vector semantic search, hybrid search, and multimodal search.\n\nPart 2: Agentic Search, Query Understanding, and RAG -- The second hour extends modern retrieval techniques specifically for agent-based search, covering agent-driven relevance feedback loops during information retrieval.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "3:15pm - 5:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "Software Engineers, Data Scientists, and Technical Product Managers wanting to implement RAG or Agents needing retrieval tools.",
      "Anyone wanting a survey of modern AI Search techniques.",
      "Search engineers looking to understand and implement agentic search.",
      "AI engineers needing to optimize the retrieval part of their RAG systems."
    ]
  },
  {
    slug: "optimize-llm-performance",
    title: "Optimizing LLM Training and Inference Performance on GPUs",
    speakerName: "Zeyuan (Faradawn) Yang",
    speakerTitle: "Technical Marketing Engineer - NVIDIA",
    speakerBio: "Zeyuan (Faradawn) Yang is a Technical Marketing Engineer at NVIDIA, specializing in GPU optimization for large language model training and inference workflows.",
    description: "This 1.5 hour workshop explores how to optimize GPU performance and reduce operational costs when training and serving large language models. Attendees will learn practical strategies for high-throughput training and low-latency inference, including modern parallelism techniques and disaggregated serving architectures used in production-scale LLM systems.",
    overview: "Learn practical strategies for high-throughput training and low-latency inference, including modern parallelism techniques (data, tensor, pipeline, and expert parallelism) and disaggregated serving architectures used in production-scale LLM systems.",
    duration: "1.5 hours",
    date: "March 31, 2026",
    time: "1:15pm - 2:45pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "ML engineers working with LLM training pipelines.",
      "Infrastructure engineers managing GPU clusters.",
      "Anyone looking to reduce costs in LLM deployment."
    ]
  },
  {
    slug: "context-engineering",
    title: "Context Engineering with Redis and LangChain",
    speakerName: "Robert Shelton",
    speakerTitle: "Applied AI Engineering Manager - Redis",
    speakerBio: "Robert Shelton is an Applied AI Engineering Manager at Redis, focused on building scalable AI agent systems through semantic caching, vector search, and intelligent context management.",
    description: "Design scalable AI agents by mastering context engineering -- the discipline of structuring memory, retrieval, and reasoning workflows so LLMs behave reliably in production. This workshop explores how Redis and LangChain enable high-performance agent systems through semantic caching, vector search, and intelligent context management.",
    overview: "Learn how to structure memory, retrieval, and reasoning workflows so LLMs behave reliably in production. Explore how Redis and LangChain enable high-performance agent systems through semantic caching, vector search, and intelligent context management.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "1:15pm - 3:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "AI engineers building production agent systems.",
      "Backend developers integrating LLMs with data infrastructure.",
      "Teams looking to improve LLM reliability through better context management."
    ]
  },
  {
    slug: "trustworthy-agents",
    title: "Trustworthy Agentic AI: Engineering Security, Compliance, and Governance",
    speakerName: "Raja Iqbal",
    speakerTitle: "Founder & CEO - Ejento AI",
    speakerBio: "Raja Iqbal is the Founder & CEO of Ejento AI, specializing in security and governance solutions for agentic AI systems in enterprise production environments.",
    description: "Agentic AI systems are moving from experimentation to production, autonomously browsing the web, executing code, and calling APIs. Their autonomy and probabilistic reasoning introduce new risks that traditional security cannot handle. This workshop explores threats such as prompt injection, API abuse, data leakage, and compliance issues, and discusses the governance, guardrails, and observability needed to deploy agentic systems safely in production.",
    overview: "Explore threats such as prompt injection, API abuse, data leakage, and compliance issues. Learn about governance, guardrails, and observability needed to deploy agentic systems safely in production.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "3:15pm - 5:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "Security engineers and architects.",
      "Compliance and governance professionals.",
      "AI engineers deploying agents to production."
    ]
  },
  {
    slug: "ai-career",
    title: "Building an AI-Native Career",
    speakerName: "Carter Abdallah",
    speakerTitle: "DevTech Engineer - NVIDIA",
    speakerBio: "Carter Abdallah is a DevTech Engineer at NVIDIA, helping developers leverage AI tools and agentic workflows to transform their professional capabilities.",
    description: "Explore how agentic CLI tools go beyond coding, how 'vibe insights' reduce the distance between data and action, and how ephemeral software can help you solve niche problems quickly. Learn to see the world through 'software vision' and develop the mindset needed to stay adaptable, productive, and ahead of the curve in an AI-driven era.",
    overview: "The way we work is evolving fast -- and AI-native professionals are learning how to move from using tools to building workflows. Learn to develop the mindset needed to stay adaptable, productive, and ahead of the curve.",
    duration: "1.5 hours",
    date: "March 31, 2026",
    time: "1:15pm - 2:45pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "Professionals looking to leverage AI in their careers.",
      "Students entering the AI workforce.",
      "Anyone wanting to build AI-native workflows."
    ]
  },
  {
    slug: "production-agents",
    title: "Building Production-ready Agentic AI Systems",
    speakerName: "Jonathan Vogel",
    speakerTitle: "Developer Advocate - AWS (with Raja Iqbal - Founder & CEO - Ejento AI)",
    speakerBio: "Jonathan Vogel is a Developer Advocate at AWS, working with the Strands SDK team to simplify agent development for real-world applications.",
    description: "Learn to build AI agents for real-world apps using Strands SDK. Strands simplifies agent development by leveraging state of the art models to plan, chain thoughts and call tools. In this workshop, you will gain hands-on experience creating agents across diverse use cases.",
    overview: "Hands-on experience creating agents across diverse use cases using Strands SDK. Learn how to plan, chain thoughts, and call tools with state-of-the-art models.",
    duration: "1.5 hours",
    date: "March 31, 2026",
    time: "3:15pm - 4:45pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "Developers building production AI applications.",
      "Teams evaluating agent frameworks.",
      "Engineers looking for hands-on agent development experience."
    ]
  },
  {
    slug: "openclaw",
    title: "OpenClaw: How to Actually Use it, with Practical Instructions",
    speakerName: "Brian Turcotte",
    speakerTitle: "Developer Relations - Kilo Code",
    speakerBio: "Brian Turcotte works in Developer Relations at Kilo Code, helping teams deploy and manage fully-managed OpenClaw agents.",
    description: "The first wave of AI gave us chatbots. Now we have agents that act -- managing email, triaging GitHub issues, monitoring systems, and running workflows 24/7. But most teams get stuck managing infrastructure instead of building value. This workshop shows you how to deploy and run a fully-managed OpenClaw agent with KiloClaw -- so you can focus on what your agent should actually do.",
    overview: "Deploy and run a fully-managed OpenClaw agent with KiloClaw. Learn to focus on what your agent should actually do instead of managing infrastructure.",
    duration: "1 hour",
    date: "March 31, 2026",
    time: "1:15pm - 2:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "DevOps engineers and platform teams.",
      "Developers wanting to deploy autonomous agents.",
      "Teams looking to automate workflows with AI agents."
    ]
  },
  {
    slug: "master-agents",
    title: "Mastering AI Agents",
    speakerName: "Hamza Farooq",
    speakerTitle: "Founder - Traversaal.ai / ex-Google",
    speakerBio: "Hamza Farooq is an AI Startup founder, educator, researcher, and practitioner. He has worked with global organizations, governments, and top universities, including Stanford and UCLA, to design and deploy state-of-the-art AI solutions.",
    description: "This workshop provides a comprehensive understanding of designing and building AI agents from the ground up. Instead of relying on pre-built frameworks like CrewAI or Autogen, participants will learn the core mechanics of agent development to create fully customizable solutions. By the end, attendees will have the tools and knowledge to build robust, scalable, and production-grade AI agents tailored to their needs.",
    overview: "Learn the core mechanics of agent development to create fully customizable solutions without relying on pre-built frameworks.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "1:15pm - 3:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "AI practitioners and researchers.",
      "Developers seeking to build agents from scratch.",
      "Organizations looking to implement custom AI solutions."
    ]
  },
  {
    slug: "ragsystems",
    title: "Optimizing Enterprise RAG Systems",
    speakerName: "Trey Grainger",
    speakerTitle: "Author - AI-Powered Search",
    speakerBio: "Trey Grainger is lead author of the book AI-Powered Search (Manning 2025) and Founder & CEO of Searchkernel. He has 18 years of experience in search and data science focused on building self-learning search platforms.",
    description: "RAG systems will be a mainstay in every enterprise. Tuning a RAG systems involves deep knowledge of both vector and traditional keyword search, coupled with efficient context management strategies for LLMs. This entire equation becomes more complicated when multiple modalities of data enter the equation.",
    overview: "Deep-dive into tuning enterprise RAG systems with both vector and traditional keyword search, coupled with efficient context management strategies for LLMs.",
    duration: "2 hours",
    date: "March 31, 2026",
    time: "3:15pm - 5:15pm",
    location: "Cobb Galleria",
    whoShouldAttend: [
      "Enterprise engineers building RAG pipelines.",
      "Search engineers and data scientists.",
      "Teams scaling retrieval-augmented generation systems."
    ]
  },
];
