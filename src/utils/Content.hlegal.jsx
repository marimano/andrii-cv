import React from "react";
import "../components/carousel.style.scss"

const contents = [
    {id: '1', src: '../static/hlegal/hlegal1p.png', alt:"Web-page"},
    {id: '2', src: '../static/hlegal/hlegal2p.png', alt:"Web-page"},
    {id: '3', src: '../static/hlegal/hlegal3p.png', alt:"Web-page"},
    {id: '4', src: '../static/hlegal/hlegal4p.png', alt:"Web-page"},
    {id: '5', src: '../static/hlegal/hlegal5p.png', alt:"Web-page"},
    {id: '6', src: '../static/hlegal/hlegal6p.png', alt:"Web-page"},
    {id: '7', src: '../static/hlegal/hlegal7p.png', alt:"Web-page"},
    {id: '8', src: '../static/hlegal/hlegal8p.png', alt:"Web-page"},
]


const contents2 = [
    {id: '1', src: '../static/Obvilink/Obvilink1p.png', alt:"Web-page"},
    {id: '2', src: '../static/Obvilink/Obvilink2p.png', alt:"Web-page"},
    {id: '3', src: '../static/Obvilink/Obvilink3p.png', alt:"Web-page"},
    {id: '4', src: '../static/Obvilink/Obvilink4p.png', alt:"Web-page"},
    {id: '5', src: '../static/Obvilink/Obvilink5p.png', alt:"Web-page"},
    {id: '6', src: '../static/Obvilink/Obvilink6p.png', alt:"Web-page"},
    {id: '7', src: '../static/Obvilink/Obvilink7p.png', alt:"Web-page"},
    {id: '8', src: '../static/Obvilink/Obvilink8p.png', alt:"Web-page"},
]


export default () => {
    return contents.map(content =>{
        return  <div key={content.id} className='content'>
            <img className={"content-img"}  src={content.src} alt={content.alt}/>
        </div>
    })
}
