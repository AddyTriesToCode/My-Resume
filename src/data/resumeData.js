export const resumeData = {
  // Personal Information
  personal: {
    name: "Aditya Raj",
    email: "aditya040403@gmail.com",
    phone: "+916287097795",
    location: "Ranchi,India",
    linkedin: "https://www.linkedin.com/in/aditya-raj-2600901a5",
    github: "https://github.com/AddyTriesToCode",
    portfolio: "https://yourportfolio.com",
    summary: "Passionate software developer with expertise in building innovative solutions. Focused on AI/ML and full-stack development."
  },

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Manipal Institute of Technology",
      location: "Manipal,Karnataka",
      duration: "2025",
      cgpa: "7.2",
      maxCgpa: "10.0",
      achievements: [
        "Selected for Virtual Reality Project Workshop",
        "Member of ADA Dramatics Club"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Web Development",
        "Database Management Systems",
        "Deep Learning",
        "Software Development Life Cycle"
      ]
    },
    {
      id: 2,
      degree: "Senior Secondary High School",
      institution: "Delhi Public School",
      location: "Ranchi,Jharkhand",
      duration: "2020",
      cgpa: "90.3",
      maxCgpa: "10.0",
      achievements: [
        "Participated in Intra-School Football Torunament",
        "Hiphop band performance at RIMS"
      ],
      coursework: [
        "CBSE"
      ]
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "St.Thomas School",
      location: "Ranchi,Jharkhand",
      duration: "2018",
      cgpa: "95.67",
      maxCgpa: "100.0",
      achievements: [
        "Participated in Zonal Football Tournament",
        "Bronze medalist in 1600m relay race"
      ],
      coursework: [
        "ICSE"
      ]
    }
  ],

  // Skills
  skills: {
    programming: ["Python", "JavaScript", "Java", "C++", "TypeScript"],
    webDevelopment: ["React", "Node.js", "HTML/CSS", "Express.js", "Next.js","Streamlit"],
    aiml: ["TensorFlow","Keras", "PyTorch", "Scikit-learn","RAG","Chroma Vector DB","LangChain","HuggingFace","Ollama","NLP", "Computer Vision"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "Docker", "VS Code", "Jupyter", "Postman"],
    cloud: ["AWS", "Google Cloud", "Heroku"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership"]
  },

  // Work Experience
  workExperience: [
    {
      id: 1,
      position: "Full Stack Android Developer",
      company: "JKC Softwares LLP",
      location: "Patna,India",
      duration: "Feb 2025 - August 2025 ",
      type: "Internship",
      description: "Part of IndiaBills Development Team",
      responsibilities: [
        "Developed responsive UI/UX using Android Studio",
        "Developed REST API endpoints for communication",
        "Created Stock Management, Inventory and Shopping module (frontend+backend logic)",
        "Role-Based Access Control, Session Mangement and Database Indexing"
      ],
      technologies: ["Android Studio","Node.JS","Express","PostgreSQL","Git Version Control","Postman","ThunderClient","AWS"]
    },
    {
      id: 2,
      position: "	Agentic AI Developer",
      company: "Golden Bird Education",
      location: "Pune,India",
      duration: "",
      type: "Internship",
      description: "Worked on developing and maintaining web applications",
      responsibilities: [
        "Built data preprocessing pipelines for structured and unstructured inputs using Python and Pandas, supporting AI agent workflows and improving automation reliability by 15%.",
        "Supported BI and analytics automation using GPT APIs and LangChain, and helped communicate system behavior and insights to non-technical teams through testing and documentation"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js","TensorFlow","Keras","Scikit-Learn","FastAPI","LangChain"]
    }
  ],

  // Projects
  projects: [ //Impact is not needed
    {
      id: 1,
      name: "ResearchIQ",
      description: "Built an intelligent chatbot using NLP to handle customer queries",
      technologies: ["Python", "LLM(Llama3)", "RAG", "embeddings", "Vector Search", "FastAPI", "LangChain", "Ollama", "ChromaDB", "React"],
      features: [
        "Created full-stack app for PDF uploads, chunking, embedding (via Hugging Face), and retrieval with Llama 3 generation; supports multi-document querying and chat history with 95%+ accuracy",
        "Combined FAISS based vector search with HuggingFace embeddings to reach < 200ms search latency with 60% time reduction",
        "Engineered chat agent for document Q&A: file upload → text chunking → embedding storage → similarity search → LLM synthesis"
      ],
      github: "https://github.com/AddyTriesToCode/ResearchIQ",
      impact: "Reduced customer support response time by 60%"
    },
    {
      id: 2,
      name: "CodeBuddy - AI Coding Assistant",
      description: "Full-stack AI coding companion allowing code completion, real-time error diagnosis and code correction",
      technologies: ["FastAPI", "React", "Chroma Vector DB", "GitHub OAuth", "JWT","Git Version Control"],
      features: [
        "Code refactoring, unit test generation, design-to-code conversion across 100+ languages",
        "Integrated REST APIs with PostgreSQL backend, React frontend, and secure GitHub OAuth + MFA authentication"
      ],
      github: "https://github.com/AddyTriesToCode/CodeBuddy",
      impact: "Successfully deployed and used by 500+ users"
    },
    {
      id: 3,
      name: "FactFlow - AI-Powered Fact-Checking News Aggregator",
      description: "Full-stack AI coding companion allowing code completion, real-time error diagnosis and code correction",
      technologies: ["NodeJS","Express","React","MongoDB","Vite","Google Material UI","FastAPI","Perigon","Gemini LLM","JWT, bcrypt","Custom hooks","Git Version Control"],
      features: [
        "Full-stack news aggregation platform with automated AI fact-checking",
        "Real-time article feeds from multiple trusted sources with advanced filtering",
        "Personalized topic collections (Smart Collections) for users",
        "JWT-based authentication with role-based access control"
      ],
      github: "https://github.com/AddyTriesToCode/CodeBuddy",
      impact: "Successfully deployed and used by 500+ users"
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "Foundations of Software Testing and Validation",
      issuer: "University of Leeds",
      date: "Nov 2024",
      link: "https://coursera.org/share/90dad5485dfec43cd84feb7e94813ade",
      description: "Explore various types of software testing and identify their advantages and disadvantages."
    },
    {
      id: 2,
      name: "Ethics in Engineering",
      issuer: "University of Michigan",
      date: "Aug 2025",
      link: "https://coursera.org/share/c1580a30bcd08a75c848d8bbc26f708b",
      description: "A working knowledge of the ethical foundations of engineering "
    },
    
  ],

  // Hobbies & Interests
  hobbies: [
    {
      id: 1,
      name: "Motorbiking",
      description: "A good ride always refreshes the mind :)",
      icon: "🏍️"
    },
    {
      id:2,
      name:"Football",
      description:"Been a Messi fan since I was a kid",
      icon:"⚽"
    },
    {
      id: 3,
      name: "Adventure",
      description: "Are you even reading this?",
      icon: "📸"
    },
    
    
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: "Hackathon Winner - TechFest 2024",
      description: "First place in 36-hour hackathon with AI-powered solution",
      date: "Mar 2024"
    },
    {
      id: 2,
      title: "Research Paper Published",
      description: "Published paper on NLP techniques in IEEE conference",
      date: "Feb 2024"
    }
  ]
}

export default resumeData
