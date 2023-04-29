import React from "react";
import "./portfolio.styles.scss"
import CarouselObvilink from "../components/CarouselObvilink.jsx";
import CarouselHlegal from "../components/CarouselHlegal.jsx"
import CarouselPsychologist from "../components/CarouselPsychologist.jsx";
import CarouselAustera from "../components/CarouselAustera.jsx";
import CarouselLocalise from "../components/CarouselLocalise.jsx";

const contents = [
    {id: "1",
    carousel: <CarouselPsychologist />,
    text: "In the process of creating this website," +
    " I gained knowledge of using\n" +
    "Html and Css.I also got a good understanding of placing project\n" +
    "files in the github repository and got a knowledge of how to use\n" +
    "semantics text markup.",
    img_git_src: "../static/Logo/github (2).png",
    img_git_alt: "Logo-github",
    a_git_href:"https://github.com/AndriiDobronos/\nfrontend_project_Marin.git",
    a_git_text: "https://github.com/AndriiDobronos/\nfrontend_project_Marin.git",
    img_web_src: "../static/Logo/globe.png",
    img_web_alt: "Logo-website" ,
    a_web_href: "https://andriidobronos.github.io/\nfrontend_project_Marin/",
    a_web_text: "https://andriidobronos.github.io/\nfrontend_project_Marin/",
    },
    {id: "2",
        carousel: <CarouselHlegal />,
        text: "By completing this graduation project, I gained knowledge of using "+
        "framework Tailwind and experience in application methodology "+
        "BEM(block-element-modifier).I also got a knowledge in creating webpage "+
        "with responsive behaviours and development multi-page static web site.",
        img_git_src: "../static/Logo/github (2).png",
        img_git_alt: "Logo-github",
        a_git_href: "https://github.com/AndriiDobronos/\ngit_project_hlegal.git",
        a_git_text: "https://github.com/AndriiDobronos/\ngit_project_hlegal.git",
        img_web_src: "../static/Logo/globe.png",
        img_web_alt: "Logo-website" ,
        a_web_href: "https://andriidobronos.github.io/\ngit_project_hlegal/",
        a_web_text: "https://andriidobronos.github.io/\ngit_project_hlegal/",
    },
    {id: "3",
        carousel: <CarouselObvilink />,
            text:  "By completing this  project, I gained knowledge of using "+
        "framework Tailwind and experience in application preprocessor Sass" +
        " (Syntactically " +
        "Awesome Stylesheets) .I also got a knowledge in creating webpage"+
        "with responsive behaviours.",
        img_git_src: "../static/Logo/github (2).png",
        img_git_alt: "Logo-github",
        a_git_href: "https://github.com/AndriiDobronos/\ngit_project_Obvilink.git",
        a_git_text: "https://github.com/AndriiDobronos/\ngit_project_Obvilink.git",
        img_web_src: "../static/Logo/globe.png",
        img_web_alt: "Logo-website" ,
        a_web_href: "https://andriidobronos.github.io/\ngit_project_Obvilink/",
        a_web_text: "https://andriidobronos.github.io/\ngit_project_Obvilink/",
    },
    {id: "4",
        carousel: <CarouselAustera />,
        text: "This my first project made according to the design layout. " +
            "I did using Photoshop graphic editor." +
            "The Bootstrap framework was used in writing styles.I also got a" +
            " knowledge in creating webpage with responsive behaviours.",
        img_git_src: "../static/Logo/github (2).png",
        img_git_alt: "Logo-github",
        a_git_href: "https://github.com/AndriiDobronos/\ngit_project_Austera.git",
        a_git_text: "https://github.com/AndriiDobronos/\ngit_project_Austera.git",
        img_web_src: "../static/Logo/globe.png",
        img_web_alt: "Logo-website" ,
        a_web_href: "https://andriidobronos.github.io/\ngit_project_Austera/",
        a_web_text: "https://andriidobronos.github.io/\ngit_project_Austera/",
    },
    {id: "5",
        carousel: <CarouselLocalise />,
        text: "This is one of first projects completed only in HTML and CSS " +
            "working on which I mastered according to the design layout and" +
            " the use of the graphic editor Figma." +
            "I also studied the use of semantics tags and  BEM methodology , " +
            "ways to connect fonts.",
        img_git_src: "../static/Logo/github (2).png",
        img_git_alt: "Logo-github",
        a_git_href: "https://github.com/AndriiDobronos/\ngit_project_Lokalise.git",
        a_git_text: "https://github.com/AndriiDobronos/\ngit_project_Lokalse.git",
        img_web_src: "../static/Logo/globe.png",
        img_web_alt: "Logo-website" ,
        a_web_href: "https://andriidobronos.github.io/\ngit_project_Lokalise/",
        a_web_text: "https://andriidobronos.github.io/\ngit_project_Lokalise/",
    },
]

export default () => {
    return <div className={"portfolio"}>
        <h1 className={"portfolio-title"}>Portfolio</h1>
        {contents.map(content => {
                return <div key={content.id} className='portfolio-container'>
                    <div className="portfolio-carousel-box">
                        {content.carousel}
                    </div>
                    <div className="portfolio-carousel-text">
                        <p className="portfolio-carousel-text_description">
                            {content.text}
                        </p>
                        <div className="portfolio-carousel-text_link">
                            <img className={"portfolio-carousel-text_img"} src={content.img_git_src}
                                 alt={content.img_git_alt}/>
                            <a href={content.a_git_href}>{content.a_git_text}</a>
                        </div>
                        <div className="portfolio-carousel-text_link">
                            <img className={"portfolio-carousel-text_img"} src={content.img_web_src}
                                 alt={content.img_web_alt}/>
                            <a href={content.a_web_href}>{content.a_web_text}</a>
                        </div>
                    </div>
                </div>
            }
        )}
    </div>
}