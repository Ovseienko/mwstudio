import * as React from "react";
import * as styles from "./styles.css";
import { RouteComponentProps } from "react-router";
import PhotoGallery from "app/components/gallery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignature, faToolbox, faUserClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

//TO DO: Remove if not needed
export namespace App {
    export interface Props extends RouteComponentProps<void> {
    }
}
const images = [
    {
        src: "/images/banner.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/1.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/2.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/5.jpg",
        width: 3,
        height: 4,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/5.jpg",
        width: 3,
        height: 4,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/12.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/homepage-slider2.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    },
    {
        src: "/images/homepage-slider2.jpg",
        width: 1,
        height: 1,
        alt: "Стеклянные перегородки"
    }];

export const App = ({history, location}: App.Props) => {
    console.log(history, location);

    return (
        <div className={styles.mv}>
            <h1 className={styles.name}>MW STUDIO</h1>
            <p className={styles.subname}>Metal and wood furniture</p>
            <div className={styles.banner}>
                <div className={styles["banner-text"]}>
                    <h2>СОВРЕМЕННАЯ МЕБЕЛЬ</h2>
                    <h4>для комфортной жизни</h4>
                </div>
            </div>
            <h2 className={styles.about}>О нас</h2>
            <div className={styles.services}>
                <div className={styles["service-items"]}>
                    <div className="">
                        <FontAwesomeIcon icon={faSignature} />
                        <p>ПРОЕКТ</p>
                        <div>Предлагаем комплексные решения с сопроводительной документацией.</div>
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faToolbox} />
                        <p>КАЧЕСТВО</p>
                        <div>Мы используем только те материалы, в качесте которых мы уверенны.</div>
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faUserClock} />
                        <p>СВЯЗЬ</p>
                        <div>Мы всегда на связи. Общение с Вами - в радость.</div>
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>ГАРАНТИЯ</p>
                        <div>Не беспокойтесь. Предоставляем гарантию на устанавливаемую нашей компанией мебель.</div>
                    </div>
                </div>
                <img src="/images/45.jpg" alt=""/>
            </div>
            <div className={styles.projects}>
                <h2>Наши работы</h2>
                <div className={styles["projects-slider"]}>
                    <PhotoGallery images={images}/>
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.info}>
                    <h5>КОНТАКТЫ</h5>
                    <p>г.Киев, Полтавская 10, офис 7</p>
                    <p style={{fontWeight: "bold"}}>mwstudiokyiv@gmail.com</p>
                    <p>+38 095 439 3611</p>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.2195991607387!2d30.484442215689793!3d50.455635294872415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce62d8365a65%3A0x11c6b5c0c231d5bf!2z0YPQuy4g0J_QvtC70YLQsNCy0YHQutCw0Y8sIDEwLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1596806066679!5m2!1sru!2sua"
                        width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen
                        aria-hidden="false"
                    />
                </div>
            </div>
            <div className={styles.footer}>
                ©2020 by MW Studio. Proudly created by Valentina Ovseienko
            </div>
        </div>
    );
};
