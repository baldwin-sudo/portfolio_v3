import luxurious from "../assets/luxurious-p.png";
import booking from "../assets/booking-p.png";
import translated from "../assets/translated.png";
import car_sales from "../assets/car-sales-p.png";
import digitalbank from "../assets/digitalbank.png";
import chatApp from "../assets/chat-app.png";

// types :
// frontend : 0
// fullstack:1
// ai and ml :2
const projects = [
   {
    title: "Distributed LLM training on AWS ",
    tech: ["python", "pytorch","terraform", "amazonaws", "docker"],
    img: null,
    state: "finished",
    type: 2,
    description:
      "Distributed DistilBERT training pipeline on AWS using PyTorch DDP, TorchElastic, Docker, and Terraform. Built a local multi-node simulation environment with Docker Compose to validate distributed orchestration, networking, checkpointing, and fault tolerance before deploying production infrastructure on AWS with Terraform.",
    demo: null,
    github: "https://github.com/baldwin-sudo/distributed-training",
  },
     {
    title: "Agentic Resume Enhancement System",
    tech: ["python", "langchain", "qdrant", "docker"],
    img: null,
    state: "finished",
    type: 2,
    description:
      "Built an agentic system using Langchain where agents are capable of analyzing job offers , enhancing my resume and generating cover letters .",
    demo: null,
    github: "https://github.com/baldwin-sudo/resume-ai-agent",
  },
 
  {
    title: "Rag based Chatbot",
    tech: ["python", "elastic", "openai", "streamlit"],
    img: null,
    type: 2,
    state: "finished",

    description:
      "An AI-powered chatbot with memory and history, built using LangChain and Streamlit. Just upload your PDFs—Lama will parse them, Elasticsearch will index the content, and OpenAI will deliver smart, context-aware responses.",
    demo: null,
    github: "https://github.com/baldwin-sudo/baldwin-templates",
  },
  {
    title: "Custom Deep learning Framework",
    tech: ["python", "pytorch", "rust"],
    img: null,
    state: "finished",
    type: 2,
    description:
      "I made my own Deep learning framework ,inspired by the design of Pytorch's.Implemented Firstly using Python ,and Secondly a minimal version using Rust.",
    demo: null,
    github: "https://github.com/baldwin-sudo/deep-learning-framework",
  },
];
export default projects;
