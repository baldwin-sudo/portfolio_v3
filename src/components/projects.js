import luxurious from "../assets/luxurious-p.png";
import booking from "../assets/booking-p.png";
const projects = [
  {
    title: "Luxurious Clothing",
    tech: ["reactjs", "tailwindcss"],
    img: luxurious,
    description:
      "Luxury clothes shop , developped using React js , and fakeStore Api for the data , deployed using netlify .",
    demo: "https://eluxury.netlify.app/",
    github: "https://github.com/baldwin-sudo/eluxury",
  },
  {
    title: "Baldwin Books",
    tech: ["nextjs", "mysql", "tailwindcss"],
    img: booking,
    description:
      "I kept loosing my progression when reading books , so i made this - My own Book reading progression tracker . ",
    demo: null,
    github: "https://github.com/baldwin-sudo/Book-reading-tracker",
  },

  {
    title: "PassKeeper",
    tech: ["reactjs", "go", "sqlite3"],
    img: null,
    description:
      "My own passwords manager , built using React js , Golang and Sqlite .(on going developement)",
    demo: null,
    github: "https://github.com/baldwin-sudo/PassKeeper",
  },
  {
    title: "Rag based Chatbot",
    tech: ["python", "elastic", "openai", "streamlit"],
    img: null,
    description:
      "An AI-powered chatbot with memory and history, built using LangChain and Streamlit. Just upload your PDFs—Lama will parse them, Elasticsearch will index the content, and OpenAI will deliver smart, context-aware responses.",
    demo: null,
    github: "https://github.com/baldwin-sudo/baldwin-templates",
  },
  {
    title: "Custom Deep learning Framework",
    tech: ["python", "pytorch", "rust"],
    img: null,
    description:
      "I made my own Deep learning framework ,inspired by the design of Pytorch's.Implemented Firstly using Python ,and Secondly a minimal version using Rust.",
    demo: null,
    github: "https://github.com/baldwin-sudo/deep-learning-framework",
  },
];
export default projects;
