export interface TechStackItem {
  name: string;
}

export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  codeLink?: string;
  videoLink?: string;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "",
    title: "Bible Verses App",
    description:
      "An application that shows a Bible verse per day, allowing users to choose a background image and download it.",
    techStack: [
      { name: "react" },
      { name: "typeScript" },
      { name: "tailwindCSS" },
      { name: "shadcnUI" },
    ],
    codeLink: "https://github.com/gabrielpenteado/bible-verses-app",
    videoLink: "https://www.youtube.com/watch?v=l8ZulYERrbU",
  },
  {
    id: 2,
    image: "",
    title: "Dental Procs",
    description:
      "An application designed for dentists to monitor the most performed procedures.",
    techStack: [
      { name: "react" },
      { name: "typeScript" },
      { name: "tailwindCSS" },
    ],
    codeLink: "https://github.com/gabrielpenteado/dentalprocs",
    videoLink: "https://www.youtube.com/watch?v=0X3PRdZceBo",
  },
  {
    id: 3,
    image: "",
    title: "React-Form",
    description:
      "A React form integrated with ChakraUI and Firebase realtime database.",
    techStack: [
      { name: "react" },
      { name: "typeScript" },
      { name: "firebase" },
      { name: "chakraUI" },
    ],
    codeLink: "https://github.com/gabrielpenteado/react-form",
    videoLink: "https://www.youtube.com/watch?v=yN3159m4fnw",
  },
  {
    id: 4,
    image: "",
    title: "MyDearPage",
    description:
      "A personalized start webpage with custom websites icons, a multiple colors to-do list, weather app and wallpaper change.",
    techStack: [
      { name: "html/css" },
      { name: "javaScript" },
      { name: "node" },
      { name: "express" },
    ],
    codeLink: "https://github.com/gabrielpenteado/mydearpage",
    videoLink: "https://www.youtube.com/watch?v=HPRoGpF1nsM",
  },
  {
    id: 5,
    image: "",
    title: "API-Java-Spring-Docker",
    description:
      "RESTful API for CRUD operations; created with Java, SpringBoot and Docker.",
    techStack: [
      { name: "java" },
      { name: "spring" },
      { name: "docker" },
      { name: "postgres" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-java-springboot-docker",
  },
  {
    id: 6,
    image: "",
    title: "Ebooktoria",
    description:
      "A project dedicated to saving and sharing your favorite ebooks.",
    techStack: [
      { name: "next" },
      { name: "tailwindCSS" },
      { name: "graphQL" },
      { name: "prisma" },
    ],
    codeLink: "https://github.com/gabrielpenteado/ebooktoria",
    videoLink: "https://www.youtube.com/watch?v=jyN4Royj6Io&feature=youtu.be",
  },
  {
    id: 7,
    image: "",
    title: "Oh My Donuts",
    description:
      "A Vue and Vuex-based app for easily placing and managing donuts orders.",
    techStack: [{ name: "vue" }, { name: "sass" }],
    codeLink: "https://github.com/gabrielpenteado/oh-my-donuts",
    videoLink: "https://www.youtube.com/watch?v=1vZzvyr_ZsU",
  },
  {
    id: 8,
    image: "",
    title: "Game News",
    description: "A newsletter featuring the latest gaming news.",
    techStack: [
      { name: "react" },
      { name: "styled-components" },
      { name: "jwt" },
      { name: "zod" },
    ],
    codeLink: "https://github.com/gabrielpenteado/game-news-blog",
    videoLink: "https://www.youtube.com/watch?v=PfoTf1tUh2w",
  },
  {
    id: 9,
    image: "",
    title: "Watch Store",
    description: "A modern watch store website built with React and Redux.",
    techStack: [
      { name: "react" },
      { name: "redux" },
      { name: "typeScript" },
      { name: "tailwindCSS" },
    ],
    codeLink: "https://github.com/gabrielpenteado/watch-store",
    videoLink: "https://www.youtube.com/watch?v=XFqpPZEtLVk",
  },
  {
    id: 10,
    image: "",
    title: "API-Game-News",
    description:
      "The API for game news project, with user authentication, CRUD of posts, comments and likes",
    techStack: [
      { name: "node" },
      { name: "mongoDB" },
      { name: "JWT" },
      { name: "swagger" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-game-news-blog",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "next" },
      { name: "html" },
      { name: "reat" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 12,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "angular" },
      { name: "node" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 13,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "typeScript" },
      { name: "webStorm" },
      { name: "react" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  // Adicione mais cards aqui
];
