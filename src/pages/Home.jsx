import React from "react";
import "./home.styles.scss"

export default () => {
    return   <div className={"home"}>
        <div className={"home-box"}>
            <picture className={"home-box-img"}>
                <source  media="(max-width: 767px)" srcSet="../../static/Logo/photo-me-w.jpg"/>
                    <source  media="(min-width: 1240px)" srcSet="../../static/Logo/photo-me.jpg"/>
                        <img className={"home-box-img"} src="../../static/Logo/photo-me-h.jpg" alt="My Photo"/>
            </picture>
        </div>

        <div className="home-summary">
            <h1 className="home-summary-title">Andrii Dobronos</h1>
            <div className="text-wave">
                <span style={{animationDelay :'s'}}>J</span>
                <span style={{animationDelay :'0.1s'}}>u</span>
                <span style={{animationDelay :'0.2s'}}>n</span>
                <span style={{animationDelay :'0.3s'}}>i</span>
                <span style={{animationDelay :'0.4s'}}>o</span>
                <span style={{animationDelay :'0.5s'}}>r</span>
                <span style={{animationDelay :'0.6s'}}>-</span>
                <span style={{animationDelay :'0.7s'}}>F</span>
                <span style={{animationDelay :'0.8s'}}>r</span>
                <span style={{animationDelay :'0.9s'}}>o</span>
                <span style={{animationDelay :'1.0s'}}>n</span>
                <span style={{animationDelay :'1.1s'}}>t</span>
                <span style={{animationDelay :'1.2s'}}>-</span>
                <span style={{animationDelay :'1.3s'}}>e</span>
                <span style={{animationDelay :'1.4s'}}>n</span>
                <span style={{animationDelay :'1.5s'}}>d</span>
                <span style={{animationDelay :'1.6s'}}>-</span>
                <span style={{animationDelay :'1.7s'}}>d</span>
                <span style={{animationDelay :'1.8s'}}>e</span>
                <span style={{animationDelay :'1.9s'}}>v</span>
                <span style={{animationDelay :'2.0s'}}>e</span>
                <span style={{animationDelay :'2.1s'}}>l</span>
                <span style={{animationDelay :'2.2s'}}>o</span>
                <span style={{animationDelay :'2.3s'}}>p</span>
                <span style={{animationDelay :'2.4s'}}>e</span>
                <span style={{animationDelay :'2.5s'}}>r</span>
            </div>

            <p className="home-summary-text">
                I am a highly motivated individual with a passion for technology and a
                background in designing and assembling custom kitchens. Recently, I
                completed a training program, where I deepened my knowledge of HTML,
                CSS, JavaScript, and the React framework. I am a quick learner and am
                dedicated to growing my skills in the IT industry. With my strong math skills
                and attention to detail, I am confident in my ability to succeed as a front-end
                developer in Ukraine's competitive market.</p>
        </div>
    </div>
}