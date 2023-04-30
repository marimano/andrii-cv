import React from "react";
import "./contacts.styes.scss"

export default () => {
    return <div className="contacts" >
        <h1 className={"contacts-title"} >Contacts</h1>
        <div className={"contacts-container"}>
        <ul>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/phone.png" alt="Icon my phone"/>
            <a className="contacts-box-link" href="tel:30974526607">(+380) 97 452 66 07</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/gmail.png" alt="Icon my mail"/>
            <a className="contacts-box-link" href="mailto: andriidobronos@gmail.com" >{"andriidobronos\n@gmail.com"}</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/telegram.png" alt="Icon my telegram"/>
            <a className="contacts-box-link" href="https://telegram.me/andriidobronos" target="_blank">@andriidobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/instagram.png" alt="Icon my instagram"/>
            <a className="contacts-box-link" href="https://www.instagram.com/dobronos.andrey">@dobronos.andrey</a>
        </li>
        </ul>
        <ul>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/linkedin.png" alt="Icon my linkedin"/>
            <a className="contacts-box-link" href="Webpack-Project/src/pages/Contacts">andrii-dobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/github.png" alt="Icon my github"/>
            <a className="contacts-box-link" href="Webpack-Project/src/pages/Contacts">AndriiDobronos</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/google-maps.png" alt="Icon my location"/>
            <a className="contacts-box-link" href="https://www.google.com.ua/maps/@50.0189617,36.3362132,13.16z?hl=ru">City of Kharkiv</a>
        </li>
        <li className="contacts-box">
            <img className={"contacts-box-img"} src="../../static/Logo/website.png" alt="Icon my website"/>
            <a className="contacts-box-link" href="https://cv-courses-project.netlify.app/">https://cv-courses-project.<br/>netlify.app/</a>
        </li>
        </ul>
        </div>
    </div>
}