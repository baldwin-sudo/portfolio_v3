import luxurious from "../assets/luxurious-p.png";
import booking from "../assets/booking-p.png";
import translated from "../assets/translated.png";
import car_sales from "../assets/car-sales-p.png";
import digitalbank from "../assets/digitalbank.png";

// types :
// frontend : 0
// fullstack:1
// ai and ml :2
const projects = [
  {
    title: "Luxurious Clothing",
    tech: ["reactjs", "tailwindcss"],
    state: "finished",
    img: luxurious,
    type: 0,
    description:
      "Luxury clothes shop , developped using React js , and fakeStore Api for the data , deployed using netlify .",
    demo: "https://eluxury.netlify.app/",
    github: "https://github.com/baldwin-sudo/eluxury",
  },
  {
    title: "Car Sales Dashboard",
    tech: ["nextjs", "postgresql", "tailwindcss"],
    state: "finished",
    img: car_sales,
    type: 1,
    description:
      "A Car sales Dashboard made to get different Insights from the data , made using Next js 15  (React Server Components ,Server Actions , Streaming)  and Postgresql.",
    demo: null,
    github: "https://github.com/baldwin-sudo/car_sales_dashboard",
  },
  {
    title: "DigitalBank landing page",
    tech: ["reactjs", "tailwindcss"],
    img: digitalbank,
    state: "on going ...",
    type: 0,
    description: "A responsive Landing page for  DigitalBank",
    demo: "https://digitalbank-landing.netlify.app/",
    github: "https://github.com/baldwin-sudo/digitalbank-landing",
  },
  {
    title: "Translated.io",
    tech: ["reactjs", "tailwindcss"],
    state: "finished",
    img: translated,
    type: 0,
    description: "A web interface leveraging mymemory API to translate text. ",
    demo: "https://translated-io.netlify.app/",
    github: "https://github.com/baldwin-sudo/translated.io",
  },

  {
    title: "PassKeeper",
    state: "on going ...",
    tech: ["reactjs", "go", "mysql"],
    img: null,
    type: 1,

    description:
      "My own passwords manager , built using React js , Golang and Sqlite .(on going developement)",
    demo: null,
    github: "https://github.com/baldwin-sudo/PassKeeper",
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
