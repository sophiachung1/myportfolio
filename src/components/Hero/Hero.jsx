import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>👋🏻 Hi, I'm Sophia</h1>
            <p className={styles.description}>I'm a designer crafting playful and intentional products. Outside the screen, you'll find me exploring cafes or playing with my dog.</p>
            <a href="mailto:sxhchung@gmail.com"
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