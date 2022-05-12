import image1 from "../src/resources/platziproject.png";
import image2 from "../src//resources/platzimain.png";
import cocktail from "../src/resources/cocktail.jpg";

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
        img: "https://indiehoy.com/wp-content/uploads/2020/06/rick-and-morty-1-1200x900.jpg",
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
      {
        title: "Cocktails 101",
        link: "https://milagrosvilchez02.github.io/cocktailsApp/",
        img: cocktail,
        descr:
          "Cocktail searcher, personal project (React - SASS - GitHub Pages)",
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
