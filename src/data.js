import image1 from "../src/resources/platziproject.png";
import image2 from "../src//resources/platzimain.png";

const data = [
  {
    mainTitle: "Projects",
    content: [
      {
        title: "Pink Notes",
        link: "https://pinknotes.netlify.app/",
        img: "https://i.pinimg.com/564x/cf/b1/b9/cfb1b97d2a937b0880d813228231d651.jpg",
        descr:
          "Developing Front End skills using HTML, CSS and JavaScript (DOM manipulation).",
      },
      {
        title: "Rick and Morty character searcher",
        link: "https://github.com/milagrosvilchez02/RickAndMortyProject",
        img: "https://imgr.search.brave.com/5vQPJvXB1qNDtpyFOkcyms4_3auQ5tQtAq7_fz89hGI/fit/1200/1142/ce/1/aHR0cHM6Ly9tZWRp/YS5zYWxvbi5jb20v/MjAyMS8wMy9yaWNr/LWFuZC1tb3J0eS1z/dGlsbDA0LmpwZw",
        descr:
          "Character searcher using C# + API: https://rickandmortyapi.com/",
      },
      {
        title: "Game interface",
        link: "https://epicgameinterfacebymili.netlify.app/",
        img: "https://i.pinimg.com/564x/72/c6/f1/72c6f1c2b10b0cb825023a8ac3afa2c8.jpg",
        descr:
          "Another Front End project (unfinished) using HTML, CSS and a little of JavaScript for logic. Quests and Skills tabs enabled.",
      },
      {
        title: "Platzi project",
        img: image1,
        descr:
          "Register and Log in forms from Platzi Video - Front End course (HTML and CSS only).",
      },
      {
        title: "Platzi main",
        img: image2,
        descr:
          "Main view from Platzi Video - Front End course (HTML and CSS only).",
      },
    ],
  },
  {
    mainTitle: "Works",
    content: [
      {
        title: "Cirque Colors scraper (Scale AI)",
        link: "https://github.com/milagrosvilchez02/scraper",
        img: "https://cdn11.bigcommerce.com/s-afc70/images/stencil/590x890/products/46/3899/XX_LOW-RES-Cream-cap__70665.1630110634.jpg?c=2",
        descr:
          "Freelance teamwork for Scale AI on August 2021. Scraper made using TypeScript and Puppeteer.",
      },
    ],
  },
];

export default data;
