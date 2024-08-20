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
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 1",
    description:
      "Descrição do Card 1. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "react" },
      { name: "typeScript" },
      { name: "css" },
      { name: "visual Studio Code" },
      { name: "gitHub" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "react" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "node.js" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "typeScript" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "sass" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "sass" },
      { name: "vue" },
      { name: "typeScript" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "react" },
      { name: "typeScript" },
      { name: "webStorm" },
      { name: "gitLab" },
    ],
    codeLink: "https://google.com",
    videoLink: "https://google.com",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Título do Card 2",
    description:
      "Descrição do Card 2. Esta é uma breve descrição do card para demonstrar o layout.",
    techStack: [
      { name: "javaScript" },
      { name: "html" },
      { name: "react" },
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
      { name: "node.js" },
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
