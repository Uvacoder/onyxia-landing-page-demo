import ReactDOM from 'react-dom';
import {Gitlanding} from "gitlanding";
import headerImg from "./assets/header/header-img-example.png";
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
                        "url": headerImg
                    }
                },
                "thumbNails": {
                    "thumbNails": [
                        {
                            "title": "Documentation et formations"
                        },
                        {
                            "title": "Découvrir le datalab"
                        },
                        {
                            "title": "Actualités et projets"
                        }
                    ]
                }
            },
            {
                "title": "La collaboration au sein de la communauté",
                "thumbNails": {
                    "thumbNails": [
                        {
                            "title": "Le gitlab du datalab"
                        },
                        {
                            "title": "Le salon d’échange Tchap"
                        },
                        {
                            "title": "Les outils collaboratifs MIM-Libre"
                        }
                    ]

                },
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
                        "url": headerImg
                    }
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
