import ReactDOM from 'react-dom';
import {Gitlanding} from "gitlanding";
import headerImg from "./assets/header/header.png";
import section1 from "./assets/section/section1.png";
import section2 from "./assets/section/section2.png";
import thumbnail1 from "./assets/thumbnail-section/thumbnail1.png";
import type {GitlandingProps} from "gitlanding";

export const props: GitlandingProps = {
    "header": {

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
        },
        "linkToNextSection": {
            "title": "Ce dont vous avez besoin :"
        },
    },

    "mainSection": {
        "sections": [
            {
                "article": {
                    "title": "Quelques mots à propos d’Onyxia",
                    "paragraphMd": `
Nulla convallis ligula erat, eget suscipit erat luctus quis. Quisque nec augue sagittis, dignissim enim sit amet, gravida felis. Nulla et eleifend velit integer pulvinar nibh. 

Proin sed tellus eu turpis porttitor feugiat ac quis est. Nullam metus tellus, gravida ut velit quis, accumsan commodo risus. Etiam nec metus id elit hendrerit suscipit molestie leo tempus porta nulla suscipit ante sit.
                    
                    `,
                    "button": {
                        "title": "En savoir plus",
                        "href": ""
                    }
                },
                "illustration": {
                    "type": "image",
                    "imageProps": {
                        "url": section1
                    }
                },
                "thumbNails": [
                    {
                        "title": "Documentation et formations",
                        "type": "small",
                    },
                    {
                        "title": "Découvrir le datalab",
                        "type": "small"
                    },
                    {
                        "title": "Actualités et projets",
                        "type": "small"
                    }
                ]
            },
            {
                "title": "La collaboration au sein de la communauté",
                "thumbNails": [
                    {
                        "type": "small",
                        "title": "Le gitlab du datalab"

                    },
                    {
                        "title": "Le salon d’échange Tchap",
                        "type": "small"
                    },
                    {
                        "title": "Les outils collaboratifs MIM-Libre",
                        "type": "small"
                    }
                ],

                "article": {
                    "title": "Comment contribuer à la communauté ?",
                    "paragraphMd": `
Nulla convallis ligula erat, eget suscipit erat luctus quis. Quisque nec augue sagittis, dignissim enim sit amet, gravida felis. Nulla et eleifend velit integer pulvinar nibh. 

Proin sed tellus eu turpis porttitor feugiat ac quis est. Nullam metus tellus, gravida ut velit quis, accumsan commodo risus. Etiam nec metus id elit hendrerit suscipit molestie quis mauris. Aliquam quis nunc ac purus placerat rhoncus. Vestibulum semper quis leo tempus porta nulla suscipit ante sit.
`,
                    "button": {
                        "title": "Contribuer",
                        "href": ""
                    },
                    
                },
                "illustration": {
                    "type": "image",
                    "imageProps": {
                        "url": section2
                    }
                }
            }
        ]
    },

    "thumbNailSection": {
        "title": "Les dernières actualités et projets",
        "thumbNails": [
            {
                "type": "large",
                "footer": {
                    "title": "Datavisualisation: Mouvements de population autour du confinement de mars 2020",
                    "subTitle": "Suarez Castillo Milena" 
                },
                "background": {
                    "type": "image",
                    "url": thumbnail1

                },
                "button": {
                    "href": "",
                    "title": "Projet",
                    "backgroundColor": "#D5F2E1",
                    "color": "black"
                }
            },

            {
                "type": "large",
                "footer": {
                    "title": "Atelier: Initiation à Kubernetes, CI et création d’images",
                    "subTitle": "Olivier Lewitt"
                },
                "button": {
                    "href": "",
                    "title": "Actualités",
                    "backgroundColor": "#E8DAF2",
                    "color": "black"
                }

            },
            {
                "type": "large",
                "footer": {
                    "title": "ML Flow: Prédire quelles sont les caractéristiques des Pokémons légendaire",
                    "subTitle": "Liu Pengfei"
                },
                "button": {
                    "href": "",
                    "title": "Projet",
                    "color": "black",
                    "backgroundColor": "#D5F2E1",
                }
            },
            {
                "type": "large",
                "footer": {
                    "title": "Atelier: Initiation à Kubernetes, CI et création d’images",
                    "subTitle": "Olivier Lewitt"
                },
                "button": {
                    "href": "",
                    "title": "Actualités",
                    "backgroundColor": "#E8DAF2",
                    "color": "black"
                }

            }
        ]
    }
}




ReactDOM.render(
  <Gitlanding {...props}/>
 ,
  document.getElementById('root')
);
