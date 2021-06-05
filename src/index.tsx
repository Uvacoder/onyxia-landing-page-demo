import ReactDOM from 'react-dom';
import {Gitlanding} from "gitlanding";
import headerImg from "./assets/header/header-img-example.png";

ReactDOM.render(
  <Gitlanding header={{
    "image": {
      "url": headerImg,
  },
  "titleMd": "Espace documentaire pour la statistique publique",
  "subTitleMd": `
Ici je trouve et je partage des ressources 

sur le traitement statistique et la datascience.
`,
  "topBarProps": {
      "title": {
          "type": "markdown",
          "markdown": `Espace documentaire du SSP Cloud`
      },
      "menuItems": [
          {
              "name": "Documentation",
              "url": ""
          },
          {
              "name": "Le datalab",
              "url": ""
          },
          {
              "name": "Contribuer",
              "url": ""
          },
          {
              "name": "Actualités et projets",
              "url": ""
          }

      ]
  }

  }}/>
 ,
  document.getElementById('root')
);
