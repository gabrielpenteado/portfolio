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
      { name: "node" },
    ],
    codeLink: "https://github.com/gabrielpenteado/dentalprocs",
    videoLink: "https://www.youtube.com/watch?v=0X3PRdZceBo",
  },
  {
    id: 3,
    image: "",
    title: "React Form",
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
    title: "API Java Spring Docker",
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
    title: "API Game News",
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
    image: "",
    title: "Todo Vue TailwindCSS",
    description:
      "A simple todo-list app made with Vuex, Vuex and Json Web Server.",
    techStack: [
      { name: "vue" },
      { name: "vuex" },
      { name: "tailwindCSS" },
      { name: "json-server" },
    ],
    codeLink: "https://github.com/gabrielpenteado/todo-vue-tailwindcss",
    videoLink: "https://www.youtube.com/watch?v=k88YdbGxbIg",
  },
  {
    id: 12,
    image: "",
    title: "API Java Spring Mongo",
    description:
      "RESTful API for CRUD operations; created with Java, SpringBoot and MongoDB.",
    techStack: [
      { name: "java" },
      { name: "spring" },
      { name: "mongoDB" },
      { name: "swagger" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-java-spring-mongodb",
  },
  {
    id: 13,
    image: "",
    title: "CRUD ASPNET .NET C#",
    description: "CRUD operations; created with ASP.NET, .NET and C#",
    techStack: [
      { name: "csharp" },
      { name: "aspnet" },
      { name: ".net" },
      { name: "sQLite" },
    ],
    codeLink: "https://github.com/gabrielpenteado/crud-aspnet-dotnet-csharp",
  },
  {
    id: 14,
    image: "",
    title: "Docker React Nginx",
    description:
      "A existing react project that was dockerized using Docker and Nginx",
    techStack: [{ name: "react" }, { name: "docker" }, { name: "nginx" }],
    codeLink: "https://github.com/gabrielpenteado/docker-react",
  },
  {
    id: 15,
    image: "",
    title: "API GraphQL Prisma",
    description: "A GraphQL API integrated Next.js and Prisma.",
    techStack: [{ name: "next" }, { name: "graphQL" }, { name: "prisma" }],
    codeLink: "https://github.com/gabrielpenteado/api-graphql-prisma",
  },
  {
    id: 16,
    image: "",
    title: "Dental Procs Mobile",
    description:
      "An application designed for dentists to monitor the most performed procedures.",
    techStack: [{ name: "react native" }, { name: "tailwindCSS" }],
    codeLink: "https://github.com/gabrielpenteado/dentalprocs-mobile",
    videoLink: "https://www.youtube.com/watch?v=BQxCSwrBjDE",
  },
  {
    id: 17,
    image: "",
    title: "Jest React Testing Library",
    description: "Project to study unit tests and integration tests.",
    techStack: [{ name: "jest" }, { name: "react testing library" }],
    codeLink: "https://github.com/gabrielpenteado/jest-react-testing-library",
  },
  {
    id: 18,
    image: "",
    title: "Ecoleta",
    description: "Ecoleta is a webpage created to waste recycling centers.",
    techStack: [
      { name: "html/css" },
      { name: "javascript" },
      { name: "node" },
      { name: "sQLite" },
    ],
    codeLink: "https://github.com/gabrielpenteado/ecoleta",
  },
  {
    id: 19,
    image: "",
    title: "API Java RabbitMQ Docker",
    description: "An API to manage orders with RabbitMQ.",
    techStack: [
      { name: "java" },
      { name: "rabbitMQ" },
      { name: "mongo" },
      { name: "docker" },
    ],
    codeLink:
      "https://github.com/gabrielpenteado/api-spring-mongo-rabbitmq-docker",
  },
  {
    id: 20,
    image: "",
    title: "API Dotnet EF Csharp",
    description:
      "REST API for CRUD operations; created with .NET, C# and Entity Framework.",
    techStack: [{ name: "csharp" }, { name: "eF" }, { name: "dotnet" }],
    codeLink: "https://github.com/gabrielpenteado/api-dotnet-ef-csharp",
  },
  {
    id: 21,
    image: "",
    title: "API Node MongoDB",
    description:
      "RESTful API for CRUD operations; created with Node.JS and MongoDB.",
    techStack: [
      { name: "node" },
      { name: "express" },
      { name: "mongoDB" },
      { name: "mongoose" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-nodejs-mongodb",
  },
  {
    id: 22,
    image: "",
    title: "Landing Page Angular",
    description: "A simple landing page created with Angular17.",
    techStack: [{ name: "angular" }, { name: "typeScript" }],
    codeLink: "https://github.com/gabrielpenteado/landing-page-angular17",
  },
  {
    id: 23,
    image: "",
    title: "API Java JWT Spring",
    description: "A API created with JAVA and SpringBoot and auth with JWT.",
    techStack: [{ name: "java" }, { name: "jWT" }, { name: "springBoot" }],
    codeLink:
      "https://github.com/gabrielpenteado/api-java-jwt-springboot/tree/main/login-app-backend",
  },
  {
    id: 24,
    image: "",
    title: "API AdonisJS Supabase",
    description:
      "RESTful API with JWT authentication; created with AdonisJS and Supabase database.",
    techStack: [
      { name: "adonisJS" },
      { name: "supabase" },
      { name: "lucid" },
      { name: "postgreSQL" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-adonisjs-jwt",
  },
  {
    id: 25,
    image: "",
    title: "API NestJS Forum",
    description:
      "A REST API with authentication for an forum application; created with NestJS.",
    techStack: [
      { name: "NestJS" },
      { name: "JWT" },
      { name: "Prisma" },
      { name: "SQLite" },
    ],
    codeLink: "https://github.com/gabrielpenteado/api-nest-forum",
  },
  // Adicione mais cards aqui
];
