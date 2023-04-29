import React from "react";
import "./contacts.styes.scss"
import { Button } from 'react-bootstrap';
import "./resume.styles.scss"
export default () => {
    return <div className={"resume"}>
        <div className="download">
            <a className={"resume-download"}  type={"button"}
               href="../../static/Resume_PDF/CV_Andrii_Dobronos_Junior_Front_end_developer.pdf">
                Download Resume.pdf &#129095;
            </a>
        </div>
        <div className="resume-left-side">
        <h1 className={"resume-title"}>Andrii Dobronos</h1>
        <h3>Junior Front-end developer</h3>
        <h4>SUMMARY</h4>
        <p>I am a highly motivated individual with a passion for technology and a
            background in designing and assembling custom kitchens. Recently, I
            completed a training program, where I deepened my knowledge of HTML,
            CSS, JavaScript, and the React framework. I am a quick learner and am
            dedicated to growing my skills in the IT industry. With my strong math skills
            and attention to detail, I am confident in my ability to succeed as a front-end
            developer in Ukraine's competitive market.
        </p>
        <h4>SKILLS</h4>
            <li>React</li>
            <li>Java Script</li>
            <li>HTML</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>GitHub</li>
            <li>SASS</li>
        <h4>EDUCATION</h4>
        <li>
            Engineer-technologist radio-electronics at Kharkiv
            Aviation Institute <br/> &emsp; 1989 - 1995
        </li>
        <h4>ADDITIONAL COURSES AND TRAININGS</h4>
        <li>
            Front End Basic at Hillel IT School   &emsp;  2022
        </li>
            <a href="https://certificate.ithillel.ua/view/44529801">
                https://certificate.ithillel.ua/view/44529801
            </a>
            <h5>EXCELLENT &emsp; 1ST PLACE</h5>

        <li>
            Front End Pro at Hillel IT School &emsp; 2023
            <h5>EXCELLENT</h5>
        </li>
        <h4>
            WORK EXPERIENCE
        </h4>
        <li>
            Engineer at V.N. Karazin Kharkiv National University
            &#160;2003 - present
        </li>
        <li>
            Designer and Assembler of Kitchens at Self-employed &#160; 2000-2022 <br/>
            Designed and assembled custom kitchens according to client specifications
            Utilized ProCreate app and hand drawing to create designs for
            clients - Strong math skills in calculating materials needed for
            each project - Managed client relationships to ensure satisfaction
            and repeat business - Planning and estimating multuple project to set
            appropriate client expectations.
        </li>
        <li>
            2D Designer at Freelance   &emsp;  2022 - present<br/>
            Created digitalappartment and kitchen designs for clients using ProCreate
            Communicated effectively with clients to ensure satisfaction and successful
            project completion - Delivered high-quality designs within deadlines
            Demonstrated strong attention to detail and ability to incorporate
            client feedback into designs.
        </li>
        <h4>HOBBY</h4>
        <li>
            My hobbies are reading, tourist trips, and gardening.
        </li>
        </div>
        <div className="resume-right-side">
            <h4>CONTACTS</h4>
            <h6>Location :</h6>
            <p>Kharkiv, City, Ukraina </p>
            <p>Will consider relocation</p>
            <h6>Email :</h6>
            <a href={"mailto:andriidobronos@gmail.com"}>andriidobronos@gmail.com</a>
            <h6>Phone :</h6>
            <p>+380974526607</p>
            <h6>Telegram :</h6>
            <a href={"https://t.me/andriidobronos"}>https://t.me/andriidobronos</a>
            <h6>Linkedin :</h6>
            <a href={"https://www.linkedin.com/in/andrii-dobronos-b25123245/"}>
                https://www.linkedin.com/in/andrii-dobronos-b25123245/
            </a>
            <h6>GitHub :</h6>
            <a href={"https://github.com/andriidobronos"}>
                https://github.com/andriidobronos
            </a>
            <h4>LANGUAGES</h4>
            <li>Ukrainian C1</li>
            <li>English B1</li>
            <li>German A2</li>
            <h4>PORTFOLIO</h4>
            <li>Project: Psychologist Marin</li>
            <a href="Webpack-Project/source/pages/Resume">
                https://andriidobronos.github.io/<br/>frontend_project_Marin/
            </a>
            <li>Project: Hlegal</li>
            <a href="Webpack-Project/source/pages/Resume">
                https://andriidobronos.github.io/<br/>git_project_hlegal/
            </a>
            <li>Project: Obvilink</li>
            <a href="Webpack-Project/source/pages/Resume">
                https://andriidobronos.github.io/<br/>git_project_Obvilink/
            </a>
            <li>Project: Austera</li>
            <a href="Webpack-Project/source/pages/Resume">
                https://andriidobronos.github.io/<br/>git_project_Austera/
            </a>
            <li>Project: Lokalise</li>
            <a href="Webpack-Project/source/pages/Resume">
                https://andriidobronos.github.io/<br/>git_project_Lokalise/
            </a>
         <Button
        onClick={() => {
            window.open("../static/Resume_PDF/CV_Andrii_Dobronos_Junior_Front_end_developer.pdf")
        }}
        className='resumebtn download-btn'>
             <span className={"text-btn"}>
                 Download Resume.pdf &#129095;
             </span>
        </Button>

        </div>
    </div>
}
