import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}> About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("cute.png")} alt="me sitting with laptop"
            className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src ={getImageUrl("")} 
            alt ="related to work image"
            />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm a frontend developer with experience building responsive and optimized sites.</p>
            </div>
            </li>
             <li className={styles.aboutItem}><img src ={getImageUrl("")} alt ="related to work image"/>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have experience developing fast and optimized APIS.  </p>
            </div>
            </li>
             <li className={styles.aboutItem}><img src ={getImageUrl("")} alt ="related to work image"/>
            <div className={styles.aboutItemText}>
                <h3>UIUX Designer</h3>
                <p>I have designed multiple landing pages and have created designe systems as well. </p>
            </div>
            </li>
        </ul>
        </div>
    </section>
    );
};