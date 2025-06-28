import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sophia</h1>
            <p className={styles.description}>I'm a designer who is interested in UIUX.</p>
            <a href="mailto:myemail@email.com"
            className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("main.png")}
        alt="my picture" 
        className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};